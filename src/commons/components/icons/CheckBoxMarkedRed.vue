<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="circle-marked-red-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" :viewBox="viewBox">
      <path
        d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      ></path>
    </svg>
  </span>
</template>

<script>
import { ThemeColors } from '@COMMONS/definitions/chartConstants';

export default {
  name: 'CircleMarkedRedIcon',
  props: {
    title: {
      type: String,
      default: 'Circle Marked Red icon',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: ThemeColors.Error,
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
