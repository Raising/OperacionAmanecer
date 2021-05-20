<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="rejected-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zm-1 2H2v12h12V2zM6.113 4.71l.094.083L8 6.585l1.793-1.792.094-.083a1 1 0 011.403 1.403l-.083.094L9.415 8l1.792 1.793a1 1 0 01-1.32 1.497l-.094-.083L8 9.415l-1.793 1.792-.094.083A1 1 0 014.71 9.887l.083-.094L6.585 8 4.793 6.207a1 1 0 011.32-1.497z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'RejectedIcon',
  props: {
    title: {
      type: String,
      default: 'Rejected icon',
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
