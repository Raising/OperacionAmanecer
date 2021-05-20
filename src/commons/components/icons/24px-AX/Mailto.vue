<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="mailto-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M10.576 16c1.825 0 3.321 1.537 3.42 3.466l.004.201V21a1 1 0 01-1.993.117L12 21v-1.333c0-.868-.57-1.583-1.294-1.66l-.13-.007H5.424c-.741 0-1.352.667-1.418 1.516L4 19.667V21a1 1 0 01-1.993.117L2 21v-1.333c0-1.955 1.436-3.557 3.237-3.662L5.424 16h5.152zm9.53-16c1.553 0 2.802 1.26 2.89 2.825L23 3v10c0 1.586-1.194 2.903-2.723 2.995l-.172.005H13.17a1 1 0 01-.117-1.993L13.17 14h6.936c.448 0 .836-.376.889-.881L21 13V3.283l-6.873 5.539a1 1 0 01-1.093.106l-.113-.07L5 3.227v4.418a1 1 0 01-1.993.116L3 7.645V3C3 1.414 4.194.097 5.723.005L5.895 0h14.21zM8 8.043c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 2c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM19.405 2H6.727l6.735 4.788L19.405 2z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Mailtoicon',
  props: {
    title: {
      type: String,
      default: 'Mailto icon',
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
