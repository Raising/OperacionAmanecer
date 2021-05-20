<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="clock-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 1.5a1 1 0 01.993.883L9 4.5v2.585l1.828 1.83a1 1 0 01-1.32 1.497l-.094-.084-2.121-2.12-.073-.083-.024-.03a1.03 1.03 0 01-.05-.074l-.021-.037c-.011-.02-.022-.04-.031-.06L7.07 7.87a.988.988 0 01-.064-.254l-.003-.028A1.006 1.006 0 017 7.52V4.5a1 1 0 011-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ClockIcon',
  props: {
    title: {
      type: String,
      default: 'Clock icon',
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
