const fs = require("fs")
const f = require("./functions.js")


const main = () => {
    const offset = 21
    const fn = "./SAS-BP-Law-enforcement-firearms-annexe.pdf"
    const headers = [
        "Country Code",
        "Country",
        "Continent",
        "Sub-Region",
        "Population (2017)",
        "Category",
        "Active Personnel",
        "Law Enforcement Firearms",
        "Computation Method"
    ]
    f.parse(fn,offset,(data) => {
        for(let i = 0; i<5; i++){
            console.log(data[i])
            console.log(f.makeObj(headers,data[i]))
        }
    })
}

main()
