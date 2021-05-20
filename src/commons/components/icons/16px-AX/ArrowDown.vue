<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="arrow-down-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M4.293 8.293a.997.997 0 011.414 0L7 9.586V4a1 1 0 112 0v5.586l1.293-1.293a.999.999 0 111.414 1.414l-3 3a.999.999 0 01-1.414 0l-3-3a.999.999 0 010-1.414"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ArrowDownIcon',
  props: {
    title: {
      type: String,
      default: 'Arrow Down icon',
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
