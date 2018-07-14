const fs = require("fs")
const f = require("./functions.js")

const main = () => {
    const offset = 25
    const fn = "./SAS-BP-Civilian-held-firearms-annexe.pdf"
    const headers = [
        "Country Code",
        "Country",
        "Region",
        "Sub-Region",
        "Population (2017)",
        "Estimate of firearms in civilian possession",
        "Estimate of civilian firearms per 100 persons",
        "Computation Method",
        "Registered Firearms",
        "Unregistered Firearms"
    ]
    f.parse(fn,offset,(data) => {
        for(let i = 0; i<5; i++){
            console.log(data[i])
            console.log(f.makeObj(headers,data[i]))
        }
    })
}

main()
