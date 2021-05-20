export default {
  bind: function(el: any, binding: any, vnode: any) {
    el.clickOutsideEvent = function(event: any) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
