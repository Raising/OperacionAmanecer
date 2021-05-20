<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="calendar-year-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M10 0a1 1 0 011 1v1a2 2 0 012 2v1h1a2 2 0 011.995 1.85L16 7v7a2 2 0 01-1.85 1.995L14 16H5a2 2 0 01-1.995-1.85L3 14v-1H2a2 2 0 01-1.995-1.85L0 11V4a2 2 0 012-2V1a1 1 0 112 0v1h5V1a1 1 0 011-1zm4 7h-1v4a2 2 0 01-1.85 1.995L11 13H5v1h9V7zm-3-3H2v7h9V4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CalendarYearIcon',
  props: {
    title: {
      type: String,
      default: 'Calendar Year icon',
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
