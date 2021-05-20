<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="magnify-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M9.75 16C6.58 16 4 13.533 4 10.5S6.58 5 9.75 5s5.75 2.467 5.75 5.5S12.92 16 9.75 16m10.957 4.293l-5-5-.002-.001A7.319 7.319 0 0017.5 10.5c0-4.136-3.477-7.5-7.75-7.5S2 6.364 2 10.5 5.477 18 9.75 18a7.884 7.884 0 004.479-1.39c.024.031.036.069.064.097l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Magnifyicon',
  props: {
    title: {
      type: String,
      default: 'Magnify icon',
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
