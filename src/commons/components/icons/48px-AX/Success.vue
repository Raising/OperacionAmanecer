<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="success-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 88 88">
      <path
        d="M44,2 C20.8040405,2 2,20.8040405 2,44 C2,67.1959595 20.8040405,86 44,86 C67.1959595,86 86,67.1959595 86,44 C86,20.8040405 67.1959595,2 44,2 Z M44,6 C64.9868205,6 82,23.0131795 82,44 C82,64.9868205 64.9868205,82 44,82 C23.0131795,82 6,64.9868205 6,44 C6,23.0131795 23.0131795,6 44,6 Z"
        id="Oval"
      ></path>
      <path
        d="M64.4736961,26.5857864 C65.2547447,25.8047379 66.5210746,25.8047379 67.3021232,26.5857864 C68.042064,27.3257272 68.0810082,28.5012114 67.4189559,29.2869988 L67.3021232,29.4142136 L34.8581684,61.8581684 C34.14174,62.5745968 33.0119794,62.6366746 32.2240489,62.028968 L32.0887045,61.9147697 L20.7541751,51.4708149 C19.9418664,50.7223308 19.8901264,49.4570583 20.6386105,48.6447497 C21.3477007,47.8751941 22.520612,47.7882541 23.3327936,48.4176477 L23.4646757,48.5291851 L33.386,57.672 L64.4736961,26.5857864 Z"
        id="Path-2"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Successicon',
  props: {
    title: {
      type: String,
      default: 'Success icon',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: '#1eb53a',
    },
    size: {
      type: Number,
      default: 88,
    },
    viewBox: {
      type: String,
      default: '0 0 88 88',
    },
  },
};
</script>
