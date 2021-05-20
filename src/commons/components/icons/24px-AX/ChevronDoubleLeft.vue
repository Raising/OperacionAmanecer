<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="chevron-double-left-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M11.707 5.293a.999.999 0 010 1.414L6.414 12l5.293 5.293a.999.999 0 11-1.414 1.414l-6-6a.999.999 0 010-1.414l6-6a.999.999 0 011.414 0zm6 0a.999.999 0 010 1.414L12.414 12l5.293 5.293a.999.999 0 11-1.414 1.414l-6-6a.999.999 0 010-1.414l6-6a.999.999 0 011.414 0z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronDoubleLefticon',
  props: {
    title: {
      type: String,
      default: 'Chevron Double Left icon',
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
