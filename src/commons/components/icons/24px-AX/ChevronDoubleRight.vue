<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="chevron-double-right-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M10.293 5.293a.999.999 0 000 1.414L15.586 12l-5.293 5.293a.999.999 0 101.414 1.414l6-6a.999.999 0 000-1.414l-6-6a.999.999 0 00-1.414 0zm-6 0a.999.999 0 000 1.414L9.586 12l-5.293 5.293a.999.999 0 101.414 1.414l6-6a.999.999 0 000-1.414l-6-6a.999.999 0 00-1.414 0z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronDoubleRighticon',
  props: {
    title: {
      type: String,
      default: 'Chevron Double Right icon',
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
