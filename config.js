System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "css": "github:systemjs/plugin-css@master",
    "showdown": "github:coreyti/showdown@^0.3.1",
    "prism": "github:LeaVerou/prism@gh-pages"
  }
});

System.config({
  "versions": {
    "github:systemjs/plugin-css": "master",
    "github:coreyti/showdown": "0.3.1",
    "github:LeaVerou/prism": "gh-pages"
  }
});

