<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="mail-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M20 3c1.652 0 3 1.348 3 3v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6c0-1.652 1.348-3 3-3zm1 4.92l-8.427 5.9a1 1 0 01-1.028.07l-.118-.07L3 7.92V18c0 .509.39.935.884.993L4 19h16c.548 0 1-.452 1-1V7.92zM20 5H4c-.388 0-.728.227-.893.554L12 11.779l8.893-6.225A1.006 1.006 0 0020 5z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Mailicon',
  props: {
    title: {
      type: String,
      default: 'Mail icon',
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
