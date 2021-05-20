<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="invoice-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M15 15a1 1 0 01-1 1H2a1 1 0 01-1-1V1a1 1 0 011-1h8.594a1 1 0 01.71.297l3.407 3.442a1 1 0 01.289.703V15zM8 1.999H3v12h10V7h-3a2 2 0 01-1.995-1.85L8 5V1.999zm5 2.854l-2.824-2.854H10V5h3v-.147z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'InvoiceIcon',
  props: {
    title: {
      type: String,
      default: 'Invoice icon',
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
