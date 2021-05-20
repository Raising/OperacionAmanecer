<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="counter-offer-aproved-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M15 8a1 1 0 01.993.883L16 9v1.333c0 1.998-1.757 3.566-3.902 3.662l-.21.005H3.416l.292.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-2-2-.073-.082a1.005 1.005 0 01-.007-.008l.08.09A1.008 1.008 0 010 13.02v-.037c0-.024.002-.048.004-.071L0 13a1.008 1.008 0 01.21-.613c.028-.035.054-.066.083-.094l2-2a1 1 0 011.497 1.32l-.083.094-.293.293h8.475c1.14 0 2.023-.71 2.105-1.541l.006-.126V9a1 1 0 011-1zM13.613.21l.094.083 2 2c.029.028.055.059.08.09l-.08-.09a1.008 1.008 0 01.292.675L16 3v.033l-.004.052L16 3a1.008 1.008 0 01-.22.625l-.073.082-2 2a1 1 0 01-1.497-1.32l.083-.094.291-.293H4.111c-1.14 0-2.023.71-2.105 1.541L2 5.667V7a1 1 0 01-1.993.117L0 7V5.667C0 3.669 1.757 2.1 3.902 2.005L4.112 2h8.473l-.292-.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CounterOfferAproveddIcon',
  props: {
    title: {
      type: String,
      default: 'Counter Offer Aproved icon',
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
