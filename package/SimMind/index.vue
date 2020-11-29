<template>
    <div class="SimMind">
        <simMindTool />
        <simMindMap @mapEvent="headleMap" :zoom="zoom" />
        <div id="sim-tree" class="sim-tree"></div>
    </div>
</template>

<script>
import treeInit from "./main";
import {
    contextmenu,
    closeAllContextmenu,
} from "../SimMind/contextmenu/index.js";
// eslint-disable-next-line no-unused-vars
import { editor, closeAlleditor } from "../SimMind/Editor/index";
import simMindTool from "../SimMind/tool/index";
import simMindMap from "../SimMind/map/index";
import { enterFullScreen, isFullScreen, exitFullscreen } from "./utils/conmon";
let XMIND;
let EDITOR;
let contextmenuInstance;
export default {
    name: "SimMind",
    components: {
        simMindTool,
        simMindMap,
    },
    data() {
        return {
            tree: {
                data: {
                    text: "test111",
                },
                children: [
                    { data: { text: "新闻\nsrc/module/node.j" } },
                    {
                        data: { text: "网页", expandState: "collapse" },
                        children: [
                            { data: { text: "新闻\nsrc/module/node.j" } },
                            { data: { text: "网页" } },
                            { data: { text: "贴吧" } },
                            { data: { text: "知道" } },
                            { data: { text: "音乐" } },
                            { data: { text: "图片" } },
                            { data: { text: "视频" } },
                            { data: { text: "地图" } },
                            { data: { text: "百科" } },
                        ],
                    },
                    { data: { text: "贴吧" } },
                    { data: { text: "知道" } },
                    { data: { text: "音乐" } },
                    { data: { text: "图片" } },
                    { data: { text: "视频" } },
                    { data: { text: "地图" } },
                    { data: { text: "百科" } },
                ],
            },
            zoom: 100,
        };
    },
    methods: {
        headleMap(e) {
            if (e === "VIEW_FULL") {
                if (isFullScreen()) {
                    exitFullscreen();
                } else {
                    enterFullScreen();
                }
            }
            if (e === "VIEW_REDUCE") {
                let state = XMIND.queryCommandState("ZoomOut");
                if (state === 0) {
                    this.zoom -= 20;
                    XMIND.execCommand("ZoomOut");
                }
            }
            if (e === "VIEW_PLUS") {
                let state = XMIND.queryCommandState("ZoomIn");
                if (state === 0) {
                    this.zoom += 20;
                    XMIND.execCommand("ZoomIn");
                }
            }
            if (e === "VIEW_AIM") {
                XMIND.execCommand("Camera", XMIND.getRoot(), 10);
            }
        },
        nodeClick() {
            if (contextmenuInstance) {
                contextmenuInstance.$off("menuClick", this.menuClick);
                closeAllContextmenu();
            }
            var node = XMIND.getSelectedNode();
            if (node) {
                console.log(1);
            }
        },
        menuClick(e) {
            if (e.type === "NODE_ADD") {
                EDITOR = editor({
                    editorType: "TEXT",
                });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                });
                EDITOR.$on("headleSubmit", (e) => {
                    XMIND.execCommand("AppendChildNode", e);
                    closeAlleditor();
                });
            }
            if (e.type === "NODE_DELETE") {
                XMIND.execCommand("RemoveNode");
            }
            if (e.type === "NODE_LINK") {
                EDITOR = editor({ editorType: "LINK_URL" });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                });
                EDITOR.$on("headleSubmit", (e) => {
                    console.log(e);
                    XMIND.execCommand("HyperLink", e, "");
                    closeAlleditor();
                });
            }
            if (e.type === "NODE_IMAGE") {
                EDITOR = editor({ editorType: "IMAGE_URL" });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                });
                EDITOR.$on("headleSubmit", (e) => {
                    console.log(e);
                    XMIND.execCommand("Image", e, "");
                    closeAlleditor();
                });
            }

            if (contextmenuInstance) {
                contextmenuInstance.$off("menuClick", this.menuClick);
                closeAllContextmenu();
            }
        },
        contextmenuClick(e) {
            let node = XMIND.getSelectedNode();
            if (node) {
                contextmenuInstance = contextmenu({
                    menulist: [
                        {
                            icon: "icon-folder-add",
                            name: "添加节点",
                            type: "NODE_ADD",
                            data: {},
                        },
                        {
                            icon: "icon-delete",
                            name: "删除节点",
                            type: "NODE_DELETE",
                            data: {},
                        },
                        {
                            icon: "icon-share",
                            name: "插入超链接",
                            type: "NODE_LINK",
                            data: {},
                        },
                        {
                            icon: "icon-image",
                            name: "插入图片",
                            type: "NODE_IMAGE",
                            data: {},
                        },
                        {
                            icon: "icon-question-circle",
                            type: "NODE_MORE",
                            name: "更多信息",
                            data: {},
                        },
                    ],
                    top: e.originEvent.clientY,
                    left: e.originEvent.clientX,
                });
                contextmenuInstance.$on("menuClick", this.menuClick);
            } else {
                if (contextmenuInstance) {
                    contextmenuInstance.$off("menuClick", this.menuClick);
                    closeAllContextmenu();
                }
            }
        },
        douboleClick() {
            var node = XMIND.getSelectedNode();
            if (node) {
                console.log("编辑");
                XMIND.execCommand("EditNode");
            }
        },
    },
    mounted() {
        XMIND = treeInit("#sim-tree");
        XMIND.setInitData(this.tree);
        XMIND.execCommand("Theme", "fresh-green");
        XMIND.on("click", this.nodeClick);
        XMIND.on("dblclick", this.douboleClick);
        XMIND.on("contextmenu", this.contextmenuClick);
        this.$once("hook:beforeDestroy", () => {
            XMIND.off("click", this.nodeClick);
            XMIND.off("contextmenu", this.contextmenuClick);
        });
    },
};
</script>

<style lang="scss" scoped>
.SimMind {
    width: 100%;
    height: 100%;
}
.sim-tree {
    width: 100%;
    height: 100%;
}
</style>
