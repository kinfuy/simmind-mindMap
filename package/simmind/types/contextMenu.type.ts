import type { Component, ExtractPropTypes, PropType } from 'vue';

export interface Menu {
  icon: Component;
  name: string;
  type: string;
  data?: any;
}

export type MenuList = Menu[];
export interface Position {
  top: number;
  left: number;
  bottom: number;
  right: number;
}
export const contextMenuProps = {
  menuList: {
    type: Array as PropType<MenuList>,
    default: []
  },
  position: {
    type: Object as PropType<Partial<Position>>,
    default: {}
  },
  onClose: {
    type: Function as PropType<() => void>,
    default: undefined
  },
  onClick: {
    type: Function as PropType<(item: Menu) => void>,
    default: undefined
  }
};

export type ContextMenuProps = ExtractPropTypes<typeof contextMenuProps>;

export interface ContextMenuInstance {
  destory: () => void;
}
