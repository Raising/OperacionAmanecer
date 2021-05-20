<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="download-document-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M10.594 0a1 1 0 01.71.297l3.407 3.442a1 1 0 01.289.703V7a1 1 0 01-1.993.117L13 7h-3a2 2 0 01-1.995-1.85L8 5V1.999H3v12h4a1.001 1.001 0 01.117 1.994L7 16H2a1 1 0 01-1-1V1a1 1 0 011-1h8.594zM12 8c.476 0 .875.333.98.872L13 9v3.414l1.121-1.121a1 1 0 011.327-.078l.088.078a1 1 0 01.077 1.327l-.077.087-2.829 2.829a1 1 0 01-1.327.077l-.087-.077-2.829-2.829a1 1 0 011.327-1.492l.088.078L11 12.414V9a1 1 0 011-1zm-1.824-6.001H10V5h3v-.147l-2.824-2.854z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'DownloadDocumentIcon',
  props: {
    title: {
      type: String,
      default: 'Download Document icon',
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
