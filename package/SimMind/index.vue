<template>
    <div ref="SimMind" class="SimMind">
        <simMindTool
            @toolClick="headleToolEvent"
            @changeTheme="headleChangeTheme"
            :lockTempStatus.sync="lockTempStatus"
            :dragenable="dragenable"
        />
        <simMindMap @mapEvent="headleMap" :zoom="zoom" />
        <div id="sim-tree" class="sim-tree"></div>
    </div>
</template>

<script>
import treeInit from "./main";
import {
    contextmenu,
    closeAllContextmenu,
} from "../SimMind/contextmenu/index.js"; // 导入鼠标右键菜单
import { editorBaseConstructor, closeAlleditor } from "../SimMind/Editor/index"; // 导入编辑区组件
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
        lockStatus: {
            type: Boolean,
            default: false,
        },
        root: {
            type: Object,
            required: true,
        },
        theme: {
            type: String,
        },
        uploadImage: {
            type: Function,
        },
    },
    computed: {
        lockTempStatus: {
            get() {
                return this.lockStatus;
            },
            set(val) {
                this.$emit("update:lockStatus", val);
            },
        },
    },
    data() {
        return {
            zoom: 100,
            dragenable: false,
        };
    },
    watch: {
        root(item) {
            if (item._updata) {
                XMIND.setInitData(item);
            }
        },
        theme(item) {
            if (item && item !== "") {
                XMIND.execCommand("Theme", item);
            }
        },
        lockStatus(val) {
            if (val) {
                XMIND.execCommand("Hand");
            } else {
                XMIND.execCommand("Hand", false);
            }
        },
    },
    methods: {
        clearEditor() {
            if (EDITOR) {
                EDITOR.$off("headleCancel", this.clearEditor);
                EDITOR.$off("headleSubmit", this.addNode);
                EDITOR.$off("headleSubmit", this.editNode);
                EDITOR.$off("headleSubmit", this.addLink);
                EDITOR.$off("headleSubmit", this.addTag);
                EDITOR.$off("headleSubmit", this.addImage);
                closeAlleditor();
                EDITOR = null;
            }
        },
        clearContextmenu() {
            if (contextmenuInstance) {
                contextmenuInstance.$off("menuClick", this.menuClick);
                closeAllContextmenu();
                contextmenuInstance = null;
            }
        },
        addNode(e) {
            if (this.lockStatus) return;
            XMIND.execCommand("AppendChildNode", e.editorText);
            this.dataUpdata();
            this.clearEditor();
        },
        editNode(e) {
            if (this.lockStatus) return;
            XMIND.execCommand("text", e.editorText);
            if (e.nodeData.image === "") {
                XMIND.execCommand("Image", "", "");
            }
            if (e.nodeData.hyperlink === null) {
                XMIND.execCommand("HyperLink", null, "");
            }
            this.dataUpdata();
            this.clearEditor();
        },
        addLink(e) {
            if (this.lockStatus) return;
            let reg = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/;
            if (reg.test(e)) {
                XMIND.execCommand("HyperLink", e, "");
                this.dataUpdata();
                this.clearEditor();
            } else {
                this.$emit("error", "资源地址不合法");
                this.clearEditor();
            }
        },
        addTag(resource) {
            let tagList = XMIND.queryCommandValue("Resource");
            tagList.push(resource);
            XMIND.execCommand("Resource", tagList);
            this.dataUpdata();
            this.clearEditor();
        },
        async addImage(e) {
            XMIND.execCommand("Image", e, "");
            await XMIND.exportData("json");
            this.dataUpdata();
            this.clearEditor();
        },
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
            if (this.lockStatus) return;
            this.clearEditor();
            this.clearContextmenu();
            let node = XMIND.getSelectedNode();
            if (!node) return;
            this.$emit("nodeclick", {
                data: node.data,
                children: node.children,
                parent: parent,
            });
        },
        menuClick(e) {
            this.clearContextmenu();
            if (e.type === "NODE_ADD") {
                EDITOR = editorBaseConstructor({
                    editorType: "TEXT",
                });
                EDITOR.$on("headleCancel", this.clearEditor);
                EDITOR.$on("headleSubmit", this.addNode);
            }
            if (e.type === "NODE_EDIT") {
                let node = XMIND.getSelectedNode();
                if (node) {
                    EDITOR = editorBaseConstructor({
                        editorType: "TEXT",
                        editorText: node.data.text,
                        nodeData: Object.assign({}, node.data),
                    });
                    EDITOR.$on("headleCancel", this.clearEditor);
                    EDITOR.$on("headleSubmit", this.editNode);
                }
            }
            if (e.type === "NODE_DELETE") {
                XMIND.execCommand("RemoveNode");
                this.dataUpdata();
            }
            if (e.type === "NODE_TAG") {
                EDITOR = editorBaseConstructor({ editorType: "TAG_TEXT" });
                EDITOR.$on("headleCancel", this.clearEditor);
                EDITOR.$on("headleSubmit", this.addTag);
            }
            if (e.type === "NODE_LINK") {
                EDITOR = editorBaseConstructor({
                    editorType: "LINK_URL",
                });
                EDITOR.$on("headleCancel", this.clearEditor);
                EDITOR.$on("headleSubmit", this.addLink);
            }
            if (e.type === "NODE_IMAGE") {
                EDITOR = editorBaseConstructor({
                    editorType: "IMAGE_URL",
                    uploadImage: this.uploadImage,
                });
                EDITOR.$on("headleCancel", this.clearEditor);
                EDITOR.$on("headleSubmit", this.addImage);
            }
            if (e.type === "NODE_MORE") {
                this.$emit("nodemore");
            }
        },
        async dataUpdata() {
            let data = await XMIND.exportData("json");
            this.$emit("update:root", JSON.parse(data).root);
        },
        async updataTheme() {
            let theme = XMIND.queryCommandValue("Theme");
            this.$emit("update:theme", theme);
        },
        statusUpdata() {
            this.$emit("update:lockTempStatus", this.lockTempStatus);
        },
        contextmenuClick(e) {
            if (this.lockStatus) return;
            this.clearEditor();
            this.clearContextmenu();
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
                        // {
                        //     icon: "icon-tag",
                        //     name: "添加标签",
                        //     type: "NODE_TAG",
                        //     data: {},
                        // },
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
            }
        },
        douboleClick(e) {
            if (this.lockStatus) return;
            let node = XMIND.getSelectedNode();
            if (node) {
                EDITOR = editorBaseConstructor({
                    editorType: "TEXT",
                    editorText: node.data.text,
                    nodeData: Object.assign({}, node.data),
                    siteInfo: {
                        X: e.originEvent.clientX,
                        Y: e.originEvent.clientY
                    }
                });
                EDITOR.$on("headleCancel", this.clearEditor);
                EDITOR.$on("headleSubmit", this.editNode);
            }
        },
        keyupEvent(e) {
            if (this.lockStatus) return;
            if (contextmenuInstance) return;
            if (EDITOR) return;
            if (e.keyCode === 8 || e.keyCode === 46) {
                XMIND.execCommand("RemoveNode");
                this.dataUpdata();
            }
        },
        getNowView() {
            return new Promise((resolve, reject) => {
                try {
                    XMIND.exportData("png").then((res) => {
                        let data = base64ToBlob(res, "image/png");
                        resolve(data);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        },
        headleToolEvent(e) {
            if (this.lockStatus && e.type !== "ROLL_BACK") return;
            switch (e.type) {
                case "THEME":
                    break;
                case "DOWNLOAD": {
                    try {
                        XMIND.exportData("png").then((res) => {
                            let data = base64ToBlob(res, "image/png");
                            downImage(data, "思维导图.png");
                        });
                    } catch (error) {
                        alert(error);
                    }
                    break;
                }
                case "DRAG_NODE": {
                    if (this.dragenable) {
                        this.dragenable = false;
                        this.statusUpdata();
                        XMIND.execCommand("Hand");
                    } else {
                        this.dragenable = true;
                        this.statusUpdata();
                        XMIND.execCommand("Hand", false);
                    }
                    break;
                }
                case "SAVE_DATA": {
                    let data = XMIND.exportJson();
                    this.$emit("savedata", {
                        root: data.root,
                        theme: data.theme,
                    });
                    break;
                }
                case "CLEAR": {
                    let root = XMIND.getRoot();
                    XMIND.select(root, false);
                    XMIND.execCommand("Camera", root, 100);
                    XMIND.execCommand("ResetLayout");
                    this.dataUpdata();
                    break;
                }
                case "ROLL_BACK": {
                    this.$emit("rollback");
                    break;
                }
                case "IMPORT_DATA": {
                    this.$emit("importdata");
                    break;
                }
                default:
                    break;
            }
        },
        headleChangeTheme(e) {
            if (this.lockStatus) return;
            XMIND.execCommand("Theme", e);
            this.updataTheme();
        },
    },
    mounted() {
        XMIND = treeInit("#sim-tree");
        XMIND.setInitData(this.root);
        if (this.theme && this.theme !== "") {
            XMIND.execCommand("Theme", this.theme);
        }
        if (this.lockStatus) {
            XMIND.execCommand("Hand");
        }
        XMIND.on("click", this.nodeClick);
        XMIND.on("dblclick", this.douboleClick);
        XMIND.on("contextmenu", this.contextmenuClick);
        window.addEventListener("keyup", this.keyupEvent);
        this.$once("hook:beforeDestroy", () => {
            XMIND.off("click", this.nodeClick);
            XMIND.off("dblclick", this.douboleClick);
            XMIND.off("contextmenu", this.contextmenuClick);
            window.removeEventListener("keyup", this.keyupEvent);
        });
    },
};
</script>

<style lang="scss" scoped>
.SimMind {
    position: relative;
    width: 100%;
    height: 100%;
}
.sim-tree {
    width: 100%;
    height: 100%;
}
</style>
