# simmind

vue 思维导图，基于 kityminder-core 的二次开发


## 重构计划
- vue3 + typescript 完全重构
## demo
[官方文档](http://simmind.xkongkeji.com) : http://simmind.xkongkeji.com

## Project setup

```
npm install simmind --savegit
cnpm install simmind --save

```

```
import SimMind from 'simmind';
import 'simmind/dist/simmind.css'
Vue.use(SimMind);
```

## 用法

```
<SimMind
    ref="SimMind"
    :root.sync="root"
    :theme.sync="theme"
    :lockStatus.sync="lockStatus"
    :uploadImage="uploadImage"
    />
```

#### 参数

| 参数       | 说明                                                                                       | 类型   | 可选值    | 默认值 |
| ---------- | ------------------------------------------------------------------------------------------ | ------ | --------- | ------ |
| root    | 思维导图参数,建议使用.sync，没有.sync 会导致数据更新不同步现象，需要手动监听 savedata 事件 | object | --------- | ——   |
| lockStatus | 是否锁定工具栏， 没有.sync 无效                                                            | object | --------- |  ——  |
| theme | 思维导图主题                                                            | String | --------- |  ——  |
| uploadImage | 图片上传方法，必须提供上传图片方法                                                           | Function | --------- |  ——  |

#### Events

| 事件名称  |     | 说明         | 回调         |
| --------- | --- | ------------ | ------------ |
| savedata  |     | 点击保存数据 | 思维导图数据 |
| update  |     | 思维导图发生数据更新 | 思维导图数据 |
| nodeclick |     | 点击节点     | 当前节点数据 |
| rollback  |     | 点击返回图标     | 无           |
| importdata  |     | 点击导入图标     | 暂未完善          |

## 补充
### 如果您想获取到当前思维导图图片，可以直接调佣实例的getNowView()方法，数据为base64
```
this.$refs.SimMind.getNowView()
```
### 如果需要数据二次渲染需要为root添加_updata: true
```
    this.setRoot({
      data: {
        text: "simmind"
      },
      _updata: true
    });
```

数据格式

```
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
```


### 当然需要更多 API 可以参考 kityminder-core [官方文档](https://github.com/fex-team/kityminder-core/wiki)
