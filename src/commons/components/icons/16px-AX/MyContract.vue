<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="my-contract-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M10.594 0a1 1 0 01.71.297l3.407 3.442a1 1 0 01.289.703V15a1 1 0 01-1 1H2a1 1 0 01-1-1V1a1 1 0 011-1h8.594zM8 1.999H3v12h10V7h-3a2 2 0 01-1.995-1.85L8 5V1.999zM10 11c.573 0 1 .448 1 1 0 .476-.318.875-.869.98L10 13H5c-.573 0-1-.448-1-1 0-.476.318-.875.869-.98L5 11h5zm0-3c.573 0 1 .448 1 1 0 .476-.318.875-.869.98L10 10H5c-.573 0-1-.448-1-1 0-.476.318-.875.869-.98L5 8h5zM6 5a1 1 0 011 1c0 .476-.333.875-.872.98L6 7H5a1 1 0 01-1-1c0-.476.333-.875.872-.98L5 5h1zm4.176-3.001H10V5h3v-.147l-2.824-2.854z"
        fill-rule="nonzero"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MyContractIcon',
  props: {
    title: {
      type: String,
      default: 'My Contract icon',
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
