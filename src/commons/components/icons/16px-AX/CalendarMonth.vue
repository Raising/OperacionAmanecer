<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="calendar-month-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13 0a1 1 0 01.993.883L14 1v1c1.053 0 1.918.817 1.995 1.85L16 4v10a2.002 2.002 0 01-1.85 1.995L14 16H2a2.002 2.002 0 01-1.995-1.85L0 14V4c0-1.053.817-1.918 1.85-1.995L2 2V1A1 1 0 013.993.883L4 1v1h8V1a1 1 0 011-1zm1 4H2v10h11.997l.002-6H14V6h-.001L14 4zM4 11a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM4 8a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM4 5a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CalendarMonthIcon',
  props: {
    title: {
      type: String,
      default: 'Calendar Month icon',
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
