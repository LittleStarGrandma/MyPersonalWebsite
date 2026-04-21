# PersonalWeb

一个轻量的静态个人网站原型，包含：
- 个人主要信息
- 项目展示（可按标签筛选）
- 相册（点击预览、左右切换、Esc 关闭）
- 社交主页链接
- 三语切换：简体中文 / 繁体中文 / English（带本地记忆 + `?lang=` 参数）

## 如何预览
### 方式 A：直接打开
直接用浏览器打开根目录的 `index.html` 即可。

### 方式 B：本地静态服务器（可选）
如果你本机有 Python：
- `python -m http.server 5173`

然后访问：`http://localhost:5173/`

## 如何改内容
主要内容都在 `app.js` 里的 `DATA` 对象：
- `DATA.profile`：姓名/头衔/简介/技能/邮箱/简历链接
- `DATA.projects`：项目列表
- `DATA.album`：相册（当前为内置 SVG 占位图）
- `DATA.socials`：社交链接

多语言文案在 `app.js` 里的 `I18N` 对象。

## 文档
- 需求文档：[docs/prd.md](./docs/prd.md)
- 部署指南：[docs/deploy.md](./docs/deploy.md)
