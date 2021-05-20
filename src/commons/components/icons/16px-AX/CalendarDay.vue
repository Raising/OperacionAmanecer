<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="calendar-day-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13 0a1 1 0 01.993.883L14 1v1c1.053 0 1.918.817 1.995 1.85L16 4v10a2.002 2.002 0 01-1.85 1.995L14 16H2a2.002 2.002 0 01-1.995-1.85L0 14V4c0-1.053.817-1.918 1.85-1.995L2 2V1A1 1 0 013.993.883L4 1v1h8V1a1 1 0 011-1zm1 4H2v10h11.997l.002-6H14V6h-.001L14 4zm-3.67 2l.38.68-2.63 6.44-1.73-.33 2.19-5.23H5.87V6h4.46z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CalendarDayIcon',
  props: {
    title: {
      type: String,
      default: 'Calendar Day icon',
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
