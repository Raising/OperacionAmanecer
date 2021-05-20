<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    :class="[data.class, data.staticClass]"
    class="chevron-up-icon rotate90"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M15 19a.997.997 0 01-.707-.293l-6-6a.999.999 0 010-1.414l6-6a.999.999 0 111.414 1.414L10.414 12l5.293 5.293A.999.999 0 0115 19"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronUpIcon',
  props: {
    title: {
      type: String,
      default: 'Chevron Up icon',
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
  },
};
</script>
