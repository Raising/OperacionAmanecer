<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="arrow-up-circle-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 4h.02c.023 0 .046.002.07.004L12 7a1.008 1.008 0 01.625.22l.082.073 4 4a1 1 0 01-1.32 1.497l-.094-.083L13 10.415V16a1 1 0 01-1.993.117L11 16v-5.585l-2.293 2.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 4-4 .082-.073.008-.007-.09.08A1.008 1.008 0 0111.982 7H12z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ArrowUpCircleicon',
  props: {
    title: {
      type: String,
      default: 'Arrow Up Circle icon',
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
