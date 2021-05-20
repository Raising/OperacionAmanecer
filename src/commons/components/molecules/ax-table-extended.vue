<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { BTable } from 'bootstrap-vue';
//@ts-ignore
import KeyCodes from '@NODEMODULES/bootstrap-vue/src/utils/key-codes.js';
//@ts-ignore
import startCase from '@NODEMODULES/bootstrap-vue/src/utils/startcase.js';
//@ts-ignore
import { getComponentConfig } from '@NODEMODULES/bootstrap-vue/src/utils/config.js';
//@ts-ignore
import { htmlOrText } from '@NODEMODULES/bootstrap-vue/src/utils/html.js';
import VueDraggableResizable from 'vue-draggable-resizable';
import BootstrapWrapper from '../atoms/bootstrap-wrapper.vue';

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';

Vue.component('vue-draggable-resizable', VueDraggableResizable);

export default Factory.component('nowrapp-table-extended', {
  extends: BTable,
  data() {
    return {
      dragging: false,
      resizing: false,
      resetHeaders: false,
      esMitadColumna: false,
      columnLight: -1,
    };
  },
  props: [],
  methods: {
    onDrag: function(columnsFromDrag: any, x: number, y: number) {
      this.dragging = true;
      this.columnLight = this.GetPositionToDrag(columnsFromDrag, x);
    },

    onDragStop: function(columnsFromDrag: any, x: number, y: number) {
      this.resetHeaders = true;
      this.dragging = false;
      this.columnLight = -1;
      if (x === 0) {
        // De este modo conservamos la funcionalidad de reordenacion de columnas
        this.$emit('head-clicked', columnsFromDrag.key, columnsFromDrag, 'MouseEvent', false);
      } else {
        let columnsToDragPosition: number = this.GetPositionToDrag(columnsFromDrag, x);
        if (columnsToDragPosition !== -1) {
          this.$emit('dropColumnsStop', columnsToDragPosition, parseInt(columnsFromDrag.position));
        }
      }
    },

    GetPositionToDrag(columnsFromDrag: any, x: number): number {
      let PosicionAbsolutaCentroColumnaFromDrag: number =
        columnsFromDrag.absolutePosition + x + columnsFromDrag.width / 2;

      let lastFieldFound: Array<any> = this.fields.filter(
        (field: any) => field.absolutePosition <= PosicionAbsolutaCentroColumnaFromDrag,
      );
      if (lastFieldFound.length === 0) {
        return columnsFromDrag.position !== 1 ? 1 : -1;
      } else {
        let PosicionAbsolutaCentroColumnatoDrag =
          lastFieldFound[lastFieldFound.length - 1].absolutePosition +
          lastFieldFound[lastFieldFound.length - 1].width / 2;
        let posicion: number;
        if (x < 0) {
          posicion =
            PosicionAbsolutaCentroColumnaFromDrag < PosicionAbsolutaCentroColumnatoDrag
              ? this.fields[lastFieldFound.length - 1].position
              : this.fields[lastFieldFound.length].position;
        } else {
          posicion =
            PosicionAbsolutaCentroColumnaFromDrag > PosicionAbsolutaCentroColumnatoDrag
              ? this.fields[lastFieldFound.length - 1].position
              : this.fields[lastFieldFound.length - 2].position;
        }
        return posicion !== columnsFromDrag.position ? posicion : -1;
      }
    },

    onResize: function(column: any, x: number, y: number, w: number, h: number) {
      this.resizing = true;
      // this.$emit('resizecolumns', column, w);
    },
    onResizeStop(column: any, x: number, y: number, w: number, h: number) {
      this.resizing = false;
      this.$emit('resizecolumns', column, w);
      this.$emit('resizecolumnsStop', column);
      this.resetHeaders = true;
    },

    renderThead(isFoot = false) {
      const h = this.$createElement;
      const fields = this.computedFields || [];

      if (this.isStacked === true || fields.length === 0) {
        // In always stacked mode, we don't bother rendering the head/foot.
        // Or if no field headings (empty table)
        return h();
      }
      const onColumnDrag = (column: any) => (x: Event, y: Event) => this.onDrag(column, x, y);
      const onColumnDragStop = (column: any) => (x: Event, y: Event) => this.onDragStop(column, x, y);
      const onColumnResize = (column: any) => (x: Event, y: Event, w: Event, h: Event) =>
        this.onResize(column, x, y, w, h);
      const onColumnResizeStop = (column: any) => (x: Event, y: Event, w: Event, h: Event) =>
        this.onResizeStop(column, x, y, w, h);

      // Helper function to generate a field TH cell
      const makeCell = (field: any, colIndex: any) => {
        let ariaLabel = null;
        if (!field.label.trim() && !field.headerTitle) {
          // In case field's label and title are empty/blank
          // We need to add a hint about what the column is about for non-sighted users
          /* istanbul ignore next */
          ariaLabel = startCase(field.key);
        }
        const hasHeadClickListener = this.$listeners['head-clicked'] || this.isSortable;
        const handlers: any = {};
        if (hasHeadClickListener) {
          handlers.click = (evt: any) => {
            this.headClicked(evt, field, isFoot);
          };
          handlers.keydown = (evt: any) => {
            const keyCode = evt.keyCode;
            if (keyCode === KeyCodes.ENTER || keyCode === KeyCodes.SPACE) {
              this.headClicked(evt, field, isFoot);
            }
          };
        }
        const sortAttrs = this.isSortable ? this.sortTheadThAttrs(field.key, field, isFoot) : {};
        const sortClass = this.isSortable ? this.sortTheadThClasses(field.key, field, isFoot) : null;
        const data: any = {
          key: field.key,
          class: [this.fieldClasses(field), sortClass],
          style: field.thStyle || {},
          attrs: {
            // We only add a tabindex of 0 if there is a head-clicked listener
            tabindex: hasHeadClickListener ? '0' : null,
            abbr: field.headerAbbr || null,
            title: field.headerTitle || null,
            role: 'columnheader',
            scope: 'col',
            'aria-colindex': String(colIndex + 1),
            'aria-label': ariaLabel,
            ...sortAttrs,
          },
          on: handlers,
        };
        const fieldScope = { label: field.label, column: field.key, field: field };
        const slot =
          isFoot && this.hasNormalizedSlot(`FOOT_${field.key}`)
            ? this.normalizeSlot(`FOOT_${field.key}`, fieldScope)
            : this.normalizeSlot(`HEAD_${field.key}`, fieldScope);
        if (!slot) {
          data.domProps = htmlOrText(field.labelHtml);
        }

        let innerHeaderContent = slot || field.label;

        if (this.resetHeaders) {
          this.$nextTick(() => {
            this.resetHeaders = false;
          });
          return h('th', data, innerHeaderContent);
        } else {
          return h('th', data, [
            h(
              'vue-draggable-resizable',
              {
                class: [
                  this.fieldClasses(field),
                  sortClass,
                  field.position == this.columnLight + 1 ? 'dragHighLight left' : '',
                  field.position == this.columnLight - 1 ? 'dragHighLight right' : '',
                ],
                on: {
                  dragging: onColumnDrag(field),
                  dragstop: onColumnDragStop(field),
                  resizing: onColumnResize(field),
                  resizestop: onColumnResizeStop(field),
                  handlers,
                },
                attrs: {
                  role: 'row',
                  axis: 'x',
                  handles: ['mr'],
                  w: field.width,
                  tabindex: hasHeadClickListener ? '0' : null,
                  left: 0,
                  key: Math.random().toString(),
                },
              },
              innerHeaderContent,
            ),
          ]);
        }
      };

      // Generate the array of TH cells
      const $cells = fields.map(makeCell).filter((th: any) => th);

      // Genrate the row(s)
      const $trs = [];
      if (isFoot) {
        $trs.push(h('tr', { class: this.tfootTrClass, attrs: { role: 'row' } }, $cells));
      } else {
        const scope = {
          columns: fields.length,
          fields: fields,
        };
        $trs.push(this.normalizeSlot('thead-top', scope) || h());
        $trs.push(h('tr', { class: this.theadTrClass, attrs: { role: 'row' } }, $cells));
      }

      return h(
        isFoot ? 'tfoot' : 'thead',
        {
          key: isFoot ? 'tfoot' : 'thead',
          class: 'table-extended-header ' + (isFoot ? this.footClasses : this.headClasses),
          attrs: { role: 'rowgroup' },
        },
        $trs,
      );
    },
  },
});

Factory.component(`ax-table-extended`, {
  extends: BootstrapWrapper,
  name: `ax-table-extended`,
  data: () => ({ component: `nowrapp-table-extended` }),
});
</script>
