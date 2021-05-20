<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="table-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M20 19a1 1 0 01-1 1h-9v-3h10v2zM5 20a1 1 0 01-1-1v-2h4v3H5zm5-5h10v-3H10v3zm-6 0h4v-3H4v3zm6-5h10V7H10v3zM4.5 7H8v3H4V6.907c.157.057.324.093.5.093zM19 2H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Tableicon',
  props: {
    title: {
      type: String,
      default: 'Table icon',
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
