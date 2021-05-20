<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="arrow-right-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M5.006 11h11.558L13.25 7.707a.996.996 0 010-1.414 1.01 1.01 0 011.423 0l5.032 5a.994.994 0 010 1.414l-5.032 5a1.007 1.007 0 01-1.423 0 .996.996 0 010-1.414L16.564 13H5.006A1.003 1.003 0 014 12c0-.552.45-1 1.006-1"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ArrowRighticon',
  props: {
    title: {
      type: String,
      default: 'Arrow Right icon',
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
