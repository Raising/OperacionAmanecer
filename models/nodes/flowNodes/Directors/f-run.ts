import NodeFactory from "@MODELS/node-prototypes";

NodeFactory.flow({
    id: "f-run",
    name: "Start",
    description: "The flow of this graph start from here",
    inputs: {},
    execution: () => {},
});