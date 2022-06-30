function squarePerimeterAndArea() //1)
{
    let side = document.getElementById('side').value;
    document.getElementById('output_1').innerText = `Периметр=${4 * side}, Площадь=${side * side}`;
}

function squareVolumeAndArea() //2)
{
    document.getElementById('output_2').innerText = 
    `Объём=${Math.pow(document.getElementById('edge').value, 3)}, Площадь=${6 * Math.pow(document.getElementById('edge').value, 2)}`;
}

function circumferenceAndArea() //3)
{
    let R = document.getElementById('R').value;
    document.getElementById('output_3').innerText = `L=${(2 * Math.PI * R).toFixed(3)}, S=${(Math.PI * R * R).toFixed(3)}`;
}

function perimeterAndArea() //4)
{
    let A = Number(document.getElementById('A').value);
    let B = Number(document.getElementById('B').value);
    document.getElementById('output_4').innerText = `Периметр=${2 * (A + B)}, Площадь=${A * B}`;
}

function exchangeOfValues() //5)
{
    let number_A = Number(document.getElementById('number_A').value);
    let number_B = Number(document.getElementById('number_B').value);
    let number_C = Number(document.getElementById('number_C').value);
    let number_D = Number(document.getElementById('number_D').value);

    [number_A, number_C] = [number_C, number_A];
    [number_B, number_D] = [number_D, number_B];

    document.getElementById('output_5').innerText = `A=${number_A}, B=${number_B}, C=${number_C}, D=${number_D}`;
}

function sinX() //6)
{
    let a_6 = Number(document.getElementById('a_6').value);
    let b_6 = Number(document.getElementById('b_6').value);
    let h_6 = Number(document.getElementById('h_6').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_6 < b_6 + h_6 / 2)
    {
        table += `<tr>
                    <td>${a_6.toFixed(1)}</td><td>${2 * Math.sin(3 * a_6.toFixed(1)) + 1}</td>
                </tr>`;
        a_6 += h_6;

    }
    table += `\n<table/>`;
    document.getElementById('output_6').innerHTML = table;
}

function tanX() //7)
{
    let a_7 = Number(document.getElementById('a_7').value);
    let b_7 = Number(document.getElementById('b_7').value);
    let h_7 = Number(document.getElementById('h_7').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_7 < b_7 + h_7 / 2)
    {
        table += `<tr>
                    <td>${a_7.toFixed(1)}</td><td>${Math.tan(a_7.toFixed(1) + 1)}</td>
                </tr>`;
        a_7 += h_7;

    }
    table += `\n<table/>`;
    document.getElementById('output_7').innerHTML = table;
}

function functionX() //8)
{
    let a_8 = Number(document.getElementById('a_8').value);
    let b_8 = Number(document.getElementById('b_8').value);
    let h_8 = Number(document.getElementById('h_8').value);
    table = `<table>
                <tr>
                    <th>Аргумент</th><th>Функция</th>
                </tr>`;  
    while (a_8 < b_8 + h_8 / 2)
    {
        table += `<tr>
                    <td>${a_8.toFixed(1)}</td><td>${(Math.pow(a_8.toFixed(1), 2) + 3).toFixed(2)}</td>
                </tr>`;
        a_8 += h_8;

    }
    table += `\n<table/>`;
    document.getElementById('output_8').innerHTML = table;
}

function functionCos() //9)
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
                    <td>${a_9.toFixed(1)}</td><td>${Math.pow(Math.cos(a_9.toFixed(1) + 1) , 2)}</td>
                </tr>`;
        a_9 += h_9;

    }
    table += `\n<table/>`;
    document.getElementById('output_9').innerHTML = table;
}

function showMininun() //10)
{
    document.getElementById('output_10').innerText = Math.min(
                                                Number(document.getElementById('A_10').value),
                                                Number(document.getElementById('B_10').value),
                                                Number(document.getElementById('C_10').value),
                                                Number(document.getElementById('D_10').value));
}

function triangleAreasComparision() //11)
{
    let area_1 = (Number(document.getElementById('cathet_1_1').value) * Number(document.getElementById('cathet_1_2').value)) / 2;
    let area_2 = (Number(document.getElementById('cathet_2_1').value) * Number(document.getElementById('cathet_2_2').value)) / 2;

    document.getElementById('output_11').innerText = 
    `\nПлощадь первого=${area_1}, Площадь второго=${area_2}${area_1 > area_2 ?
         '\nПлощадь первого больше': (area_1 < area_2 ? '\nПлощадь второго больше' : '\nПлощади равны')}`;
}

function perimeter() //12)
{
    let Ax_1 = Number(document.getElementById('Ax_1').value);
    let Ay_1 = Number(document.getElementById('Ay_1').value);
    let Bx_1 = Number(document.getElementById('Bx_1').value);
    let By_1 = Number(document.getElementById('By_1').value);
    let Cx_1 = Number(document.getElementById('Cx_1').value);
    let Cy_1 = Number(document.getElementById('Cy_1').value);
    let Dx_1 = Number(document.getElementById('Dx_1').value);
    let Dy_1 = Number(document.getElementById('Dy_1').value);

    let Ax_2 = Number(document.getElementById('Ax_2').value);
    let Ay_2 = Number(document.getElementById('Ay_2').value);
    let Bx_2 = Number(document.getElementById('Bx_2').value);
    let By_2 = Number(document.getElementById('By_2').value);
    let Cx_2 = Number(document.getElementById('Cx_2').value);
    let Cy_2 = Number(document.getElementById('Cy_2').value);
    let Dx_2 = Number(document.getElementById('Dx_2').value);
    let Dy_2 = Number(document.getElementById('Dy_2').value);

    let perimeter_1 = 2 * (Math.sqrt(Math.pow(Bx_1 - Ax_1, 2) + Math.pow(By_1 - Ay_1, 2)) + Math.sqrt(Math.pow(Cx_1 - Bx_1, 2) + Math.pow(Cy_1 - By_1, 2)));
    let perimeter_2 = 2 * (Math.sqrt(Math.pow(Bx_2 - Ax_2, 2) + Math.pow(By_2 - Ay_2, 2)) + Math.sqrt(Math.pow(Cx_2 - Bx_2, 2) + Math.pow(Cy_2 - By_2, 2)));

    document.getElementById('output_12').innerText = 
    `\nПериметр первого=${perimeter_1}, Периметр второго=${perimeter_2}${perimeter_1 > perimeter_2 ? 
        '\nПериметр первого больше': (perimeter_1 < perimeter_2 ? '\nПериметр второго больше' : '\nПериметры равны')}`;
}

function trianglePerimetersComparision() //13)
{
    let b_1 = Number(document.getElementById('cath_1_1').value);
    let c_1 = Number(document.getElementById('cath_1_2').value);

    let b_2 = Number(document.getElementById('cath_2_1').value);
    let c_2 = Number(document.getElementById('cath_2_2').value);

    let perimeter_1 = Math.sqrt(Math.pow(b_1, 2) + Math.pow(c_1, 2)) + b_1 + c_1;
    let perimeter_2 = Math.sqrt(Math.pow(b_2, 2) + Math.pow(c_2, 2)) + b_2 + c_2; 

    document.getElementById('output_13').innerText = 
    `\nПериметр первого=${perimeter_1}, Периметр второго=${perimeter_2}${perimeter_1 > perimeter_2 ? 
        '\nПериметр первого больше': (perimeter_1 < perimeter_2 ? '\nПериметр второго больше' : '\nПериметры равны')}`;
}

function arithmeticMean() //14)
{
    let firstNumber = [...document.getElementById('firstNumber').value];
    let secondNumber = [...document.getElementById('secondNumber').value];

    let firstNumberArithmeticMean = firstNumber.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) / firstNumber.length;
    let secondNumberArithmeticMean = secondNumber.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) / firstNumber.length;

    document.getElementById('output_14').innerText = 
    `\nУ первого=${firstNumberArithmeticMean}, У второго=${secondNumberArithmeticMean}${firstNumberArithmeticMean > secondNumberArithmeticMean ? 
        '\nУ первого больше': (firstNumberArithmeticMean < secondNumberArithmeticMean ? '\nУ второго больше' : '\nРавное')}`;
}

function sumOfNumbers() //15)
{
    let firstNum = [...document.getElementById('firstNum').value].reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));
    let secondNum = [...document.getElementById('secondNum').value].reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));
    let thirdNum = [...document.getElementById('thirdNum').value].reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));

    document.getElementById('output_15').innerText = `Сумма чисел первого=${firstNum}, Сумма чисел второго=${secondNum}, Сумма чисел третьего=${thirdNum}`;
}

function power_16() //16)
{
    let x_1_16 = Number(document.getElementById('x_1_16').value);
    let x_2_16 = Number(document.getElementById('x_2_16').value);
    let x_3_16 = Number(document.getElementById('x_3_16').value);

    let y_1_16 = Number(document.getElementById('y_1_16').value);
    let y_2_16 = Number(document.getElementById('y_2_16').value);
    let y_3_16 = Number(document.getElementById('y_3_16').value);

    let result = (Math.pow(x_1_16, y_1_16) + Math.pow(x_2_16, y_2_16)) / Math.pow(x_3_16, y_3_16);

    document.getElementById('output_16').innerText = `${result}`;
}

function power_17() //17)
{
    let x_1_17 = Number(document.getElementById('x_1_17').value);
    let x_2_17 = Number(document.getElementById('x_2_17').value);
    let x_3_17 = Number(document.getElementById('x_3_17').value);

    let y_1_17 = Number(document.getElementById('y_1_17').value);
    let y_2_17 = Number(document.getElementById('y_2_17').value);
    let y_3_17 = Number(document.getElementById('y_3_17').value);

    let result = Math.pow(x_1_17, y_1_17) + Math.pow(x_2_17, y_2_17) + Math.pow(x_3_17, y_3_17);

    document.getElementById('output_17').innerText = `${result}`;
}