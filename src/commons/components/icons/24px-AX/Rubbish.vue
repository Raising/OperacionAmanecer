<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="rubbish-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M14 1a3 3 0 012.995 2.824L17 4v2h4a1 1 0 011 1c0 .476-.333.875-.872.98L21 8h-1v12.125c0 1.546-1.262 2.784-2.825 2.87L17 23H7c-1.584 0-2.903-1.183-2.995-2.705L4 20.125V8H3a1 1 0 01-1-1c0-.476.333-.875.872-.98L3 6h4V4a3 3 0 012.824-2.995L10 1h4zm4 7H6v12.125c0 .435.374.817.88.869L7 21h10c.526 0 .937-.35.993-.776l.007-.099V8zm-8 2a1 1 0 01.993.883L11 11v6a1 1 0 01-1.993.117L9 17v-6a1 1 0 011-1zm4 0a1 1 0 01.993.883L15 11v6a1 1 0 01-1.993.117L13 17v-6a1 1 0 011-1zm0-7h-4a1 1 0 00-.993.883L9 4v2h6V4a1 1 0 00-.883-.993L14 3z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Rubbishicon',
  props: {
    title: {
      type: String,
      default: 'Rubbish icon',
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
