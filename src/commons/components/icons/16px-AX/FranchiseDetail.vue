<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="franchise-detail-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M12 0a2 2 0 011.995 1.85L14 2v2.004a1 1 0 01-1.993.117L12 4.004V2H2v12h7.003a1 1 0 01.117 1.993L9.003 16H2a2 2 0 01-1.995-1.85L0 14V2A2 2 0 011.85.005L2 0h10zM9 5a4 4 0 013.446 6.032l2.675 2.675a1 1 0 11-1.414 1.414l-2.675-2.675A4 4 0 119 5zM4 9a1 1 0 110 2 1 1 0 010-2zm5-2a2 2 0 100 4 2 2 0 000-4zM4 6a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'FranchiseDetailIcon',
  props: {
    title: {
      type: String,
      default: 'Franchise Detail icon',
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
