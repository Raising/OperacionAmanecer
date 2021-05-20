<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="sales-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M8.051 2.684c.29-.87 1.479-.91 1.85-.119l.048.119L15 17.837l2.051-6.153a1 1 0 01.833-.677L18 11h4a1 1 0 01.117 1.993L22 13h-3.28l-2.771 8.316c-.29.87-1.479.91-1.85.119l-.048-.119L9 6.161l-2.051 6.155a1 1 0 01-.833.677L6 13H2a1 1 0 01-.117-1.993L2 11h3.279l2.772-8.316z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Salesicon',
  props: {
    title: {
      type: String,
      default: 'Sales icon',
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
