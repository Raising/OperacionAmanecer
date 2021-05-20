<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="ind-positive-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <rect fill="#88C05F" width="24" height="24" rx="12" />
        <path
          d="M15.707 11.226A1.032 1.032 0 0115 11.5c-.256 0-.512-.092-.707-.274L13 10.013v5.237c0 .518-.447.938-1 .938-.553 0-1-.42-1-.938v-5.237l-1.293 1.213a1.047 1.047 0 01-1.414 0 .896.896 0 010-1.326l3-2.813a1.047 1.047 0 011.414 0l3 2.813a.896.896 0 010 1.326"
          fill="#FFF"
        ></path>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'IndPositiveicon',
  props: {
    title: {
      type: String,
      default: 'Ind Positive icon',
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
