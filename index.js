const fs = require('fs')

async function newTable(data, existtext) {
    if(!data) return console.log('No data has been provided! Please check if you are returning an array')

    data = JSON.parse(data)

    let possiblekeys = []

    let table = ''

    let entries = ''

    data.forEach(entry => {
        let keys = Object.keys(entry)

        // console.log(keys)

        possiblekeys = possiblekeys.concat(keys)

        keys.forEach(key => {
            if(entry[key]) entries += `| ${entry[key]}`
            else entries += `| ${existtext | "undefined"}`
        })

        entries += `\|\n`
    })

    console.log(entries)

    let uniquekeys = possiblekeys.filter((key, index) => {
        return possiblekeys.indexOf(key) === index
    })

    let tableheader = ''

    uniquekeys.forEach(key => {
        tableheader = `${tableheader} | ${key}`
    })

    tableheader += ' |'

    table = `${tableheader}\n${"|" + " - \|".repeat(uniquekeys.length)}`

    console.log(table)

    
}

async function newReadme(template, data) {

}

const data = fs.readFileSync(`${__dirname}/./data.json`, 'utf8')

newTable(data)