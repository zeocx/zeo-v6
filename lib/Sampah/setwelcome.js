const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
exports.addWelcome1 = (idgc, _data) => {
    const obj = { id: idgc
    }
    _data.push(obj)
    fs.writeFileSync('./database/Setwelcome/Type1.json', JSON.stringify(_data))

    return true
}


exports.addWelcome2 = (idgc, _data) => {
    const obj = { id: idgc
    }
    _data.push(obj)
    fs.writeFileSync('./database/Setwelcome/Type2.json', JSON.stringify(_data))

    return true
}



exports.teksWelcome = (teks, _data) => {
    _data.push(teks)
    fs.writeFileSync('./database/Setwelcome/tekswelcome.json', JSON.stringify(_data))

    return true
}


exports.teksLeft = (teks, _data) => {
    _data.push(teks)
    fs.writeFileSync('./database/Setwelcome/teksleft.json', JSON.stringify(_data))

    return true
}






/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
exports.delWelcome1 = (idgc, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === idgc) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/Setwelcome/Type1.json', JSON.stringify(_data))
        }
    })
    return true
}

exports.delWelcome2 = (idgc, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === idgc) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/Setwelcome/Type2.json', JSON.stringify(_data))
        }
    })
    return true
}









/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

exports.cekWelcome = (idgc, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === idgc) {
            status = true
        }
    })

    return status
}



