<template>
    <div class="drag">
        <div class="edtior">
            <textarea
                class="editor-text"
                name="editor-text"
                id="editor-text"
                cols="30"
                rows="10"
                v-model="editorText"
            ></textarea>
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
            editorText: "",
        };
    },
    methods: {
        headleCancel() {
            this.$emit("headleCancel", false);
        },
        headleSubmit() {
            this.$emit("headleSubmit", this.editorText);
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
