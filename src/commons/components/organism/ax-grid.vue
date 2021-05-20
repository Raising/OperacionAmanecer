<template>
  <div class="ax-grid" ref="ax-grid">
    <ax-row v-if="resources.gridConfiguration.isReady()">
      <ax-form-treeselect
        ref="ax-form-treeselect"
        v-model="fieldSelected"
        :multiple="true"
        placeholder="Seleccione los campos que desea ver"
        :options="getElementsTreeselect"
      >
        <ax-row slot="before-list">
          <ax-row class="header-treeselect p-2">
            <h6>{{ $t('grid.column.selection') }}</h6>
          </ax-row>
        </ax-row>
        <ax-row slot="after-list">
          <ax-button class="button-bottom-select" variant="outline-primary" @click="AcceptTreeSelect"
            >Aceptar</ax-button
          >
        </ax-row>
      </ax-form-treeselect>
    </ax-row>

    <ax-row
      :style="{
        width: totalWidth == 0 ? '100%' : totalWidth < window.width ? '100%' : totalWidth + 'px',
      }"
    >
      <ax-table-extended
        ref="TableExtended"
        hover
        small
        sticky-header
        striped
        show-empty
        :selectable="isSelectable"
        :select-mode="'multi'"
        :localSorting="localSorting"
        :style="{ width: totalWidth == 0 ? '100%' : totalWidth < window.width ? '100%' : totalWidth + 'px' }"
        :fields="tableHeaders"
        :resource="resource"
        @head-clicked="onHeadClicked"
        @row-clicked="onRowCLicked"
        @row-selected="onRowSelected"
        @resizecolumns="resizecolumns"
        @resizecolumnsStop="resizecolumnsStop"
        @dropColumnsStop="dropColumnsStop"
        @context-changed="contextChanged"
        @row-contextmenu="openContextMenu"
      >
        <template v-for="(field, index) in tableHeaders" v-slot:[`cell(${field.key})`]="row">
          <slot v-if="$scopedSlots[field.key] !== undefined" :name="field.key" v-bind="row.item"></slot>

          <div v-else class="cell-with-button" :key="index">
            <b-button
              v-if="index === 0 && row.item['ERPContractCount'] > 1"
              @click="
                row.toggleDetails();
                NodeExpand(row, $event);
              "
              class="mr-2 open-clildren-button"
            >
              <div>{{ nodosExpandidosId.find((nodo) => nodo === row.item.EntityId) ? '-' : '+' }}</div>
            </b-button>

            <template v-if="row.field.key.toLowerCase() === ENUM.ColumnName.CHECKBOX">
              <template v-if="row.rowSelected">
                <span aria-hidden="true"><check-circle-outline-icon /></span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true"><minus-icon /></span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
            <div v-if="field.valueType === ENUM.FormatType.STICK && row.item[field.key]" class="w-100">
              <ax-grid-risk
                :renderType="row.field.columnStyle"
                :max="5"
                :value="row.item[field.key]"
                :label="
                  JSON.stringify(riskTranslations) !== '{}'
                    ? getRiskLabelByValue(row.item[field.key], row.field.columnStyle)
                    : ''
                "
                class="mx-2"
              />
            </div>

            <div
              v-else-if="row.item[field.key] != undefined && row.item[field.key] != null"
              :class="getClassByType(field.valueType)"
              @click="() => $emit('rowClick', row)"
            >
              <div :class="insertClass(row)" class="d-flex">
                <!-- this v-if should check from a list of especial colums which only contains icons and not a single case -->
                <component v-if="row.field.key === ENUM.ColumnName.STATUS_READ" :is="utils.GetIcon(row)"></component>

                <template v-else>
                  <component :is="utils.GetIcon(row)" :viewBox="'0 0 24 24'"></component>
                  <div class="ml-1"> {{ FormatField(field, row) }}</div>
                </template>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:row-details="row">
          <slot v-if="hasCustomDetail()" name="rowDetail" v-bind="row"></slot>
          <ax-table-extended
            v-if="!hasCustomDetail()"
            ref="ax-table-children-extended"
            class="children-table"
            striped
            hover
            :fields="tableHeaders"
            :items="ItemsChildren(row.item.EntityId)"
          >
            <template v-for="(field, index) in tableHeaders" v-slot:[`cell(${field.key})`]="row">
              <div class="row" :key="index">
                <div v-if="field.valueType === ENUM.FormatType.STICK && row.item[field.key]" class="w-75">
                  <ax-grid-risk
                    :renderType="row.field.columnStyle"
                    :max="5"
                    :value="row.item[field.key]"
                    :label="
                      JSON.stringify(riskTranslations) !== '{}'
                        ? getRiskLabelByValue(row.item[field.key], row.field.columnStyle)
                        : ''
                    "
                    class="mx-4"
                  />
                </div>

                <div v-else-if="row.item[field.key]">
                  <div :class="insertClass(row)">
                    <component :is="utils.GetIcon(row)" :viewBox="'0 0 24 24'" class="mr-2"></component>
                    {{ FormatField(field, row) }}
                  </div>
                </div>
              </div>
            </template>
          </ax-table-extended>

          <!--  <b-button
            size="sm"
            @click="
              row.toggleDetails();
              NodeCollapse(row.item.EntityId);
            "
            >Ocultar</b-button
          >-->
        </template>

        <template v-slot:table-busy>
          <ax-spinner-default :logo="true"></ax-spinner-default>
        </template>

        <template v-slot:empty>
          <lx-table-empty :text="$t('no_results_found')" />
        </template>
      </ax-table-extended>
      <!---lx-context-menu-overlay v-if="hasContextMenu() && isConextMenuOpen" v-on:click="closeContextMenu()"/-->
      <lx-context-menu
        v-if="hasContextMenu() && isConextMenuOpen"
        v-clickOutside="closeContextMenu"
        ref="contextMenu"
        :style="{ left: CMLeft + 'px', top: CMTop + 'px' }"
        :class="isConextMenuOpen ? '' : 'hidden'"
      >
        <slot name="contextMenu" v-bind="contextMenuRow"></slot>
      </lx-context-menu>
    </ax-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';
import Resource from '@COMMONS/utils/conectivity/resource';

import MagnifyIcon from '@COMMONS/components/icons/24px-AX/Magnify.vue';
import MailOpenIcon from '@COMMONS/components/icons/24px-AX/MailOpen.vue';
import MailIcon from '@COMMONS/components/icons/24px-AX/Mail.vue';

import CheckCircleOutlineIcon from '@COMMONS/components/icons/24px-AX/CheckCircleOutline.vue';
import MinusIcon from '@COMMONS/components/icons/24px-AX/Minus.vue';

import EyeIcon from '@COMMONS/components/icons/16px-AX/Eye.vue';
import HelpIcon from '@COMMONS/components/icons/16px-AX/Help.vue';
import MagnifyLittleIcon from '@COMMONS/components/icons/16px-AX/Magnify.vue';
import ThumbDownIcon from '@COMMONS/components/icons/16px-AX/ThumbDown.vue';
import ThumbUpIcon from '@COMMONS/components/icons/16px-AX/ThumbUp.vue';
import ForcedApprovalIcon from '@COMMONS/components/icons/16px-AX/ForcedApproval.vue';
import ForcedDeniedIcon from '@COMMONS/components/icons/16px-AX/ForcedDenied.vue';
import RubbishIcon from '@COMMONS/components/icons/16px-AX/Rubbish.vue';
import CounterOfferAprovedIcon from '@COMMONS/components/icons/16px-AX/CounterOfferAproved.vue';

import GridUtils from './ax-grid-sub/ax-grid-utils';
import LxTableEmpty from '@COMMONS/components/layouts/lx-table-empty.vue';

import { gridRiskRenderModes } from '@COMMONS/components/atoms/ax-grid-risk.vue';

import clickOutside from '@COMMONS/definitions/click-outside-directive';

export default Factory.component('ax-grid', {
  /**
   * @name ax-grid
   * @description Componente que renderiza un table de boostrap.
   * @prop { Object } resource Recibe un resource como parametro.
   * @prop { string } title titulo del componente
   * @param { Object } resourcesLocal copia local de resources
   * @param { Object } tableHeaders Necesita como minimo el key,que tiene que coincidir con la key del item y label que es el campo a mostrar.
   * @param { Object } items cada fila que se muestra.
   * EJEMPLO DE USO:
   * tableHeaders: [{ key: columna.ColumnName, label: columna.CustomValueDescription  , sortable: true , width: columna.Width ,class: 'bold'}]
   * parametros opcionales : width, class ...
   * items: [{ "AdmStatusId": 1, "AdmissionMode": 0, "AdmissionPolicyName": "Corporate 360", "AsignedUserName": "Corporate_360_Espana", "AsignedtUserId": 1158... }]
   * @see https://bootstrap-vue.js.org/docs/components/table/#comp-ref-b-table
   */
  components: {
    MagnifyIcon,
    MailOpenIcon,
    MailIcon,
    EyeIcon,
    HelpIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    MagnifyLittleIcon,
    ForcedApprovalIcon,
    ForcedDeniedIcon,
    RubbishIcon,
    CounterOfferAprovedIcon,
    CheckCircleOutlineIcon,
    MinusIcon,
    LxTableEmpty,
  },
  directives: {
    clickOutside,
  },
  data() {
    return {
      utils: GridUtils,
      window: {
        width: 0,
      },
      fieldSelected: [],
      numTotalEntidades: 0,
      nodosExpandidosId: [],
      childrenItems: [],
      nodosExpansibles: [],
      ENUM: ENUM,
      riskTranslations: {},
      listTranslations: {},
      companyIdClicked: -1,
      contextMenuRow: {},
      isConextMenuOpen: false,
      CMTop: 100,
      CMLeft: 300,
    };
  },

  resources: {
    PBIIDtranslations: {
      type: ENUM.CommonsResource.SEGMENTATION_CRITERIA_TRANSLATIONS,
      mode: ENUM.ResourceMode.COLLECTION,
      refProps: [
        {
          property: 'enumType',
          value: (component: any) => gridRiskRenderModes.PBIID,
        },
      ],
    },
    gridConfiguration: {
      type: ENUM.CommonsResource.GRID_CONFIGURATION,
      singleton: false,
      refProps: [
        {
          property: 'gridCode',
          value: (component: any) => {
            return component.gridCode;
          },
        },
      ],
    },
    listTranslations: {
      singleton: true,
      type: ENUM.CommonsResource.TRANSLATED_LISTS,
      mode: ENUM.ResourceMode.COLLECTION,
    },
    RIMMTranslations: {
      type: ENUM.CommonsResource.RIMM_TRANSLATIONS,
      mode: ENUM.ResourceMode.COLLECTION,
    },
  },

  props: {
    title: String,

    resource: Resource,
    resourceChild: Resource,
    textLoader: {
      type: String,
      default: 'Cargando...',
    },
    localSorting: {
      type: Boolean,
      default: false,
    },
    usePost: Boolean,
    gridCode: Number,
  },
  secontaryId: 'gridCode',
  refProps: [{ name: 'locaInitLoadConfig', value: {} }],

  computed: {
    selectedItems() {
      let items = this.resource.content().items;
      let selectedItems: any[] = [];
      this.$refs.TableExtended.$children[0].selectedRows.map((state: boolean, index: number) => {
        if (state === true) {
          selectedItems.push(items[index]);
        }
      });
      return selectedItems;
    },
    isSelectable() {
      return (
        (this.tableHeaders || []).filter((header: any) => header.key.toLowerCase() === ENUM.ColumnName.CHECKBOX)
          .length > 0
      );
    },
    tableHeaders() {
      if (this.field.locaInitLoadConfig && this.field.locaInitLoadConfig.get() !== undefined) {
        return Object.keys(this.field.locaInitLoadConfig.get()).length > 0 ? this.getColumnsConfig() : [];
      } else {
        return [];
      }
    },
    groupedData() {
      let groupedData: any = this.resource.isReady() ? this.resource.content().groupedData.Menus : {};
      return groupedData;
    },
    totalWidth() {
      if (this.field.locaInitLoadConfig && this.field.locaInitLoadConfig.get() !== undefined) {
        return Object.keys(this.field.locaInitLoadConfig.get()).length > 0
          ? this.field.locaInitLoadConfig
              .get()
              .Columns.filter((visible: any) => {
                return visible.Visible;
              })
              .reduce((acc: any, col: any) => {
                acc += col.Width;
                return acc;
              }, 0)
          : 0;
      } else {
        return 0;
      }
    },

    getElementsTreeselect() {
      if (this.field.locaInitLoadConfig.get('Columns') !== undefined) {
        return this.field.locaInitLoadConfig
          .get('Columns')
          .sort(function(a: any, b: any) {
            return a.Position - b.Position;
          })
          .map((column: any) => {
            return { id: column.ColumnId.toString(), label: column.CustomValueDescription };
          });
      } else {
        return undefined;
      }
    },
  },

  methods: {
    hasCustomDetail() {
      return this.$scopedSlots.rowDetail !== undefined;
    },
    hasContextMenu() {
      return this.$scopedSlots.contextMenu !== undefined;
    },
    getConfiguration() {
      if (this.resources.gridConfiguration.isReady()) {
        // if (
        //   this.resource.refProps.elementsPerPage &&
        //   this.resources.gridConfiguration.content('ElementsPerPage') !== this.resource.refProps.elementsPerPage.get()
        // ) {
        //   this.resource.refProps.elementsPerPage.set(this.resources.gridConfiguration.content('ElementsPerPage'));
        // }

        let configAux = { ...this.resources.gridConfiguration.content() };
        if (
          !this.field.locaInitLoadConfig.get('GridCode') ||
          this.field.locaInitLoadConfig.get('GridCode') !== configAux.GridCode
        ) {
          this.field.locaInitLoadConfig.set(configAux);
          this.bindConfigSaveToFetch();
        }
      }
    },

    getRiskLabelByValue: function(value: any, renderMode: string) {
      let translation = '';

      if (value !== null && (renderMode === gridRiskRenderModes.PBIID || renderMode === gridRiskRenderModes.RIIM)) {
        translation = this.riskTranslations[renderMode][value];
      }
      return translation;
    },

    bindConfigSaveToFetch() {
      let OrderDirection: number = this.field.locaInitLoadConfig.get('ColumnOrder').OrderDirection;
      let OrderField: number = this.field.locaInitLoadConfig.get('ColumnOrder').OrderField;

      let column: any = this.field.locaInitLoadConfig
        .get('Columns')
        .find((column: any) => column.ColumnId == OrderField);
      if (this.resource.refProps.ordering && this.resource.refProps.ordering.get() == undefined) {
        this.resource.refProps.ordering.set([
          { IsCorporationColumn: column.IsCorporationColumn, OrderDirection: OrderDirection, OrderField: OrderField },
        ]);
      }
      // this.resource.setOnFetch((result: any) => {
      //   this.saveResourceConfigLocaly();
      // });
      this.saveResourceConfigLocaly();
    },

    saveResourceConfigLocaly() {
      this.fieldSelected = this.field.locaInitLoadConfig
        .get('Columns')
        .filter((column: any) => column.Visible === true)
        .map((column: any) => {
          return column.ColumnId.toString();
        });
    },
    FormatField(field: any, row: any) {
      let value = row.item[field.key];
      let type: ENUM.FormatType = field.valueType;
      //this is a patch for no writing nothing when STATUS_READ column appears
      // let emptyField = row.field.key === ENUM.ColumnName.STATUS_READ;
      // if(emptyField)
      //   return '';
      return type === ENUM.FormatType.TEXT
        ? value
        : type === ENUM.FormatType.LIST
        ? this.FormatList(row)
        : this.utils.ControlFormatField(field, row, this.resource);
    },
    FormatList(row: any): string {
      let fieldName: string = row.field.key;
      let fieldCode: number | boolean = row.item[fieldName];
      if (typeof fieldCode === 'boolean') {
        fieldCode = fieldCode ? 1 : 0;
      }
      return this.resources.listTranslations.content(`${fieldName}.${fieldCode}`);
    },
    ItemsChildren(entityId: number) {
      return this.childrenItems.filter((item: any) => item.EntityId === entityId);
    },
    NodeExpand(row: any, e: any) {
      let entityId: number = row.item.EntityId;
      let tr = e.composedPath().find((el: any) => el.tagName === 'TR');
      tr.focus();

      let indice: number = this.nodosExpandidosId.findIndex((nodo: number) => nodo === entityId);
      if (indice === -1) {
        this.nodosExpandidosId.push(entityId);
        let indexNodeId = this.childrenItems.findIndex((item: any) => item.EntityId === entityId);
        if (indexNodeId === -1) {
          this.resourceChild.refProps.EntityId.set(entityId);
          this.resourceChild.fetchGrid({}).then((response: any) => {
            let childrenAux = this.childrenItems.concat(this.resourceChild.content().items);
            this.childrenItems = childrenAux;
          });
        }
      } else {
        this.nodosExpandidosId.splice(indice, 1);
      }
    },

    NodeCollapse(entityId: number) {
      let indice: number = this.nodosExpandidosId.findIndex((nodo: number) => nodo === entityId);
      this.nodosExpandidosId.splice(indice, 1);
    },

    updateGridConfig: function() {
      this.resources.gridConfiguration.update({ ...this.field.locaInitLoadConfig.get() });
    },
    onHeadClicked(colummnName: string) {
      this.closeContextMenu();
      // this.companyClickedName = row.EntityName ? row.EntityName : row.BusinessName;
      if (colummnName.toLowerCase() === ENUM.ColumnName.CHECKBOX) {
        if (
          this.$refs.TableExtended.$children[0].selectedRows.filter((isSelected: boolean) => isSelected === true)
            .length !== this.$refs.TableExtended.$children[0].$refs['itemRows'].length
        ) {
          this.$refs.TableExtended.$children[0].selectAllRows();
        } else {
          this.$refs.TableExtended.$children[0].clearSelected();
        }
      }

      //this.$emit('itemSelected', row);
    },
    onRowCLicked(row: any) {
      // this.companyClickedName = row.EntityName ? row.EntityName : row.BusinessName;
      this.companyIdClicked = row.EntityId;
      this.$emit('itemSelected', row);
    },
    onRowSelected(items: Event) {
      this.selected = items;
    },
    fixAllColumnShareSamePosition() {
      let somePosition = this.field.locaInitLoadConfig.get('Columns.0.position');
      if (
        this.field.locaInitLoadConfig.get('Columns').filter((column: any) => column.position != somePosition).length > 1
      ) {
        this.field.locaInitLoadConfig.get('Columns').forEach((column: any, index: number) => (column.position = index));
      }
    },
    getColumnsConfig(clase: string = '') {
      this.numTotalEntidades = this.resource.content().config ? this.resource.content().config.TotalElements : 0;
      let absolutePosition = 0;
      if (this.field.locaInitLoadConfig.get('Columns')) {
        this.fixAllColumnShareSamePosition();
        return this.field.locaInitLoadConfig
          .get('Columns')
          .filter((visible: any) => {
            return visible.Visible;
          })
          .sort(function(a: any, b: any) {
            return a.Position - b.Position;
          })
          .map((columna: any) => {
            let widthAux =
              this.window.width > this.totalWidth
                ? (columna.Width / this.totalWidth) * this.window.width
                : columna.Width;
            let columnaAux: any = {
              key: columna.ColumnName,
              label:
                columna.ColumnName === 'BusinessName' || columna.ColumnName === 'EntityName'
                  ? columna.CustomValueDescription + ' (' + this.numTotalEntidades + ')'
                  : columna.CustomValueDescription,
              columnStyle: columna.ColumnStyle,
              valueType: columna.ValueType,
              sortable: columna.OrderFlag,
              width: parseInt(widthAux),
              class: 'bold',
              id: columna.ColumnId,
              position: columna.Position,
              absolutePosition: absolutePosition,
              thStyle: { width: parseInt(widthAux) + 'px' },
              tdStyle: { width: parseInt(widthAux) + 'px' },
              ERPContractCount: columna.ERPContractCount ? columna.ERPContractCount : undefined,
            };
            absolutePosition += parseInt(widthAux);
            return columnaAux;
          });
      } else {
        return [];
      }
    },
    resizecolumns(column: any, w: number) {
      this.closeContextMenu();
      this.field.locaInitLoadConfig.get('Columns').forEach((columna: any) => {
        if (columna.ColumnId == column.id && w > 100) {
          columna.Width = w;
        }
      });
    },
    resizecolumnsStop(column: any) {
      this.updateGridConfig();
    },
    closeContextMenu() {
      this.isConextMenuOpen = false;
    },
    openContextMenu(row: any, index: number, event: any) {
      if (this.$scopedSlots.contextMenu !== undefined) {
        event.preventDefault();
        this.contextMenuRow = row;
        this.isConextMenuOpen = true;
        //CMLeft = even
        this.CMLeft = event.clientX;
        this.CMTop = event.clientY;
      }
    },
    dropColumnsStop(columnsToDragPosition: number, columnsFromDragPosition: number) {
      this.closeContextMenu();
      this.field.locaInitLoadConfig.get('Columns').forEach((columna: any, index: any) => {
        if (
          columnsToDragPosition < columnsFromDragPosition &&
          columna.Position >= columnsToDragPosition &&
          columna.Position < columnsFromDragPosition
        ) {
          columna.Position++;
        } else if (
          columnsToDragPosition > columnsFromDragPosition &&
          columna.Position <= columnsToDragPosition &&
          columna.Position > columnsFromDragPosition
        ) {
          columna.Position--;
        } else if (columna.Position === columnsFromDragPosition) {
          columna.Position = columnsToDragPosition;
        }
      });
      this.updateGridConfig();
    },

    AcceptTreeSelect(newValue: Array<any>) {
      if (this.fieldSelected.length > 0) {
        let aux = [...this.field.locaInitLoadConfig.get('Columns')];
        this.field.locaInitLoadConfig.get('Columns').forEach((column: any) => {
          let val = this.fieldSelected.find((value: number) => value == column.ColumnId);
          if (val > 0) {
            column.Visible = true;
          } else {
            column.Visible = false;
          }
        });

        this.field.locaInitLoadConfig.set({ Columns: aux }, false);
        this.updateGridConfig();
      } else {
        this.fieldSelected = this.field.locaInitLoadConfig
          .get('Columns')
          .filter((column: any) => column.Visible === true)
          .map((column: any) => {
            return column.ColumnId.toString();
          });
      }
    },
    handleResize() {
      if (this.$refs['ax-grid']) {
        this.window.width = this.$refs['ax-grid'].clientWidth;
      }
    },
    async contextChanged(value: any) {
      if (value.sortBy != '') {
        let IsCorporationColumn: boolean = false;
        this.field.locaInitLoadConfig.get('Columns').forEach((column: any) => {
          if (column.ColumnName == value.sortBy) {
            IsCorporationColumn = column.IsCorporationColumn;

            let idAux =
              typeof column.ColumnId === 'string' ? parseInt(column.ColumnId.replace('_CORP', '')) : column.ColumnId;
            this.field.locaInitLoadConfig.set(
              {
                ColumnOrder: {
                  OrderDirection: value.sortDesc === false ? 1 : 2,
                  OrderField: idAux,
                },
              },
              false,
            );
          }
        });

        this.field.locaInitLoadConfig.set({ Pageable: true }, false);
        await this.updateGridConfig();

        if (!this.localSorting) {
          let OrderDirection: number = this.field.locaInitLoadConfig.get('ColumnOrder').OrderDirection;
          let OrderField: number = this.field.locaInitLoadConfig.get('ColumnOrder').OrderField;
          this.resource.refProps.ordering.set([
            { IsCorporationColumn: IsCorporationColumn, OrderDirection: OrderDirection, OrderField: OrderField },
          ]);
          // this.resource.refresh();
        }
      }
    },

    getClassByType(this: VueView, type: string) {
      switch (type) {
        case ENUM.FormatType.CHECKBOX:
          return 'checkbox';
        // break;
        case ENUM.FormatType.NUMBER:
        case ENUM.FormatType.DAY:
        case ENUM.FormatType.STICK:
        case ENUM.FormatType.TARGETCOLOR:
        case ENUM.FormatType.MONEY:
          return 'type-number';
        // break;
        case ENUM.FormatType.DATE:
          return 'type-date';
        // break;
        default:
          return '';
      }
    },
    insertClass(row: any) {
      let style: string = '';
      if (row.field.key === ENUM.ColumnName.RESULT_CODE) {
        switch (row.item[ENUM.ColumnName.RESULT_CODE]) {
          case 1:
            style = 'evaluation aproved';
            break;
          case 2:
            style = 'evaluation denied-conds';
            break;
          case 3:
            style = 'evaluation denied';
            break;
          case 4:
            style = 'evaluation no-evaluable';
            break;
        }
      } else if (row.field.key === ENUM.ColumnName.ADMSTATUS_ID) {
        // Lista de Admision
        style = ''; // "Sin datos"
        if (
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 1 || // Pendientes de evaluacion
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 2 || // Pendientes de aclaracion
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 3 // Pendientes de revision
        ) {
          style = 'text-info';
        } else if (
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 4 || // Aprobacion confirmada
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 7 // Aprobacion forzada
        ) {
          style = 'text-success';
        } else if (
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 8 || // Denegacion confirmada
          row.item[ENUM.ColumnName.ADMSTATUS_ID] == 9 // Denegacion forzada
        ) {
          style = 'text-error';
        } else if (row.item[ENUM.ColumnName.ADMSTATUS_ID] == 6) {
          // Contraoferta aprobada
          style = 'text-primary';
        } else {
          // Desechada
          style = 'text-detail';
        }
      }
      return style;
    },
  },

  updated() {
    this.getConfiguration();
  },
  mounted: function(this: VueView) {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    this.resource.PBIIDtranslations.fetchCollection({}).then((response: any) => {
      let resourceContent = this.resource.PBIIDtranslations.content();
      this.riskTranslations[gridRiskRenderModes.PBIID] = resourceContent;
    });

    this.resource.RIMMTranslations.fetchCollection({}).then((response: any) => {
      let resourceContent = this.resource.RIMMTranslations.content();
      this.riskTranslations[gridRiskRenderModes.RIIM] = resourceContent;
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
});
</script>
