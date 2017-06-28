# Airbnb+ JavaScript Standard Style

ESLint config "extends": ["airbnb", "standard"]

https://npmcompare.com/compare/eslint-config-airbnb,standard

## Installation

Install in the current working directory:

```bash
npm install --save-dev eslint-config-airbnb-standard
```

Or just clone this repo to your "Projects" folder to use with WebStorm:

```
git clone https://github.com/doasync/eslint-config-airbnb-standard.git
```

### WebStorm

File | Settings | Languages and Frameworks | JavaScript | Code Quality Tools | ESLint

![ESLint settings](http://i.imgur.com/zqbsG0p.png)

### Custom Config

You can turn off semicolons in `custom.eslintrc.json`:

```json
{
  "extends": ["airbnb", "standard"],
  "rules": {
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "never"]
  }
}
```

#### More info
See [airbnb/javascript] and [standardjs] for more information.

[airbnb/javascript]: https://github.com/airbnb/javascript
[standardjs]: https://standardjs.com/
