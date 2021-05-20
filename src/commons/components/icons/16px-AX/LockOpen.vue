<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="lock-open-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        style="fill:#575756;"
        d="M11.2,4.84V3.41c0.007-0.892-0.326-1.754-0.93-2.41C9.584,0.231,8.56-0.144,7.54,0
            C5.912,0.37,4.768,1.831,4.8,3.5v1.34c-1.499,0.222-2.623,1.486-2.67,3v5.06c0.027,1.739,1.46,3.127,3.199,3.1c0,0,0.001,0,0.001,0
            h5.34c1.728,0.028,3.156-1.342,3.2-3.07V7.87C13.838,6.344,12.71,5.064,11.2,4.84z M7.7,1.09c0.668-0.1,1.341,0.145,1.79,0.65
            c0.419,0.455,0.648,1.052,0.64,1.67V4.8H5.87V3.5C5.859,2.373,6.612,1.382,7.7,1.09z M12.8,12.93c-0.038,1.139-0.99,2.034-2.13,2
            H5.33c-1.14,0.034-2.092-0.861-2.13-2V7.87c0.038-1.139,0.99-2.034,2.13-2h5.34c1.14-0.034,2.092,0.861,2.13,2L12.8,12.93z"
      />
      <path
        style="fill:#3BD4AE;"
        d="M7.06,12.27c-0.128-0.004-0.251-0.049-0.35-0.13l-1.19-1c-0.224-0.189-0.252-0.523-0.063-0.747
            c0.001-0.001,0.002-0.002,0.003-0.003c0.194-0.226,0.533-0.253,0.76-0.06l0.84,0.74l2.72-2.41c0.227-0.193,0.566-0.166,0.76,0.06
            c0.191,0.222,0.165,0.557-0.057,0.747c-0.001,0.001-0.002,0.002-0.003,0.003l-3.07,2.67C7.312,12.222,7.188,12.268,7.06,12.27z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'LockOpenIcon',
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
      default: 16,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
