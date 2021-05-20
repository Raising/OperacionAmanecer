<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="progress-clock-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M7.232 19.7a1.003 1.003 0 011.333-.473 8.017 8.017 0 001.677.579 1 1 0 11-.439 1.95 10.04 10.04 0 01-2.097-.722 1.002 1.002 0 01-.474-1.333zm8.21-.476a1 1 0 11.861 1.805 9.946 9.946 0 01-2.096.726 1.002 1.002 0 01-.44-1.951 7.909 7.909 0 001.675-.58zM3.49 15.106a1 1 0 011.341.45c.265.53.588 1.033.961 1.49a.997.997 0 01-.143 1.407.997.997 0 01-1.406-.142 9.974 9.974 0 01-1.203-1.864 1 1 0 01.45-1.341zm15.683.44a1 1 0 011.79.892 10.09 10.09 0 01-1.198 1.864 1 1 0 01-1.407.146 1.002 1.002 0 01-.146-1.408c.373-.46.697-.961.96-1.493zM12 8a1 1 0 011 1v3h3a1 1 0 110 2h-4a1 1 0 01-1-1V9a1 1 0 011-1zm0-6c5.514 0 10 4.486 10 10 0 .007-.004.014-.004.021.004 0 .002.138.002.139a1.001 1.001 0 01-1 .979l-.021-.001a1 1 0 01-.979-1.021h.025c-.002-.019-.009-.037-.011-.057l-.013-.001.013-.001c-.001-.02-.012-.037-.012-.058 0-4.411-3.589-8-8-8a7.978 7.978 0 00-6.917 4H7a1 1 0 110 2H3a1 1 0 01-1-1V5a1 1 0 112 0v1.036C5.859 3.54 8.789 2 12 2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ProgressClockicon',
  props: {
    title: {
      type: String,
      default: 'Progress Clock icon',
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
