<template functional>
  <span :aria-hidden="props.decorative" :aria-label="props.title" class="payments-icon" role="img" v-on="listeners">
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M13.302 1.746a1 1 0 01-1.942.337l-.007-.024-3.268.94L14 3a2 2 0 011.995 1.85L16 5v9a2 2 0 01-1.85 1.995L14 16H2a1.996 1.996 0 01-1.55-.735 1.897 1.897 0 01-.446-1.126L0 14V5l.001-.066.002-.043.002-.041.001-.022C.071 3.973.608 3.16 1.374 2.86l.157-.053 9.687-2.79c1.146-.33 2.084.562 2.084 1.729zM14 5H2v8.786l.089.022c.131.039.253.104.359.191L14 14V5zm-2 4a1 1 0 110 2 1 1 0 010-2z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'PaymentsIcon',
  props: {
    title: {
      type: String,
      default: 'Payments icon',
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
