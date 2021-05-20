<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="magnify -icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M6.5 0a6.5 6.5 0 015.25 10.334l3.957 3.959a1 1 0 01-1.32 1.497l-.094-.083-3.96-3.957A6.5 6.5 0 116.5 0zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MagnifyIcon',
  props: {
    title: {
      type: String,
      default: 'Magnify icon',
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
