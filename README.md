Webinate Colours
=================
* Current stable version 0.1.34

A simple API developed for node, that creates colors for the console CLI

## Installation

```
  npm install webinate-colors
```
## Usage in Javascript

```
	var colors = require("webinate-colors");
  
	colors.log(colors.red("This text should be in red"));
	colors.log(colors.green("This text should be in green"));
	colors.log(colors.yellow("This text should be in yellow"));
	colors.log(colors.yellowBG().blue("This text should be in yellow background with blue text"));
	colors.log(colors.underline("This text should be underlined"));
	colors.log(colors.underline().green("This text should be underlined and in green"));
	colors.log(colors.bold("This text should be bold"));
```


## Usage in Typescript

```
	/// <reference path="./node_modules/webinate-colors/definitions.d.ts" />
	import colors = require('webinate-colors');
  
	colors.log(colors.red("This text should be in red"));
	colors.log(colors.green("This text should be in green"));
	colors.log(colors.yellow("This text should be in yellow"));
	colors.log(colors.yellowBG().blue("This text should be in yellow background with blue text"));
	colors.log(colors.underline("This text should be underlined"));
	colors.log(colors.underline().green("This text should be underlined and in green"));
	colors.log(colors.bold("This text should be bold"));
```

