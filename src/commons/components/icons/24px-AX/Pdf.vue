<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="pdf-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M9 8a7 7 0 110 14A7 7 0 019 8zm6-6c.022 0 .042.011.064.013a1 1 0 01.26.052c.033.012.066.02.097.035a.963.963 0 01.287.194l6 6a.969.969 0 01.192.286c.015.03.023.062.035.094.03.086.047.174.053.265.001.022.012.04.012.061v11c0 1.103-.897 2-2 2h-4.081a1 1 0 110-2H20V10h-5a1 1 0 01-1-1V4H8v1.999a1 1 0 11-2 0V4c0-1.103.897-2 2-2zm-6 8a5 5 0 100 10 5 5 0 000-10zm0 1a1 1 0 011 1v3.414l1.121-1.121a1 1 0 011.327-.078l.088.078a1 1 0 01.077 1.327l-.077.087-2.829 2.829a1 1 0 01-1.327.077l-.087-.077-2.829-2.829a1 1 0 011.327-1.492l.088.078L8 15.414V12a1 1 0 011-1zm7-5.586V8h2.586L16 5.414z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Pdficon',
  props: {
    title: {
      type: String,
      default: 'Pdf icon',
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
