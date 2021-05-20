<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="lock-open-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        style="fill:#3BD4AE;"
        d="M10.59,18.4c-0.192-0.003-0.376-0.074-0.52-0.2l-1.79-1.55c-0.334-0.289-0.37-0.794-0.081-1.128
            c0-0.001,0.001-0.001,0.001-0.002c0.276-0.331,0.768-0.375,1.099-0.098c0.007,0.006,0.014,0.012,0.021,0.018l1.27,1.1L14.68,13
            c0.289-0.327,0.789-0.357,1.115-0.067c0.327,0.289,0.357,0.789,0.067,1.115c-0.053,0.06-0.114,0.111-0.182,0.152l-4.6,4
            C10.944,18.32,10.771,18.39,10.59,18.4z"
      />
      <path
        style="fill:#575756;"
        d="M16.8,7.27V5.12c0.008-1.333-0.488-2.619-1.39-3.6c-1.034-1.145-2.573-1.697-4.1-1.47
            c-2.115,0.471-3.712,2.212-4,4.36H8.9c0.276-1.359,1.306-2.439,2.65-2.78c1.007-0.134,2.015,0.241,2.69,1
            c0.64,0.679,0.998,1.577,1,2.51V7.2H8c-2.595-0.056-4.744,2.003-4.8,4.598c0,0.001,0,0.001,0,0.002v7.6
            c0.055,2.595,2.203,4.655,4.798,4.6C7.999,24,7.999,24,8,24h8c2.595,0.056,4.744-2.003,4.8-4.598c0-0.001,0-0.001,0-0.002v-7.6
            C20.763,9.511,19.067,7.59,16.8,7.27z M19.2,19.4c-0.06,1.71-1.49,3.051-3.2,3H8c-1.71,0.051-3.14-1.29-3.2-3v-7.6
            c0.06-1.71,1.49-3.051,3.2-3h8c1.71-0.051,3.14,1.29,3.2,3V19.4z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'LockOpenicon',
  props: {
    title: {
      type: String,
      default: 'Lock Open icon',
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
