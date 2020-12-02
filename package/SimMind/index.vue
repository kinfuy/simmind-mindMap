<template>
    <div ref="SimMind" class="SimMind">
        <simMindTool @toolClick="headleToolEvent" :lockStatus="lockStatus" />
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
import { editorBaseConstructor, closeAlleditor } from "../SimMind/Editor/index";
import simMindTool from "../SimMind/tool/index";
import simMindMap from "../SimMind/map/index";
import { enterFullScreen, isFullScreen, exitFullscreen } from "./utils/conmon";
import { base64ToBlob, downImage } from "./utils/base64";
let XMIND;
let EDITOR;
let contextmenuInstance;
export default {
    name: "SimMind",
    components: {
        simMindTool,
        simMindMap,
    },
    props: {
        tree: {
            type: Object,
            default: () => {
                return {
                    data: {
                        text: "SimMind",
                    },
                    children: [],
                };
            },
        },
    },
    data() {
        return {
            zoom: 100,
            lockStatus: false,
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
            if (EDITOR) {
                closeAlleditor();
                EDITOR = null;
            }
            if (contextmenuInstance) {
                contextmenuInstance.$off("menuClick", this.menuClick);
                closeAllContextmenu();
                contextmenuInstance = null;
            }
            // var node = XMIND.getSelectedNode();
            // if (node) {
            //     console.log(1);
            // }
        },
        menuClick(e) {
            if (contextmenuInstance) {
                contextmenuInstance.$off("menuClick", this.menuClick);
                closeAllContextmenu();
                contextmenuInstance = null;
            }
            if (e.type === "NODE_ADD") {
                EDITOR = editorBaseConstructor({
                    editorType: "TEXT",
                });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                    EDITOR = null;
                });
                EDITOR.$on("headleSubmit", (e) => {
                    XMIND.execCommand("AppendChildNode", e.editorText);
                    closeAlleditor();
                    EDITOR = null;
                });
            }
            if (e.type === "NODE_EDIT") {
                let node = XMIND.getSelectedNode();
                if (node) {
                    EDITOR = editorBaseConstructor({
                        editorType: "TEXT",
                        editorText: node.data.text,
                        nodeData: Object.assign({}, node.data),
                    });
                    EDITOR.$on("headleCancel", () => {
                        closeAlleditor();
                        EDITOR = null;
                    });
                    EDITOR.$on("headleSubmit", (e) => {
                        XMIND.execCommand("text", e.editorText);
                        if (e.nodeData.image === "") {
                            XMIND.execCommand("Image", "", "");
                        }
                        if (e.nodeData.hyperlink === null) {
                            XMIND.execCommand("HyperLink", null, "");
                        }
                        closeAlleditor();
                        EDITOR = null;
                    });
                }
            }
            if (e.type === "NODE_DELETE") {
                XMIND.execCommand("RemoveNode");
            }
            if (e.type === "NODE_LINK") {
                EDITOR = editorBaseConstructor({ editorType: "LINK_URL" });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                    EDITOR = null;
                });
                EDITOR.$on("headleSubmit", (e) => {
                    XMIND.execCommand("HyperLink", e, "");
                    closeAlleditor();
                    EDITOR = null;
                });
            }
            if (e.type === "NODE_IMAGE") {
                EDITOR = editorBaseConstructor({ editorType: "IMAGE_URL" });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                    EDITOR = null;
                });
                EDITOR.$on("headleSubmit", (e) => {
                    XMIND.execCommand("Image", e, "");
                    closeAlleditor();
                    EDITOR = null;
                });
            }
            if (contextmenuInstance) {
                contextmenuInstance.$off("menuClick", this.menuClick);
                closeAllContextmenu();
                contextmenuInstance = null;
            }
        },
        contextmenuClick(e) {
            if (EDITOR) {
                closeAlleditor();
                EDITOR = null;
            }
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
                            icon: "icon-edit",
                            name: "编辑节点",
                            type: "NODE_EDIT",
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
                    contextmenuInstance = null;
                }
            }
        },
        douboleClick() {
            let node = XMIND.getSelectedNode();
            if (node) {
                EDITOR = editorBaseConstructor({
                    editorType: "TEXT",
                    editorText: node.data.text,
                    nodeData: Object.assign({}, node.data),
                });
                EDITOR.$on("headleCancel", () => {
                    closeAlleditor();
                    EDITOR = null;
                });
                EDITOR.$on("headleSubmit", (e) => {
                    XMIND.execCommand("text", e.editorText);
                    if (e.nodeData.image === "") {
                        XMIND.execCommand("Image", "", "");
                    }
                    if (e.nodeData.hyperlink === null) {
                        XMIND.execCommand("HyperLink", null, "");
                    }
                    closeAlleditor();
                    EDITOR = null;
                });
            }
        },
        keyupEvent(e) {
            if (this.lockStatus) return;
            if (contextmenuInstance) return;
            if (EDITOR) return;
            if (e.keyCode === 8 || e.keyCode === 46) {
                XMIND.execCommand("RemoveNode");
            }
        },
        headleToolEvent(e) {
            switch (e.type) {
                case "THEME":
                    break;
                case "DOWNLOAD": {
                    console.log(XMIND);
                    XMIND.exportData("png").then((res) => {
                        let data = base64ToBlob(res, "image/png");
                        downImage(data, "思维导图.png");
                    });
                    break;
                }
                case "LAYOUT":
                    break;
                case "CLEAR": {
                    let root = XMIND.getRoot();
                    XMIND.select(root, false);
                    XMIND.execCommand("Camera", root, 100);
                    XMIND.execCommand("ResetLayout");
                    break;
                }
                case "LOCK": {
                    this.lockStatus = true;
                    XMIND.execCommand("Hand");
                    break;
                }
                case "LOCKOUT": {
                    this.lockStatus = false;
                    XMIND.execCommand("Hand", false);
                    break;
                }
                default:
                    break;
            }
        },
    },
    mounted() {
        XMIND = treeInit("#sim-tree");
        XMIND.setInitData(this.tree);
        XMIND.on("click", this.nodeClick);
        XMIND.on("dblclick", this.douboleClick);
        XMIND.on("contextmenu", this.contextmenuClick);
        window.addEventListener("keyup", this.keyupEvent);
        this.$once("hook:beforeDestroy", () => {
            XMIND.off("click", this.nodeClick);
            XMIND.off("contextmenu", this.contextmenuClick);
            window.removeEventListener("keyup", this.keyupEvent);
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
