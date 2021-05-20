<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="expired-debt-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13 0a1 1 0 01.993.883L14 1v1.171A3 3 0 0116 5v8a3 3 0 01-3 3H3a3 3 0 01-3-3V5c0-1.306.835-2.418 2-2.83V1A1 1 0 013.993.883L4 1v1h8V1a1 1 0 011-1zm0 4H3a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zm-5 7a1 1 0 110 2 1 1 0 010-2zm0-6a1 1 0 01.993.883L9 6v3a1 1 0 01-1.993.117L7 9V6a1 1 0 011-1z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ExpiredDebtIcon',
  props: {
    title: {
      type: String,
      default: 'Expired Debt icon',
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
