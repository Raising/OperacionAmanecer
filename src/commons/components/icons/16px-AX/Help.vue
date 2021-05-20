<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="help-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 0c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 2C4.691 2 2 4.691 2 8s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm.007 8.333a1 1 0 110 2 1.003 1.003 0 01-1.004-1c0-.552.444-1 .997-1zm-2.89-4.665a3.006 3.006 0 013.825-1.835 3.002 3.002 0 012.004 2.835c0 1.996-2.409 2.856-2.684 2.948a1 1 0 01-.632-1.898c.547-.188 1.316-.678 1.316-1.051a1 1 0 00-.668-.946 1.003 1.003 0 00-1.275.611 1 1 0 11-1.887-.665z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'HelpIcon',
  props: {
    title: {
      type: String,
      default: 'Help icon',
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
