<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="config-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M5 7a1 1 0 011 1v6a1 1 0 01-2 0V8a1 1 0 011-1zm8 3a1 1 0 110 2h-1v2a1 1 0 01-2 0v-2H9a1 1 0 010-2zm-2-9a1 1 0 011 1v6a1 1 0 01-2 0V2a1 1 0 011-1zM5 1a1 1 0 011 1v2h1a1 1 0 010 2H3a1 1 0 010-2h1V2a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ConfigIcon',
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
      default: 16,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
