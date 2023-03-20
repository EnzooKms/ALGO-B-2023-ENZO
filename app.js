function addString() {
    let result = ''
    for (let i = 1; i < 11; i++) {
        result += i
    }
    console.log(result);
}

// addString()

function addStringWithSpace() {
    let result = ''
    for (let i = 1; i < 11; i++) {
        result += `${i} `
    }
    console.log(result);
}

// addStringWithSpace()

function addStringImpair() {
    let result = ''
    for (let i = 1; i < 101; i++) {
        i % 2 === 0 ? false : result += `${i} `
    }
    console.log(result);
}

// addStringImpair()

function TableOf7() {
    let result = ''
    for (let i = 1; i < 11; i++) {
        result += `${i * 7} `
    }
    console.log(result);
}

// TableOf7()

function TableOfAllUnity() {
    let result = ''
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            result += `${i * j} `
        }
    }
    console.log(result);
}

// TableOfAllUnity()

function sigma10() {
    let result = 0
    for (let i = 1; i < 11; i++) {
        result += i
    }

    return result
}

// console.log(sigma10())

function factoriel10() {
    let result = 1
    for (let i = 10; i > 0; i--) {
        result *= i
    }

    return result
}

// console.log(factoriel10());

function pair10Between30() {
    let result = 0
    for (let i = 10; i < 31; i++) {
        i % 2 === 0 ? result += i : false
    }

    return result
}

// console.log(pair10Between30());


function fahrenheit(celsius) {
    return celsius * 9 / 5 + 32
}

// console.log(fahrenheit(30));

function addNumber(numbers) {
    let result = 0
    for (const number of numbers) {
        result += number
    }

    return result
}

// console.log(addNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function Moyenne(numbers) {
    let result = 0
    for (const number of numbers) {
        result += number
    }

    return result / numbers.length
}

// console.log(Moyenne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function Positif(numbers) {
    const result = []

    for (const number of numbers) {
        number > 0 ? result.push(number) : false
    }

    return result
}

// console.log(Positif([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, 3, -4, -5, -55, 0]));

function Max(numbers) {
    // return Math.max(...numbers)  on peut utiliser cela la consigne ne dit pas de pas l'utiliser !
    let result = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] > result ? result = numbers[i] : false
    }

    return result
}

// console.log(Max([-1, -2, -3, 5]));

function Fibonacci(number, first = 0, last = 1, string = '0') {

    if (number === 0) {
        console.log(string)
    }
    else {
        const New = first + last
        string += ` ${New}`
        Fibonacci(number - 1, last, New, string)
    }
}

Fibonacci(10)

function sommeOfNumber(number) {
    let result = 0

    for (const el of `${number}`) {
        result += parseInt(el)
    }

    return result
}

// console.log(sommeOfNumber(12345678910));

function inverseFirstAndLast(numbers) {
    const last = numbers.pop()
    const first = numbers.shift()

    numbers.unshift(last)
    numbers.push(first)

    return numbers
}

// console.log(inverseFirstAndLast([1, 2, 3, 4]));

function countSpec(text) {
    const char = '§ ! @ # $ % * ( ) _ - = + { } [ ] \ | < > ? / . , ;'
    let count = 0

    for (const el of text) {
        if (char.includes(el)) {
            count++
        }
    }

    return count
}

// console.log(countSpec('////sdxcvbn,;'));

function moyenneOfString(text) {
    const spliter = text.split(',')
    let result = 0

    for (const number of spliter) {
        result += parseInt(number)
    }

    return result / spliter.length
}

// console.log(moyenneOfString('1,2,3,4,5,6,7,8,9,10'));