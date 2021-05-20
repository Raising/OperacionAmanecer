<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="folder-close-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M5.2 2h-3C1.001 2 0 2.927 0 4.111v7.778C0 13.073 1.001 14 2.2 14h9.6c1.199 0 2.2-.927 2.2-2.111V5.778l-.006-.153c-.081-1.11-1.048-1.958-2.194-1.958l-4.888-.001-.9-1.25A1 1 0 005.2 2zm-3 2h2.488l.9 1.251a1 1 0 00.812.416h5.4c.127 0 .2.067.2.11v6.112c0 .043-.073.111-.2.111H2.2c-.127 0-.2-.068-.2-.111V4.11C2 4.068 2.073 4 2.2 4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'FolderCloseIcon',
  props: {
    title: {
      type: String,
      default: 'Folder Close icon',
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
