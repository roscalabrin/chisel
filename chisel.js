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
      eachline[i] = formatting(eachline[i]);
    }
    return eachline.join("\n");
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
   // return text.join("");
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

console.log(converter("Denver is one of the **most** desirable *cities* to live.\n#Header1\n###Header3"));
console.log(converter("My *emphasized and **stronged** text* is awesome."));
