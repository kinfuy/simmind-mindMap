<template>
    <div class="SimMindTool">
        <div class="tool" v-for="(item, index) in toolList" :key="index">
            <i :class="['iconfont', item.icon, 'tool-icon']"></i>
            <div class="tool-text">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "simMindTool",
    data() {
        return {
            toolList: [
                {
                    icon: "icon-skin-fill",
                    name: "主题",
                },
                {
                    icon: "icon-cloud-download",
                    name: "下载",
                },
                {
                    icon: "icon-number",
                    name: "布局",
                },
                {
                    icon: "icon-ungroup",
                    name: "整理",
                },
                {
                    icon: "icon-lock",
                    name: "锁定",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.SimMindTool {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    z-index: 99;
    .tool {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 60px;
        background-color: #fff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        cursor: pointer;
        color: #666;
        &:hover {
            color: #3982fc;
            background-color: #eef4ff;
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
