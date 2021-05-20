<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="plus-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2a1 1 0 01.993.883L9 5v2h2a1 1 0 01.117 1.993L11 9H9v2a1 1 0 01-1.993.117L7 11V9H5a1 1 0 01-.117-1.993L5 7h2V5a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'PlusIcon',
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
      default: 16,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
