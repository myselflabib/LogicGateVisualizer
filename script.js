// ================================
// GLOBAL STATE
// ================================
const App = {
    nodes: [],
    connections: [],
    nextNodeId: 1,
    draggingNode: null,
    connectingFrom: null,
    tempWire: null,
    canvasOffset: { x: 0, y: 0 }
};

// ================================
// NODE CLASS
// ================================
class Node {
    constructor(type, x, y) {
        this.id = App.nextNodeId++;
        this.type = type; // INPUT, OUTPUT, AND, OR, NOT, XOR, NAND, NOR, XNOR
        this.x = x;
        this.y = y;
        this.value = 0;
        this.inputCount = this.getDefaultInputCount();
        this.inputs = [];
        this.outputs = [];
        this.element = null;
    }

    getDefaultInputCount() {
        if (this.type === 'INPUT' || this.type === 'OUTPUT') return 0;
        if (this.type === 'NOT') return 1;
        return 2; // Default for all other gates
    }

    getLabel() {
        const labels = {
            'INPUT': 'Switch',
            'OUTPUT': 'LED',
            'AND': 'AND',
            'OR': 'OR',
            'NOT': 'NOT',
            'XOR': 'XOR',
            'NAND': 'NAND',
            'NOR': 'NOR',
            'XNOR': 'XNOR'
        };
        return labels[this.type] || this.type;
    }

    evaluate() {
        if (this.type === 'INPUT') {
            return this.value; // Set by user toggle
        }

        if (this.type === 'OUTPUT') {
            // Get value from first input connection
            if (this.inputs.length > 0) {
                const inputNode = App.nodes.find(n => n.id === this.inputs[0]);
                return inputNode ? inputNode.value : 0;
            }
            return 0;
        }

        // Get effective inputs (respecting the current inputCount)
        const effectiveInputs = this.type === 'NOT' ?
            this.inputs.slice(0, 1) :
            this.inputs.slice(0, this.inputCount);

        // Get input values from connected nodes, filtering out null
        const inputValues = effectiveInputs
            .filter(nodeId => nodeId !== null && nodeId !== undefined)
            .map(nodeId => {
                const inputNode = App.nodes.find(n => n.id === nodeId);
                return inputNode ? inputNode.value : 0;
            });

        // Logic gate evaluation
        switch (this.type) {
            case 'AND':
                return inputValues.length > 0 && inputValues.every(v => v === 1) ? 1 : 0;
            case 'OR':
                return inputValues.some(v => v === 1) ? 1 : 0;
            case 'NOT':
                return inputValues[0] === 1 ? 0 : 1;
            case 'XOR':
                return inputValues.filter(v => v === 1).length % 2 === 1 ? 1 : 0;
            case 'NAND':
                return inputValues.length > 0 && inputValues.every(v => v === 1) ? 0 : 1;
            case 'NOR':
                return inputValues.some(v => v === 1) ? 0 : 1;
            case 'XNOR':
                return inputValues.filter(v => v === 1).length % 2 === 1 ? 0 : 1;
            default:
                return 0;
        }
    }
}

// ================================
// INITIALIZATION
// ================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Logic Gate Visualization Board - Initialized');
    initializeDragAndDrop();
    initializeCanvas();
    initializeEventListeners();
    loadProfileImages();
});

// ================================
// DRAG AND DROP FROM SIDEBAR
// ================================
function initializeDragAndDrop() {
    const componentItems = document.querySelectorAll('.component-item');
    const circuitBoard = document.getElementById('circuitBoard');

    componentItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            const type = item.dataset.type;
            e.dataTransfer.setData('componentType', type);
            e.dataTransfer.effectAllowed = 'copy';
        });
    });

    circuitBoard.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    circuitBoard.addEventListener('drop', (e) => {
        e.preventDefault();
        const type = e.dataTransfer.getData('componentType');
        if (type) {
            const rect = circuitBoard.getBoundingClientRect();
            const x = e.clientX - rect.left + circuitBoard.scrollLeft;
            const y = e.clientY - rect.top + circuitBoard.scrollTop;
            createNode(type, x, y);
        }
    });
}

// ================================
// CANVAS INITIALIZATION
// ================================
function initializeCanvas() {
    const container = document.getElementById('canvasContainer');
    const circuitBoard = document.getElementById('circuitBoard');

    // Set minimum canvas size
    circuitBoard.style.minWidth = '2000px';
    circuitBoard.style.minHeight = '2000px';
}

// ================================
// EVENT LISTENERS
// ================================
function initializeEventListeners() {
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', clearBoard);

    // Team modal
    document.getElementById('teamBtn').addEventListener('click', openModal);
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('teamModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });

    // Truth Table modal
    document.getElementById('truthTableBtn').addEventListener('click', openTruthTableModal);
    document.getElementById('closeTruthTableModal').addEventListener('click', closeTruthTableModal);
    document.getElementById('truthTableModal').addEventListener('click', function (e) {
        if (e.target === this) closeTruthTableModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
            closeTruthTableModal();
        }
    });

    // Cancel connection when clicking empty space
    document.getElementById('circuitBoard').addEventListener('click', (e) => {
        if (e.target.id === 'circuitBoard' && App.connectingFrom) {
            App.connectingFrom = null;
            clearTempWire();
            clearAllPortHighlights();
        }
    });
}

// ================================
// NODE CREATION
// ================================
function createNode(type, x, y) {
    const node = new Node(type, x, y);
    App.nodes.push(node);
    renderNode(node);
    updateSimulation();
}

function renderNode(node) {
    const nodeEl = document.createElement('div');
    nodeEl.className = `node ${getNodeClassName(node.type)}`;
    nodeEl.style.left = node.x + 'px';
    nodeEl.style.top = node.y + 'px';
    nodeEl.dataset.nodeId = node.id;

    // Header
    const header = document.createElement('div');
    header.className = 'node-header';

    const label = document.createElement('div');
    label.className = 'node-label';
    label.textContent = node.getLabel();

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'node-delete';
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNode(node.id);
    });

    header.appendChild(label);
    header.appendChild(deleteBtn);
    nodeEl.appendChild(header);

    // Type-specific content
    if (node.type === 'INPUT') {
        renderInputSwitch(nodeEl, node);
    } else if (node.type === 'OUTPUT') {
        renderOutputLED(nodeEl, node);
    } else {
        renderGate(nodeEl, node);
    }

    // Ports
    renderPorts(nodeEl, node);

    // Make draggable
    makeDraggable(nodeEl, node);

    document.getElementById('circuitBoard').appendChild(nodeEl);
    node.element = nodeEl;
}

function getNodeClassName(type) {
    if (type === 'INPUT') return 'input-switch';
    if (type === 'OUTPUT') return 'output-led';
    return 'gate';
}

function renderInputSwitch(nodeEl, node) {
    const switchToggle = document.createElement('div');
    switchToggle.className = 'switch-toggle';

    const toggle = document.createElement('label');
    toggle.className = 'toggle-switch';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = node.value === 1;
    checkbox.addEventListener('change', (e) => {
        node.value = e.target.checked ? 1 : 0;
        updateSimulation();
    });

    const slider = document.createElement('span');
    slider.className = 'toggle-slider';

    toggle.appendChild(checkbox);
    toggle.appendChild(slider);

    const valueLabel = document.createElement('span');
    valueLabel.className = 'switch-value';
    valueLabel.textContent = node.value;

    switchToggle.appendChild(toggle);
    switchToggle.appendChild(valueLabel);
    nodeEl.appendChild(switchToggle);
}

function renderOutputLED(nodeEl, node) {
    const ledDisplay = document.createElement('div');
    ledDisplay.className = `led-display ${node.value === 1 ? 'on' : ''}`;
    ledDisplay.dataset.ledId = node.id;
    nodeEl.appendChild(ledDisplay);
}

function renderGate(nodeEl, node) {
    const gateType = document.createElement('div');
    gateType.className = 'gate-type';
    gateType.textContent = node.getLabel();
    nodeEl.appendChild(gateType);

    // Add input count selector for gates that support it
    if (node.type !== 'NOT') {
        const inputSelector = document.createElement('div');
        inputSelector.className = 'input-count-selector';

        const label = document.createElement('span');
        label.textContent = 'Inputs:';

        const select = document.createElement('select');
        [2, 3, 5, 7].forEach(count => {
            const option = document.createElement('option');
            option.value = count;
            option.textContent = count;
            if (count === node.inputCount) option.selected = true;
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
            const newInputCount = parseInt(e.target.value);

            // Remove connections beyond the new input count
            if (newInputCount < node.inputCount) {
                for (let i = newInputCount; i < node.inputs.length; i++) {
                    const sourceNodeId = node.inputs[i];
                    if (sourceNodeId) {
                        const sourceNode = App.nodes.find(n => n.id === sourceNodeId);
                        if (sourceNode) {
                            const otherConnections = node.inputs.filter((id, idx) => id === sourceNodeId && idx < newInputCount);
                            if (otherConnections.length === 0) {
                                sourceNode.outputs = sourceNode.outputs.filter(id => id !== node.id);
                            }
                        }
                    }
                }
                node.inputs = node.inputs.slice(0, newInputCount);
            }

            node.inputCount = newInputCount;

            // Re-render the node to update ports
            const oldEl = node.element;
            oldEl.remove();
            renderNode(node);
            renderAllWires();
            updateSimulation();
        });

        inputSelector.appendChild(label);
        inputSelector.appendChild(select);
        nodeEl.appendChild(inputSelector);
    }
}

function renderPorts(nodeEl, node) {
    const portsContainer = document.createElement('div');
    portsContainer.className = 'node-ports';

    // Input ports (left side)
    if (node.type !== 'INPUT') {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'port-group';

        const inputPortCount = node.type === 'OUTPUT' ? 1 :
            node.type === 'NOT' ? 1 : node.inputCount;

        for (let i = 0; i < inputPortCount; i++) {
            const port = document.createElement('div');
            port.className = 'port input-port';
            port.dataset.nodeId = node.id;
            port.dataset.portIndex = i;
            port.dataset.portType = 'input';

            port.addEventListener('click', (e) => {
                e.stopPropagation();
                handlePortClick(node, 'input', i);
            });

            inputGroup.appendChild(port);
        }

        portsContainer.appendChild(inputGroup);
    }

    // Output ports (right side)
    if (node.type !== 'OUTPUT') {
        const outputGroup = document.createElement('div');
        outputGroup.className = 'port-group';

        const port = document.createElement('div');
        port.className = 'port output-port';
        port.dataset.nodeId = node.id;
        port.dataset.portType = 'output';

        port.addEventListener('click', (e) => {
            e.stopPropagation();
            handlePortClick(node, 'output', 0);
        });

        outputGroup.appendChild(port);
        portsContainer.appendChild(outputGroup);
    }

    nodeEl.appendChild(portsContainer);
}

// ================================
// DRAGGING NODES
// ================================
function makeDraggable(element, node) {
    let isDragging = false;
    let startX, startY;

    element.addEventListener('mousedown', (e) => {
        if (e.target.closest('.port') || e.target.closest('.node-delete') ||
            e.target.closest('.toggle-switch') || e.target.closest('select')) {
            return;
        }

        isDragging = true;
        const board = document.getElementById('circuitBoard');
        const boardRect = board.getBoundingClientRect();
        startX = e.clientX - boardRect.left - node.x + board.scrollLeft;
        startY = e.clientY - boardRect.top - node.y + board.scrollTop;
        element.style.cursor = 'grabbing';
        element.style.zIndex = '100';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const board = document.getElementById('circuitBoard');
        const boardRect = board.getBoundingClientRect();
        node.x = e.clientX - boardRect.left - startX + board.scrollLeft;
        node.y = e.clientY - boardRect.top - startY + board.scrollTop;

        element.style.left = node.x + 'px';
        element.style.top = node.y + 'px';

        renderAllWires();
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            element.style.cursor = 'move';
            element.style.zIndex = '10';
        }
    });
}

// ================================
// WIRING (CONNECTIONS)
// ================================
function handlePortClick(node, portType, portIndex) {
    if (portType === 'output') {
        // Start connection from output
        if (App.connectingFrom) {
            // Cancel previous connection
            App.connectingFrom = null;
            clearTempWire();
            clearAllPortHighlights();
        }
        App.connectingFrom = { nodeId: node.id, type: 'output' };
        highlightPort(node.id, 'output', 0);
        startTempWire(node);
    } else {
        // End connection at input - only allow if starting from output
        if (App.connectingFrom && App.connectingFrom.type === 'output' && App.connectingFrom.nodeId !== node.id) {
            createConnection(App.connectingFrom.nodeId, node.id, portIndex);
            App.connectingFrom = null;
            clearTempWire();
            clearAllPortHighlights();
        }
    }
}

function createConnection(fromNodeId, toNodeId, toPortIndex) {
    const toNode = App.nodes.find(n => n.id === toNodeId);
    const fromNode = App.nodes.find(n => n.id === fromNodeId);

    // Ensure inputs array is large enough
    while (toNode.inputs.length <= toPortIndex) {
        toNode.inputs.push(null);
    }

    // If port is already connected, remove old connection
    const oldConnection = toNode.inputs[toPortIndex];
    if (oldConnection !== null && oldConnection !== undefined) {
        const oldSourceNode = App.nodes.find(n => n.id === oldConnection);
        if (oldSourceNode) {
            // Remove this specific connection from old source's outputs
            const otherConnections = toNode.inputs.filter((id, idx) => id === oldConnection && idx !== toPortIndex);
            if (otherConnections.length === 0) {
                oldSourceNode.outputs = oldSourceNode.outputs.filter(id => id !== toNodeId);
            }
        }
    }

    // Set new connection
    toNode.inputs[toPortIndex] = fromNodeId;

    // Track in outputs
    if (!fromNode.outputs.includes(toNodeId)) {
        fromNode.outputs.push(toNodeId);
    }

    renderAllWires();
    updateSimulation();
}

function startTempWire(fromNode) {
    document.addEventListener('mousemove', drawTempWire);
}

function drawTempWire(e) {
    if (!App.connectingFrom) return;

    const fromNode = App.nodes.find(n => n.id === App.connectingFrom.nodeId);
    if (!fromNode) return;

    const fromPos = getOutputPortPosition(fromNode);
    const board = document.getElementById('circuitBoard');
    const boardRect = board.getBoundingClientRect();
    const toPos = {
        x: e.clientX - boardRect.left + board.scrollLeft,
        y: e.clientY - boardRect.top + board.scrollTop
    };

    const svg = document.getElementById('wireCanvas');

    // Remove old temp wire
    const oldTemp = svg.querySelector('.wire.temp');
    if (oldTemp) oldTemp.remove();

    // Draw new temp wire
    const path = createWirePath(fromPos, toPos, false, true);
    svg.appendChild(path);
}

function clearTempWire() {
    const svg = document.getElementById('wireCanvas');
    const tempWire = svg.querySelector('.wire.temp');
    if (tempWire) tempWire.remove();
    document.removeEventListener('mousemove', drawTempWire);
}

function renderAllWires() {
    const svg = document.getElementById('wireCanvas');
    // Remove all wires except temp
    Array.from(svg.children).forEach(child => {
        if (!child.classList.contains('temp')) {
            child.remove();
        }
    });

    // Sync SVG size with circuit board
    const board = document.getElementById('circuitBoard');
    svg.setAttribute('width', board.scrollWidth);
    svg.setAttribute('height', board.scrollHeight);

    // Draw all connections
    App.nodes.forEach(toNode => {
        toNode.inputs.forEach((fromNodeId, portIndex) => {
            // Only draw wires for valid ports within the current inputCount limit
            const maxPorts = toNode.type === 'NOT' || toNode.type === 'OUTPUT' ? 1 : toNode.inputCount;

            if (fromNodeId && portIndex < maxPorts) {
                const fromNode = App.nodes.find(n => n.id === fromNodeId);
                if (fromNode) {
                    drawWire(fromNode, toNode, portIndex);
                }
            }
        });
    });
}

function drawWire(fromNode, toNode, toPortIndex) {
    const fromPos = getOutputPortPosition(fromNode);
    const toPos = getInputPortPosition(toNode, toPortIndex);

    const path = createWirePath(fromPos, toPos, fromNode.value === 1);
    document.getElementById('wireCanvas').appendChild(path);
}

function createWirePath(from, to, active = false, isTemp = false) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Bezier curve for smooth wires
    const midX = (from.x + to.x) / 2;
    const d = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;

    path.setAttribute('d', d);
    path.classList.add('wire');
    if (active) {
        path.classList.add('active', 'animated');
    }
    if (isTemp) {
        path.classList.add('temp');
    }

    return path;
}

function getOutputPortPosition(node) {
    const portEl = node.element.querySelector('.output-port');
    if (!portEl) return { x: node.x + 80, y: node.y + 40 };

    const rect = portEl.getBoundingClientRect();
    const board = document.getElementById('circuitBoard');
    const boardRect = board.getBoundingClientRect();

    return {
        x: rect.left - boardRect.left + rect.width / 2 + board.scrollLeft,
        y: rect.top - boardRect.top + rect.height / 2 + board.scrollTop
    };
}

function getInputPortPosition(node, portIndex) {
    const ports = node.element.querySelectorAll('.input-port');
    const portEl = ports[portIndex];
    if (!portEl) return { x: node.x, y: node.y + 40 };

    const rect = portEl.getBoundingClientRect();
    const board = document.getElementById('circuitBoard');
    const boardRect = board.getBoundingClientRect();

    return {
        x: rect.left - boardRect.left + rect.width / 2 + board.scrollLeft,
        y: rect.top - boardRect.top + rect.height / 2 + board.scrollTop
    };
}

function highlightPort(nodeId, portType, portIndex) {
    const node = App.nodes.find(n => n.id === nodeId);
    if (!node) return;

    const selector = portType === 'output' ? '.output-port' : '.input-port';
    const ports = node.element.querySelectorAll(selector);
    const port = portType === 'output' ? ports[0] : ports[portIndex];

    if (port) {
        port.classList.add('connecting');
    }
}

function clearAllPortHighlights() {
    document.querySelectorAll('.port').forEach(port => {
        port.classList.remove('connecting');
    });
}

// ================================
// SIMULATION ENGINE
// ================================
function updateSimulation() {
    // Topological sort to evaluate nodes in correct order
    const sorted = topologicalSort();

    // Evaluate each node
    sorted.forEach(nodeId => {
        const node = App.nodes.find(n => n.id === nodeId);
        if (node) {
            node.value = node.evaluate();
            updateNodeVisuals(node);
        }
    });

    // Update wires
    renderAllWires();
}

function topologicalSort() {
    const visited = new Set();
    const stack = [];

    function visit(nodeId) {
        if (visited.has(nodeId)) return;
        visited.add(nodeId);

        const node = App.nodes.find(n => n.id === nodeId);
        if (node) {
            node.outputs.forEach(outputId => visit(outputId));
        }

        stack.unshift(nodeId);
    }

    App.nodes.forEach(node => visit(node.id));
    return stack;
}

function updateNodeVisuals(node) {
    if (node.type === 'INPUT') {
        const valueLabel = node.element.querySelector('.switch-value');
        if (valueLabel) {
            valueLabel.textContent = node.value;
        }
    } else if (node.type === 'OUTPUT') {
        const led = node.element.querySelector('.led-display');
        if (led) {
            if (node.value === 1) {
                led.classList.add('on');
            } else {
                led.classList.remove('on');
            }
        }
    }

    // Update port visuals
    const ports = node.element.querySelectorAll('.port');
    ports.forEach(port => {
        if (node.value === 1) {
            port.classList.add('active');
        } else {
            port.classList.remove('active');
        }
    });
}

// ================================
// TRUTH TABLE GENERATION
// ================================
function generateTruthTable() {
    const container = document.getElementById('truthTableContainer');

    // Get all input and output nodes
    const inputNodes = App.nodes.filter(n => n.type === 'INPUT');
    const outputNodes = App.nodes.filter(n => n.type === 'OUTPUT');

    if (inputNodes.length === 0 || outputNodes.length === 0) {
        container.innerHTML = '<div class="empty-state">Add input switches and output LEDs to generate a truth table.</div>';
        return;
    }

    // Generate Boolean formulas for each output
    const formulas = outputNodes.map((outNode, idx) => {
        const formula = generateBooleanFormula(outNode, inputNodes);
        return `<div class="formula-item"><strong>OUT${idx + 1}</strong> = ${formula}</div>`;
    }).join('');
    
    const formulaSection = formulas ? `<div class="formula-section">
        <h3 class="formula-title">Boolean Expression${outputNodes.length > 1 ? 's' : ''}</h3>
        ${formulas}
    </div>` : '';

    const numInputs = inputNodes.length;
    const numRows = Math.pow(2, numInputs);

    // Save current state for highlighting
    const currentStates = inputNodes.map(n => n.value);

    // Generate table
    const rows = [];
    const sorted = topologicalSort(); // Calculate topology once outside loop

    for (let i = 0; i < numRows; i++) {
        const row = { inputs: [], outputs: [], isCurrentState: true };

        // Set input combination
        for (let j = 0; j < numInputs; j++) {
            const bitValue = (i >> (numInputs - 1 - j)) & 1;
            row.inputs[j] = bitValue;
            inputNodes[j].value = bitValue;
            
            // Check if this row matches current state
            if (bitValue !== currentStates[j]) {
                row.isCurrentState = false;
            }
        }

        // Evaluate circuit using pre-calculated topology
        // This ensures all gates in complex circuits are evaluated in correct order
        sorted.forEach(nodeId => {
            const node = App.nodes.find(n => n.id === nodeId);
            if (node && node.type !== 'INPUT') {
                node.value = node.evaluate();
            }
        });

        // Record outputs
        outputNodes.forEach(outNode => {
            row.outputs.push(outNode.value);
        });

        rows.push(row);
    }

    // Restore original state
    inputNodes.forEach((node, i) => {
        node.value = currentStates[i];
    });
    
    // Re-evaluate the circuit with restored states
    const sortedRestore = topologicalSort();
    sortedRestore.forEach(nodeId => {
        const node = App.nodes.find(n => n.id === nodeId);
        if (node && node.type !== 'INPUT') {
            node.value = node.evaluate();
            updateNodeVisuals(node);
        }
    });
    renderAllWires();

    // Render table
    let html = '<table class="truth-table"><thead><tr>';

    // Input headers
    inputNodes.forEach((node, i) => {
        html += `<th>IN${i + 1}</th>`;
    });

    // Output headers
    outputNodes.forEach((node, i) => {
        html += `<th>OUT${i + 1}</th>`;
    });

    html += '</tr></thead><tbody>';

    // Rows - highlight the current state
    rows.forEach(row => {
        const rowClass = row.isCurrentState ? ' class="active-row"' : '';
        html += `<tr${rowClass}>`;
        row.inputs.forEach(val => {
            html += `<td class="value-${val}">${val}</td>`;
        });
        row.outputs.forEach(val => {
            html += `<td class="value-${val}">${val}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = formulaSection + html;
}

// Generate Boolean formula from circuit
function generateBooleanFormula(outputNode, inputNodes) {
    if (!outputNode) return 'Invalid output';
    
    // For OUTPUT nodes, trace back to the connected source
    if (outputNode.type === 'OUTPUT') {
        if (outputNode.inputs.length === 0 || !outputNode.inputs[0]) {
            return 'Not connected';
        }
        const sourceNode = App.nodes.find(n => n.id === outputNode.inputs[0]);
        if (!sourceNode) return 'Not connected';
        return getNodeFormula(sourceNode);
    }
    
    return getNodeFormula(outputNode);
    
    function getNodeFormula(node) {
        if (!node) return '?';
        
        // If it's an input node, return its name
        if (node.type === 'INPUT') {
            const inputIndex = inputNodes.findIndex(n => n.id === node.id);
            return inputIndex >= 0 ? `IN${inputIndex + 1}` : 'IN?';
        }
        
        // Get formulas for all valid inputs
        const validInputs = node.inputs
            .filter(id => id !== null && id !== undefined)
            .slice(0, node.type === 'NOT' ? 1 : node.inputCount);
            
        if (validInputs.length === 0) return '?';
        
        const inputFormulas = validInputs.map(inputId => {
            const inputNode = App.nodes.find(n => n.id === inputId);
            return getNodeFormula(inputNode);
        });
        
        // Generate formula based on gate type
        switch (node.type) {
            case 'AND':
                return inputFormulas.length > 1 ? `(${inputFormulas.join(' · ')})` : inputFormulas[0];
            case 'OR':
                return inputFormulas.length > 1 ? `(${inputFormulas.join(' + ')})` : inputFormulas[0];
            case 'NOT':
                const base = inputFormulas[0];
                return base.startsWith('(') ? `${base}'` : `(${base})'`;
            case 'XOR':
                return inputFormulas.length > 1 ? `(${inputFormulas.join(' ⊕ ')})` : inputFormulas[0];
            case 'NAND':
                const nandExpr = inputFormulas.length > 1 ? inputFormulas.join(' · ') : inputFormulas[0];
                return `(${nandExpr})'`;
            case 'NOR':
                const norExpr = inputFormulas.length > 1 ? inputFormulas.join(' + ') : inputFormulas[0];
                return `(${norExpr})'`;
            case 'XNOR':
                const xnorExpr = inputFormulas.length > 1 ? inputFormulas.join(' ⊕ ') : inputFormulas[0];
                return `(${xnorExpr})'`;
            default:
                return '?';
        }
    }
}

// ================================
// NODE DELETION
// ================================
function deleteNode(nodeId) {
    // Remove from nodes array
    App.nodes = App.nodes.filter(n => n.id !== nodeId);

    // Remove connections
    App.nodes.forEach(node => {
        // Use map to preserve indices by replacing deleted connections with null
        node.inputs = node.inputs.map(id => id === nodeId ? null : id);
        node.outputs = node.outputs.filter(id => id !== nodeId);
    });

    // Clear referencing variables if needed
    if (App.connectingFrom && App.connectingFrom.nodeId === nodeId) {
        App.connectingFrom = null;
        clearTempWire();
        clearAllPortHighlights();
    }

    // Remove element
    const element = document.querySelector(`[data-node-id="${nodeId}"]`);
    if (element) element.remove();

    updateSimulation();
}

// ================================
// CLEAR BOARD
// ================================
function clearBoard() {
    if (App.nodes.length > 0 && !confirm('Clear all components and connections?')) {
        return;
    }

    App.nodes = [];
    App.connections = [];
    App.nextNodeId = 1;

    document.getElementById('circuitBoard').innerHTML = '';
    document.getElementById('wireCanvas').innerHTML = '';
}

// ================================
// MODAL FUNCTIONS
// ================================
function openModal() {
    document.getElementById('teamModal').classList.add('show');
}

function closeModal() {
    document.getElementById('teamModal').classList.remove('show');
}

function openTruthTableModal() {
    generateTruthTable();
    document.getElementById('truthTableModal').classList.add('show');
}

function closeTruthTableModal() {
    document.getElementById('truthTableModal').classList.remove('show');
}

// ================================
// PROFILE IMAGE UPLOAD
// ================================
function uploadImage(index) {
    const fileInput = document.getElementById(`upload${index}`);
    const file = fileInput.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById(`img${index}`);
            img.src = e.target.result;
            localStorage.setItem(`profileImage${index}`, e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid image file');
    }
}

function loadProfileImages() {
    for (let i = 1; i <= 3; i++) {
        const savedImage = localStorage.getItem(`profileImage${i}`);
        if (savedImage) {
            const img = document.getElementById(`img${i}`);
            if (img) img.src = savedImage;
        }
    }
}

// ================================
// CIRCUIT STATE PERSISTENCE
// ================================
function saveCircuitToStorage() {
    try {
        const circuitState = {
            nodes: App.nodes.map(node => ({
                id: node.id,
                type: node.type,
                x: node.x,
                y: node.y,
                value: node.value,
                inputCount: node.inputCount,
                inputs: node.inputs,
                outputs: node.outputs
            })),
            nextNodeId: App.nextNodeId
        };
        localStorage.setItem('circuitState', JSON.stringify(circuitState));
    } catch (error) {
        console.error('Failed to save circuit:', error);
    }
}

function loadCircuitFromStorage() {
    try {
        const saved = localStorage.getItem('circuitState');
        if (!saved) return;
        
        const circuitState = JSON.parse(saved);
        App.nextNodeId = circuitState.nextNodeId || 1;
        
        // Recreate nodes
        circuitState.nodes.forEach(nodeData => {
            const node = new Node(nodeData.type, nodeData.x, nodeData.y);
            node.id = nodeData.id;
            node.value = nodeData.value;
            node.inputCount = nodeData.inputCount;
            node.inputs = nodeData.inputs || [];
            node.outputs = nodeData.outputs || [];
            App.nodes.push(node);
            renderNode(node);
        });
        
        // Update visuals and render connections
        updateSimulation();
        renderAllWires();
        
        console.log('Circuit loaded from storage');
    } catch (error) {
        console.error('Failed to load circuit:', error);
        localStorage.removeItem('circuitState');
    }
}
