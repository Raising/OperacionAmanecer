<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="power-off-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M15.134 5.57a1 1 0 011.366-.366A9.029 9.029 0 0121 13c0 4.962-4.037 9-9 9s-9-4.038-9-9a9.029 9.029 0 014.5-7.796 1.001 1.001 0 011 1.732A7.021 7.021 0 005 13c0 3.86 3.141 7 7 7s7-3.14 7-7a7.021 7.021 0 00-3.5-6.064.999.999 0 01-.366-1.366zM12 3a1 1 0 011 1v10a1 1 0 11-2 0V4a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'PowerOfficon',
  props: {
    title: {
      type: String,
      default: 'Power Off icon',
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
