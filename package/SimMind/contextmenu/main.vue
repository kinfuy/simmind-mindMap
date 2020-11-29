<template>
    <div
        class="contextmenu"
        :style="[{ top: top + 'px' }, { left: left + 'px' }]"
    >
        <div
            class="menu"
            v-for="(item, index) in menulist"
            :key="index"
            @click="headleClick($event, item)"
        >
            <i :class="['iconfont', 'menu-icon', item.icon]"></i>
            <span class="menu-text">{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "contextmenu",
    data() {
        return {
            menulist: [
                {
                    icon: "icon-folder-add",
                    name: "添加节点",
                    type: "ADD",
                    data: {},
                },
                {
                    icon: "icon-delete",
                    name: "删除节点",
                    type: "DELETE",
                    data: {},
                },
                {
                    icon: "icon-question-circle",
                    name: "更多",
                    data: {},
                },
            ],
            top: 0,
            left: 0,
        };
    },
    methods: {
        headleClick(e, item) {
            this.$emit("menuClick", {
                name: item.name,
                type: item.type,
                data: item.data,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.contextmenu {
    position: absolute;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    color: #333;
    .menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 35px;
        min-width: 100px;
        background-color: #fff;
        padding: 0 15px;
        line-height: 35px;
        cursor: pointer;
        .menu-icon {
            font-size: 20px;
            margin-right: 5px;
        }
        .menu-text {
            font-size: 14px;
        }
        &:hover {
            background-color: #f4f4f4;
        }
    }
}
</style>
