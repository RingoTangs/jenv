# jenv

一个跨平台的 JDK 版本管理工具，让你能够轻松切换不同的 JDK 版本。



## 特性

- 🚀 轻松切换 JDK 版本
- 💻 跨平台支持 (Windows、Linux、MacOS)
- ⚡️ 简单的命令行界面
- 🔧 便捷的配置方式
- 🎯 基于符号链接的版本切换



> **请注意：**
>
> **jenv 本身不会自动帮你下载 JDK。你需要手动下载多个版本的 JDK，并将它们存放到指定的目录中。**



## 安装

```bash
npm install -g @ringotangs/jenv
```



## 系统要求

- Node.js >= 14.0.0
- Windows 需要管理员权限，Linux/MacOS 需要 sudo 权限（用于创建符号链接）



## 使用方法



### 初始化 jenv

首次使用需要初始化：

```bash
jenv init
```



### 配置 JDK 路径

添加你的 JDK 安装路径：

```bash
jenv config
```

这将引导你完成：
1. 添加新的 JDK 路径
2. 删除现有配置
3. 查看当前配置



### 列出可用的 JDK

查看所有已配置的 JDK 版本：

```bash
jenv ls
```



### 切换 JDK 版本

更改当前使用的 JDK：

```bash
jenv use
```

切换版本后，你需要配置环境变量：



#### Windows

设置环境变量：
```bash
JAVA_HOME=<jenv路径>\jdk
将 %JAVA_HOME%\bin 添加到 PATH
```



#### Linux/MacOS

添加到 ~/.bashrc 或 ~/.zshrc：
```bash
export JAVA_HOME="<jenv路径>/jdk"
export PATH="$JAVA_HOME/bin:$PATH"
```

> 注意：切换版本后需要重启终端以应用更改。



## Windows 用户注意事项

在 Windows 上，你需要：
1. 以管理员身份运行命令提示符，或者
2. 在 Windows 设置中启用开发者模式

这是创建符号链接所必需的。



## 许可证

MIT



## 作者

RingoTangs



## 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request
