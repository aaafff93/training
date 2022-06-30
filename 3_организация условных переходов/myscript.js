function findMax(number_1, number_2, number_3) //1)
{
    document.getElementById('output_1').innerText = 'Максимальное число: ' + (Math.max(number_1, number_2, number_3))
}

function coordinates(number_x1, number_y1, number_x2, number_y2) //2)
{
    let pointA = Math.sqrt(Math.pow(number_x1, 2) + Math.pow(number_y1, 2))
    let pointB = Math.sqrt(Math.pow(number_x2, 2) + Math.pow(number_y2, 2))
    if (pointA < pointB)   
        document.getElementById('output_2').innerText = 'Точка A ближе к началу координат' 
    else if (pointB < pointA)
        document.getElementById('output_2').innerText = 'Точка B ближе к началу координат'
    else
        document.getElementById('output_2').innerText = 'Точки A и B на одинаковом расстоянии от начала координат'
}

function sumMaxAndMin(digit_1, digit_2, digit_3) //3)
{
    document.getElementById('output_3').innerText = 'Сумма: ' + (Math.max(digit_1, digit_2, digit_3) + Math.min(digit_1, digit_2, digit_3))
}

function ascending(number_x) //4)
{
    let arr = []
    let errors = ''

    let sinX = Math.sin(number_x)
    if (isFinite(sinX))
        arr.push(sinX)
    else
        errors += ',sin(' + number_x + ') не имеет смысла'

    let cosX = Math.cos(number_x)
    if (isFinite(cosX))
    {
        arr.push(cosX)
    }
    else
        errors += ',cos(' + number_x + ') не имеет смысла'

    let lnX = Math.log(number_x)
    if (isFinite(lnX))
    {
        arr.push(lnX)
    }
    else
        errors += ',ln(' + number_x + ') не имеет смысла'

    document.getElementById('output_4').innerText = arr.map(x => x.toFixed(2)).sort() + errors
}

function isSumPositive(num_1, num_2, num_3) //5)
{
    num_1 = parseInt(num_1)
    num_2 = parseInt(num_2)
    num_3 = parseInt(num_3)

    let result = '\n'

    if (num_1 + num_2 > 0)
        result += 'Сумма ' + num_1 + ' и ' + num_2 + ' положительна и равна ' + (num_1 + num_2) + '\n'
    else
        result += 'Сумма ' + num_1 + ' и ' + num_2 + ' не положительна и равна ' + (num_1 + num_2) + '\n'

    if (num_2 + num_3 > 0)
        result += 'Сумма ' + num_2 + ' и ' + num_3 + ' положительна и равна ' + (num_2 + num_3) + '\n'
    else
        result += 'Сумма ' + num_2 + ' и ' + num_3 + ' не положительна и равна ' + (num_2 + num_3) + '\n'

    if (num_1 + num_3 > 0)
        result += 'Сумма ' + num_1 + ' и ' + num_3 + ' положительна и равна ' + (num_1 + num_3) + '\n'
    else
        result += 'Сумма ' + num_1 + ' и ' + num_3 + ' не положительна и равна ' + (num_1 + num_3) + '\n'
    
    document.getElementById('output_5').innerText = result
}

function maxMin(num_a, num_b, num_c, num_d) //6)
{
    /*num_1 = parseInt(num_1)
    num_2 = parseInt(num_2)
    num_3 = parseInt(num_3)*/

    document.getElementById('output_6').innerText = Math.max(Math.min(num_a, num_b), Math.min(num_c, num_d))
}

function replacingVariables(num_x, num_y) //7)
{
    if (num_y > num_x)
        [num_x, num_y] = [num_y, num_x]

    document.getElementById('output_7').innerText = 'x=' + num_x + ', y=' + num_y
}

function positiveNumbersCount(number_a, number_b, number_c) //8)
{
    

    document.getElementById('output_8').innerText = [number_a, number_b, number_c]
                                                    .filter(function(number) { return number % 2 ==0}).length
}

function isNumberTwoDigit(number_N) //9)
{
    let result = ''
    if (number_N > 9 && number_N < 100 && number_N % 2 == 0)
        result += 'Является'
    else
        result += 'Не является'

    document.getElementById('output_9').innerText = result
}

function doublingNumbers(numb_a, numb_b, numb_c) //10)
{
    let result = ''
    if (numb_a < numb_b && numb_b < numb_c)
    {
        numb_a *= 2
        numb_b *= 2
        numb_c *= 2
    }
    else
    {
        numb_a = Math.abs(numb_a)
        numb_b = Math.abs(numb_b)
        numb_c = Math.abs(numb_c)
    }

    document.getElementById('output_10').innerText = numb_a + ', ' + numb_b + ', ' + numb_c
}

function powersOfNumbers(dig_1, dig_2, dig_3) //11)
{
    let res = ''
    for (i = 0; i < [dig_1, dig_2, dig_3].length; i++)
    {
        if ([dig_1, dig_2, dig_3][i] >= 0)
            res += Math.pow([dig_1, dig_2, dig_3][i], 2) + ' '
        else
            res += Math.pow([dig_1, dig_2, dig_3][i], 4) + ' '
    }

    document.getElementById('output_11').innerText = res
}

function separateByAge(age) //12)
{
    let res = ''
    if (age < 7)
        res = 'Дошкольник'
    if (age >= 7 && age <19)
        res = 'Ученик'
    if (age >= 19 && age <65)
        res = 'Работник'
    if (age >= 65)
        res = 'Пенсионер'
    document.getElementById('output_12').innerText = res
}

function findEqual(n_a, n_b, n_c, n_d) //13)
{
    /*n_a = parseFloat(n_a)
    n_b = parseFloat(n_b)
    n_c = parseFloat(n_c)
    n_d = parseFloat(n_d)*/
    let res = ''
    if (n_a == n_d)
        res += '\nЧисло a = d'
    if (n_b == n_d)
        res += '\nЧисло b = d'
    if (n_c == n_d)
        res += '\nЧисло c = d'
    else
        res = Math.max(n_d - n_a, n_d - n_b, n_d - n_c)
    
    document.getElementById('output_13').innerText = res
}

function isDateCorrect(day, month) //14)
{
    let res
    if (day >= 1 && day <= 31 && month >=1 && month <= 12)
        res = 'Дата корректна'
    else
        res = 'Дата некорректна'
    
    document.getElementById('output_14').innerText = res
}

function maxPeopleInTent(allTents, firstAndSecondTents, secondAndThirdTents) //15)
{
    let inFirstTent = allTents - secondAndThirdTents
    let inSecondTent = firstAndSecondTents - inFirstTent
    let inThirdTent = allTents - firstAndSecondTents
    
    document.getElementById('output_15').innerText = 'В первой:' + inFirstTent + 
                                                    ', во второй:' + inSecondTent + 
                                                    ', в третьей: ' + inThirdTent + 
                                                    ', максимально: ' + Math.max(inFirstTent, inSecondTent, inThirdTent)
}

function maximumDistanceBetweenPoints(point_X1, point_Y1, point_X2, point_Y2, point_X3, point_Y3) //16)
{
    let res = ''

    let AB = Math.sqrt(Math.pow(point_X2 - point_X1, 2) + Math.pow(point_Y2 - point_Y1, 2))
    let AC = Math.sqrt(Math.pow(point_X3 - point_X1, 2) + Math.pow(point_Y3 - point_Y1, 2))
    let BC = Math.sqrt(Math.pow(point_X3 - point_X2, 2) + Math.pow(point_Y3 - point_Y2, 2))

    if (AB >= AC && AB >= BC)
        res += '\nСамое большое расстояние между A и B'
    if (AC >= AB && AC >= BC)
        res += '\nСамое большое расстояние между A и C'
    if (BC >= AB && BC >= AC)
        res += '\nСамое большое расстояние между B и C'

    document.getElementById('output_16').innerText = '\nРасстояния: \nA-B = ' + AB + '\nA-C = ' + AC + '\nB-C = ' + BC + res 
}

function minimumOfTwoNumbers(p_X, p_Y) //17)
{
    p_X = parseFloat(p_X)
    p_Y = parseFloat(p_Y)
    if (p_X < p_Y)
    {
        let temp_X = p_X
        p_X = (p_X + p_Y) / 2
        p_Y = temp_X * p_Y * 2
    }
    else
    {
        let temp_Y = p_Y
        p_Y = (p_X + p_Y) / 2
        p_X = p_X * temp_Y * 2
    }
    document.getElementById('output_17').innerText = 'x = ' + p_X + ', y = ' + p_Y
}

function minOfMax(num_A, num_B, num_C, num_D) //18)
{
    document.getElementById('output_18').innerText = Math.min(Math.max(num_A, num_B), Math.max(num_C, num_D))
}