/* ================================
   LOGIC GATE VISUALIZATION BOARD


























































































































































































































**Date:** January 2026University of Frontier Technology, BangladeshET 118 – Instructional Design, Methodologies and Technologies  **Submitted To:**  - Md. Labib Hasan (ID: 2302009)- Kamrul Hasan (ID: 2302004)- Asim Ahmed (ID: 2302001)**Project Developed By:**---The project successfully fulfills its objective of making digital logic education more engaging, effective, and accessible for students in Classes 6 through 12, contributing meaningfully to improved ICT learning outcomes.From a technical perspective, the application demonstrates that effective educational technology need not be complex or expensive. By leveraging standard web technologies and thoughtful instructional design, a simple yet powerful learning tool has been created that serves its educational purpose excellently while remaining maintainable, scalable, and accessible.The application is equally suitable for classroom instruction and independent self-study. Teachers can use it for demonstrations, guided exercises, and formative assessments. Students can use it for homework, exam preparation, and curiosity-driven exploration beyond the curriculum.The combination of immediate visual feedback, automatic verification through truth tables and Boolean expressions, and persistent state management creates an optimal learning environment. Students develop deep understanding through active construction and experimentation rather than passive memorization of abstract rules.By eliminating the need for physical hardware while maintaining the benefits of hands-on experimentation, the tool democratizes access to quality logic gate instruction. Schools with limited resources can provide their students with the same quality of practical learning experience as well-funded institutions with full electronics laboratories.The Logic Gate Visualization Board successfully addresses a critical gap in ICT education by providing an accessible, interactive, and effective tool for teaching digital logic concepts. The application transforms abstract Boolean algebra into tangible, manipulable visual representations that students can explore at their own pace.## 7. ConclusionThe application operates entirely on the client side without requiring server communication, databases, or authentication systems. This architecture enables deployment on any web server, including free static hosting services, and ensures the application continues functioning even without internet connectivity once initially loaded.### 6.6 No Backend RequirementsCircuit state persistence uses the browser's localStorage API, which provides key-value storage that persists across browser sessions. This client-side storage approach requires no server infrastructure, reducing deployment complexity and ensuring student privacy since no circuit data is transmitted over networks.### 6.5 Local Storage for PersistenceAll circuit visualization uses a combination of HTML DOM elements for components and SVG (Scalable Vector Graphics) for wire rendering. SVG provides resolution-independent graphics that scale cleanly on any display device, from smartphones to large monitors. The DOM-based component approach enables easy event handling and state management.### 6.4 Browser-Based RenderingThe application logic is implemented in vanilla JavaScript without external frameworks or libraries. This decision minimizes dependencies, reduces file size for faster loading, and ensures long-term maintainability without vulnerability to framework deprecation. The code uses modern ES6+ features such as classes, arrow functions, and array methods for clean, readable implementation.### 6.3 Vanilla JavaScript for LogicAll visual styling is implemented using CSS3, including the layout system, color schemes, responsive design adaptations, and animations. The CSS architecture uses CSS custom properties (variables) for maintaining consistent design tokens throughout the application. This approach ensures visual consistency and simplifies future maintenance or theming modifications.### 6.2 CSS3 for StylingThe application structure uses HTML5 semantic elements to create an accessible document structure. The markup defines the component palette, canvas area, modal windows, and control buttons in a logical hierarchy that screen readers and assistive technologies can navigate effectively.### 6.1 HTML5 for StructureThe Logic Gate Visualization Board is built using standard web technologies that ensure broad compatibility and ease of maintenance.## 6. Technology StackTeachers can use the truth table and Boolean expression features to assess student understanding. Students can demonstrate mastery by constructing circuits that produce specified truth tables or by explaining the Boolean expressions generated from their designs. The automatic generation of these representations ensures accuracy and saves teachers time in verification.### 5.7 Supporting Assessment and EvaluationTeachers can use the tool to provide differentiated learning experiences tailored to individual student needs. Advanced students can be challenged with complex circuit design problems, while struggling students can receive simplified exercises focusing on basic gate behavior. The tool's flexibility accommodates this range of abilities within a single classroom setting.### 5.6 Facilitating Differentiated InstructionMany schools, particularly in developing regions, lack funding for electronics laboratories with physical logic gate kits, breadboards, and measurement equipment. This software solution requires only a computer or mobile device with a web browser, dramatically lowering the resource barrier to quality logic gate instruction. Schools can provide meaningful hands-on learning experiences without capital investment in hardware.### 5.5 Reducing Resource RequirementsThe instantaneous visual response to every action provides immediate feedback that is essential for effective learning. Students do not need to wait for teacher evaluation or marking to know whether they have succeeded. This immediate feedback loop accelerates learning by allowing rapid iteration and experimentation.### 5.4 Providing Immediate FeedbackDifferent students learn at different rates and require varying amounts of practice to achieve mastery. The web-based tool allows students to progress at their own pace without the constraints of shared laboratory equipment or fixed class schedules. Fast learners can explore advanced circuits, while students needing more practice can repeat basic exercises without time pressure or peer judgment.### 5.3 Enabling Self-Paced ExplorationThe interactive nature of the application transforms students from passive recipients of information into active constructors of knowledge. Rather than memorizing truth tables, students discover them through experimentation. This active learning approach, grounded in constructivist educational theory, produces deeper understanding and better retention than passive instruction.### 5.2 Supporting Active LearningTraditional ICT curricula present logic gates as abstract symbols in textbooks, often disconnected from practical application. This tool bridges that gap by allowing students to manipulate concrete representations of these abstract concepts. Students see immediate cause-and-effect relationships between their actions and circuit behavior, making abstract Boolean algebra tangible and comprehensible.### 5.1 Bridging Theory and PracticeThe Logic Gate Visualization Board delivers significant educational value through multiple pedagogical mechanisms.## 5. Educational ValueThrough repeated experimentation, students begin recognizing patterns such as the relationship between gate types and output behaviors, the effect of input count on truth table size, and the structural similarities between different circuit implementations of the same function. This pattern recognition facilitates deeper understanding and enables students to predict circuit behavior before testing.### 4.5 Pattern Recognition and GeneralizationWhen a circuit does not behave as expected, students use the visual feedback to trace the problem. They can follow the wire colors to identify where signals are not propagating correctly, check gate input counts to ensure all necessary connections are made, and compare the generated Boolean expression against their intended design. This debugging process develops critical thinking and troubleshooting skills applicable beyond logic circuits.### 4.4 Circuit Verification and DebuggingAs confidence grows, students construct more complex circuits involving multiple gates in series or parallel configurations. For example, creating a half-adder circuit requires one XOR gate and one AND gate, both receiving the same two inputs but producing separate sum and carry outputs. Constructing such circuits develops spatial reasoning and planning skills, as students must organize components to minimize wire crossings and maintain visual clarity.### 4.3 Multi-Gate Circuit ConstructionAfter mastering basic connections, students progress to inserting single logic gates between inputs and outputs. A common starting exercise involves creating an AND gate circuit with two input switches and one output LED. Students toggle the switches through all four possible combinations and observe that the LED illuminates only when both switches are ON. Opening the truth table at this stage reveals the classic AND truth table, with the active row highlighting reinforcing the correspondence between switch positions and truth table rows.### 4.2 Single-Gate ExperimentationStudents typically begin by experimenting with simple circuits consisting of one input switch connected directly to one output LED. This allows them to understand the basic mechanics of component placement, connection creation, and switch toggling. The immediate visual feedback from the illuminating LED provides positive reinforcement and confirms successful interaction.### 4.1 Initial Exploration PhaseThe typical student interaction with the system follows a progressive learning pattern that builds understanding incrementally.## 4. User Interaction FlowThe application runs entirely within the web browser without requiring installation, plugins, or special permissions. This eliminates technical barriers that might prevent adoption in schools with limited IT resources. Students can access the tool from school computers, home devices, tablets, or smartphones, ensuring equitable access regardless of economic circumstances.### 3.8 Browser-Based ExecutionThe interface employs a clean, distraction-free design philosophy that prioritizes functionality over decoration. Color choices use neutral backgrounds with high-contrast elements for readability. Font sizes and spacing accommodate users with varying visual acuity. Button labels use clear, unambiguous language appropriate for the target age group.### 3.7 Minimalistic Student-Friendly DesignThe truth table highlighting feature provides real-time correlation between the physical circuit state and the truth table representation. This dynamic feedback reinforces understanding that truth tables describe the complete behavior space of a circuit, with each row representing a specific operating condition. Students can systematically verify circuit behavior by toggling through different input combinations and observing the highlighted row progression.### 3.6 Active State HighlightingThe system eliminates tedious manual calculations by automatically generating truth tables and Boolean expressions. This automation serves two purposes: it provides immediate verification of circuit behavior, and it demonstrates the relationship between circuit diagrams, truth tables, and algebraic expressions. Students can experiment with different circuits and instantly see how modifications affect the Boolean representation.### 3.5 Automatic Truth Table and Boolean Expression GenerationThe wire coloring system provides immediate visual feedback about signal states throughout the circuit. This real-time visualization eliminates the need for mental simulation, allowing students to observe how changes propagate through complex circuits. The color coding is consistent and intuitive: green represents active high signals, while gray represents inactive low signals.### 3.4 Real-Time Current Flow VisualizationThe component placement system uses industry-standard drag-and-drop interaction patterns familiar to students from other software applications. This reduces the learning curve and allows students to focus on understanding logic concepts rather than struggling with tool mechanics. Components snap to the canvas naturally, and users can reposition them at any time by dragging them to new locations.### 3.3 Intuitive Drag-and-Drop InterfaceUnlike fixed hardware or many simulation tools, this application allows students to configure the number of inputs for most logic gates. Gates other than NOT support 2, 3, 5, and 7 input configurations. This flexibility enables exploration of how logic gates scale beyond simple two-input scenarios and helps students understand that Boolean operations generalize to multiple operands.### 3.2 Variable Input ConfigurationThe NAND gate combines AND operation with negation, functioning as a universal gate from which all other gates can be constructed. The NOR gate similarly combines OR with negation and also serves as a universal gate. The XNOR gate implements the equivalence operation, producing a high output when an even number of inputs are high.The system supports all seven fundamental logic gates taught in secondary education curricula. The AND gate implements logical conjunction, producing a high output only when all inputs are high. The OR gate implements logical disjunction, producing a high output when any input is high. The NOT gate implements logical negation, inverting its single input. The XOR gate implements exclusive-OR operation, producing a high output when an odd number of inputs are high.### 3.1 Comprehensive Logic Gate SupportThe Logic Gate Visualization Board incorporates several key features designed to maximize educational effectiveness while maintaining ease of use.## 3. Features DescriptionThis persistence feature is particularly valuable in educational settings where students may work on circuits over multiple sessions or where internet connectivity might interrupt their work. Students can safely close the browser knowing their progress will not be lost.The application automatically saves the current circuit state to the browser's local storage whenever a user makes any modification: adding components, creating connections, removing elements, or toggling switches. When a student refreshes the page or closes and reopens the browser, the system restores the previously constructed circuit exactly as it was left, including all component positions, connections, and switch states.### 2.8 Circuit Persistence and State ManagementFor complex circuits involving multiple nested gates, the system applies appropriate parentheses to ensure correct order of operations. This feature allows students to see the direct relationship between their visual circuit construction and the formal Boolean algebra they study in textbooks, bridging visual and symbolic representations of logic.Above the truth table, the system displays the Boolean algebraic expression corresponding to each output. The expression generation algorithm traces back from each output LED through the connected logic gates to the input sources, building a hierarchical representation of the circuit logic. The system uses standard Boolean notation: the center dot (·) for AND operations, the plus sign (+) for OR operations, the prime symbol (') for NOT operations, and the XOR symbol (⊕) for exclusive-OR operations.### 2.7 Boolean Expression DisplayA key feature of the truth table is its dynamic highlighting capability. The system continuously monitors the current state of all input switches. When the input configuration matches a particular row in the truth table, that row receives visual highlighting through a distinct background color. This real-time feedback helps students understand that the truth table is not merely a static reference but represents the actual behavior of their constructed circuit. As students toggle different switches, the highlighted row updates immediately, reinforcing the connection between abstract truth tables and concrete circuit operation.The truth table displays in a modal window with a clean tabular format. Input columns are labeled sequentially as IN1, IN2, IN3, and so forth, while output columns appear as OUT1, OUT2, etc. Each row represents one possible combination of input values, with the output values calculated by simulating the circuit for that specific input state.Students can access the truth table view by clicking the Truth Table button located in the bottom-right corner of the interface. The system analyzes the current circuit configuration, identifies all input switches and output LEDs, and generates a complete truth table showing all possible input combinations and their corresponding output values.### 2.6 Truth Table Generation and HighlightingIf reducing the number of inputs would disconnect existing wires, the system removes those connections and updates the circuit evaluation. This dynamic reconfiguration allows students to experiment with different circuit topologies without needing to rebuild entire circuits from scratch.For logic gates that support multiple inputs, the system provides configuration options through dropdown selectors embedded within each gate component. Students can select between 2, 3, 5, or 7 inputs for gates such as AND, OR, XOR, NAND, NOR, and XNOR. When a user changes the input count, the system automatically adjusts the gate's visual representation, adding or removing input connection ports accordingly.### 2.5 Gate Configuration and Multi-Input SupportAs the signal propagates, each wire changes color to reflect its current state. High signals cause wires to display in bright green, while low signals appear in neutral gray. This visual feedback allows students to trace signal flow through the circuit and observe how different gate combinations transform input values into output results. The output LEDs illuminate or dim correspondingly, providing clear visual confirmation of the final circuit state.When a student toggles an input switch from OFF to ON or vice versa, the system immediately propagates this change throughout the circuit. The propagation follows a topological sorting algorithm that ensures all components evaluate in the correct dependency order, preventing race conditions and ensuring accurate results even in complex multi-gate circuits.### 2.4 Signal Propagation and VisualizationTo complete the connection, the user clicks on an input port of another component. The system validates the connection, creates a permanent wire between the two ports, and updates the internal circuit representation. The wire appears as a colored line connecting the two components, with the color indicating the current signal state: green for high signals and gray for low signals.After placing multiple components on the canvas, students establish connections by creating wires between outputs and inputs. The connection process begins when a user clicks on an output port of any component. The system enters connection mode and highlights the selected output port to provide visual feedback. As the user moves the cursor, a temporary wire extends from the selected output port to the cursor position, providing real-time visual guidance.### 2.3 Circuit Connection ProcessEach placed component appears as a self-contained visual element with clearly labeled input and output connection points. Input switches display as toggle controls that students can click to change between ON and OFF states. Output LEDs appear as circular indicators that illuminate when receiving a high signal. Logic gates display with their conventional symbols and include dropdown selectors for configuring the number of inputs when applicable.The component palette contains two types of input/output elements and seven types of logic gates. Students begin circuit construction by selecting a component from the palette using a drag-and-drop interaction. When a user clicks and holds on a component icon, the system enables dragging mode. As the user moves the cursor over the central canvas area, a visual representation of the selected component follows the cursor position. Upon releasing the mouse button at the desired location, the system creates and places the component on the canvas.### 2.2 Component Selection and PlacementWhen a user opens the web application in a browser, the system initializes a clean workspace consisting of three main areas: a component palette on the left side displaying available circuit elements, a central canvas area for circuit construction, and control buttons in the header. The interface loads with a minimalistic design to avoid overwhelming students with unnecessary visual elements.### 2.1 Application Access and Interface LoadingThe system operates through a series of intuitive interactions that enable students to build and test digital logic circuits independently. The following section describes the complete workflow from initial access to circuit verification.## 2. System Working ProcedureThis web-based application bridges this gap by providing an accessible, interactive platform where students can construct logic circuits, observe real-time signal flow, and verify their understanding through automatically generated truth tables and Boolean expressions. The tool requires no specialized hardware, laboratory facilities, or software installation, making it universally accessible through any modern web browser.Traditional classroom instruction of logic gates relies heavily on theoretical explanations, static diagrams, and truth tables presented in textbooks. This approach often fails to engage students effectively, as learners cannot visualize the dynamic behavior of logic circuits or experiment with different configurations. The lack of hands-on experience creates a significant gap between theoretical knowledge and practical understanding, resulting in poor retention and limited problem-solving abilities.The Logic Gate Visualization Board is an interactive web-based educational tool designed to facilitate the teaching and learning of digital logic concepts for students in Classes 6 through 12. The project addresses a critical challenge in Information and Communication Technology (ICT) education: the difficulty students face in understanding abstract logic gate operations without access to physical hardware or practical demonstrations.## 1. Project Overview---**Academic Year:** 2024-2025**Institution:** University of Frontier Technology, Bangladesh  **Course:** ET 118 – Instructional Design, Methodologies and Technologies  ### Interactive Web-Based Circuit Builder for ICT Education## Logic Gate Visualization Board   Drag-and-Drop Circuit Builder
   ================================ */

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
