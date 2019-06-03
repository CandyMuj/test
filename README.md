# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

mini-blog 的数据源均来自于云数据库，所以在运行前需要初始化云数据库，在云数据库中新增以下集合：

```
//缓存小程序or公众号的accessToken
access_token
//小程序文章集合
mini_posts
//小程序评论内容集合
mini_comments
//小程序用户操作文章关联（收藏、点赞）
mini_posts_related
//小程序博客相关配置集合
mini_config
//小程序博客相关操作日志
mini_logs
//小程序博客用户FormID（用于模板消息推送）
mini_formids
```