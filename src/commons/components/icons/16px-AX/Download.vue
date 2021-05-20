<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="download-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M15 9a1 1 0 01.993.883L16 10v5a1 1 0 01-.883.993L15 16H1a1 1 0 01-.993-.883L0 15v-5a1 1 0 011.993-.117L2 10v4h12v-4a1 1 0 01.883-.993L15 9zM8 0a1 1 0 01.993.883L9 1v6.828l2.536-2.535a1 1 0 011.327-.078l.087.078a1 1 0 01.077 1.327l-.077.087-4.243 4.243a1 1 0 01-1.327.077l-.087-.077L3.05 6.707a1 1 0 011.327-1.492l.087.078L7 7.828V1a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'DownloadIcon',
  props: {
    title: {
      type: String,
      default: 'Download icon',
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
