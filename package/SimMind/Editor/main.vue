<template>
    <div class="edtior">
        <div class="btn-warper">
            <i class="iconfont icon-check btn-cancel" @click="headleSubmit"></i>
            <i class="iconfont icon-close btn-sure" @click="headleCancel"></i>
        </div>
        <div class="title" v-if="editorType === 'TEXT'">文本</div>
        <textarea
            v-if="editorType === 'TEXT'"
            class="editor-text"
            name="editor-text"
            id="editor-text"
            cols="30"
            rows="5"
            v-model="editorText"
        ></textarea>
        <div class="title" v-if="editorType === 'TEXT' && nodeData.image">
            图片
        </div>
        <div class="imagelist" v-if="editorType === 'TEXT' && nodeData.image">
            <img
                class="image"
                :style="[
                    { width: nodeData.imageSize.width + 'px' },
                    { height: nodeData.imageSize.height + 'px' },
                ]"
                :src="nodeData.image"
            />
            <div class="imageCover" @click="headleDeleteImage()">
                删除
            </div>
        </div>
        <div class="title" v-if="editorType === 'TEXT' && nodeData.hyperlink">
            超链接
        </div>
        <div class="urllist" v-if="editorType === 'TEXT' && nodeData.hyperlink">
            <div class="link-url">{{ nodeData.hyperlink }}</div>
            <div class="linkCover" @click="headleDeleteLink()">
                删除
            </div>
        </div>
        <input
            v-if="editorType === 'IMAGE_URL'"
            placeholder="输入图片地址"
            type="text"
            class="editor-input"
            name="imageUrl"
            id="imageUrl"
            v-model="imageUrl"
        />
        <input
            v-if="editorType === 'LINK_URL'"
            type="text"
            class="editor-input"
            placeholder="超链接地址"
            name="linkUrl"
            id="linkUrl"
            v-model="linkUrl"
        />
    </div>
</template>

<script>
export default {
    name: "edtior",
    data() {
        return {
            editorType: "",
            editorText: "",
            imageUrl: "",
            linkUrl: "",
            nodeData: {},
        };
    },
    methods: {
        headleCancel() {
            this.$emit("headleCancel", false);
        },
        headleSubmit() {
            if (this.editorType === "IMAGE_URL") {
                this.$emit("headleSubmit", this.imageUrl);
            }
            if (this.editorType === "TEXT") {
                this.$emit("headleSubmit", {
                    editorText: this.editorText,
                    nodeData: this.nodeData,
                });
            }
            if (this.editorType === "LINK_URL") {
                this.$emit("headleSubmit", this.linkUrl);
            }
        },
        headleDeleteImage() {
            this.nodeData.image = "";
            this.nodeData.imageSize = "";
        },
        headleDeleteLink() {
            this.nodeData.hyperlink = null;
        },
    },
};
</script>

<style lang="scss" scoped>
.edtior {
    position: absolute;
    right: 10px;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    width: 240px;
    background-color: #fff;
    border-radius: 5px;
    animation: enter 0.8s;
    z-index: 999;
    zoom: 1;
    .title {
        width: 100%;
        margin: 5px 0;
        font-size: 14px;
        font-weight: 700;
        color: #666;
    }
    .urllist {
        position: relative;
        .link-url {
            width: 100%;
            word-break: break-all;
            font-size: 12px;
            color: #666;
        }
        .linkCover {
            position: absolute;
            bottom: 0;
            transition: all 0.5s;
            width: 100%;
            height: 0px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            cursor: pointer;
        }
        &:hover .linkCover {
            height: 30px;
        }
    }
    .imagelist {
        position: relative;
        .imageCover {
            position: absolute;
            bottom: 0;
            transition: all 0.5s;
            width: 100%;
            height: 0px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            cursor: pointer;
        }
        &:hover .imageCover {
            height: 30px;
        }
    }
    .editor-input {
        width: 100%;
        outline: none;
        padding: 0 10px;
        height: 30px;
        box-sizing: border-box;
        border: 2px solid#FF99CC;
    }
    .editor-text {
        width: 100%;
        outline: none;
        padding: 10px;
        box-sizing: border-box;
        border: 2px solid#FF99CC;
    }
    .btn-warper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        color: #666;
        .btn-cancel {
            padding: 8px;
            cursor: pointer;
            &:hover {
                color: red;
            }
        }
        .btn-sure {
            padding: 8px;
            cursor: pointer;
            &:hover {
                color: green;
            }
        }
    }
}
@keyframes enter {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
