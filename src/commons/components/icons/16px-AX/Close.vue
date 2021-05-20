<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="close-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M5.013 3.61l.094.083L8 6.585l2.893-2.892.094-.083a1 1 0 011.32 1.497L9.415 8l2.892 2.893a1 1 0 01-1.32 1.497l-.094-.083L8 9.415l-2.893 2.892-.094.083a1 1 0 01-1.32-1.497L6.585 8 3.693 5.107a1 1 0 011.32-1.497z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ClosesIcon',
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
      default: 16,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
