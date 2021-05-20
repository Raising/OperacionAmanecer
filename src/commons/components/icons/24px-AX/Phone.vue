<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="phone-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M7.514 2H4.808a2.813 2.813 0 00-2.073.914 2.804 2.804 0 00-.724 2.145 18.867 18.867 0 002.936 8.286 18.62 18.62 0 005.733 5.72 18.923 18.923 0 008.239 2.922 2.805 2.805 0 003.08-2.805v-2.706c.036-1.4-1.004-2.624-2.417-2.823-.803-.106-1.583-.3-2.333-.58l-.182-.06a2.812 2.812 0 00-2.78.692l-.598.597-.084-.052a13.466 13.466 0 01-3.88-3.873l-.052-.081.593-.59c.73-.738.992-1.806.699-2.784l-.062-.183a10.574 10.574 0 01-.578-2.316A2.812 2.812 0 007.514 2zM4.809 4h2.724a.81.81 0 01.81.694c.124.933.355 1.858.687 2.748a.805.805 0 01-.18.852L7.703 9.437a1 1 0 00-.162 1.203 15.466 15.466 0 005.805 5.794 1 1 0 001.2-.162l1.15-1.147a.81.81 0 01.851-.178c.894.333 1.82.563 2.764.687a.805.805 0 01.688.818v2.734a.807.807 0 01-.884.81 16.917 16.917 0 01-7.357-2.616 16.642 16.642 0 01-5.13-5.117 16.862 16.862 0 01-2.627-7.4A.813.813 0 014.81 4z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Phoneicon',
  props: {
    title: {
      type: String,
      default: 'Phone icon',
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
