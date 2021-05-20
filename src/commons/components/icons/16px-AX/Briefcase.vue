<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="briefcase-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M12 14V5h2l.001 9H12zm-6 0h4V5H6v9zm-4 0h2V5H2v9zM6 3h4V2H6v1zm8 0h-2V1a1 1 0 00-1-1H5a1 1 0 00-1 1v2H2C.897 3 0 3.897 0 5v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'BriefcaseIcon',
  props: {
    title: {
      type: String,
      default: 'Briefcase icon',
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
