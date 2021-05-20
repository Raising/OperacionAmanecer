<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="my-invoices-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M10 7a2 2 0 01-1.995-1.85L8 5V1.999H3v12h4A1.001 1.001 0 017 16H2a1 1 0 01-1-1V1a1 1 0 011-1h8.594a1 1 0 01.71.297l3.407 3.442a1 1 0 01.289.703V7a1 1 0 01-2 0h-3zm2.218 1c1.054 0 1.932.382 2.634 1.145l.148.17-1.088.895-.146-.145c-.444-.412-.949-.617-1.514-.617-.457 0-.845.14-1.167.42a2.35 2.35 0 00-.637.922l-.07.193h2.693v.686h-2.827l-.01.103a2.79 2.79 0 00-.013.228c0 .055.004.131.013.228l.01.103h2.827v.686h-2.693l.07.193c.149.375.361.683.637.923.322.28.71.42 1.167.42.565 0 1.07-.206 1.514-.618l.146-.145 1.088.895-.148.17c-.702.763-1.58 1.145-2.634 1.145-.912 0-1.683-.273-2.31-.818-.566-.49-.95-1.124-1.152-1.901l-.06-.264H8v-.686h.606L8.6 12l.006-.331H8v-.686h.696l.06-.264c.202-.777.586-1.41 1.151-1.901.628-.545 1.399-.818 2.31-.818zm-2.042-6.001H10V5h3v-.147l-2.824-2.854z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MyInvoicesIcon',
  props: {
    title: {
      type: String,
      default: 'My Invoices icon',
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
