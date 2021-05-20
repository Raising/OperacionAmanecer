<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="thumb-up-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M2.6 16c-1.336 0-2.503-.885-2.594-2.117L0 13.727V9.273c0-1.26 1.113-2.196 2.434-2.268L2.6 7h1.447l.035-.097 2.724-6.3A1 1 0 017.724 0c1.687 0 3.044 1.394 3.044 3.1l-.001 1.799 2.844.001a2.343 2.343 0 011.69.695l.128.14c.449.53.647 1.232.545 1.923l-.94 6.298c-.174 1.18-1.178 2.058-2.351 2.044H2.6zM4 14V9H2.6c-.333 0-.548.141-.592.239L2 9.273v4.454c0 .084.178.234.48.267L2.6 14H4zM8.301 2.185L6 7.504V14h6.694c.15.002.286-.1.341-.255l.02-.083.94-6.298a.427.427 0 00-.093-.337.353.353 0 00-.28-.127H9.768a1 1 0 01-1-1V3.1c0-.368-.17-.69-.43-.89L8.3 2.185z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ThumbUpIcon',
  props: {
    title: {
      type: String,
      default: 'Thumb Up icon',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: Number,
      default: 16,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
