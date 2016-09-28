function converter(text) {
  var eachline = text.split('\n');
  for (var i = 0; i < eachline.length; i++)
    if (eachline[i].slice(0, 4) === "####") {
      eachline[i] = "<h4>" + eachline[i].slice(4, this.length) + "</h4>"; 
    } else if (eachline[i].slice(0, 3) === "###") {
      eachline[i] = "<h3>" + eachline[i].slice(3, this.length) + "</h3>"; 
    } else if (eachline[i].slice(0, 2) === "##") {
      eachline[i] = "<h2>" + eachline[i].slice(2, this.length) + "</h2>"; 
    } else if (eachline[i].slice(0, 1) === "#") {
      eachline[i] = "<h1>" + eachline[i].slice(1, this.length) + "</h1>"; 
    } else {
      eachline[i] = "<p>" + eachline[i].slice(0, this.length) + "</p>"; 
    }
    return eachline.join("\n");
}
console.log(converter("####Denver\nOther cities.\n#Header1\n###Header3"));
console.log(converter("# Header\nfollowed by text"));

