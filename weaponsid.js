const cheerio = require("cheerio")
const fs = require("fs")

const f = fs.readFileSync("./SASweaponsid.html")
const $ = cheerio.load(f)
const main = () => {
    $("tr.parent-weapon > td").each((i,e) => {
        
    })
}

main()