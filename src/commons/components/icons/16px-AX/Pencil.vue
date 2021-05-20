<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="pencil-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M11.01 1.718L2.157 10.57a1.167 1.167 0 00-.3.518l-.984 3.606c-.237.87.562 1.67 1.433 1.433l3.606-.984c.196-.053.374-.157.518-.3l8.85-8.851a3.021 3.021 0 10-4.272-4.273zm2.314 1.472a.688.688 0 01.486.486l.02.103a.688.688 0 01-.198.562l-8.634 8.632-1.336.364.364-1.336 8.633-8.633a.688.688 0 01.562-.197l.103.02z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'PencilIcon',
  props: {
    title: {
      type: String,
      default: 'Pencil icon',
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
