<template>
  <div class="test" @contextmenu="click"><SimMind /></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import contextMenu from '../package/simmind/components/contextmenu';
import { Delete, Edit, FolderAdd, Image, QuestionCircle, Share, Youxianji } from '../package/simmind/components/icon';
export default defineComponent({
  name: 'Example',
  setup() {
    return {
      click: (e: MouseEvent) => {
        e.preventDefault();
        contextMenu({
          position: {
            top: e.clientY,
            left: e.clientX
          },
          menuList: [
            {
              icon: FolderAdd,
              name: '添加节点',
              type: 'NODE_ADD'
            },
            {
              icon: Delete,
              name: '删除节点',
              type: 'NODE_DELETE'
            },
            {
              icon: Edit,
              name: '编辑节点',
              type: 'NODE_EDIT'
            },
            {
              icon: Youxianji,
              name: '优先级',
              type: 'NODE_RANK'
            },
            {
              icon: Share,
              name: '插入超链接',
              type: 'NODE_LINK'
            },
            {
              icon: Image,
              name: '插入图片',
              type: 'NODE_IMAGE'
            },
            {
              icon: QuestionCircle,
              type: 'NODE_MORE',
              name: '更多信息'
            }
          ],
          onClick: item => {
            console.log(item);
          }
        });
      }
    };
  }
});
</script>
<style lang="less" scoped>
.test {
  width: 200px;
  height: 200px;
  margin: 100px auto;
  background-color: antiquewhite;
}
</style>
