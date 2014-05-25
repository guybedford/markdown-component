System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "showdown": "github:coreyti/showdown@^0.3.1",
    "prism": "github:LeaVerou/prism@gh-pages",
    "css": "github:systemjs/plugin-css@master"
  }
});

System.config({
  "versions": {
    "github:coreyti/showdown": "0.3.1",
    "github:LeaVerou/prism": "gh-pages",
    "github:systemjs/plugin-css": "master"
  }
});

