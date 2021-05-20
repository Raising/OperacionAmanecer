<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="details-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M20 16a1 1 0 110 2H8a1 1 0 110-2zM5 16a1 1 0 110 2H4a1 1 0 110-2zm15-5a1 1 0 110 2H8a1 1 0 110-2zM5 11a1 1 0 110 2H4a1 1 0 110-2zm15-5a1 1 0 110 2H8a1 1 0 110-2zM5 6a1 1 0 110 2H4a1 1 0 110-2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Detailsicon',
  props: {
    title: {
      type: String,
      default: 'Details icon',
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
