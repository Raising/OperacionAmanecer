<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="language-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm1.967 9.001H6.033c.09 1.366.36 2.61.765 3.555C7.217 13.533 7.69 14 8 14c.31 0 .783-.467 1.202-1.444.405-.945.676-2.189.765-3.555zm-5.94 0H2.084a6.004 6.004 0 002.773 4.11c-.454-1.15-.741-2.567-.828-4.11zm9.89 0h-1.945c-.087 1.543-.374 2.96-.828 4.11A6 6 0 0013.917 9zM4.857 2.89l-.124.077A6.003 6.003 0 002.083 7h1.945c.087-1.544.374-2.96.828-4.11zM8 2l-.064.006c-.309.059-.747.526-1.138 1.438-.405.946-.676 2.19-.766 3.556h3.936c-.09-1.367-.36-2.61-.766-3.556C8.783 2.467 8.31 2 8 2zm3.144.889l.073.192c.412 1.114.673 2.46.755 3.919h1.945a6.004 6.004 0 00-2.773-4.111z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'LanguageIcon',
  props: {
    title: {
      type: String,
      default: 'Language icon',
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
