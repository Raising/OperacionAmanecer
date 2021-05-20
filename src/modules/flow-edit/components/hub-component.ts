//@ts-ignore
let importAllComponents = (components: any) => {
  components.keys().forEach(components);
};

importAllComponents(require.context('@FLOWEDIT/components', true, /[A-Za-z0-9-_,\s]+\.vue$/i));
