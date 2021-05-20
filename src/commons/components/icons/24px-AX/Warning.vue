<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="warning-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M11.138 2.493a1 1 0 011.724 0l10 17A1 1 0 0122 21H2a1 1 0 01-.862-1.507zM12 4.972L3.747 19h16.505L12 4.972zM12 15a1 1 0 110 2 1 1 0 010-2zm0-7a1 1 0 011 1v4a1 1 0 01-2 0V9a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Warningicon',
  props: {
    title: {
      type: String,
      default: 'Warning icon',
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
