# simmind

vue 思维导图，基于 kityminder-core 的二次开发

## Project setup

```
npm install simmind --save
cnpm install simmind --save

```

```
import SimMind from 'simmind';
import 'simmind/dist/simmind.css'
Vue.use(SimMind);
```

## 用法

```
 <SimMind :options.sync="options" @savedata="headleSaveData" />
```

## 建议使用.sync，没有.sync 会导致数据更新不同步现象，需要手动监听 savedata 事件

## 事件 savedata

用户点击保存事件

数据格式

```
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
```

### 数据 options 中需存在 root 并，且 root 中须有 data

### 当然需要更多 API 可以参考 kityminder-core [官方文档](https://github.com/fex-team/kityminder-core/wiki)
