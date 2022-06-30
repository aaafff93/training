function luckyTicket() //1)
{
    sum = 0
    for (i = 0; i < 10; i++)
        for (j = 0; j < 10; j++)
            for (k = 0; k < 10; k++)
                for (l = 0; l < 10; l++)
                    for (m = 0; m < 10; m++)
                        for (n = 0; n < 10; n++)
                            if (i + j + k == 13 && l + m + n == 13)
                            {
                                sum += 1;
                            }
    document.getElementById('output_1').innerText = sum;
}

function combineWorkingHours() //2)
{
    let N = document.getElementById('number_N').value - 1
    let m = document.getElementById('number_m').value * 60
    for (i = 0; i < N; i++)
    {
        m += 20
    }

    document.getElementById('output_2').innerText = `${parseInt(m / 60)}ч. ${m % 60}мин.`;
}

function sumOfMoney() //3)
{
    let contribution = document.getElementById('contribution').value
    let years = document.getElementById('years').value
    let rateOfInterest = document.getElementById('rateOfInterest').value
    
    for (i = 0; i < years; i++)
    {
        contribution *= (1+ rateOfInterest / 100)
    }

    document.getElementById('output_3').innerText = `Сумма = ${contribution.toFixed(2)} руб.`;
}

function increaseInTheAmount() //4)
{
    let numb_S = document.getElementById('numb_S').value
    let increasingTheContribution = document.getElementById('increasingTheContribution').value
    let sum = parseFloat(numb_S)
    let res = ''

    for (i = 0; i < 10; i++)
    {
        sum += sum * (increasingTheContribution / 100)
        res += `\nМесяц: ${i + 1} | Прирост = ${(sum - numb_S).toFixed(2)} руб.`
    }

    document.getElementById('output_4').innerText = `${res}`;
}

function amountAfterSeveralYears() //5)
{
    let rate = parseFloat(document.getElementById('rate').value);
    let deposit = parseFloat(document.getElementById('deposit').value);
    let desiredValue = document.getElementById('desiredValue').value;
    let years = 1;
    let res = '';

    do
    {
        deposit += rate / 100 * deposit;
        alert(deposit)
        res += `\nГод: ${years} | Сумма: ${(deposit).toFixed(2)} руб.`
        years++
    }
    while(deposit < desiredValue);

    document.getElementById('output_5').innerText = `${res}`;
}

function scholarshipDeficit() //6)
{
    let scholarship = parseFloat(document.getElementById('scholarship').value);
    let expenses = parseFloat(document.getElementById('expenses').value);
    let percent = document.getElementById('percent').value;
    let deficit = 0
    let res = '';

    let month = 1
    while (month <= 10)
    {
        res += `\nМесяц: ${month} | Стипендия: ${scholarship.toFixed(2)} | Расходы: ${expenses.toFixed(2)} | Дефицит: ${(expenses - scholarship).toFixed(2)} руб.`
        deficit += expenses - scholarship
        expenses *= 1 + percent / 100;
        month++
    }

    document.getElementById('output_6').innerText = `${res}\nНеобходимо попросить ${deficit.toFixed(2)}`;
}

function passwordVerification() //7)
{
    document.getElementById('image_Cat').src = '';
    if (document.getElementById('login').value=='admin' && document.getElementById('password').value=='12345')
    {
        document.getElementById('output_7').innerText = `Верно`;
        document.getElementById('image_Cat').src = 'cat.jpg';
    }
    else
        document.getElementById('output_7').innerText = `Неправильный логин или пароль`;
}

function comparisonOfPrecipitation() //8)
{
    let firstYear = 0
    let secondYear = 0
    for (i = 1; i <= 7; i++)  
        firstYear += Number(document.getElementById(i).value);
    for (i = 11; i <= 17; i++)  
        secondYear += Number(document.getElementById(i).value);
    if (firstYear > secondYear)
        document.getElementById('output_8').innerText = `\nВ первый год: ${firstYear}\nВо второй год: ${secondYear}\nПревысило на ${firstYear - secondYear}`;
    else
        document.getElementById('output_8').innerText = `\nВ первый год: ${firstYear}\nВо второй год: ${secondYear}\nНе превысило`;
}

function theBestGroupOfStudents() //9)
{
    let numberInTheGroup = parseInt(document.getElementById('num_N').value)
    let group_1 = ''
    let group_2 = ''
    let group_3 = ''
    let averageGroup_1 = 0
    let averageGroup_2 = 0
    let averageGroup_3 = 0
    let res = ''

    for (i = 0; i < numberInTheGroup; i++)
    {
            let grade_1 = Math.floor(Math.random() * 4 + 2)
            let grade_2 = Math.floor(Math.random() * 4 + 2)
            let grade_3 = Math.floor(Math.random() * 4 + 2)      
            averageGroup_1 += (grade_1 + grade_2 + grade_3) / 3  
            group_1 += `\nЭкзамен 1: |${grade_1}| Экзамен 2: |${grade_2}| Экзамен 3: |${grade_3}| Среднее для ученика: ${((grade_1 + grade_2 + grade_3) / 3).toFixed(2)}`           
    }
    averageGroup_1 = (averageGroup_1 / numberInTheGroup).toFixed(2)
    group_1 += `\nСреднее для группы 1: ${averageGroup_1}`

    for (i = 0; i < numberInTheGroup; i++)
    {
            let grade_1 = Math.floor(Math.random() * 4 + 2)
            let grade_2 = Math.floor(Math.random() * 4 + 2)
            let grade_3 = Math.floor(Math.random() * 4 + 2)     
            averageGroup_2 += (grade_1 + grade_2 + grade_3) / 3       
            group_2 += `\nЭкзамен 1: |${grade_1}| Экзамен 2: |${grade_2}| Экзамен 3: |${grade_3}| Среднее для ученика: ${((grade_1 + grade_2 + grade_3) / 3).toFixed(2)}`
    }
    averageGroup_2 = (averageGroup_2 / numberInTheGroup).toFixed(2)
    group_2 += `\nСреднее для группы 2: ${averageGroup_2}`

    for (i = 0; i < numberInTheGroup; i++)
    {
            let grade_1 = Math.floor(Math.random() * 4 + 2)
            let grade_2 = Math.floor(Math.random() * 4 + 2)
            let grade_3 = Math.floor(Math.random() * 4 + 2)    
            averageGroup_3 += (grade_1 + grade_2 + grade_3) / 3        
            group_3 += `\nЭкзамен 1: |${grade_1}| Экзамен 2: |${grade_2}| Экзамен 3: |${grade_3}| Среднее для ученика: ${((grade_1 + grade_2 + grade_3) / 3).toFixed(2)}`
    }
    averageGroup_3 = (averageGroup_3 / numberInTheGroup).toFixed(2)
    group_3 += `\nСреднее для группы 3: ${averageGroup_3}`

    for (i = 0; i < 3; i++)
        if (Math.max(averageGroup_1, averageGroup_2, averageGroup_3) == [averageGroup_1, averageGroup_2, averageGroup_3][i])
            res += `\nВ группе ${i + 1} самый высокий средний балл`

    document.getElementById('output_9').innerText = `${group_1}\n${group_2}\n${group_3}\n${res}`
}

function monthlyTemperature() //10)
{
    let res = ''
    let daysWithNegativeTemperature = 0
    let arr = Array.from({length: 30}, (v) => Math.floor(Math.random() * 30 - 15))
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        {
            daysWithNegativeTemperature++
            res += `<strong>${arr[i]}</strong>(${daysWithNegativeTemperature})&nbsp;&nbsp;`
        }
        else
            res += `${arr[i]}&nbsp;&nbsp;`
    }
    document.getElementById('output_10').innerHTML = `<br>${res}<br>Количество дней с минусовой температурой: ${daysWithNegativeTemperature}`
}

function heightDifference() //11)
{
    let heights = Array.from({length: 20}, (v) => Math.floor(Math.random() * 40 + 160))
    document.getElementById('output_11').innerText = `\nВсе: ${heights}\nРазница: ${Math.max(...heights) - Math.min(...heights)} см.`
}

function gradesInPhysics() //12)
{
    let grades = Array.from({length: 20}, (v) => Math.floor(Math.random() * 4 + 2))
    document.getElementById('output_12').innerText = 
    `\nВсе оценки:\n${grades.join(' ')}\nКоличество пятёрок: ${grades.filter(number => number == 5).length} Количество троек: ${grades.filter(number => number == 3).length}`
}

function tonnageChecking() //13)
{
    let allCargo = Array.from({length: 10}, (v) => Math.floor(Math.random() * 100 + 1));
    let sum = allCargo.map(i => x += i, x = 0).reverse()[0];
    let loadCapacity = Number(document.getElementById('loadCapacity').value);
    if (sum >= loadCapacity)
        document.getElementById('output_13').innerText = `\nВсе грузы:\n${allCargo.join('кг. ')} кг. Масса всего: ${sum} кг.\nМасса не превышена`;
    else
        document.getElementById('output_13').innerText = `\nВсе грузы:\n${allCargo.join('кг. ')} кг. Масса всего: ${sum} кг.\nМасса превышена`;
}

function cuttingOffTheFabric() //14)
{
    let fabricLength = Number(document.getElementById('fabricLength').value);
    let lengthOfCut = Number(document.getElementById('lengthOfCut').value);
    if (fabricLength >= lengthOfCut)
    {
        document.getElementById('fabricLength').value = fabricLength - lengthOfCut;
        document.getElementById('output_14').innerText += `\nОтрезано ${lengthOfCut}, осталось ткани: ${document.getElementById('fabricLength').value}`;
    }
    else
        document.getElementById('output_14').innerText += `\nТкани не хватает`;
}

function excessDebt() //15)
{
    let loan = Number(document.getElementById('loan').value);
    let annualInterest = Number(document.getElementById('annualInterest').value);
    let amountOfDebt = Number(document.getElementById('amountOfDebt').value);
    let years = 0;
    let res = '';
    
    while (loan < amountOfDebt)
    {
        years++;
        loan += (loan / 100) * annualInterest;
        res += `\nГод: ${years}, Сумма:${loan.toFixed(2)}`
    }
    document.getElementById('output_15').innerText = `${res}`;
}

function totalDistance() //16)
{
    let number_V = Number(document.getElementById('number_V').value);
    let number_M = Number(document.getElementById('number_M').value);
    let n_N = Number(document.getElementById('n_N').value);
    let totalDistance = 0;
    res = ''

    for (i = 1; i < n_N + 1; i++)
    {
        res += `\nДень: ${i}, Пробег за день:${number_V.toFixed(3)} км.`
        totalDistance += number_V;
        number_V += (number_V / 100 * number_M);
    }
    document.getElementById('output_16').innerText = `${res}\nВсего: ${totalDistance.toFixed(3)} км.`;  
}

function totalDistanceDoubling() //17)
{
    let num_S = Number(document.getElementById('num_S').value);
    let firstDay = num_S;
    let num_N1 = Number(document.getElementById('num_N1').value);
    res = '';
    i = 1;

    while(firstDay * 2 >= num_S)
    {
        res += `\nДень: ${i}, Пробег за день:${num_S.toFixed(3)} км.`;
        num_S += (num_S / 100 * num_N1);
        i++;
    }
    if (firstDay * 2 == num_S)
        document.getElementById('output_17').innerText = `${res}\nНа ${i - 1} день`;  
    else
        document.getElementById('output_17').innerText = `${res}\nНа ${i} день`; 
}

function depositAmount() //18)
{
    let n_S = Number(document.getElementById('n_S').value);
    let n_N1 = Number(document.getElementById('n_N1').value);
    let n_N2 = Number(document.getElementById('n_N2').value);
    let totalSum = n_S;
    res = '';

    for (i = 1; i <= 12; i++)
    {
        if (i % 2 == 0)
        {
            res += `\nМесяц:${i}, Прирост:${(totalSum * (n_N1 / 100)).toFixed(2)}, Сумма=${(totalSum + totalSum * (n_N1 / 100)).toFixed(2)}`;
            totalSum += totalSum * (n_N1 / 100);
        }
        else
        {
            res += `\nМесяц:${i}, Прирост:${(totalSum * (n_N1 / 100) + n_S * (n_N2 / 100)).toFixed(2)}, Сумма=${(totalSum + totalSum * (n_N1 / 100) + n_S * (n_N2 / 100)).toFixed(2)}`;
            totalSum += totalSum * (n_N1 / 100) + n_S * (n_N2 / 100);
        }
        
    }
    document.getElementById('output_18').innerText = res;
}