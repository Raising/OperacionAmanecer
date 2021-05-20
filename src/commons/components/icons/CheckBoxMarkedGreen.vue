<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="checkbox-marked-green-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
      ></path>
    </svg>
  </span>
</template>

<script>
import { ThemeColors } from '@COMMONS/definitions/chartConstants';

export default {
  name: 'CheckboxMarkedGreenicon',
  props: {
    title: {
      type: String,
      default: 'Checkbox Marked Green icon',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: ThemeColors.Success,
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
