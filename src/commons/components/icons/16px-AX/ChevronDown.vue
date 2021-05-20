<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="chevron-down-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 11a.997.997 0 01-.707-.293l-3-3a.999.999 0 111.414-1.414L8 8.586l2.293-2.293a.999.999 0 111.414 1.414l-3 3A.997.997 0 018 11"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronDownIcon',
  props: {
    title: {
      type: String,
      default: 'Chevron Down icon',
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
