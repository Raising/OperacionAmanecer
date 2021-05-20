<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="coin-ko-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M1.613.21l.094.083 14 14a1 1 0 01-1.32 1.497l-.094-.083-1.388-1.387A8 8 0 011.68 3.095L.293 1.707A1 1 0 011.613.21zM2 8a6 6 0 009.476 4.89l-1.42-1.42-.123.038a4.598 4.598 0 01-1.33.192 3.95 3.95 0 01-1.635-.345 4.018 4.018 0 01-1.332-.96 3.703 3.703 0 01-.739-1.2l-.078-.227H4v-.697h.666l-.016-.102-.011-.108a2.628 2.628 0 010-.416l.011-.102.016-.1H4v-.698h.819l.083-.239.056-.133-1.849-1.85A5.973 5.973 0 002 8zm6-8a8 8 0 017.102 11.686l-1.51-1.509a6 6 0 00-7.77-7.77L4.315.898A7.966 7.966 0 018 0zm-.447 8.968H6.218l.09.187c.128.244.293.46.493.648.25.235.544.417.88.546.336.13.699.194 1.089.194.113 0 .225-.006.337-.02L7.553 8.969zm-.698-.698l-.828-.828h-.074l-.016.107-.013.103a1.773 1.773 0 000 .4l.013.108.016.11h.902zM8.603 4c.457 0 .897.064 1.321.191.34.102.642.237.905.406l.191.132-.522.999-.182-.128a2.9 2.9 0 00-1.546-.444l-.192.007-1.02-1.02.048-.013c.324-.087.657-.13.998-.13z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CoinKoIcon',
  props: {
    title: {
      type: String,
      default: 'Coin Ko icon',
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
