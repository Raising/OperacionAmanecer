<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="house-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12.66 2.59l8.004 7.112a1 1 0 01.336.747V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.449a1 1 0 01.335-.747l7.996-7.111a1 1 0 011.329 0zm-.664 2.086L5 10.897V20h14v-9.102l-7.004-6.222z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Houseicon',
  props: {
    title: {
      type: String,
      default: 'House icon',
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
