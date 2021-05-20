import NodeFactory from "@MODELS/node-prototypes";
import { ValueType, DataMode } from '@MODELS/flow-graph';

NodeFactory.data({
    id: "d-double-value",
    name: "Double",
    description: "Doubles The Value of the input",
    inputs: {
        value:{
            id : "value",
            name: "in",
            valueType : ValueType.number,
            dataMode: DataMode.value,
        }
    },
    outputs:{
        result:{
            id : "result",
            name: "doubled",
            valueType : ValueType.number,
            dataMode: DataMode.value,
        }
    },

    execution: ({value}) => {
        return {result:value*2};
    },
});