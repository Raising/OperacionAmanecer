<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="plus-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12 4a1 1 0 01.993.883L13 5v6h6a1 1 0 01.117 1.993L19 13h-6v6a1 1 0 01-1.993.117L11 19v-6H5a1 1 0 01-.117-1.993L5 11h6V5a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Plusicon',
  props: {
    title: {
      type: String,
      default: 'Plus icon',
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
