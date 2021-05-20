<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="math-between-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M14 1a1 1 0 01.993.883L15 2v12a1 1 0 01-.883.993L14 15h-3.924a1 1 0 01-.117-1.993l.117-.007H13V3h-2.963a1 1 0 01-.993-.883L9.037 2a1 1 0 01.883-.993L10.037 1H14zM6.059 1a1 1 0 01.116 1.993L6.06 3H3v10h2.994a1 1 0 01.993.883l.007.117a1 1 0 01-.883.993L5.994 15H2a1 1 0 01-.993-.883L1 14V2a1 1 0 01.883-.993L2 1h4.059zM8 6a2 2 0 110 4 2 2 0 010-4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MathBetweenIcon',
  props: {
    title: {
      type: String,
      default: 'Math Between icon',
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
