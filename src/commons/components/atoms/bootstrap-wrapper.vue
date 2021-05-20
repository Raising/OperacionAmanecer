<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

interface TreeSelectOptions {
  id: string;
  label: string;
  children?: Array<TreeSelectOptions>;
}

interface IncomingTreeSelectOptions {
  value: string;
  text: string;
  children?: Array<IncomingTreeSelectOptions>;
}

let reasignTreeSelectOptions = (options: Array<IncomingTreeSelectOptions>): Array<TreeSelectOptions> => {
  return options.map((el: IncomingTreeSelectOptions) => {
    let options: TreeSelectOptions = {
      id: el.value,
      label: el.text,
    };
    if (el.children && el.children.length > 0) {
      options.children = reasignTreeSelectOptions(el.children);
    }
    return options;
  });
};

const vModelReferenceProperty: { [prop: string]: any } = {
  default: (instance: any, currentValue: any) => {
    return { value: currentValue, isValid: currentValue === undefined ? undefined : instance.$attrs.value.validate() };
  },

  'b-form-checkbox': (instance: any, currentValue: any) => ({
    value: true,
    checked: currentValue,
    isValid: currentValue === undefined ? undefined : instance.$attrs.value.validate(),
  }),
  'b-form-checkbox-group': (instance: any, currentValue: any) => ({
    value: true,
    checked: currentValue,
    isValid: currentValue === undefined ? undefined : instance.$attrs.value.validate(),
  }),
  'b-form-radio': (instance: any, currentValue: any) => ({
    value: instance.$attrs.option,
    checked: currentValue,
    isValid: currentValue === undefined ? undefined : instance.$attrs.value.validate(),
  }),
  'b-form-radio-group': (instance: any, currentValue: any) => ({
    //value:  instance.$attrs.option,
    checked: currentValue,
    isValid: currentValue === undefined ? undefined : instance.$attrs.value.validate(),
  }),
  // 'treeselect': (instance: any, currentValue: any) => ({
  //   options: reasignTreeSelectOptions(instance.$attrs.options),
  // }),
  'b-collapse': (instance: any, currentValue: any) => ({ value: true, visible: currentValue }),
};

export default Factory.component('bootstrap-wrapper', {
  render: function(this: { component: string; [name: string]: any }, createElement: any) {
    this.redefineProperties();

    let vmodelIsGetterSeter =
      typeof this.$attrs.value === 'object' && this.$attrs.value && typeof this.$attrs.value.get === 'function';

    let currentValue = this.$attrs.value;

    if (vmodelIsGetterSeter) {
      currentValue = this.valueFormat ? this.valueFormat(this.$attrs.value.get()) : this.$attrs.value.get();
    }

    return createElement(
      this.component,
      {
        class: vmodelIsGetterSeter
          ? {
              'is-invalid': currentValue !== undefined && !this.$attrs.value.validate(),
              'is-valid':
                currentValue !== undefined &&
                this.$attrs.value.validate() &&
                this.$attrs.value.config.validation !== undefined,
            }
          : {},
        domProps: {},
        props: {
          ...(this.defaultProps || {}),
          ...this.$props,
          ...(this.$attrs.resource !== undefined
            ? {
                options: this.$attrs.resource.asEnum(this.optionsEnumMap || {}),
                busy: this.$attrs.resource.isLoading(), // Para el grid
                rows: this.$attrs.resource.isReady() // ax-table-tree
                  ? this.$attrs.resource.content('rows') || this.$attrs.resource.content()
                  : [],
                columns: this.$attrs.resource.isReady() // ax-table-tree
                  ? this.$attrs.resource.content('columns') || this.$attrs.resource.content()
                  : [],
                items: this.$attrs.resource.isReady()
                  ? this.$attrs.resource.content('items') ||
                    this.$attrs.resource.content('Result') ||
                    this.$attrs.resource.content()
                  : [], // para grid
              }
            : {}),
        },
        attrs: {
          ...(this.defaultAttrs || {}),
          ...this.$attrs,
          ...(this.overrideAttrs || {}),
          ...(vmodelIsGetterSeter
            ? vModelReferenceProperty[this.component] !== undefined
              ? vModelReferenceProperty[this.component](this, currentValue) //@ts-ignore
              : vModelReferenceProperty['default'](this, currentValue)
            : {}),
        },
        on: {
          ...this.$listeners,
          ...(vmodelIsGetterSeter
            ? {
                input: this.valueUnFormat
                  ? (value: any) => this.$attrs.value.set(this.valueUnFormat(value))
                  : (value: any) => this.$attrs.value.set(value),
              }
            : {}),
          ...(typeof this.overrideListeners === 'function'
            ? this.overrideListeners({ context: this, vmodelIsGetterSeter })
            : {}),
        },
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default,
    );
  },
  data() {
    return {};
  },
  watch: {},
  //Para pasar props no declaradas en el wrapper como atributos al componente hijo
  inheritAttrs: false,
  mounted: function() {},
  methods: {
    redefineProperties: function() {
      /**  Used to inject properties modifications by compents that inherit this one */
    },
  },
});
</script>
