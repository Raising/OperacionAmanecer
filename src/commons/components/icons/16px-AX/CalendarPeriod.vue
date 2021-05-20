<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="calendar-period-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13 0a1 1 0 01.993.883L14 1v1c1.053 0 1.918.817 1.995 1.85L16 4v10a2.002 2.002 0 01-1.85 1.995L14 16H2a2.002 2.002 0 01-1.995-1.85L0 14V4c0-1.053.817-1.918 1.85-1.995L2 2V1A1 1 0 013.993.883L4 1v1h8V1a1 1 0 011-1zm1 4H2v10h11.997l.002-6H14V6h-.001L14 4zM5 7a2 2 0 110 4 2 2 0 010-4zm3 0a2 2 0 11-1 3.733 2 2 0 000-3.465C7.296 7.098 7.637 7 8 7zm3 0a2 2 0 11-.999 3.733 2 2 0 000-3.465c.294-.17.635-.268 1-.268z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CalendarPeriodIcon',
  props: {
    title: {
      type: String,
      default: 'Calendar Period icon',
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
