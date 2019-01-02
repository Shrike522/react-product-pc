

export const makeRandomStr = (len = 6) => {
    // 97 - 122 a-z
    // 48 - 57 0-9
    let str = "", min, sub;
    while (str.length < len){

        const flag = Math.random() > 0.5 ? 1 : 0;
        if (flag) {
            min = 97;
            sub = 26;
        } else {
            min = 48;
            sub = 10;
        }

        const value = "" + String.fromCharCode(Math.floor(Math.random()*sub + min));
        str += value;
    }

    return str;

};

