<template>
  <div ref="SimMind" class="SimMind">
    <div id="sim-tree" class="sim-tree" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
  name: 'SimMind',
  props: {
    root: {
      type: Array,
      default: () => []
    },
    locaStatus: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {};
  }
});
</script>
<style lang="less" scoped></style>
