<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="thumb-down-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13.4 0c1.336 0 2.503.886 2.594 2.117l.006.156v4.455c0 1.259-1.113 2.195-2.434 2.268L13.4 9h-1.447l-.035.097-2.725 6.3a1 1 0 01-.917.603c-1.687 0-3.044-1.394-3.044-3.1v-1.799H2.39a2.343 2.343 0 01-1.69-.695l-.128-.141a2.428 2.428 0 01-.545-1.922l.94-6.299C1.14.864 2.144-.013 3.317 0H13.4zM12 2v5h1.4c.333 0 .548-.141.592-.238L14 6.728V2.273c0-.083-.178-.234-.48-.266L13.4 2H12zM7.699 13.815l2.3-5.319V2H3.307a.366.366 0 00-.341.256l-.02.082-.94 6.298a.427.427 0 00.093.337c.07.083.168.129.28.127h3.854a1 1 0 011 1v2.8c0 .368.17.69.43.89l.037.025z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ThumbdownIcon',
  props: {
    title: {
      type: String,
      default: 'Thumb down icon',
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
