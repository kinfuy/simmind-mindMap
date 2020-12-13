<template>
    <div id="app">
        <SimMind
            ref="test"
            :root.sync="root"
            :theme.sync="theme"
            @savedata="headleSaveData"
            :lockStatus.sync="lockStatus"
            :uploadImage="uploadImage"
        />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            lockStatus: false,
            theme: "",
            root: {},
        };
    },
    methods: {
        async headleSaveData() {
            let data = await this.$refs.test.getNowView();
            console.log(data);
            console.log(this.$refs.test.getNowView);
        },
        uploadImage(e) {
            // eslint-disable-next-line no-unused-vars
            return new Promise((reslove, reject) => {
                console.log(e);
                setTimeout(
                    reslove(
                        "https://blog.xkongkeji.com/static/img/cover1.fb9e08c.jpg"
                    ),
                    3000
                );
            });
        },
    },
    async mounted() {
        this.root = {
            data: { text: "JavaScript变量" },
            children: [
                {
                    data: {
                        text: "声明",
                        layout: null,
                        expandState: "expand",
                    },
                    children: [
                        {
                            data: {
                                text: "显示声明",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "var let const",
                                        layout: null,
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            data: {
                                text: "陋习",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "没有声明",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "重复声明",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "隐式声明",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "未声明直接赋值",
                                        layout: null,
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            data: {
                                text: "正解",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "先声明。后读写",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "先赋值，后运算",
                                        layout: null,
                                    },
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    data: {
                        text: "命名",
                        layout: null,
                        expandState: "expand",
                    },
                    children: [
                        {
                            data: {
                                text: "方法",
                                expandState: "expand",
                                layout: null,
                            },
                            children: [
                                {
                                    data: {
                                        text: "匈牙利命名法",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "变量名=类型+对象描述",
                                                expandState: "expand",
                                                layout: null,
                                            },
                                            children: [
                                                {
                                                    data: {
                                                        text: "Int 整型 i",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text: "Float 浮点型 fl",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text:
                                                            "Boolean 布尔值 b",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text: "String 字符型 s",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text: "Array 数组 a",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text: "Object 对象 o",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text:
                                                            "Function 函数 fn",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                                {
                                                    data: {
                                                        text:
                                                            "Regular Expression 正则 re",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    data: {
                                        text: "驼峰命名法",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "全部小写",
                                                layout: null,
                                            },
                                            children: [
                                                {
                                                    data: {
                                                        text:
                                                            "单词与单词间用下划线分割",
                                                        layout: null,
                                                    },
                                                    children: [],
                                                },
                                            ],
                                        },
                                        {
                                            data: {
                                                text: "大小写混合",
                                                layout: null,
                                            },
                                            children: [
                                                {
                                                    data: {
                                                        text: "大驼峰",
                                                        layout: null,
                                                    },
                                                    children: [
                                                        {
                                                            data: {
                                                                text:
                                                                    "每个单词的首字母大写",
                                                                layout: null,
                                                            },
                                                            children: [],
                                                        },
                                                    ],
                                                },
                                                {
                                                    data: {
                                                        text: "小驼峰",
                                                        layout: null,
                                                    },
                                                    children: [
                                                        {
                                                            data: {
                                                                text:
                                                                    "除第一个单词外，每个单词的首字母大写",
                                                                layout: null,
                                                            },
                                                            children: [],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            data: {
                                text: "规则",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "首字符",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "英文字母或下划线",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    data: {
                                        text: "组成",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "英文字母、数字、下划线",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    data: {
                                        text: "禁忌",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "js关键字、保留字",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    data: {
                        text: "变量类型",
                        layout: null,
                        expandState: "expand",
                    },
                    children: [
                        {
                            data: {
                                text: "值类型",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "占用空间固定，保存在栈中",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "保存与复制是值本身",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "可以使用typeof检测类型",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "基本类型是值类型",
                                        layout: null,
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            data: {
                                text: "引用值类型",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "占用空间不固定，保存在堆中",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "保存与复制的是地址指针",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "通过new产生的数据是引用类型",
                                        layout: null,
                                    },
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    data: {
                        text: "作用域",
                        layout: null,
                    },
                    children: [
                        {
                            data: {
                                text: "全局变量",
                                expandState: "expand",
                                layout: null,
                            },
                            children: [
                                {
                                    data: {
                                        text: "包含",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "在函数体内定义的变量",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                        {
                                            data: {
                                                text: "在函数体内未声明的变量",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    data: {
                                        text: "调用",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "任何位置",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            data: {
                                text: "局部变量",
                                expandState: "expand",
                                layout: null,
                            },
                            children: [
                                {
                                    data: {
                                        text: "包含",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text:
                                                    "在函数体内用var let const 声明的变量",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                        {
                                            data: {
                                                text: "函数的参数变量",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                                {
                                    data: {
                                        text: "调用",
                                        layout: null,
                                    },
                                    children: [
                                        {
                                            data: {
                                                text: "函数体内",
                                                layout: null,
                                            },
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            data: {
                                text: "优先级",
                                layout: null,
                                expandState: "expand",
                            },
                            children: [
                                {
                                    data: {
                                        text: "局部变量高于同名全局变量",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "参数变量高于同名全局变量",
                                        layout: null,
                                    },
                                    children: [],
                                },
                                {
                                    data: {
                                        text: "局部变量高于同名参数变量",
                                        layout: null,
                                    },
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
            _updata: true,
        };
        this.theme = "fresh-green-compat";
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
