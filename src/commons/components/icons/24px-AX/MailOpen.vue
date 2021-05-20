<template functional>
  <span :aria-hidden="props.decortive" :aria-label="props.title" class="mail-open-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 24 24">
      <path
        d="M16 0a3 3 0 012.995 2.824L19 3v1.319l3.625 2.9.093.085A.999.999 0 0123 8v12a3 3 0 01-2.824 2.995L20 23H4a3 3 0 01-2.995-2.824L1 20V8c0-.293.128-.583.375-.78L5 4.317V3A3 3 0 017.824.005L8 0h8zm5 9.907l-8.431 5.833a1 1 0 01-1.02.07l-.118-.07L3 9.907V20a1 1 0 00.883.993L4 21h16a1 1 0 00.993-.883L21 20V9.907zM16 2H8a1 1 0 00-.993.883L7 3l.002 1.5c.05.178.048.365-.001.54L7 10.244l5 3.459 5-3.46V3a1 1 0 00-.883-.993L16 2zm-4 5a1 1 0 010 2H9a1 1 0 110-2h3zm-7-.12L3.673 7.941 5 8.859V6.88zm14 0v1.978l1.326-.917L19 6.88zM15 4a1 1 0 010 2H9a1 1 0 110-2h6z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MailOpenicon',
  props: {
    title: {
      type: String,
      default: 'Mail Openicon',
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
