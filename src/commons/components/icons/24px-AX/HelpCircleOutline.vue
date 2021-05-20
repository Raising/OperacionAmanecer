<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="help-circle-outline"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm.06 12.97c.54 0 .99.45.99.99s-.45.975-.99.975a.973.973 0 01-.975-.975c0-.54.435-.99.975-.99zM12.315 7c2.1 0 3.285 1.485 3.285 3.015 0 1.125-.58 1.92-1.37 2.497l-.16.113-.69.465c-.465.315-.66.855-.66 1.44l.001.09c0 .031.003.068.007.115l.007.08h-1.32c-.015-.18-.015-.33-.015-.525 0-.924.314-1.639 1.075-2.218l.17-.122.66-.45a1.76 1.76 0 00.795-1.47c0-.885-.585-1.71-1.785-1.71-1.305 0-1.875.975-1.875 1.92 0 .204.029.446.071.62l.034.115-1.455-.18c-.06-.21-.09-.45-.09-.72C9 8.695 10.005 7 12.315 7z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'HelpCircleOutlineIcon',
  props: {
    title: {
      type: String,
      default: 'Help circle outline icon',
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
