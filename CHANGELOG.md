# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-01-05

### Added

- ✨ Initial release with core features:
  - JDK version management via symbolic links
  - Cross-platform support (Windows, Linux, MacOS)
  - Command line interface with the following commands:
    - `jenv init` - Initialize jenv configuration
    - `jenv config` - Configure JDK paths
    - `jenv ls` - List available JDK versions
    - `jenv use` - Switch between JDK versions
  - Configuration file management in `~/.jenv/.jenvrc`
  - Interactive CLI using inquirer
  - Colored console output using chalk

### Technical

- 🏗️ Project setup with TypeScript and ESM modules
- 📦 Build system using Rollup
- 🔧 Cross-platform path handling
- ⚡️ Symbolic link based version switching
- 🛠️ Development tooling:
  - ESLint for code linting
  - TypeScript for type safety
  - Rollup for bundling

### Documentation

- 📝 Comprehensive README with installation and usage instructions
- 🌍 Cross-platform setup guides
- 💡 Windows-specific instructions for symbolic link permissions 

## [0.1.1] - 2025-01-5
Package all dependencies into the dist directory, eliminating the need to download additional dependencies during installation.

## [0.1.2] - 2025-01-11
Compatible with Node 16.20.2, optimized code, and tested on Linux operating system.

## [0.1.3] - 2025-01-11
After successfully switching the JDK version, add a user-friendly tips.