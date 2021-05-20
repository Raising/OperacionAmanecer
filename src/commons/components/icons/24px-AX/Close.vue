<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="close-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M4.613 3.21l.094.083L12 10.585l7.293-7.292.094-.083a1 1 0 011.32 1.497L13.415 12l7.292 7.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415l-7.293 7.292-.094.083a1 1 0 01-1.32-1.497L10.585 12 3.293 4.707a1 1 0 011.32-1.497z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Closeicon',
  props: {
    title: {
      type: String,
      default: 'Close icon',
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
