import './bootstrap-wrapped-registration.ts';
import './icons/fa-icons';

let importAllComponents = (components: any) => {
  components.keys().forEach(components);
};

importAllComponents(require.context('@COMMONS/components', true, /[A-Za-z0-9-_,\s]+\.vue$/i));
