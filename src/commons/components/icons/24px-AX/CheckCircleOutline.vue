<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="check-circle-outline-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M17.6462314,7.24290454 C18.0681779,7.60781229 18.1202948,8.25098769 17.7614899,8.67909176 L11.2740804,16.6401887 C11.0926735,16.8572986 10.8300845,16.9877685 10.5504573,16.9989807 L10.5103673,17 L10.5103673,17 C10.2447716,17 9.98919828,16.892974 9.80177787,16.7013464 L6.29390928,13.1338125 C5.90203024,12.735268 5.90203024,12.0910733 6.29390928,11.6925288 C6.68578831,11.2939843 7.31920915,11.2939843 7.71108819,11.6925288 L10.4502324,14.4782632 L16.2340637,7.36012351 C16.5928686,6.92998085 17.2272917,6.87799678 17.6462314,7.24290454 Z"
        id="Combined-Shape"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CheckCircleOutlineicon',
  props: {
    title: {
      type: String,
      default: 'Check Circle Outline icon',
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
