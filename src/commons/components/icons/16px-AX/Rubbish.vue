<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="rubbish-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M9.5 0a2.5 2.5 0 012.495 2.336L12 2.5v1h2a1 1 0 01.117 1.993L14 5.5v8.125c0 1.265-1.006 2.287-2.263 2.37L11.57 16H4.43c-1.278 0-2.337-.969-2.423-2.211L2 13.625V5.5a1 1 0 01-.117-1.993L2 3.5h2v-1A2.5 2.5 0 016.336.005L6.5 0h3zM12 5.5H4v8.125c0 .174.14.33.34.367l.089.008h7.142c.215 0 .382-.135.42-.302l.009-.073V5.5zM6.5 7a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5zm0-5h-3a.5.5 0 00-.492.41L6 2.5v1h4v-1a.5.5 0 00-.41-.492L9.5 2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'RubbishIcon',
  props: {
    title: {
      type: String,
      default: 'Rubbish icon',
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
