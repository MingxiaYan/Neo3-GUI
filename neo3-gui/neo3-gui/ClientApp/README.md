This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### 目录结构

```bash
├── /.vscode/           # VSCode（需配合推荐插件）
│ └── setting.json      # 工作区的相关配置
├── /public/            # 公共资源文件
| └── ...
├── /src/               # 项目工作区域
│ ├── /api/          	# 项目使用到接口的封装，按照业务逻辑划分，一种业务对应一个文件。
│ ├── /components/      # 项目公共组件
│ ├── /locales/     		# 项目语言国际化配置
│ ├── /pages/     		# 页面
│ ├── /router/     		# 项目路由配置文件
│ ├── /store/           # 项目的状态管理库，集中存储和维护所有组件的状态
│ ├── /styles/     		# 项目样式文件，使用了scss，便于整体样式的封装和维护
│ ├── /utils/     		# 工具方法封装
│ ├── app.js            # 项目根组件
│ └── index.js          # 项目入口文件
├── .env				# 环境变量
├── .gitignore          # Git 忽略上传的文件
├── .prettierrc.json    # 代码风格配置
├── index.js            # Electron入口文件
├── package.json        # 项目依赖
├── README.md           # 项目安装启动介绍
└── yarn.lock           # Yarn 自动生成的依赖锁定文件
```

### 前端开发

#### 安装

可以使用 npm 或者 yarn 进行安装

```js
yarn //安装依赖
npm install //安装依赖
```

> 推荐使用 VS Code 进行开发，主目录下有编辑器的设置 _也可根据需要手动修改 user setting_
>
> ```json
> {
>   "editor.defaultFormatter": "esbenp.prettier-vscode",
>   "editor.formatOnSave": true,
>   "javascript.suggest.autoImports": false,
>   "typescript.suggest.autoImports": false
> }
> ```
>
> 安装插件：EditorConfig、Watson's Snippets

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
