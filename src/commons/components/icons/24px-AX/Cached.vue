<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="cached-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M22.707 9.293a.999.999 0 00-1.414 0l-1.409 1.409a7.58 7.58 0 00-.214-.963C18.68 6.36 15.525 4 12 4a7.897 7.897 0 00-5.525 2.221.999.999 0 101.39 1.438A5.908 5.908 0 0112 6a6.024 6.024 0 015.753 4.31c.004.012.005.025.01.037l-1.056-1.054a.999.999 0 10-1.414 1.414l3 3c.028.028.065.04.097.065l.005.002A.983.983 0 0019 14a.997.997 0 00.707-.293l3-3a.999.999 0 000-1.414m-4.957 6.823c.4.382.414 1.015.033 1.414A8.027 8.027 0 0112 20c-4.278 0-7.772-3.378-7.98-7.606l-1.313 1.313a.999.999 0 11-1.414-1.414l3-3a.999.999 0 011.414 0l3 3a.999.999 0 11-1.414 1.414l-1.27-1.271C6.246 15.541 8.838 18 12 18a5.937 5.937 0 004.336-1.851 1.002 1.002 0 011.414-.033"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Cachedicon',
  props: {
    title: {
      type: String,
      default: 'Cached icon',
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
