<template>
    <div class="SimMindMap">
        <div
            class="tool"
            @click="headleClick(item)"
            v-for="(item, index) in toolList"
            :key="index"
        >
            <span class="zoom-scale" v-if="item.text">{{ zoom }}%</span>
            <i v-else :class="['iconfont', item.icon, 'tool-icon']"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "simMindMap",
    props: {
        zoom: {
            type: Number,
            default: () => {
                return 100;
            },
        },
    },
    data() {
        return {
            toolList: [
                {
                    icon: "icon-zoomin",
                    type: "VIEW_PLUS",
                },
                {
                    text: 100,
                },
                {
                    icon: "icon-zoomout",
                    type: "VIEW_REDUCE",
                },
                {
                    icon: "icon-fullscreen",
                    type: "VIEW_FULL",
                },
                {
                    icon: "icon-aim",
                    type: "VIEW_AIM",
                },
                {
                    icon: "icon-question",
                    type: "VIEW_QUESTION",
                },
            ],
        };
    },
    methods: {
        headleClick(item) {
            if (!item.type) return;
            this.$emit("mapEvent", item.type);
        },
    },
};
</script>

<style lang="scss" scoped>
.SimMindMap {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 250px;
    height: 50px;
    background-color: transparent;
    .tool {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        cursor: pointer;
        color: #666;
        &:hover {
            color: #3982fc;
        }
        .tool-icon {
            font-size: 20px;
        }
        .zoom-scale {
            font-size: 12px;
            line-height: 35px;
            text-align: center;
            color: #333;
        }
    }
}
</style>
