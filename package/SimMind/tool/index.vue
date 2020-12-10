<template>
    <div class="SimMindTool">
        <div
            @click="headleClick(item)"
            class="tool"
            v-for="(item, index) in toolLists"
            :key="index"
        >
            <i :class="['iconfont', item.icon, 'tool-icon']"></i>
            <div class="tool-text">
                {{ item.name }}
            </div>
            <div v-if="item.extend" class="tool-extend">
                <div v-if="item.type === 'THEME'" class="theme">
                    <div
                        v-for="(item, index) in themeList"
                        :key="index"
                        @click="headleChangeTheme(item)"
                        class="theme-item"
                        :style="{ 'background-color': item.color }"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "simMindTool",
    props: {
        lockTempStatus: {
            type: Boolean,
            default: false,
        },
        dragenable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            toolList: [
                {
                    icon: "icon-rollback",
                    name: "返回",
                    type: "ROLL_BACK",
                },
                {
                    icon: "icon-save",
                    name: "保存",
                    type: "SAVE_DATA",
                },
                {
                    icon: this.dragenable ? "icon-shubiao" : "icon-tuozhuai",
                    name: this.dragenable ? "鼠标" : "拖拽",
                    type: "DRAG_NODE",
                },
                {
                    icon: "icon-skin-fill",
                    name: "主题",
                    type: "THEME",
                    extend: true,
                },
                {
                    icon: "icon-cloud-download",
                    name: "下载",
                    type: "DOWNLOAD",
                },
                {
                    icon: "icon-ungroup",
                    name: "整理",
                    type: "CLEAR",
                },
            ],
            themeList: [
                {
                    name: "经典",
                    type: "classic",
                    color: "rgb(233, 223, 152)",
                },
                {
                    name: "紧凑经典",
                    type: "classic-compact",
                    color: "rgb(233, 223, 152)",
                },
                {
                    name: "天空蓝",
                    type: "fresh-blue",
                    color: "rgb(115, 161, 191)",
                },
                {
                    name: "紧凑蓝",
                    type: "fresh-blue-compat",
                    color: "rgb(115, 161, 191)",
                },
                {
                    name: "文艺绿",
                    type: "fresh-green",
                    color: "rgb(115, 191, 118)",
                },
                {
                    name: "紧凑绿",
                    type: "fresh-green-compat",
                    color: "rgb(115, 191, 118)",
                },
                {
                    name: "芭比粉",
                    type: "fresh-pink",
                    color: "rgb(191, 115, 148)",
                },
                {
                    name: "紧凑粉",
                    type: "fresh-pink-compat",
                    color: "rgb(191, 115, 148)",
                },
                {
                    name: "薰衣紫",
                    type: "fresh-purple",
                    color: "rgb(123, 115, 191)",
                },
                {
                    name: "紧凑紫",
                    type: "fresh-purple-compat",
                    color: "rgb(123, 115, 191)",
                },
                {
                    name: "清新红",
                    type: "fresh-red",
                    color: "rgb(191, 115, 115)",
                },
                {
                    name: "紧凑红",
                    type: "fresh-red-compat",
                    color: "rgb(191, 115, 115)",
                },
                {
                    name: "泥土黄",
                    type: "fresh-soil",
                    color: "rgb(191, 147, 115)",
                },
                {
                    name: "紧凑黄",
                    type: "fresh-soil-compat",
                    color: "rgb(191, 147, 115)",
                },
            ],
        };
    },
    computed: {
        toolLists() {
            if (this.lockTempStatus) {
                return [
                    {
                        icon: "icon-rollback",
                        name: "返回",
                        type: "ROLL_BACK",
                    },
                ];
            } else {
                let templateArr = [...this.toolList];
                templateArr[2].icon = this.dragenable
                    ? "icon-shubiao"
                    : "icon-tuozhuai";
                templateArr[2].name = this.dragenable ? "鼠标" : "拖拽";
                return templateArr;
            }
        },
    },
    methods: {
        headleClick(item) {
            this.$emit("toolClick", item);
        },
        headleChangeTheme(item) {
            this.$emit("changeTheme", item.type);
        },
    },
};
</script>

<style lang="scss" scoped>
.SimMindTool {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 99;
    .tool {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 60px;
        background-color: #fff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        color: #666;
        &:hover {
            color: #3982fc;
            background-color: #eef4ff;
        }
        &:hover .tool-extend {
            display: block;
        }
        .tool-extend {
            display: none;
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 999;
            .theme {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                width: 200px;
                .theme-item {
                    width: 60px;
                    height: 30px;
                    font-size: 14px;
                    line-height: 30px;
                    margin-left: 10px;
                    margin-top: 10px;
                    border-radius: 4px;
                    text-align: center;
                    color: #fff;
                }
            }
        }
        .tool-icon {
            font-size: 22px;
        }
        .tool-text {
            font-size: 14px;
        }
    }
}
</style>
