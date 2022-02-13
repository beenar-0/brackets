module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false
    let count = 0
    str = str.split('')
    while (count <= 40) {
        function search() {
            str.forEach((strItem, strIndex)=>{
                bracketsConfig.forEach((configItem)=>{
                    if (strItem === configItem[0]) {
                        if (str[strIndex + 1] === configItem[1]) {
                            str.splice(strIndex, 2)
                        }
                    }
                })
            })
        }
        search()
        count++
    }
    return str.length <= 0;
}