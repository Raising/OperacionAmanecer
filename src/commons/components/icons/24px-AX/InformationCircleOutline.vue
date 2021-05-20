<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="information-circle-outline-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,11 C12.5522847,11 13,11.4477153 13,12 L13,12 L13,16 L12.9932723,16.1166211 C12.9355072,16.6139598 12.5128358,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,16 L11,12 L11.0067277,11.8833789 C11.0644928,11.3860402 11.4871642,11 12,11 Z M12,7 L12.1266211,7.00672773 C12.6239598,7.06449284 13.01,7.48716416 13.01,8 C13.01,8.55228475 12.5622847,9 12.01,9 L12.01,9 L11.8833789,8.99327227 C11.3860402,8.93550716 11,8.51283584 11,8 C11,7.44771525 11.4477153,7 12,7 L12,7 Z"
        id="Combined-Shape"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'InformationCirlceOutlineicon',
  props: {
    title: {
      type: String,
      default: 'Information Circle Outline icon',
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
