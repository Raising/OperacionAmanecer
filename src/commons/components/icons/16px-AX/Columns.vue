<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="columns-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M14 0a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM2 5.999V14h5V5.999H2zM9 6v8h5V6H9zm5-4H9v2h5V2zM7 2H2v1.999h5V2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ColumnsIcon',
  props: {
    title: {
      type: String,
      default: 'Columns icon',
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
