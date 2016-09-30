class Chisel {
  constructor(markdownContent) {
    this.markdownContent = markdownContent;
  }

  get parse() {
    return this.parseMarkdownContent();
  }

  parseMarkdownContent() {
    var eachline = this.markdownContent.split('\n');
    var length   = this.lenght;

    for (var i = 0; i < eachline.length; i++)
      if (eachline[i].slice(0, 4) === "####") {
        eachline[i] = addTextTags(4, length, eachline[i]);
        eachline[i] = format(eachline[i]);
      } else if (eachline[i].slice(0, 3) === "###") {
        eachline[i] = addTextTags(3, length, eachline[i]);
        eachline[i] = format(eachline[i]);
      } else if (eachline[i].slice(0, 2) === "##") {
        eachline[i] = addTextTags(2, length, eachline[i]);
        eachline[i] = format(eachline[i]);
      } else if (eachline[i].slice(0, 1) === "#") {
        eachline[i] = addTextTags(1, length, eachline[i]);
        eachline[i] = format(eachline[i]);
      } else {
        eachline[i] = "<p>" + eachline[i].slice(0, this.length) + "</p>"; 
        eachline[i] = format(eachline[i]);
      }
      return eachline.join("\n");
  
    function addTextTags(n, length, content) {
     return "<h" + n + ">" + content.slice(n, length) + "</h" + n + ">"; 
    }

    function format(content) {
      var newContent = addFormatTags(content, "**", "strong");
      var result     = addFormatTags(newContent, "*", "em");
      return result;
    }

    function addFormatTags(content, style, tag) {
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
}

const markdown = new Chisel("Denver is one of the **most** desirable *cities* to live.\n#Header1\n####Header4\nMy *emphasized and **stronged** text* is awesome.");
console.log(markdown.parse);
