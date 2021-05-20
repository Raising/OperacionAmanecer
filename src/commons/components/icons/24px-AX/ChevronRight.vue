<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="chevron-right-icon flex-complete-center"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M9 19a.997.997 0 00.707-.293l6-6a.999.999 0 000-1.414l-6-6a.999.999 0 10-1.414 1.414L13.586 12l-5.293 5.293A.999.999 0 009 19"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronRighticon',
  props: {
    title: {
      type: String,
      default: 'Chevron Right icon',
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
