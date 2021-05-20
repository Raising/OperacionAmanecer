<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="folder-open-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M5.2 2a1 1 0 01.736.323l.076.093.9 1.25H11.8c1.146 0 2.113.849 2.194 1.959l.006.153V7h.365c1.083 0 1.935.857 1.553 1.91l-.051.127-1.694 3.75C13.842 13.52 12.956 14 12.107 14H1.635C.587 14-.243 13.198.048 12.194a.96.96 0 01-.041-.188L0 11.889V4.11c0-1.132.916-2.03 2.045-2.106L2.2 2h3zm8.488 7H3.893c-.115 0-.263.08-.243.037L2.31 12h9.796c.098 0 .221-.059.242-.048l.001.011L13.688 9zm-9-5H2.2c-.102 0-.169.043-.191.083L2 4.11v3.805C2.41 7.353 3.165 7 3.893 7H12V5.778c0-.035-.047-.085-.13-.104l-.07-.007H6.4a1 1 0 01-.736-.323l-.076-.093L4.688 4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'FolderOpenIcon',
  props: {
    title: {
      type: String,
      default: 'Folder Open icon',
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
