<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="consumption-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M4.956 1.67c.298-.853 1.463-.891 1.84-.117l.048.117 3.256 9.303 1.156-3.303a1 1 0 01.818-.662L12.2 7H15a1 1 0 01.117 1.993L15 9h-2.092l-1.864 5.33c-.298.853-1.463.891-1.84.117l-.048-.117L5.9 5.026 4.744 8.33a1 1 0 01-.818.662L3.8 9H1a1 1 0 01-.117-1.993L1 7h2.09l1.866-5.33z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ConsumptionIcon',
  props: {
    title: {
      type: String,
      default: 'Consumption icon',
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
