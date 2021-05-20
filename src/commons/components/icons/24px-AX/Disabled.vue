<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="disabled-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M4.613 3.21l.094.083 16 16a1 1 0 01-1.32 1.497l-.094-.083-16-16a1 1 0 011.32-1.497zm.233 5.206l1.788.897a6 6 0 007.765 8.189l.277-.13.894 1.789A8 8 0 014.846 8.416zM12 4a8 8 0 017.289 11.302l-.147.305-1.784-.903a6 6 0 00-7.817-8.18l-.284.138-.915-1.778A7.97 7.97 0 0112 4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Disabledicon',
  props: {
    title: {
      type: String,
      default: 'Disabled icon',
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
