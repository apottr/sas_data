const pdfText = require("pdf-text")

const read_file = (fn,callback) => {
    pdfText(fn, (err, chunks) => {
        if (err) throw err
        callback(chunks)
    })
}

const makeObj = (headers,arr) => {
    out = {}
    for(let i = 0; i<headers.length; i++){
        out[headers[i]] = arr[i]
    }
    return out
}

const parse = (fn,off,cb) => {
    const offset = off
    let outidx = 0
    let out = [[]]
    read_file(fn,(chunks) => {
        let local_offset = 0
        for(let i = 0; i<chunks.length-offset; i++){
            let chunk = chunks[i+offset]
            if(chunk.match(/[A-Z]{3}/) != null){
                out.push([])
                outidx += 1
            }
            out[outidx].push(chunk.trim())
        }
        cb(out)
    })
}

const subcat = (data, si) => {
    out = {}
    for(let i = si; i<data.length; i++){
        if(data[i].match(/[A-z]/)){
            out[data[i]] = data[i+1]
        }
    }
    return out
}

exports.parse = parse
exports.makeObj = makeObj
exports.subcat = subcat