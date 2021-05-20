<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="check-circle-outline-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm3.727 3.313a1 1 0 01.046 1.322l-.086.092-4.231 4a1 1 0 01-1.274.083l-.1-.083-1.769-1.672A1 1 0 015.59 7.52l.097.08 1.081 1.023 3.545-3.35a1 1 0 011.414.039z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CheckCircleOutlineIcon',
  props: {
    title: {
      type: String,
      default: 'Check Circle Outline icon',
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
