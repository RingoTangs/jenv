# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2024-03-17

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