<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="equal-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path d="M18 14a1 1 0 010 2H6a1 1 0 010-2h12zm0-6a1 1 0 010 2H6a1 1 0 110-2h12z" fill-rule="evenodd"></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Equalicon',
  props: {
    title: {
      type: String,
      default: 'Equal icon',
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
