<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="company-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M18.576 17c1.825 0 3.321 1.537 3.42 3.466l.004.201V22a1 1 0 01-1.993.117L20 22v-1.333c0-.868-.57-1.583-1.294-1.66l-.13-.007h-5.152c-.741 0-1.352.667-1.418 1.516l-.006.151V22a1 1 0 01-1.993.117L10 22v-1.333c0-1.955 1.436-3.557 3.237-3.662l.187-.005h5.152zM18 2a2 2 0 011.995 1.85L20 4v2.166a1 1 0 01-1.993.117L18 6.166V4H4v16h2.067a1 1 0 01.117 1.993L6.067 22H4a2 2 0 01-1.995-1.85L2 20V4a2 2 0 011.85-1.995L4 2h14zm-2 7.043c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zM7 14a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm5-2.957c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM7 10a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM7 6a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Companyicon',
  props: {
    title: {
      type: String,
      default: 'Company icon',
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
