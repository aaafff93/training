function numberOfEven() //1)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_1').innerText = 
    `Массив: ${arr.join(' ')}\nКоличество чётных: ${arr.filter(currentValue => currentValue % 2 == 0).length}`;
}

function numberOfMin() //2)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_2').innerText = 
    `Массив: ${arr.join(' ')}\nИндекс минимального: ${arr.indexOf(Math.min(...arr))}\nНомер минимального: ${arr.indexOf(Math.min(...arr)) + 1}`;
}

function multiplyAllNumbers() //3)
{
    let arr = Array.from({length: 5}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_3').innerText = 
    `Массив: ${arr.join(' ')}\nПроизведение всех чисел: ${arr.reduce((mult, currentValue) => mult * currentValue)}`;
}

function numberOfFirstNegative() //4)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_4').innerText = 
    `Массив: ${arr.join(' ')}\nИндекс первого отрицательного: ${arr.indexOf(arr.find(currentValue => currentValue < 0))}
    Номер первого отрицательного: ${arr.indexOf(arr.find(currentValue => currentValue < 0)) + 1}`;
}

function numbersEqualToX() //5)
{
    let arr = Array.from({length: 20}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_5').innerText = 
    `Массив: ${arr.join(' ')}\nКоличество чисел, равных X: ${arr.filter(currentValue => currentValue == document.getElementById('number_X').value).length}`;
}

function numberOfNegative() //6)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_6').innerText = 
    `Массив: ${arr.join(' ')}\nКоличество отрицательных: ${arr.filter(currentValue => currentValue < 0).length}`;
}

function maxNegativeNumber() //7)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_7').innerText = 
    `Массив: ${arr.join(' ')}\nМаксимальное отрицательное: ${Math.max(...arr.filter(currentValue => currentValue < 0))}`;
}

function numberOfFirstPositive() //8)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_8').innerText = 
    `Массив: ${arr.join(' ')}\nИндекс первого положительного: ${arr.indexOf(arr.find(currentValue => currentValue > 0))}
    Номер первого положительного: ${arr.indexOf(arr.find(currentValue => currentValue > 0)) + 1}`;
}

function minNPositiveNumber() //9)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_9').innerText = 
    `Массив: ${arr.join(' ')}\nМинимальное положительное: ${Math.min(...arr.filter(currentValue => currentValue > 0))}`;
}

function numberOfMax() //10)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_10').innerText = 
    `Массив: ${arr.join(' ')}\nИндекс максимального: ${arr.indexOf(Math.max(...arr))}
    Номер максимального: ${arr.indexOf(Math.max(...arr)) + 1}`;
}

function numberOfOdd() //11)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_11').innerText = 
    `Массив: ${arr.join(' ')}\nКоличество нечётных: ${arr.filter(currentValue => currentValue % 2 != 0).length}`;
}

function numbersLessThanX() //12)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_12').innerText = 
    `Массив: ${arr.join(' ')}\nКоличество чисел, равных X: ${arr.filter(currentValue => currentValue < document.getElementById('numb_X').value).length}`;
}

function differenceBetweenTheSumOfEvenAndOdd() //13)
{
    let arr = Array.from({length: 5}, () => Math.floor(Math.random() * 21 - 10));
    let evenSum = arr.filter(currentValue => currentValue % 2 == 0).reduce((previousValue, currentValue) => previousValue + currentValue);
    let oddSum = arr.filter(currentValue => currentValue % 2 != 0).reduce((previousValue, currentValue) => previousValue + currentValue);
    document.getElementById('output_13').innerText = 
    `Массив: ${arr.join(' ')}\nСумма чётных: ${evenSum}, Сумма нечётных: ${oddSum}, Разность: ${evenSum - oddSum}`;
}

function divTheSumsOfEvenAndOdd() //14)
{
    let arr = Array.from({length: 5}, () => Math.floor(Math.random() * 21 - 10));
    let evenSum = arr.filter(currentValue => currentValue % 2 == 0).reduce((previousValue, currentValue) => previousValue + currentValue);
    let oddSum = arr.filter(currentValue => currentValue % 2 != 0).reduce((previousValue, currentValue) => previousValue + currentValue);
    document.getElementById('output_14').innerText = 
    `Массив: ${arr.join(' ')}\nСумма чётных: ${evenSum}, Сумма нечётных: ${oddSum}, Отношение: ${evenSum / oddSum}`;
}

function onlyPositiveNumbers() //15)
{
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 21 - 10));
    let positiveArr = arr.filter(currentValue => currentValue > 0)
    document.getElementById('output_15').innerText = 
    `Массив: ${arr.join(' ')}\nМассив из положительных: ${positiveArr.join(' ')}`;
}

function greaterThanlast() //16)
{
    let arr = Array.from({length: 5}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_16').innerText = 
    `Массив: ${arr.join(' ')}\nКоличество: ${arr.filter(currentValue => currentValue > arr[arr.length - 1]).length}`;
}

function replaceNegativeWithZeros() //17)
{
    let arr = Array.from({length: 5}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_17').innerText = 
    `Массив: ${arr.join(' ')}\nПосле замены: ${arr.map(currentValue => (currentValue > 0) ? currentValue : 0 ).join(' ')}`;
}

function differenceBetweenMaxAndMin() //18)
{
    let arr = Array.from({length: 5}, () => Math.floor(Math.random() * 21 - 10));
    document.getElementById('output_18').innerText = 
    `Массив: ${arr.join(' ')}\nМаксимальный: ${Math.max(...arr)}, Минимальный: ${Math.min(...arr)}, Разница: ${Math.max(...arr) - Math.min(...arr)}`;
}