<template>
    <div class="drag">
        <div class="edtior">
            <textarea
                v-if="editorType === 'TEXT'"
                class="editor-text"
                name="editor-text"
                id="editor-text"
                cols="30"
                rows="10"
                v-model="editorText"
            ></textarea>
            <input
                v-if="editorType === 'IMAGE_URL'"
                type="text"
                class="editor-text"
                name="imageUrl"
                id="imageUrl"
                v-model="imageUrl"
            />
            <input
                v-if="editorType === 'LINK_URL'"
                type="text"
                class="editor-text"
                name="linkUrl"
                id="linkUrl"
                v-model="linkUrl"
            />
            <div class="btn-warper">
                <div class="btn-cancel" @click="headleCancel">取消</div>
                <div class="btn-sure" @click="headleSubmit">确认</div>
            </div>
        </div>
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
                this.$emit("headleSubmit", this.editorText);
            }
            if (this.editorType === "LINK_URL") {
                this.$emit("headleSubmit", this.linkUrl);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.drag {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.4);
    z-index: 999;
    .edtior {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        width: 600px;
        background-color: #fff;
        .editor-text {
            width: 100%;
            outline: none;
            padding: 10px;
            box-sizing: border-box;
        }
        .btn-warper {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            color: #fff;
            margin-top: 10px;
            .btn-cancel {
                padding: 8px 12px;
                background-color: #999;
                border-radius: 4px;
                margin-right: 10px;
                cursor: pointer;
            }
            .btn-sure {
                padding: 8px 12px;
                background-color: #409eff;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
}
</style>
