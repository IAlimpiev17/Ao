const arab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rim = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
let Leng = false;
function calculate(xax) {
    let arr = xax.split(" ")
    let a = arr[0]
    let b = arr[1]
    let z = arr[2]
    let countArab = 0
    for (let i in arab) {
        if (i == a || i == z) {
            countArab++
            if (countArab == 1 & a == z) countArab = 2
        }
    }
    let = countRim = 0
    for (let i = 0; i < rim.length; i++) {
        if (rim[i] == a || rim[i] == z) {
            countRim++
            if (countRim == 1 & (a == z)) countRim = 2
        }
    }

    try {
        if (countArab == 2 || countRim == 2) {
            if (countRim == 2) {
                return sasa(a, z, b,)
            }
            else {
                return Lionelya(a, z, b,)
            }
        }
        else {
            throw new Error("ты пидор???")
        }
    }
    catch (error) {
        throw error;
    }
}

function sasa(jojo, dio, jorno, Leng) {
    let s = jojo
    let d = dio
    try {
        if (countRim == 2) {

            for (let i = 0; i < rim.length; i++) {
                if (s == rim[i]) {
                    s = i + 1
                }
                if (d == rim[i]) {
                    d = i + 1
                }
            }
            Leng = true;
            return Lionelya(s, d, jorno, Leng);
        }
        else if (countArab == 2) {
            return Lionelya(s, d, jorno, Leng);
        }
    } catch (error) {
        throw error
    }

}


function Lionelya(suiii, ankara, harry, Leng) {
    try {
        if ((suiii >= 1 & suiii < 11) & (ankara >= 1 & ankara < 11)) {
        }
        else {
            throw new Error("Ты долбоёб???")
        }
    }
    catch (error) {
        throw error;
    }
    try {
        if (harry == "+" || harry == "-" || harry == '*' || harry == '/') {
        }
        else {
            throw new Error("Попробуй ещё, обоссаный метематик")
        }
    }
    catch (error) {
        throw error;
    }
    return Soup(suiii, ankara, harry, Leng)
}

function Soup(price, ghoust, rouch, Leng) {
    price = parseInt(price, 10)
    ghoust = parseInt(ghoust, 10)
    let p = 0;
    switch (rouch) {
        case '+':
            p = price + ghoust
            break;
        case '-':
            p = price - ghoust
            break;
        case '*':
            p = price * ghoust
            break;
        case '/':
            p = (price / ghoust) - ((price / ghoust) % 1)
            break;
    }
    return flash(p, Leng)
}
function flash(p, Leng) {
    if (Leng) {
        let temporaryP = p;
        p = [];
        while (temporaryP != 0) {
            if (temporaryP >= 100) {
                p.push("C");
                temporaryP -= 100;
            }
            else if (temporaryP >= 50) {
                p.push("L");
                temporaryP -= 50;
            }
            else if (temporaryP >= 40) {
                p.push("XL");
                temporaryP -= 40;
            }
            else if (temporaryP >= 10) {
                p.push("X");
                temporaryP -= 10;
            }
            else if (temporaryP < 10 & temporaryP > 0) {
                switch (temporaryP) {
                    case 9:
                        p.push("IX");
                        temporaryP -= 9;
                        break;
                    case 8:
                        p.push("VIII");
                        temporaryP -= 8;
                        break;
                    case 7:
                        p.push("VII");
                        temporaryP -= 7;
                        break;
                    case 6:
                        p.push("VI");
                        temporaryP -= 6;
                        break;
                    case 5:
                        p.push("V");
                        temporaryP -= 5;
                        break;
                    case 4:
                        p.push("IV");
                        temporaryP -= 4;
                        break;
                    case 3:
                        p.push("III");
                        temporaryP -= 3;
                        break;
                    case 2:
                        p.push("II");
                        temporaryP -= 2;
                        break;
                    case 1:
                        p.push("I");
                        temporaryP -= 1;
                        break;
                }
            }
            else {
                return "Ошибка в переводе"
            }
        }
        p = p.join("")
    }
    else {
    }
    return p.toString()
}
