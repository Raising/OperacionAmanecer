<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="notifcations-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M9.015 13l-.01-.002-.01.002h-5.88c.622-1.126 1.192-2.853 1.22-5.411C4.352 5.89 5.54 4.417 7.16 4.086c1.184-.242 2.376.035 3.267.761.792.647 1.247 1.577 1.247 2.553 0 2.662.584 4.446 1.221 5.6h-3.88zm6.543.165c-.076-.054-1.883-1.347-1.883-5.765 0-1.579-.722-3.074-1.982-4.102a5.752 5.752 0 00-2.705-1.209c.002-.03.017-.057.017-.089V1a1 1 0 00-2.001 0v1c0 .031.015.057.018.087-.087.015-.175.022-.262.039-2.537.519-4.398 2.807-4.427 5.441-.045 4.285-1.806 5.546-1.865 5.586A1.001 1.001 0 001 15h5.282c.348.595.986 1 1.723 1 .737 0 1.374-.405 1.723-1h5.28a.996.996 0 00.948-.709 1.014 1.014 0 00-.398-1.126z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'NotificationsIcon',
  props: {
    title: {
      type: String,
      default: 'Notifications icon',
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
