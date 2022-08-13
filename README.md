<p align="center">
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ide">IDE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licence">Licence</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>
<p align="center">
    <a href="https://douglasdl.github.io/NLW6-Origin/">
        <img alt="OriginSix" src="https://douglasdl.github.io/images/OriginSix.png" width="100%">
    </a>
</p>

## 🚀 Technologies

This project was developped using the following technologies:
<p alight="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://reactnative.dev/"><img height="40" src="https://douglasdl.github.io/images/ReactNative2.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://expo.dev/"><img height="40" src="https://douglasdl.github.io/images/Expo.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.typescriptlang.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"></a>
</p>

📚 Libraries
- [Google Fonts](https://fonts.google.com/)
- [SwiperJS](https://swiperjs.com/) or [SwipeJS (Github)](https://github.com/nolimits4web/Swiper)
- [ScrollRevel](https://scrollrevealjs.org)
- [Scroll Reveal](https://scrollrevealjs.org/)

🛠 Utilities

Sample Images
- [Unsplash](https://unsplash.com/s/photos/hairdresser)
- [Random User Generator](https://randomuser.me/)

Icons
- [IcoMoon App](https://icomoon.io/app/#/select)
- [FlatIcon](https://www.flaticon.com/br/)
- [IconFinder](https://www.iconfinder.com/)
- [ReactIcons](https://react-icons.github.io/react-icons/icons?name=fi)

## 📐 Project

This was a Foundation project from NLW6-Origin.
Check the project online [here](https://douglasdl.github.io/NLW6-Origin/).
OriginSix is an institutional page in the One Page format, responsive to be used in several company types, from micro, small and medi companies.
It's coposed by the following sections: Header, Navigation, Home, About, Services, Testimonials, Contacts and Footer.

## 🔖 Layout

The basic layout project can be accessed in [this link](https://www.figma.com/file/5zQxkqo0Kl2GaCljU40WXa/Projetos-React-Native-Ignite-2022) in your [Figma](https://figma.com) account.

## 💻 IDE
This project was done using [Visual Studio Code](https://code.visualstudio.com/) IDE.

### 🧩 VS Code Extensions

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20is%20an%20opinionated%20code,account%2C%20wrapping%20code%20when%20necessary.)

### ⚙ VS Code Configuration

-   CRTL + SHIFT + P
    -   settings.json

```javascript
{
    /* Define o tema do VS Code */
    "workbench.colorTheme": "Dracula",
    /*"workbench.colorTheme": "Omini", */
    "workbench.iconTheme": "material-icon-theme",

    /* Configura tamanho e família da fonte */
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "workbench.editor.tabSizing": "shrink",
    "explorer.compactFolders": false,

    /* Aplica linhas verticais para lembrar quabra de linha em códigos muito grandes */
    "editor.rulers": [80, 120],
    "editor.formatOnSave": false,
    "editor.minimap.enabled": false,

    "window.zoomLevel": -1,
    "explorer.confirmDelete": false,
    "terminal.integrated.shell.osx": "/bin/zsh",
    "tabnine.experimentalAutoImports": true,
    "python.languageServer": "Pylance",
    "explorer.confirmDragAndDrop": false,
    "editor.accessibilitySupport": "off",

    /* Formatter */
    "prettier.tabWidth": 4,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,

    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.doNotVerifyTags": true,

    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    }

    /*"eslint.packageManager": "yarn", */
    /*"eslint.autoFixOnSave": true, */
}
```

## 📝 Licence

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Done with ♥ by [Douglas Dias Leal](mailto:douglasdiasleal87@gmail.com)




# ImHere

- [React Native Apps](https://reactnative.dev/showcase)

App to check participants presence

                macOS   Windows   Linux
                  ✓       ✓         ✓
CLI         iOS:  ✓       x         x
        Android:  ✓       ✓         ✓
Expo        iOS:  ✓       ✓         ✓
        Android:  ✓       ✓         ✓

Expo:   Managed workflow    (ios, android) x
        Bare workflow       (ios, android) ✓

[Expo](https://expo.dev/)
[Expo Go](https://expo.dev/client)

CLI: Command line interface. (npm / yarn)
        npm install -g library_name
        yarn add library_name

Expo:
        expo install library_name

[Environment Setup Expo](https://reactnative.dev/docs/environment-setup)
[Environment Setup Rocketseat](https://react-native.rocketseat.dev/)

## Check Node.js versions, install and use different versions
List all available versions:
```sh
nvm ls-remote
```
Check the current version:
```sh
node -v
```
Install a new version:
```sh
nvm install v16.16.0
```
Use the new version:
```sh
nvm use v16.16.0
```

## Create a new project
```sh
expo init imhere --npm
```

- Select 'blank (TypeScript)'.

## Start the project
```sh
expo start
```
