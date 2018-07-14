const fs = require("fs")
const f = require("./functions.js")


const main = () => {
    const offset = 20
    const fn = "./SAS-BP-Military-owned-firearms-annexe.pdf"
    const headers = [
        "Country Code",
        "Country",
        "Region",
        "Sub-Region",
        "Population (2017)",
        "Category",
        "Total Military Firearms",
        "Firearms in sub-catagories",
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
