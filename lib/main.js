const fs = require('fs')

class Chisel {
  constructor() {
    this.parse()
  }

  parse() {
    const converted = this.parseMarkdownContent();
    fs.writeFileSync('html/ex.html', converted)
  }

  parseMarkdownContent() {
    var eachline = fs.readFileSync('markdown/ex.md', 'utf8').split('\n');
    var length   = this.lenght;

    for (var i = 0; i < eachline.length; i++)
      if (eachline[i].slice(0, 4) === "####") {
        eachline[i] = this.addTextTags(4, length, eachline[i]);
        eachline[i] = this.format(eachline[i]);
      } else if (eachline[i].slice(0, 3) === "###") {
        eachline[i] = this.addTextTags(3, length, eachline[i]);
        eachline[i] = this.format(eachline[i]);
      } else if (eachline[i].slice(0, 2) === "##") {
        eachline[i] = this.addTextTags(2, length, eachline[i]);
        eachline[i] = this.format(eachline[i]);
      } else if (eachline[i].slice(0, 1) === "#") {
        eachline[i] = this.addTextTags(1, length, eachline[i]);
        eachline[i] = this.format(eachline[i]);
      } else {
        eachline[i] = "<p>" + eachline[i].slice(0, this.length) + "</p>";
        eachline[i] = this.format(eachline[i]);
      }
      return eachline.join("\n");
  }

  addTextTags(n, length, content) {
   return "<h" + n + ">" + content.slice(n, length) + "</h" + n + ">";
  }

  format(content) {
    var newContent = this.addFormatTags(content, "**", "strong");
    var result     = this.addFormatTags(newContent, "*", "em");
    return result;
  }

  addFormatTags(content, style, tag) {
    if (content.includes(style)) {
      content = content.split(style)
      for (var i = 0; i < content.length - 1; i++)
        if ( i % 2 === 0) {
          content[i] = content[i] + "<" + tag + ">";
        } else {
          content[i] = content[i] + "</" + tag + ">";
        } return content.join("");
    } else {
      return content;
    }
  }
}

module.exports = Chisel
