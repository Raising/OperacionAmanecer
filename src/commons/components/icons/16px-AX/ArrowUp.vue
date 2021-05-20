<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="arrow-up-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M11.707 7.707a.997.997 0 01-1.414 0L9 6.414V12a1 1 0 11-2 0V6.414L5.707 7.707a.999.999 0 11-1.414-1.414l3-3a.999.999 0 011.414 0l3 3a.999.999 0 010 1.414"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ArrowUpIcon',
  props: {
    title: {
      type: String,
      default: 'Arrow Up icon',
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
