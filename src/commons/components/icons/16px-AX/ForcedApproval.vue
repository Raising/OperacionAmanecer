<template functional>
  <span
    :aria-hidden="props.decorative"
    :aria-label="props.title"
    class="forced-approval-icon"
    role="img"
    v-on="listeners"
  >
    <svg :fill="props.fillColor" class="icon__svg" :width="props.size" :height="props.size" viewBox="0 0 16 16">
      <path
        d="M11.111 0a1 1 0 01.117 1.993L11.11 2H2.556a.556.556 0 00-.549.465L2 2.555v10.89c0 .276.201.505.465.548l.09.007h10.89a.556.556 0 00.548-.465l.007-.09V8a1 1 0 011.993-.117L16 8v5.444a2.556 2.556 0 01-2.388 2.55l-.168.006H2.556a2.556 2.556 0 01-2.55-2.388L0 13.444V2.556A2.556 2.556 0 012.388.006L2.556 0h8.555zm4.582 1.28a1 1 0 01.11 1.317l-.082.096-7.692 8a1 1 0 01-1.347.087l-.095-.087-2.308-2.4a1 1 0 011.35-1.471l.092.085 1.586 1.649 6.972-7.25a1 1 0 011.414-.027z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ForcedApprovalIcon',
  props: {
    title: {
      type: String,
      default: 'Forced Approval icon',
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
