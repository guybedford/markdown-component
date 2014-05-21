var showdown = require('showdown');
var converter = new showdown.converter();

document.registerElement('x-markdown', {
  prototype: {
    createdCallback: function() {
      this.innerHTML = converter.makeHtml(this.innerHTML.split('\n').map(function(line) {
        return line.trim();
      }).join('\n'));
    }
  }
});