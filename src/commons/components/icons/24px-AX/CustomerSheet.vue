<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="customer-sheet-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M10.576 16C12.464 16 14 17.645 14 19.667V21a1 1 0 11-2 0v-1.333c0-.919-.639-1.667-1.424-1.667H5.424C4.64 18 4 18.748 4 19.667V21a1 1 0 11-2 0v-1.333C2 17.645 3.536 16 5.424 16zM8 8.043c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 2c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"
      />
      <path
        d="M16 8V5.414L18.586 8H16zm5.988.939a.998.998 0 00-.053-.265c-.012-.032-.02-.064-.035-.094a.958.958 0 00-.19-.283l-.004-.005-5.998-5.998a.963.963 0 00-.287-.194c-.031-.015-.064-.023-.097-.035a1 1 0 00-.26-.052C15.042 2.011 15.022 2 15 2H8c-1.103 0-2 .897-2 2v1.999a1 1 0 102 0V4h6v5a1 1 0 001 1h5v10h-4.081a1 1 0 100 2H20c1.103 0 2-.897 2-2V9c0-.021-.011-.039-.012-.061z"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CustomerSheeticon',
  props: {
    title: {
      type: String,
      default: 'Customer Sheet icon',
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
