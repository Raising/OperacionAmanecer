<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="columns-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M21 1a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2zM3 7.999V21h8V7.999H3zM13 8v13h8V8h-8zm8-5h-8v3h8V3zM11 3H3v2.999h8V3z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Columnsicon',
  props: {
    title: {
      type: String,
      default: 'Columns icon',
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
