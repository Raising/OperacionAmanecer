<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="poll-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M19 20V8.778c0-.55-.45-1-1-1s-1 .45-1 1V20c0 .55.45 1 1 1s1-.45 1-1m-6 0V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1m-7 1c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Pollicon',
  props: {
    title: {
      type: String,
      default: 'Poll icon',
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
