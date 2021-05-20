<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="document-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M14 1a1.01 1.01 0 01.25.031l.03.009c.03.009.061.02.091.031l.027.012a.914.914 0 01.195.112c.04.03.078.062.114.098l-.093-.082.011.009.082.073 6 6a1.006 1.006 0 01.21.309l.012.027c.012.03.022.06.031.091l.008.03A.921.921 0 0121 8l-.008-.126.001.01L21 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h8zm-1 2H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V9h-5a1 1 0 01-.993-.883L13 8V3zm3 13a1 1 0 01.117 1.993L16 18H8a1 1 0 01-.117-1.993L8 16h8zm0-4a1 1 0 01.117 1.993L16 14H8a1 1 0 01-.117-1.993L8 12h8zm-6-4a1 1 0 01.117 1.993L10 10H8a1 1 0 01-.117-1.993L8 8h2zm5-3.585V7h2.585L15 4.415z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Documenticon',
  props: {
    title: {
      type: String,
      default: 'Document icon',
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
