//@ts-ignore
const importAllComponents = (components: any) => {
  components.keys().forEach(components);
};

importAllComponents(require.context('@HQ/components', true, /[A-Za-z0-9-_,\s]+\.vue$/i));
