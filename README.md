# Airbnb+ JavaScript Standard Style

ESLint config "extends": ["airbnb", "standard"]

This is an original Airbnb style guide config extended with JavaScript Standard config (with semicolons).

See [airbnb/javascript] and [standardjs] for more information.

[Compare] configs.

[airbnb/javascript]: https://github.com/airbnb/javascript
[standardjs]: https://standardjs.com/
[Compare]: https://npmcompare.com/compare/eslint-config-airbnb,standard

## Installation

Yo can install it locally as a dev dependency to use with `.eslintrc` file:

```bash
npm install --save-dev eslint-config-airbnb-standard
```

But you might need a global solution... read next.

##### IDE and Editors

Or you can clone the repo to your "Projects" folder to use with WebStorm:

```bash
cd ~/Projects
git clone https://github.com/doasync/eslint-config-airbnb-standard.git
cd eslint-config-airbnb-standard
npm install
```

You can also make `eslint` global after installing (see above):

Linux:
```bash
ln -s $(pwd -P)/node_modules/.bin/eslint $(npm bin -g)
```

Windows:
```cmd
for /f "usebackq" %F in (`npm bin -g`) do mklink "%F\eslint.cmd" "%cd%\node_modules\.bin\eslint.cmd"
for /f "usebackq" %F in (`npm bin -g`) do mklink /D "%F/../eslint" "%cd%/node_modules/eslint"
```

FYI: These commands create a symlink for `eslint` installed in `node_modules`

Then check eslint version with:
```bash
eslint -v
```

### WebStorm

File | Settings | Languages and Frameworks | JavaScript | Code Quality Tools | ESLint

![ESLint settings](http://i.imgur.com/zqbsG0p.png)

### Sublime Text 3

1. Install the repo, [make](IDE and Editors) eslint global, check `eslint -v`

2. Go to: *Preferences -> Package Control -> install package*

3. Install [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)

4. Install [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

5. Run:
    ```bash
    npm bin -g
    ```
    ... and copy the path
6. Go to: *Tools -> SublimeLinter -> Open User Settings*

   Paste the path to NodeJS installation folder inside "paths" for your OS, for example:
    ```json
    "paths": {
        "linux": [
            "~/.nvm/versions/node/v8.1.2/bin"
        ],
        "osx": [],
        "windows": ["%AppData%\\npm"]
    },
    ```
7. Create `.eslintrc` file inside your working project:
    ```json
    {
      "extends": ["airbnb", "standard"],
      "rules": {
        "semi": [2, "always"],
        "object-curly-spacing": [2, "never"]
      }
    }
    ```
    Or **just copy** `.eslintrc` from the cloned repo

8. Go to *Tools -> SublimeLinter -> Lint this view*

9. PROFIT!!!

![Example](http://i.imgur.com/wRwDALx.png)

### Custom Config

You can turn off semicolons in `.eslintrc` (*semi -> "never"*):

```json
{
  "extends": ["airbnb", "standard"],
  "rules": {
    "semi": ["error", "never"],
    "object-curly-spacing": ["error", "never"]
  }
}
```
### I want that Sublime Text

You can setup full featured nice black Sublime Text 3 using this repo: [sublime-text-3-settings](https://github.com/doasync/sublime-text-3-settings)
