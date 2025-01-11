[English](https://github.com/RingoTangs/jenv#readme)

[简体中文](https://github.com/RingoTangs/jenv/blob/master/README_zh.md)

# jenv

A cross-platform JDK version management tool that allows you to easily switch between different JDK versions.



## Features

- 🚀 Easy JDK version switching
- 💻 Cross-platform support (Windows, Linux, MacOS)
- ⚡️ Simple CLI interface
- 🔧 Easy configuration
- 🎯 Symbolic link based version switching



>**Please note:** 
>
>**jenv does not automatically download JDKs for you. You need to manually download multiple versions of the JDK and place them in the specified directory.**



## Installation

```bash
npm install -g @ringotangs/jenv
```



## Requirements

- Node.js >= 16.0.0
- Administrator privileges (Windows) or sudo (Linux/MacOS) for creating symbolic links



## Usage

### Initialize jenv

First time setup:

```bash
jenv init
```



### Configure JDK Paths

Add your JDK installations:

```bash
jenv config
```


This will guide you through:
1. Adding new JDK paths
2. Removing existing configurations 
3. Listing current configurations



### List Available JDKs

View all configured JDK versions:

```bash
jenv ls
```



### Switch JDK Version

Change the active JDK:

```bash
jenv use
```


After switching versions, you'll need to configure your environment:



#### Windows

```bash
Set environment variables:

JAVA_HOME=<jenv_path>\jdk
Add %JAVA_HOME%\bin to your PATH
```



#### Linux/MacOS

```bash
Add to ~/.bashrc or ~/.zshrc:
bash
export JAVA_HOME="<jenv_path>/jdk"
export PATH="$JAVA_HOME/bin:$PATH"
```


> Note: Restart your terminal after changing versions to apply the changes.



## Windows Users Note

On Windows, you'll need either:
1. Run the command prompt as Administrator, or
2. Enable Developer Mode in Windows Settings

This is required for creating symbolic links.



## License

MIT



## Author

RingoTangs



## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request