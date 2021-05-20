<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="coin-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm.604 2c.456 0 .896.064 1.32.191.425.128.79.307 1.096.538l-.522.999-.182-.128a2.9 2.9 0 00-1.546-.444c-.384 0-.742.066-1.075.198a2.742 2.742 0 00-.878.554c-.252.237-.45.516-.594.837h3.384v.697H5.953l-.016.107-.013.103a1.773 1.773 0 000 .4c.007.07.017.143.029.219h3.654v.697H6.219l.089.187c.128.244.293.46.493.648.25.235.544.417.88.546.336.13.699.194 1.089.194.318 0 .629-.05.931-.15.303-.101.57-.24.801-.417l.522.999-.189.13a3.61 3.61 0 01-.902.403 4.598 4.598 0 01-1.33.192 3.95 3.95 0 01-1.635-.345 4.018 4.018 0 01-1.332-.96 3.721 3.721 0 01-.817-1.427H4v-.697h.666l-.016-.102-.011-.108a2.628 2.628 0 010-.416c.006-.069.015-.136.027-.202H4v-.698h.819l.083-.239c.12-.312.28-.603.48-.87.248-.335.541-.623.877-.867a4.118 4.118 0 011.105-.567c.4-.135.814-.202 1.24-.202z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CoinIcon',
  props: {
    title: {
      type: String,
      default: 'Coin icon',
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
