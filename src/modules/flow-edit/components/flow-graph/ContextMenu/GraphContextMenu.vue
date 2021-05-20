<template>
  <div class="ingraph context-menu" :style="canvasPosition">
    <div class="header">
      <div v-if="menuPath.length > 0" class="add-to-path-icon float-left" @click="backPath">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <div class="tittle">{{ menuName }}</div>
    </div>
    <graph-context-menu-item
      v-for="item in selectableItems"
      :key="item.name"
      :item="item"
      @click="item.children != undefined ? addToPath(item.id) : createNode(item)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';
import { GraphDirectory, FlowGraph, NodeType } from '@MODELS/flow-graph';

interface MenuItem {
  id: string;
  name: string;
  children?: { [id: string]: MenuItem };
  nodeProto?: string;
  custom?: boolean;
  nodeType?: NodeType;
}

export default Factory.component('GraphContextMenu', {
  data() {
    return {
      menuPath: [],
    };
  },
  props: ['coordinates'],
  components: {},
  computed: {
    canvasPosition: function() {
      return { top: this.coordinates.y + 'px', left: this.coordinates.x + 'px' };
    },
    menuName: function() {
      if (this.menuPath.length > 0) {
        return this.menuPath[this.menuPath.length - 1];
      }
      return 'Nodes';
    },
    menuTree: function() {
      return {
        data: {
          id: 'data',
          name: 'Data Node',
          children: {},
        },
        defaultFlow: {
          id: 'defaultFlow',
          name: 'Default Flow',
          children: {},
        },
        gameFlow: {
          id: 'gameFlow',
          name: 'Game Flow',
          children: this.gameFlowItems,
        },
      };
    },
    selectableItems: function() {
      let items = this.menuPath.reduce(
        (currentLevel: any, subpath: string) => currentLevel[subpath].children,
        this.menuTree,
      );
      return Object.values(items);
    },
    gameFlowItems: function(this: VueView) {
      let elements = this.$store.getters.getGameGraphsTree();

      return gameGraphLevelToMenuItems(elements);
    },
  },
  methods: {
    backPath(this: VueView) {
      this.menuPath.pop();
    },
    addToPath(this: VueView, subpath: string) {
      this.menuPath.push(subpath);
    },
    createNode(this: VueView, item: MenuItem) {
      this.$emit('close');
      if (item.nodeType == NodeType.Flow) {
        this.$store.dispatch(ACT.FlowEdit.insertFlowNode, {
          nodeProto: item.nodeProto,
          custom: item.custom,
          position: this.coordinates,
        });
      } else if (item.nodeType == NodeType.Data) {
        this.$store.dispatch(ACT.FlowEdit.createDataNode, {
          nodeProto: item.nodeProto,
          custom: item.custom,
          position: this.coordinates,
        });
      }
    },
  },
  mounted() {},
});

const gameGraphLevelToMenuItems = (tree: any) => {
  let folders = tree.filter((el: any) => el.path !== undefined);
  let nodes = tree.filter((el: any) => el.path === undefined);

  let items: { [id: string]: MenuItem } = {};
  folders.forEach((folder: GraphDirectory) => {
    items[folder.path] = {
      id: folder.path,
      name: folder.name,
      children: gameGraphLevelToMenuItems(folder.children),
    };
  });
  nodes.forEach((flowNode: FlowGraph) => {
    items[flowNode.id] = {
      id: flowNode.id,
      name: flowNode.name,
      nodeProto: flowNode.id,
      nodeType: NodeType.Flow,
      custom: true,
    };
  });
  return items;
};
</script>
