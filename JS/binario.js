function decimalToBinary(num) {
    let stack = []

    while (num > 0) {
        reminder = num % 2;
        stack.push(reminder);
        num = Math.floor(num/2);
    }
    
    let res = ""
    while (stack.length > 0) {
        res += stack.pop()
    }
    return res;
}

function main() {
    const num = 100;
    const res = decimalToBinary(num);
    console.log(res);
}

main();