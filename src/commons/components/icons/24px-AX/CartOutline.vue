<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="cart-outline-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M10 18c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm7 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM5.896 2a1 1 0 01.982.81L7.5 6H21c.297 0 .58.132.768.361a.996.996 0 01.215.821l-1.4 7.551c-.256 1.324-1.386 2.267-2.7 2.267H9.791c-1.265.001-2.369-.92-2.617-2.206L5.072 4H3a1 1 0 110-2zM20 8H8l1.258 6.413c.066.346.35.561.69.587h8.087a.771.771 0 00.776-.639L20 8z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CartOutlineicon',
  props: {
    title: {
      type: String,
      default: 'Cart Outline icon',
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
