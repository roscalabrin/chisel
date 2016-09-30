const fs = require('fs')

class Chisel {
  constructor() {
    this.parse()
  }

  parse() {
    const converted = this.parseMarkdownContent()
    fs.writeFileSync('html/ex.html', converted)
  }

  parseMarkdownContent() {
    const eachline = fs.readFileSync('markdown/ex.md', 'utf8').split('\n\n')

    return eachline.map(line => {
      const length = line.length
      if (line.slice(0, 4) === "####") return this.mdFormat(4, length, line)
      if (line.slice(0, 3) === "###") return this.mdFormat(3, length, line)
      if (line.slice(0, 2) === "##") return this.mdFormat(2, length, line)
      if (line.slice(0, 1) === "#") return this.mdFormat(1, length, line)
      return this.format(`<p>${line.slice(0, length)}</p>`)
    }).join("\n")
  }

  addTextTags(n, length, content) {
    return `<h${n}>${content.slice(n, length)}</h${n}>`
  }

  mdFormat(num, length, line) {
    return this.format(this.addTextTags(num, length, line))
  }

  format(content) {
    const newContent = this.addFormatTags(content, "**", "strong")
    return this.addFormatTags(newContent, "*", "em")
  }

  addFormatTags(content, style, tag) {
    if (content.includes(style)) return (
      content.split(style).map((content, index) => {
        if ( index % 2 === 0) return `${content}<${tag}>`
        return `${content}</${tag}>`
      }).join("")
    )
    return content
  }
}

module.exports = Chisel
