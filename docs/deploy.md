# 部署（GitHub Pages）

该项目是纯静态站（`index.html + app.js + styles.css`），最简单的部署方式是 GitHub Pages。

## 1）在 GitHub 创建仓库
- 新建一个仓库（Public/Private 都行；公开更适合展示）
- 仓库名示例：`MyPersonalWebsite`

## 2）上传代码（无 Git 环境也可以）
如果你当前机器没有安装 Git，也没关系：
- 打开你的仓库页面
- 点击 **Add file → Upload files**
- 把本项目目录下的文件全部上传（至少包含：`index.html / app.js / styles.css / .github/ / .nojekyll`）
- 提交到 `main` 分支

## 3）开启 Pages（使用 GitHub Actions）
- 进入仓库 **Settings → Pages**
- Source 选择 **GitHub Actions**

之后每次 push 到 `main` 分支都会自动部署。

## 4）拿到网站地址
部署完成后：
- 进入仓库 **Actions**，看工作流 `Deploy to GitHub Pages` 是否绿色成功
- 进入 **Settings → Pages** 会显示站点 URL

一般是下面两种之一：
- 项目站点：`https://<你的用户名>.github.io/<仓库名>/`
- 用户站点（如果仓库名就是 `<你的用户名>.github.io`）：`https://<你的用户名>.github.io/`

示例：
- `https://LittleStarGrandma.github.io/MyPersonalWebsite/`
