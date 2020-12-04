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

#### 参数

| 参数       | 说明                                                                                       | 类型   | 可选值    | 默认值 |
| ---------- | ------------------------------------------------------------------------------------------ | ------ | --------- | ------ |
| options    | 思维导图参数,建议使用.sync，没有.sync 会导致数据更新不同步现象，需要手动监听 savedata 事件 | object | --------- | 提示   |
| lockStatus | 是否锁定工具栏， 没有.sync 无效                                                            | object | --------- | 提示   |

#### Events

| 事件名称  |     | 说明         | 回调         |
| --------- | --- | ------------ | ------------ |
| savedata  |     | 点击保存数据 | 思维导图数据 |
| nodeclick |     | 点击节点     | 当前节点数据 |
| rollback  |     | 点击返回     | 无           |

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
