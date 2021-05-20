<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="ind-neutral-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <rect fill="#8a8989" width="24" height="24" rx="12" />
        <path d="M15 13a1 1 0 010 2H9a1 1 0 010-2h6zm0-4a1 1 0 010 2H9a1 1 0 110-2h6z" fill="#FFF"></path>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'IndNeutralicon',
  props: {
    title: {
      type: String,
      default: 'Ind Neutral icon',
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
