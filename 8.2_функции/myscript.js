function multNumbers() //1)
{
    let number_1 = [...document.getElementById('number_1').value].reduce((previousValue, currentValue) => previousValue * currentValue);
    let number_2 = [...document.getElementById('number_2').value].reduce((previousValue, currentValue) => previousValue * currentValue);
    let number_3 = [...document.getElementById('number_3').value].reduce((previousValue, currentValue) => previousValue * currentValue);


    document.getElementById('output_1').innerText = `Первое=${number_1}, Второе=${number_2}, Третье=${number_3}`;
}

function power_2() //2)
{
    let x_1_2 = Number(document.getElementById('x_1_2').value);
    let x_2_2 = Number(document.getElementById('x_2_2').value);
    let x_3_2 = Number(document.getElementById('x_3_2').value);

    let y_1_2 = Number(document.getElementById('y_1_2').value);
    let y_2_2 = Number(document.getElementById('y_2_2').value);
    let y_3_2 = Number(document.getElementById('y_3_2').value);

    let result = (Math.pow(x_1_2, y_1_2) + Math.pow(x_2_2, y_2_2)) / Math.pow(x_3_2, y_3_2);

    document.getElementById('output_2').innerText = `${result}`;
}

function sinX() //3)
{
    let a_3 = Number(document.getElementById('a_3').value);
    let b_3 = Number(document.getElementById('b_3').value);
    let h_3 = Number(document.getElementById('h_3').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_3 < b_3 + h_3 / 2)
    {
        table += `<tr>                  
                    <td>${a_3.toFixed(1)}</td><td>${Math.pow(Math.sin(a_3.toFixed(1)) + 1, 2)}</td>
                </tr>`;
        a_3 += h_3;
    }
    table += `\n<table/>`;
    document.getElementById('output_3').innerHTML = table;
}

function showMaximun() //4)
{
    document.getElementById('output_4').innerText = Math.max(
                                                Number(document.getElementById('A_10').value),
                                                Number(document.getElementById('B_10').value),
                                                Number(document.getElementById('C_10').value),
                                                Number(document.getElementById('D_10').value));
}

function arithmeticMean() //8)
{
    let firstNumber = [...document.getElementById('firstNumber').value];
    let secondNumber = [...document.getElementById('secondNumber').value];
    let thirdNumber = [...document.getElementById('thirdNumber').value];
    let fourthNumber = [...document.getElementById('fourthNumber').value];

    let firstNumberArithmeticMean = firstNumber.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) / firstNumber.length;
    let secondNumberArithmeticMean = secondNumber.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) / firstNumber.length;
    let thirdNumberArithmeticMean = thirdNumber.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) / firstNumber.length;
    let fourthNumberArithmeticMean = fourthNumber.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) / firstNumber.length;

    const hash = {
        'У первого больше': firstNumberArithmeticMean,
        'У второго больше' : secondNumberArithmeticMean,
        'У третьего больше' : thirdNumberArithmeticMean,
        'У четвёртого больше' : fourthNumberArithmeticMean};

    const max = Object.keys(hash).reduce((a, v) => Math.max(a, hash[v]), -Infinity);
    const result = Object.keys(hash).filter(v => hash[v] === max);
    document.getElementById('output_8').innerText = result;
}

function cotanX() //9)
{
    let a_9 = Number(document.getElementById('a_9').value);
    let b_9 = Number(document.getElementById('b_9').value);
    let h_9 = Number(document.getElementById('h_9').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_9 < b_9 + h_9 / 2)
    {
        table += `<tr>                
                    <td>${a_9.toFixed(1)}</td><td>${1 / Math.tan(a_9.toFixed(1) - 2)}</td>
                </tr>`;
        a_9 += h_9;

    }
    table += `\n<table/>`;
    document.getElementById('output_9').innerHTML = table;
}

function functionX() //10)
{
    let a_10 = Number(document.getElementById('a_10').value);
    let b_10 = Number(document.getElementById('b_10').value);
    let h_10 = Number(document.getElementById('h_10').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_10 < b_10 + h_10 / 2)
    {
        table += `<tr>
                    <td>${a_10.toFixed(1)}</td><td>${(Math.pow(a_10.toFixed(1), 2) + 2 * a_10.toFixed(1) + 3).toFixed(2)}</td>
                </tr>`;
        a_10 += h_10;

    }
    table += `\n<table/>`;
    document.getElementById('output_10').innerHTML = table;
}

function power_14() //14)
{
    let x_1_14 = Number(document.getElementById('x_1_14').value);
    let x_2_14 = Number(document.getElementById('x_2_14').value);
    let x_3_14 = Number(document.getElementById('x_3_14').value);

    let y_1_14 = Number(document.getElementById('y_1_14').value);
    let y_2_14 = Number(document.getElementById('y_2_14').value);
    let y_3_14 = Number(document.getElementById('y_3_14').value);

    let result = (Math.pow(x_1_14, y_1_14) - Math.pow(x_2_14, y_2_14)) / Math.pow(x_3_14, y_3_14);

    document.getElementById('output_14').innerText = `${result}`;
}

function tanX() //15)
{
    let a_15 = Number(document.getElementById('a_15').value);
    let b_15 = Number(document.getElementById('b_15').value);
    let h_15 = Number(document.getElementById('h_15').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_15 < b_15 + h_15 / 2)
    {
        table += `<tr>
                    <td>${a_15.toFixed(1)}</td><td>${2 * Math.tan(3 * a_15.toFixed(1)) + 1}</td>
                </tr>`;
        a_15 += h_15;

    }
    table += `\n<table/>`;
    document.getElementById('output_15').innerHTML = table;
}

function cotanX_16() //16)
{
    let a_16 = Number(document.getElementById('a_16').value);
    let b_16 = Number(document.getElementById('b_16').value);
    let h_16 = Number(document.getElementById('h_16').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_16 < b_16 + h_16 / 2)
    {
        table += `<tr>                
                    <td>${a_16.toFixed(1)}</td><td>${1 / Math.tan(a_16.toFixed(1) + 1)}</td>
                </tr>`;
        a_16 += h_16;

    }
    table += `\n<table/>`;
    document.getElementById('output_16').innerHTML = table;
}

function functionX_17() //17)
{
    let a_17 = Number(document.getElementById('a_17').value);
    let b_17 = Number(document.getElementById('b_17').value);
    let h_17 = Number(document.getElementById('h_17').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_17 < b_17 + h_17 / 2)
    {
        table += `<tr>
                    <td>${a_17.toFixed(1)}</td><td>${Math.pow(a_17.toFixed(1), 3) + 5}</td>
                </tr>`;
        a_17 += h_17;

    }
    table += `\n<table/>`;
    document.getElementById('output_17').innerHTML = table;
}