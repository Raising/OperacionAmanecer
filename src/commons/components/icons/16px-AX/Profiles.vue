<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="profiles-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M9 9a3.67 3.67 0 013.666 3.667V14a1 1 0 11-2 0v-1.333C10.666 11.748 9.919 11 9 11H3.666C2.747 11 2 11.748 2 12.667V14a1 1 0 11-2 0v-1.333A3.67 3.67 0 013.666 9H9zm4 0a3 3 0 012.995 2.824L16 12v2a1 1 0 01-1.993.117L14 14v-2a1 1 0 00-.883-.993L13 11a1 1 0 010-2zM6.333 1c1.93 0 3.5 1.57 3.5 3.5S8.263 8 6.333 8s-3.5-1.57-3.5-3.5S4.403 1 6.333 1zM10.5 1a3.5 3.5 0 010 7 1 1 0 01-.117-1.993L10.5 6a1.5 1.5 0 00.144-2.993L10.5 3a1 1 0 110-2zM6.333 3c-.827 0-1.5.673-1.5 1.5S5.506 6 6.333 6s1.5-.673 1.5-1.5S7.16 3 6.333 3z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ProfilesIcon',
  props: {
    title: {
      type: String,
      default: 'Profiles icon',
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
