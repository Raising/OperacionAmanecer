<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="user-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M9.833 4.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5m2 0c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5S6.403 8 8.333 8s3.5-1.57 3.5-3.5M13.666 15a1 1 0 01-1-1v-1.333c0-.919-.747-1.667-1.666-1.667H5.666C4.747 11 4 11.748 4 12.667V14a1 1 0 11-2 0v-1.333A3.67 3.67 0 015.666 9H11a3.67 3.67 0 013.666 3.667V14a1 1 0 01-1 1"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'UserIcon',
  props: {
    title: {
      type: String,
      default: 'User icon',
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
