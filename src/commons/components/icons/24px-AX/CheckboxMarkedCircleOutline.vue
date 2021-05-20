<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="checkbox-marked-circle-outline-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M21 10.177a1 1 0 00-1 1v.827a7.947 7.947 0 01-2.347 5.656A7.942 7.942 0 0112.001 20h-.005a7.947 7.947 0 01-5.656-2.347A7.949 7.949 0 014 11.995C4.003 7.585 7.591 4 12 4h.005c1.127 0 2.221.233 3.251.692a1 1 0 00.814-1.827A9.927 9.927 0 0012.006 2h-.007C6.488 2 2.003 6.482 2 11.994a9.928 9.928 0 002.925 7.072A9.93 9.93 0 0011.994 22h.007a9.935 9.935 0 007.066-2.925A9.936 9.936 0 0022 12.005v-.828a1 1 0 00-1-1"
      />
      <path
        d="M10.007 10.407a.999.999 0 10-1.414 1.414l2.7 2.7a1 1 0 001.414 0l9-9.01a.999.999 0 10-1.414-1.413L12 12.4l-1.993-1.993z"
        fill="#F18A00"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CheckboxMarkedCircleOutlineicon',
  props: {
    title: {
      type: String,
      default: 'Checkbox Marked Circle Outline icon',
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
