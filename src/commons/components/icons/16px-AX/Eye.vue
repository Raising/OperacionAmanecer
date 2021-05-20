<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="eye-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 2c4.151 0 7.564 5.51 7.961 5.975l.023.025c-.266.243-3.6 5.763-7.72 5.993L8 14c-4.418 0-8-6-8-6l.109-.175C.739 6.838 4.033 2 8 2zm0 2c-1.274 0-2.749.867-4.218 2.389-.449.465-.869.962-1.25 1.464L2.421 8l.11.147c.286.377.594.75.919 1.11l.331.354c1.392 1.442 2.789 2.296 3.968 2.382l.194.008.209-.005c1.193-.067 2.575-.921 3.978-2.385.261-.271.593-.663.93-1.076L13.489 8l-.094-.119a26.793 26.793 0 00-1.166-1.388l-.098-.104C10.664 4.858 9.227 4 8 4zm0 2a2 2 0 110 4 2 2 0 010-4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'EyeIcon',
  props: {
    title: {
      type: String,
      default: 'Eye icon',
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
