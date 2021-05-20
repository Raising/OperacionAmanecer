<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="config-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M16 16a1 1 0 011 1v1h4a1 1 0 110 2h-4v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4a1 1 0 011-1zm-4 2a1 1 0 110 2H2a1 1 0 110-2zM8 9a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1v-1H2a1 1 0 110-2h4v-1a1 1 0 011-1zm13 2a1 1 0 110 2H11a1 1 0 110-2zm-8-9a1 1 0 011 1v1h7a1 1 0 110 2h-7v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V3a1 1 0 011-1zM9 4a1 1 0 110 2H2a1 1 0 110-2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Configicon',
  props: {
    title: {
      type: String,
      default: 'Config icon',
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
