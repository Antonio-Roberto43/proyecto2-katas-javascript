const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let promedio = 0
    for (let i=0; i < numberList.length; i++) {
        promedio += numberList[i]
    };

    promedio = promedio / (numberList.length);

    return promedio
};

console.log(average(numbers));