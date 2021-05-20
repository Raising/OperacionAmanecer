<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="printer-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M7 9a1 1 0 11-2 0 1 1 0 012 0zm13 5a1 1 0 01-1 1h-1v-3H6v3H5a1 1 0 01-1-1V8c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v6zm-4 6l-8 .009V14h8v6zM8 4h8l.001 1H8V4zm11 1h-1V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v1H5C3.346 5 2 6.346 2 8v6c0 1.654 1.346 3 3 3h1v3.009C6 21.106 6.894 22 7.991 22h8.018A1.994 1.994 0 0018 20.009V17h1c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Printericon',
  props: {
    title: {
      type: String,
      default: 'Printer icon',
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
      default: 24,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
};
</script>
