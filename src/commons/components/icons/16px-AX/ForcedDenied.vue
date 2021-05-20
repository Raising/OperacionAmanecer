<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="forced-denied-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13 0a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm0 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zM6.613 5.21l.094.083L8 6.585l1.293-1.292a1 1 0 011.497 1.32l-.083.094L9.415 8l1.292 1.293a1 1 0 01-1.32 1.497l-.094-.083L8 9.415l-1.293 1.292a1 1 0 01-1.497-1.32l.083-.094L6.585 8 5.293 6.707a1 1 0 011.32-1.497z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ForcedDeniedIcon',
  props: {
    title: {
      type: String,
      default: 'Forced Denied icon',
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
