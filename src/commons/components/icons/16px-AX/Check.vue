<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="check-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M6 13a.995.995 0 01-.707-.293l-3-3a.999.999 0 111.414-1.414l2.185 2.185L11.2 3.4a1 1 0 011.6 1.2l-6 8c-.174.232-.44.377-.729.398L6 13"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CheckIcon',
  props: {
    title: {
      type: String,
      default: 'Check icon',
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
