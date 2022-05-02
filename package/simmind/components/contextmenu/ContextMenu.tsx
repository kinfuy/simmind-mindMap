import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue';
import SimIcon from '../SimIcon.vue';
import { type Menu, contextMenuProps } from '../../types/contextMenu.type';

export default defineComponent({
  name: 'ContextMenu',
  components: { SimIcon },
  props: contextMenuProps,
  setup(props) {
    const visible = ref(false);
    const contextmenuRef = ref<HTMLDivElement | null>();
    const getStyle = computed(() => {
      return {
        top: props.position.top ? `${props.position.top}px` : undefined,
        left: props.position.left ? `${props.position.left}px` : undefined,
        bottom: props.position.bottom ? `${props.position.bottom}px` : undefined,
        right: props.position.right ? `${props.position.right}px` : undefined
      };
    });

    const clickOutSide = (e: MouseEvent) => {
      if (contextmenuRef.value && !contextmenuRef.value.contains(e.target as Node)) {
        handleClose();
        visible.value = false;
      }
    };

    const handleClose = () => {
      if (props.onClose && typeof props.onClose === 'function') props.onClose();
    };

    const headleClick = (item: Menu) => {
      if (props.onClick && typeof props.onClick === 'function') props.onClick(item);
    };

    onMounted(() => {
      visible.value = true;
      document.body.addEventListener('click', clickOutSide);
    });
    onUnmounted(() => {
      document.body.removeEventListener('click', clickOutSide);
    });

    const menu = props.menuList.map(item => {
      const menuIcon = item.icon;
      return (
        <>
          <div class="sim-menu" onClick={() => headleClick(item)}>
            <SimIcon>
              <menuIcon />
            </SimIcon>
            <span class="sim-menu-text">{item.name}</span>
          </div>
        </>
      );
    });
    return () => (
      <>
        {visible.value ? (
          <div ref={contextmenuRef} style={getStyle.value} class="sim-contextmenu">
            {menu}
          </div>
        ) : null}
      </>
    );
  }
});
