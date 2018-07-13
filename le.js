const pdfText = require("pdf-text")
const fs = require("fs")

const read_file = (callback) => {
    pdfText("/Users/amy/sas_data/SAS-BP-Law-enforcement-firearms-annexe.pdf", (err, chunks) => {
        if (err) throw err
        callback(chunks)
    })
}

const main = () => {
    const offset = 21
    read_file((chunks) => {
        let local_offset = 0
        for(let i = 0; i<chunks.length-offset; i++){
            console.log(chunks[i+offset])
        }
    })
}



main()
