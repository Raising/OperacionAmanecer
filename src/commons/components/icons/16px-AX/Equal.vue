<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="equal-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path d="M11 9a1 1 0 010 2H5a1 1 0 010-2h6zm0-4a1 1 0 010 2H5a1 1 0 110-2h6z" fill-rule="evenodd"></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'EqualIcon',
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
      default: 16,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
