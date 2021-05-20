<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="filters-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M11 17.5l2 1.5v-6.54c0-.214.068-.423.196-.595L19.016 4H4.984l5.82 7.865a.996.996 0 01.196.595v5.04zm3 4.5a.995.995 0 01-.6-.2l-4-3A1 1 0 019 18v-5.21L2.196 3.595A1.001 1.001 0 013 2h18a1 1 0 01.804 1.595L15 12.79V21a1.001 1.001 0 01-1 1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Filtersicon',
  props: {
    title: {
      type: String,
      default: 'Filters icon',
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
