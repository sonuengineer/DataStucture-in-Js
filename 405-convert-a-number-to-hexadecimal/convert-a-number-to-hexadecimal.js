let toHex = function(num) {
    if (num === 0){
        return "0"
    }
    const HEX_BASE = 16
    num = num > 0 ? num : Math.pow(2,32)+num;
    let hexRes = ''
    while (num > 0){
        hexRes += convert0To16ToHex(num % HEX_BASE)
        num = Math.floor(num/HEX_BASE)
    }
    return hexRes.split("").reverse().join(""); // reverse
};

let convert0To16ToHex = function(num){
    switch (num) {
        case 10:
            return 'a'
        case 11:
            return 'b'
        case 12:
            return 'c'
        case 13:
            return 'd'
        case 14:
            return 'e'
        case 15:
            return 'f'
        default:
            return num.toString()
    }
}