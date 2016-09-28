class Chisel {
  constructor(content) {
    this.content = content;
  }

  get parse() {
    return this.parseContent();
  }

  parseContent() {
    var eachline = this.content.split('\n');
    for (var i = 0; i < eachline.length; i++)
      if (eachline[i].slice(0, 4) === "####") {
        eachline[i] = addTextTags(4, this.length, eachline[i]);
      } else if (eachline[i].slice(0, 3) === "###") {
        eachline[i] = addTextTags(3, this.length, eachline[i]);
      } else if (eachline[i].slice(0, 2) === "##") {
        eachline[i] = addTextTags(2, this.length, eachline[i]);
      } else if (eachline[i].slice(0, 1) === "#") {
        eachline[i] = addTextTags(1, this.length, eachline[i]);
      } else {
        eachline[i] = "<p>" + eachline[i].slice(0, this.length) + "</p>"; 
        eachline[i] = formatting(eachline[i]);
      }
      return eachline.join("\n");
  
    function addTextTags(n, length, text) {
     return "<h" + n + ">" + text.slice(n, length) + "</h" + n + ">"; 
    }

    function formatting(text) {
      if (text.includes("**")) {
        text = text.split("**")
        for (var i = 0; i < text.length - 1; i++)
          if ( i % 2 === 0) {
            text[i] = text[i] + "<strong>";
          } else {
            text[i] = text[i] + "</strong>";
          }
        return formatting2(text.join(""));
      }
    }

    function formatting2(text) {
      if (text.includes("*")) {
        text = text.split("*")
        for (var i = 0; i < text.length -1; i++)
          if ( i % 2 === 0) {
            text[i] = text[i] + "<em>";
          } else {
            text[i] = text[i] + "</em>";
          }
        return text.join("");
      } else {
        return text;
      }
    }
  }
}

const markdown = new Chisel("Denver is one of the **most** desirable *cities* to live.\n#Header1\n####Header4\nMy *emphasized and **stronged** text* is awesome.");
console.log(markdown.parse);