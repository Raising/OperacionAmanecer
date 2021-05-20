<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="alert-circle-outline-icon flex-complete-center"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12.01,15 C12.5622847,15 13.01,15.4477153 13.01,16 C13.01,16.5128358 12.6239598,16.9355072 12.1266211,16.9932723 L12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4871642 11.3860402,15.0644928 11.8833789,15.0067277 L12.01,15 Z M12,7 C12.5128358,7 12.9355072,7.38604019 12.9932723,7.88337887 L13,8 L13,12 C13,12.5522847 12.5522847,13 12,13 C11.4871642,13 11.0644928,12.6139598 11.0067277,12.1166211 L11,12 L11,8 C11,7.44771525 11.4477153,7 12,7 Z"
        id="Combined-Shape"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'AlertCircleOutlineIcon',
  props: {
    title: {
      type: String,
      default: 'Alert Circle Outline icon',
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
