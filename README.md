# Airbnb+ JavaScript Standard Style

![ESLint Airbnb Standard JS logo](http://i.imgur.com/A2XaNqc.png)

ESLint on steroids (extends "airbnb" + "standard" configs). Global installation!

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url] [![Tweet][twitter-image]][twitter-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-airbnb-standard.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-airbnb-standard
[downloads-image]: https://img.shields.io/npm/dw/eslint-config-airbnb-standard.svg
[deps-image]: https://david-dm.org/doasync/eslint-config-airbnb-standard.svg
[issues-image]: https://img.shields.io/github/issues/doasync/eslint-config-airbnb-standard.svg
[issues-url]: https://github.com/doasync/eslint-config-airbnb-standard/issues
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/doasync/eslint-config-airbnb-standard/master/LICENSE
[twitter-image]: http://i.imgur.com/VYWV3yd.png
[twitter-url]: https://twitter.com/intent/tweet?text=ESLint%20on%20steroids%20with%20Airbnb%2B%20Standard%20JS%20styles%20(%2B%20Sublime%20Text%203%20setup):&url=https://codeburst.io/eslint-with-airbnb-standard-js-sublime-text-965a1db58793
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

It uses original Airbnb Style config extended with JavaScript Standard Style config (with semicolons).

See [airbnb/javascript] and [standardjs] for more information. [Compare] configs.

[airbnb/javascript]: https://github.com/airbnb/javascript
[standardjs]: https://standardjs.com/
[Compare]: https://npmcompare.com/compare/eslint-config-airbnb,standard

## Another package

If you want to install Airbnb config only, check this package:

ESLint + Airbnb : **[eslint-config-airbnb-bundle]**

[eslint-config-airbnb-bundle]: https://www.npmjs.com/package/eslint-config-airbnb-bundle

## Installation

Install it globally:

```bash
npm install --global eslint-config-airbnb-standard
```

You can install it locally as well:

```bash
npm install --save-dev eslint-config-airbnb-standard
```

##### Setup your IDE / Editor:

[WebStorm](#user-content-webstorm)

[VSCode](#user-content-vscode)

[Sublime Text 3](#user-content-sublime-text-3)

[Atom](#user-content-atom)

## Usage

You can now run feature packed `eslint` from any directory:

```bash
eslint -v
```

Create `.eslintrc` file in your project. Setup your IDE / Editor. And be smart!

ES6, ES7, React, JSX, async/await - all new features supported by default 👍

## Custom Config

Add your own rules to the `.eslintrc` file in your project folder.
For example, you can turn off semicolons (*semi -> "never"*):
```json
{
  "extends": ["airbnb-standard"],
  "rules": {
    "semi": ["error", "never"]
  }
}
```

## ESLint inside

You shouldn't add `eslint` to your dependencies. It's bundled with this package, just specify the path if you need.
Here is an example for `eslint-loader`:

```javascript
{
  loader: 'eslint-loader',
  options: {
    eslintPath: 'eslint-config-airbnb-standard/node_modules/eslint',
  }
},
```

## Sublime Text 3

1. Install this package globally

2. Go to: *Preferences -> Package Control -> install package*

3. Install [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)

4. Install [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

5. Run:
    ```bash
    npm bin -g
    ```
    ... and copy the path
6. Go to: *Tools -> SublimeLinter -> Open User Settings*

   Paste the path to NodeJS installation folder inside "paths" for your OS and save:
    ```json
    "paths": {
        "linux": [
            "~/.nvm/versions/node/v8.8.1/bin"
        ],
        "osx": [],
        "windows": ["%AppData%\\npm"]
    },
    ```
7. Create `.eslintrc` file inside your working project:
    ```json
    {
      "extends": ["airbnb-standard"]
    }
    ```

8. Restart Sublime Text

9. Go to *Tools -> SublimeLinter -> Lint this view*

10. You can switch to squiggly underline mark style from *Tools*. Have fun!

![Example](http://i.imgur.com/3nzwkdK.png?1)

## VSCode

1. Install this package globally (or locally)

2. Go to: *View -> Extension* or press `CTRL + SHIFT + X`

3. Search for [ESLint](https://github.com/Microsoft/vscode-eslint) extension, click it and press "Install" button

4. Press "Reload" button or reopen the editor

5. Go to: *File -> Preferences -> Settings*

   Add ESLint path to your workspace settings (do not use `~`):
    ```json
    {
      "eslint.nodePath": "/home/username/.nvm/versions/node/v10.5.0/lib/node_modules/eslint-config-airbnb-standard/node_modules/eslint",
    }
    ```

   Relative path for local installation:
    ```json
    {
      "eslint.nodePath": "node_modules/eslint-config-airbnb-standard/node_modules/eslint",
    }
    ```

7. Create `.eslintrc.js` file inside your working project root:
    ```js
    process.chdir(__dirname);

    module.exports = {
      root: true,
      parser: 'babel-eslint',
      parserOptions: {
        allowImportExportEverywhere: true,
        codeFrame: false
      },
      extends: [
        'airbnb-standard',
      ],
    };
    ```
    ![VSCode errors](https://i.imgur.com/sNL9w7V.png)

## WebStorm

File ➤ Settings / Default Settings ➤ Languages and Frameworks ➤ JavaScript ➤ Code Quality Tools ➤ ESLint

![ESLint settings](http://i.imgur.com/ZznYeJU.png)

Global installation in not necessary for WebStorm, but it is handy for the "Default Settings".

## Atom

1. Install this package globally

2. Go to: *Edit -> Preferences -> Install*

3. Install [Linter](https://atom.io/packages/linter)

4. Install [linter-eslint](https://atom.io/packages/linter-eslint)

5. Run:
    ```bash
    npm prefix -g
    ```
    ... copy the prefix path
6. Go to: *Preferences -> Packages -> linter-eslint -> Settings*

   a) Check *"Use global ESLint installation"* option at the bottom

   b) Paste the prefix path to the field *"Global Node Installation Path"* and append:
   ```bash
   /lib/node_modules/eslint-config-airbnb-standard
   ```

    ![Example](https://i.imgur.com/9pj68pp.png?1)

7. Create `.eslintrc` file inside your working project:
    ```json
    {
      "extends": ["airbnb-standard"]
    }
    ```

8. Press *`Ctrl + Shift + P` -> enter "lint" -> click "Linter:Lint"*
