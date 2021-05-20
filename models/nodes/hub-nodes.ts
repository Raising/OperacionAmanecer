
let importAllNodes = (components: any) => {
  components.keys().forEach(components);
};

importAllNodes(require.context('@MODELS/nodes', true, /[A-Za-z0-9-_,\s]+\.ts$/i));
