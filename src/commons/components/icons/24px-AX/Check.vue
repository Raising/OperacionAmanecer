<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="check-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M9.5 18a.997.997 0 01-.707-.293l-3.5-3.5a.999.999 0 111.414-1.414l2.733 2.733 7.798-9.173a.999.999 0 111.524 1.294l-8.5 10A1 1 0 019.54 18L9.5 18"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Checkicon',
  props: {
    title: {
      type: String,
      default: 'Check icon',
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
