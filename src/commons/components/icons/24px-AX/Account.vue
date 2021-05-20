<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="account-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M16 14c2.757 0 5 2.243 5 5v2a1 1 0 11-2 0v-2c0-1.654-1.346-3-3-3H8c-1.654 0-3 1.346-3 3v2a1 1 0 11-2 0v-2c0-2.757 2.243-5 5-5zM12 2c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Accounticon',
  props: {
    title: {
      type: String,
      default: 'Account icon',
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
