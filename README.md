# react-redux-flow-starter-kit

This is a boilerplate to build a Front-end web application using React, Redux, SCSS, Flow and Webpack. It is also configured with webpack-dev-server, eslint, prettier and babel.

- [react-redux-flow-starter-kit](#react-redux-flow-starter-kit)
  - [Introduction](#introduction)
    - [Why not just use `create-react-app`?](#why-not-just-use-create-react-app)
    - [Development mode](#development-mode)
  - [Quick Start](#quick-start)
  - [VSCode + ESLint + Prettier](#vscode--eslint--prettier)
    - [Installation guide](#installation-guide)

## Introduction

This boilerplate/starter kit is customized from [crsandeep's boilerplate](https://github.com/crsandeep/simple-react-full-stack) with the following differences (comparing to the original).
- Removing NodeJs and Express backend server 
- Adding SCSS
- Adding Redux
- Adding Flow

This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript) and formatted through [prettier](https://prettier.io/).

### Why not just use `create-react-app`?

To me it is very limited. It is still a good starter kit and customizable though; however I wanted something else. So I went through the internet and found out [crsandeep's boilerplate](https://github.com/crsandeep/simple-react-full-stack), which was very impressive.

I just wanted to focus on front-end development only, so I customized crsandeep's boilerplate to meet my needs.

### Development mode

In the development mode, the front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/hauph/react-redux-flow-starter-kit

# Go inside the directory
cd react-redux-flow-starter-kit

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start type checking
npm run flow
```

## Folder Structure

```bash
.
├── /build/                           # All the generated files will go here, and will run from this folder
├── /node_modules/                    # 3rd-party libraries and utilities
├── /public/                          # Images, script, stylesheet etc.
├── /src/                             # The source code of the application
│   ├── /components/                  # All React components' folders will be created in this folder. 
│   │   ├── /HomePage/                # A sample component folder
│   │   │   ├── index.js              # Component's compulsory file
│   │   │   ├── styles.scss           # Component's scss file (optional)
│   ├── /container/                   # App container component
│   ├── /redux/                       # State management
│   ├── /types/                       # TypeScript's declaration files for client folder
│   ├── index.js                      # App root
├── webpack                           # Webpack configuration folder
├── .babelrc                          # Babel configuration
├── .eslintrc.json                    # Es-lint configuration
├── .flowconfig                       # Flow configuration
├── .gitignore                        # Ignored git files and folders
├── package.json                      # The list of 3rd party libraries and utilities
├── README.md                         # This file
├── webpack.config.js                 # Webpack configuration
```

## VSCode + ESLint + Prettier

[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.

### Installation guide

1.  Install [VSCode](https://code.visualstudio.com/)
2.  Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3.  Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4.  Modify the VSCode user settings to add below configuration

    ```javascript
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
    ```

Above, we have modified editor configurations. Alternatively, this can be configured at the project level by following [this article](https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99).
