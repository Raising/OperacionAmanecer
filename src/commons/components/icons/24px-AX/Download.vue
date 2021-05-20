<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="download-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M21 12a1 1 0 00-1 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 10-2 0v5c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-5a1 1 0 00-1-1zm-13.949-.293a.999.999 0 111.414-1.414L11 12.828V4a1 1 0 112 0v8.828l2.535-2.535a.999.999 0 111.414 1.414l-4.242 4.242a.993.993 0 01-.707.293.993.993 0 01-.707-.293l-4.242-4.242z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Downloadicon',
  props: {
    title: {
      type: String,
      default: 'Download icon',
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
