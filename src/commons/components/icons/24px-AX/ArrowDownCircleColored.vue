<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="arrow-down-circle-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <rect :fill="props.fillColor" width="24" height="24" rx="12" />
        <path
          d="M8.293 12.293a.997.997 0 011.414 0L11 13.586V8a1 1 0 112 0v5.586l1.293-1.293a.999.999 0 111.414 1.414l-3 3a.999.999 0 01-1.414 0l-3-3a.999.999 0 010-1.414"
          fill="#FFF"
        ></path>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ArrowDownCircleicon',
  props: {
    title: {
      type: String,
      default: 'Arrow Down Circle icon',
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
