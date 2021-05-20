<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="size-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M10.707 13.293a1 1 0 01.083 1.32l-.083.094L5.414 20H9a1 1 0 01.993.883L10 21a1 1 0 01-.883.993L9 22H2.968l-.054-.004L3 22a1.008 1.008 0 01-.617-.213 1.008 1.008 0 01-.17-.17l.08.09a1.008 1.008 0 01-.286-.59l-.003-.028A1.006 1.006 0 012 21.02V15a1 1 0 011.993-.117L4 15v3.584l5.293-5.291a1 1 0 011.414 0zM21 2h.02c.023 0 .046.002.07.004L21 2a1.008 1.008 0 01.617.213c.063.05.12.107.17.17l-.08-.09a1.008 1.008 0 01.286.59l.003.03.003.055L22 3v6a1 1 0 01-1.993.117L20 9V5.414l-5.293 5.293a1 1 0 01-1.497-1.32l.083-.094L18.584 4H15a1 1 0 01-.993-.883L14 3a1 1 0 01.883-.993L15 2h6z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Sizeicon',
  props: {
    title: {
      type: String,
      default: 'Size icon',
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
