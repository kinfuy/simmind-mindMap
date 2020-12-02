<template>
    <div id="app">
        <SimMind :options.sync="options" @savedata="headleSaveData" />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            options: {
                theme: "",
                root: {
                    data: {
                        text: "Thezero",
                    },
                    children: [
                        { data: { text: "Thezero/男" } },
                        { data: { text: "工作邮箱：Yonghu520@outlook.com" } },
                        {
                            data: {
                                text: "个人博客：https://blog.xkongkeji.com/",
                            },
                        },
                        { data: { text: "QQ:1846930039(注明来自博客)" } },
                        { data: { text: "职业：学生" } },
                        { data: { text: "职业：学生" } },
                    ],
                },
            },
        };
    },
    methods: {
        headleSaveData(options) {
            this.options = options;
        },
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
</style>
