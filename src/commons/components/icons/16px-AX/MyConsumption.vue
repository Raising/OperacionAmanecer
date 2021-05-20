<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="my-consumption-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M15 15a1 1 0 01-1 1H2a1 1 0 01-1-1V1a1 1 0 011-1h8.594a1 1 0 01.71.297l3.407 3.442a1 1 0 01.289.703V15zM8 1.999H3v12h10V7h-3a2 2 0 01-1.995-1.85L8 5V1.999zm5 2.854l-2.824-2.854H10V5h3v-.147z"
        fill-rule="nonzero"
      />
      <path
        d="M7.5 7a.5.5 0 01.5.5v5a.5.5 0 11-1 0v-5a.5.5 0 01.5-.5zm-2 3a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5zm4-1a.5.5 0 01.5.5v3a.5.5 0 11-1 0v-3a.5.5 0 01.5-.5z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MyConsumptionIcon',
  props: {
    title: {
      type: String,
      default: 'My Consumption icon',
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
