import { createApp, h } from 'vue';
import ContextMenu from './ContextMenu';
import type { ContextMenuInstance, ContextMenuProps } from '../../types/contextMenu.type';

let contextMenuInstance: ContextMenuInstance | null = null;
const contextMenu = (props: ContextMenuProps) => {
  if (contextMenuInstance) contextMenuInstance.destory();
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(ContextMenu, {
        ref: 'ContextMenuRef',
        ...props
      });
    }
  });
  const instance = app.mount(div);

  contextMenuInstance = instance.$refs.ContextMenuRef as ContextMenuInstance;
  contextMenuInstance.destory = () => {
    app.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  return contextMenuInstance;
};

export default contextMenu;
