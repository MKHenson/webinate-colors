import colors = require("./Main");

colors.log(colors.red("This text should be in red"));
colors.log(colors.green("This text should be in green"));
colors.log(colors.yellow("This text should be in yellow"));
colors.log(colors.yellowBG().blue("This text should be in yellow background with blue text"));
colors.log(colors.underline("This text should be underlined"));
colors.log(colors.underline().green("This text should be underlined and in green"));
colors.log(colors.bold("This text should be bold"));