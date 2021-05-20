<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="target-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12 1c6.075 0 11 4.925 11 11 0 1.83-.447 3.556-1.238 5.075a.498.498 0 01-.172.917L21.5 18h-2.085l.507.507L20 18.5h3a.5.5 0 01.09.992L23 19.5h-2.085l1.792 1.793a1 1 0 01-1.32 1.497l-.094-.083-1.793-1.792V23a.5.5 0 01-.992.09L18.5 23v-3l.007-.078-.507-.507V21.5a.5.5 0 01-.926.262l.289-.155A10.95 10.95 0 0112 23C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 2a9 9 0 103.88 17.123L17 21.244V18.5l.007-.078-3.714-3.714a3 3 0 111.415-1.415l3.714 3.714L18.5 17h2.744l-1.121-1.12A9 9 0 0012 3zm0 2a7 7 0 016.595 9.352l-1.645-1.645a5 5 0 10-4.244 4.244l1.646 1.644A7 7 0 1112 5z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Targeticon',
  props: {
    title: {
      type: String,
      default: 'Target icon',
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
