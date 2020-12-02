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
                <div v-if="item.type === 'LAYOUT'" class="layout">
                    <i
                        v-for="(item, index) in templateList"
                        :key="index"
                        :class="['iconfont', item.icon, 'layout-item']"
                    ></i>
                </div>
                <div v-if="item.type === 'THEME'" class="theme">
                    <div class="theme-item"></div>
                    <div class="theme-item"></div>
                    <div class="theme-item"></div>
                    <div class="theme-item"></div>
                    <div class="theme-item"></div>
                    <div class="theme-item"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "simMindTool",
    props: {
        lockStatus: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            toolList: [
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
                    extend: true,
                },
                {
                    icon: "icon-number",
                    name: "布局",
                    type: "LAYOUT",
                    extend: true,
                },
                {
                    icon: "icon-ungroup",
                    name: "整理",
                    type: "CLEAR",
                },
                {
                    icon: "icon-unlock",
                    name: "锁定",
                    type: "LOCK",
                },
            ],
            templateList: [
                {
                    name: "",
                    type: "",
                    icon: "icon-siweidaotu_huaban1",
                },
                {
                    name: "",
                    type: "",
                    icon: "icon-siweidaotuchangguiti-",
                },
                {
                    name: "",
                    type: "",
                    icon: "icon-jiagoutu",
                },
                {
                    name: "",
                    type: "",
                    icon: "icon-luoxuanbuju",
                },
                {
                    name: "",
                    type: "",
                    icon: "icon-yugutou",
                },
            ],
        };
    },
    computed: {
        toolLists() {
            if (this.lockStatus) {
                return [
                    {
                        icon: "icon-lock",
                        name: "解锁",
                        type: "extend",
                    },
                ];
            } else {
                return this.toolList;
            }
        },
    },
    methods: {
        headleClick(item) {
            this.$emit("toolClick", item);
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
            .layout {
                display: flex;
                align-items: center;
                .layout-item {
                    font-size: 55px;
                    padding: 0 10px;
                    color: #999;
                    &:hover {
                        color: #66cc66;
                    }
                }
            }
            .theme {
                display: flex;
                align-items: center;
                .theme-item {
                    width: 50px;
                    height: 60px;
                    border: 1px solid red;
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
