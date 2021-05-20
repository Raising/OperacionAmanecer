<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="grid-max-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M8.462 9a1 1 0 01.117 1.993L8.462 11H4v9h16v-9h-4.342a1 1 0 01-.993-.883L14.658 10a1 1 0 01.884-.993L15.658 9H20.1c1.003 0 1.819.782 1.894 1.767l.006.15v9.166a1.91 1.91 0 01-1.751 1.911L20.1 22H3.9a1.907 1.907 0 01-1.894-1.767L2 20.083v-9.166a1.91 1.91 0 011.751-1.911L3.9 9h4.562zm4.158.387l.087.077 2.829 2.829a1 1 0 01-1.327 1.492l-.088-.078L13 12.585V16a1 1 0 01-2 0v-3.415l-1.121 1.122a1 1 0 01-1.327.078l-.088-.078a1 1 0 01-.077-1.327l.077-.087 2.829-2.829a1 1 0 011.327-.077zM7 2a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h4zm14 0a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V3a1 1 0 011-1h4zm-7 0a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V3a1 1 0 011-1h4zM6 4H4v2h2V4zm14 0h-2v2h2V4zm-7 0h-2v2h2V4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'GridMaxicon',
  props: {
    title: {
      type: String,
      default: 'Grid Max icon',
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
