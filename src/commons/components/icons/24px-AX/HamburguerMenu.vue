<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="hamburguer-menu-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M19 16a1 1 0 010 2H5a1 1 0 010-2h14zm-6-5a1 1 0 010 2H5a1 1 0 010-2h8zm6-5a1 1 0 010 2H5a1 1 0 110-2h14z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'HamburguerMenuicon',
  props: {
    title: {
      type: String,
      default: 'Hamburguer Menu icon',
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
