<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="circle-colored-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CircleColoredIcon',
  props: {
    title: {
      type: String,
      default: 'Circle Colored icon',
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
      default: '0 0 24 24',
    },
  },
};
</script>
