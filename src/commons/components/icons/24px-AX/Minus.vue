<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="minus-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path d="M19 11a1 1 0 01.117 1.993L19 13H5a1 1 0 01-.117-1.993L5 11h14z" fill-rule="evenodd"></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Minusicon',
  props: {
    title: {
      type: String,
      default: 'Minus icon',
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
