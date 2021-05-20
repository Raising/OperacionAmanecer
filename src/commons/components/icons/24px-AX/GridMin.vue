<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="grid-min-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M8.462 2a1 1 0 01.117 1.993L8.462 4H4.098l-.016.034a1.157 1.157 0 00-.076.333L4 4.5v15c0 .183.033.348.082.466l.016.034h15.803l.017-.034c.037-.089.065-.203.076-.333L20 19.5v-15a1.26 1.26 0 00-.082-.466L19.901 4h-4.243a1 1 0 01-.993-.883L14.658 3a1 1 0 01.884-.993L15.658 2H20.1c1.134 0 1.837 1.09 1.896 2.33L22 4.5v15c0 1.252-.654 2.396-1.748 2.493L20.1 22H3.9c-1.134 0-1.837-1.09-1.896-2.33L2 19.5v-15c0-1.252.654-2.396 1.748-2.493L3.9 2h4.562zM12 2c.552 0 1 .64 1 1.429v6.985l1.121-1.121.088-.078a1 1 0 011.327 1.492l-2.829 2.829-.087.077a1 1 0 01-1.327-.077l-2.829-2.829-.077-.087a1 1 0 01.077-1.327l.088-.078a1 1 0 011.327.078L11 10.414V3.429c0-.74.393-1.348.898-1.422z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'GridMinicon',
  props: {
    title: {
      type: String,
      default: 'Grid Min icon',
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
