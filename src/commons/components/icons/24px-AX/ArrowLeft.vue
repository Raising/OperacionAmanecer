<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="arrow-left-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M18.994 11H7.436l3.314-3.293a.996.996 0 000-1.414 1.01 1.01 0 00-1.423 0l-5.032 5a.994.994 0 000 1.414l5.032 5a1.007 1.007 0 001.423 0 .996.996 0 000-1.414L7.436 13h11.558C19.55 13 20 12.552 20 12s-.45-1-1.006-1"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ArrowLefticon',
  props: {
    title: {
      type: String,
      default: 'Arrow Left icon',
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
