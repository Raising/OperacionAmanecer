<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="warning-octagon-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M16.14 1a1 1 0 01.707.293l5.86 5.86A1 1 0 0123 7.86v8.28a1 1 0 01-.293.707l-5.86 5.86a1 1 0 01-.707.293H7.86a1 1 0 01-.707-.293l-5.86-5.86A1 1 0 011 16.14V7.86a1 1 0 01.293-.707l5.86-5.86A1 1 0 017.86 1zm-.415 2H8.274L3 8.274v7.451L8.275 21h7.449L21 15.724V8.275L15.725 3zM12.01 15a1 1 0 01.117 1.993L12 17a1 1 0 01-.117-1.993L12.01 15zM12 7a1 1 0 01.993.883L13 8v4a1 1 0 01-1.993.117L11 12V8a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'WarningOctagonicon',
  props: {
    title: {
      type: String,
      default: 'Warning Octagon icon',
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
