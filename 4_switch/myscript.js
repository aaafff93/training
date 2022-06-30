function details() //1)
{
    switch(document.form_1.detail.value)
    {
        case 'screw' : document.form_1.output_1.value = 'Шуруп'; break;
        case 'nutbolt' : document.form_1.output_1.value = 'Гайка'; break;
        case 'grommet' : document.form_1.output_1.value = 'Винт'; break;
        case 'tack' : document.form_1.output_1.value = 'Гвоздь'; break;
        case 'bolt' : document.form_1.output_1.value = 'Болт'; break;
    }
}

function showCourse() //2)
{
    switch(document.form_2.course.value)
    {
        case '1' : document.form_2.output_2.value = 'Привет, первокурсник'; break;
        case '2' : document.form_2.output_2.value = 'Привет, второкурсник'; break;
        case '3' : document.form_2.output_2.value = 'Привет, третьекурсник'; break;
        case '4' : document.form_2.output_2.value = 'Привет, четверокурсник'; break;
        case '5' : document.form_2.output_2.value = 'Привет, пятикурсник'; break;
        default : document.form_2.output_2.value = 'Неправильный ввод';
    }
}

function showHolidays() //3)
{
    switch(document.form_3.holidays.value)
    {
        case '1' : document.form_3.output_3.value = '7 января: Рождество'; break;
        case '2' : document.form_3.output_3.value = '23 февраля: День защитника отечества, Где-то в конце февраля: Масленица'; break;
        case '3' : document.form_3.output_3.value = '8 марта: Международный женский день'; break;
        case '4' : document.form_3.output_3.value = 'Где-то в конце апреля: Пасха'; break;
        case '5' : document.form_3.output_3.value = '1 мая: Праздник Весны и Труда, 9 мая: День Победы'; break;
        case '6' : document.form_3.output_3.value = '12 июня: День России'; break;
        case '7' : document.form_3.output_3.value = 'Нет праздников'; break;
        case '8' : document.form_3.output_3.value = 'Нет праздников'; break;
        case '9' : document.form_3.output_3.value = 'Нет праздников'; break;
        case '10' : document.form_3.output_3.value = 'Нет праздников'; break;
        case '11' : document.form_3.output_3.value = '4 Ноября: День народного единства'; break;
        case '12' : document.form_3.output_3.value = '31 декабря: Новый год'; break;
        default : document.form_3.output_3.value = 'Неправильный ввод';
    }
}

function calculateTriangle() //4)
{
    switch(document.form_4.triangle.value)
    {
        case 'a' : 
        {
            let S = Math.pow(document.form_4.triangleValue.value, 2) * Math.sqrt(3) / 4;
            let h = document.form_4.triangleValue.value * Math.sqrt(3) / 2;
            let r = document.form_4.triangleValue.value / (2 * Math.sqrt(3));
            let R = document.form_4.triangleValue.value / Math.sqrt(3);

            document.form_4.output_4.value = `S = ${S.toFixed(3)}, h  = ${h.toFixed(3)}, r = ${r.toFixed(3)}, R = ${R.toFixed(3)}`; break;
        }
        case 'S' : 
        {
            let a = 2 * Math.sqrt(document.form_4.triangleValue.value/Math.sqrt(3));
            let h =  Math.sqrt(Math.sqrt(3) * document.form_4.triangleValue.value);
            let r = a / (2* Math.sqrt(3));
            let R = 2 * r;

            document.form_4.output_4.value = `a = ${a.toFixed(3)}, h  = ${h.toFixed(3)}, r = ${r.toFixed(3)}, R = ${R.toFixed(3)}`; break;
        }
        case 'h' : 
        {
            let a = 2 * document.form_4.triangleValue.value / Math.sqrt(3);
            let S = Math.pow(document.form_4.triangleValue.value, 2) / Math.sqrt(3);
            let r = document.form_4.triangleValue.value / 3;
            let R = 2 * document.form_4.triangleValue.value / 3;

            document.form_4.output_4.value = `a = ${a.toFixed(3)}, S  = ${S.toFixed(3)}, r = ${r.toFixed(3)}, R = ${R.toFixed(3)}`; break;
        }
        case 'r' : 
        {
            let a = 2 * Math.sqrt(3) * document.form_4.triangleValue.value;
            let S = 3 * Math.sqrt(3) * Math.pow(document.form_4.triangleValue.value, 2);
            let h = 3 * document.form_4.triangleValue.value;
            let R = 2 * document.form_4.triangleValue.value;

            document.form_4.output_4.value = `a = ${a.toFixed(3)}, S  = ${S.toFixed(3)}, h = ${h.toFixed(3)}, R = ${R.toFixed(3)}`; break;
        }
        case 'R' : 
        {
            let a = Math.sqrt(3) * document.form_4.triangleValue.value;
            let S = 3 * Math.sqrt(3) * Math.pow(document.form_4.triangleValue.value, 2) / 4;
            let h = 3 * document.form_4.triangleValue.value / 2;
            let r = document.form_4.triangleValue.value / 2;

            document.form_4.output_4.value = `a = ${a.toFixed(3)}, S  = ${S.toFixed(3)}, h = ${h.toFixed(3)}, r = ${r.toFixed(3)}`; break;
        }
    }
}

function calculateTrigonometry() //5)
{
    switch(document.form_5.trigonometry.value)
    {
        case 'sin' : 
        {
            document.form_5.output_5.value = `sin(x) = ${Math.sin(document.form_5.trig_X.value)}, 
                                            sin(y) = ${Math.sin(document.form_5.trig_Y.value)}`; break;
        }
        case 'cos' : 
        {
            document.form_5.output_5.value = `cos(x) = ${Math.cos(document.form_5.trig_X.value)}, 
                                            cos(y) = ${Math.cos(document.form_5.trig_Y.value)}`; break;
        }
        case 'tg' : 
        {
            document.form_5.output_5.value = `tg(x) = ${Math.tan(document.form_5.trig_X.value)}, 
                                            tg(y) = ${Math.tan(document.form_5.trig_Y.value)}`; break;
        }
        case 'ctg' : 
        {
            document.form_5.output_5.value = `ctg(x) = ${1 / Math.tan(document.form_5.trig_X.value)}, 
                                            ctg(y) = ${1/ Math.tan(document.form_5.trig_Y.value)}`; break;
        }

    }
}

function numbersInEnglish() //6)
{
    switch(document.form_6.numbers.value)
    {
        case '0' : document.form_6.output_6.value = 'Zero'; break;
        case '1' : document.form_6.output_6.value = 'One'; break;
        case '2' : document.form_6.output_6.value = 'Two'; break;
        case '3' : document.form_6.output_6.value = 'Three'; break;
        case '4' : document.form_6.output_6.value = 'Four'; break;
        case '5' : document.form_6.output_6.value = 'Five'; break;
        case '6' : document.form_6.output_6.value = 'Six'; break;
        case '7' : document.form_6.output_6.value = 'Seven'; break;
        case '8' : document.form_6.output_6.value = 'Eight'; break;
        case '9' : document.form_6.output_6.value = 'Nine'; break;
        default : document.form_6.output_6.value = 'Неправильный ввод'
    }
}

function showMonth() //7)
{
    switch(document.form_7.month.value)
    {
        case '1' : document.form_7.output_7.value = 'Январь'; break;
        case '2' : document.form_7.output_7.value = 'Февраль'; break;
        case '3' : document.form_7.output_7.value = 'Март'; break;
        case '4' : document.form_7.output_7.value = 'Апрель'; break;
        case '5' : document.form_7.output_7.value = 'Май'; break;
        case '6' : document.form_7.output_7.value = 'Июнь'; break;
        case '7' : document.form_7.output_7.value = 'Июль'; break;
        case '8' : document.form_7.output_7.value = 'Август'; break;
        case '9' : document.form_7.output_7.value = 'Сентябрь'; break;
        case '10' : document.form_7.output_7.value = 'Октябрь'; break;
        case '11' : document.form_7.output_7.value = 'Ноябрь'; break;
        case '12' : document.form_7.output_7.value = 'Декабрь'; break;
        default : document.form_7.output_7.value = 'Неправильный ввод'
    }
}

function showGrades() //8)
{
    switch(document.form_8.grades.value)
    {
        case '1' : document.form_8.output_8.value = 'Плохо'; break;
        case '2' : document.form_8.output_8.value = 'Неудовлетворительно'; break;
        case '3' : document.form_8.output_8.value = 'Удовлетворительно'; break;
        case '4' : document.form_8.output_8.value = 'Хорошо'; break;
        case '5' : document.form_8.output_8.value = 'Отлично'; break;
    }
}

function showUnits() //9)
{
    switch(document.form_9.units.value)
    {
        case 'dm' : document.form_9.output_9.value = `Дециметры: ${document.form_9.unit.value * 10}`; break;
        case 'km' : document.form_9.output_9.value = `Километры: ${document.form_9.unit.value / 1000}`; break;
        case 'm' : document.form_9.output_9.value = `Метры: ${document.form_9.unit.value}`; break;
        case 'mm' : document.form_9.output_9.value = `Миллиметры: ${document.form_9.unit.value * 1000}`; break;
        case 'cm' : document.form_9.output_9.value = `Сантиметры: ${document.form_9.unit.value * 100}`; break;
    }
}

function showWeight() //10)
{
    switch(document.form_10.weights.value)
    {
        case 'kg' : document.form_10.output_10.value = `В килограммах: ${document.form_10.weight.value}`; break;
        case 'mg' : document.form_10.output_10.value = `В килограммах: ${document.form_10.weight.value / 1000000}`; break;
        case 'g' : document.form_10.output_10.value = `В килограммах: ${document.form_10.weight.value / 1000}`; break;
        case 't' : document.form_10.output_10.value = `В килограммах: ${document.form_10.weight.value * 1000}`; break;
        case 'c' : document.form_10.output_10.value = `В килограммах: ${document.form_10.weight.value * 100}`; break;
    }
}

function operation() //11)
{
    switch(document.form_11.operations.value)
    {
        case 'sum' : 
            document.form_11.output_11.value = 
            `${document.form_11.n_X.value}+${document.form_11.n_Y.value}=
            ${parseFloat(document.form_11.n_X.value) + parseFloat(document.form_11.n_Y.value)}`; break;
        case 'sub' : 
            document.form_11.output_11.value = 
            `${document.form_11.n_X.value}-${document.form_11.n_Y.value}=
            ${document.form_11.n_X.value - document.form_11.n_Y.value}`; break;
        case 'mul' : 
            document.form_11.output_11.value = 
            `${document.form_11.n_X.value}*${document.form_11.n_Y.value}=
            ${document.form_11.n_X.value * document.form_11.n_Y.value}`; break;
        case 'div' : 
            document.form_11.output_11.value = 
            `${document.form_11.n_X.value}/${document.form_11.n_Y.value}=
            ${document.form_11.n_X.value / document.form_11.n_Y.value}`; break;
    }
}

function showProduct() //12)
{
    switch(document.form_12.products.value)
    {
        case 'raincoat' : document.form_12.output_12.value = 'Плащ'; break;
        case 'hat' : document.form_12.output_12.value = 'Шапка'; break;
        case 'boots' : document.form_12.output_12.value = 'Сапоги'; break;
        case 'scarf' : document.form_12.output_12.value = 'Шарф'; break;
        case 'gloves' : document.form_12.output_12.value = 'Перчатки'; break;
    }
}

function showAge() //13)
{
    if ([11, 12, 13, 14].includes(parseInt(document.form_13.age.value)))
        document.form_13.output_13.value = `Мне ${document.form_13.age.value} лет`
    else
        switch(document.form_13.age.value % 10)
        {
            case 11: 
            case 12:
            case 13:
            case 14:
                document.form_13.output_13.value = `Мне ${document.form_13.age.value} лет`; break;           
            case 1 : document.form_13.output_13.value = `Мне ${document.form_13.age.value} год`; break;
            case 0: 
            case 5: 
            case 6: 
            case 7: 
            case 8: 
            case 9: 
                document.form_13.output_13.value = `Мне ${document.form_13.age.value} лет`; break;
            case 2: 
            case 3: 
            case 4: 
                document.form_13.output_13.value = `Мне ${document.form_13.age.value} года`; break;
        }
}

function showByIndex() //14)
{
    switch(document.form_14.libraryIndex.value)
    {
        case '10' : document.form_14.output_14.value = 'Русский язык'; break;
        case '20' : document.form_14.output_14.value = 'Математика'; break;
        case '30' : document.form_14.output_14.value = 'Физика'; break;
        case '40' : document.form_14.output_14.value = 'История'; break;
    }
}

function showTimeOfDay() //15)
{
    let hours = parseInt(document.form_15.time.value.split(':')[0])
    switch(hours)
    {
        case 5:
        case 6:
        case 7:
        case 8:
            document.form_15.output_15.value = 'Утро'; break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            document.form_15.output_15.value = 'День'; break;
        case 19:
        case 20:
        case 21:
        case 22:
            document.form_15.output_15.value = 'Вечер'; break;
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            document.form_15.output_15.value = 'Ночь'; break;      
    }
}

function showRegion() //16)
{
    switch(document.form_16.licensePlateNumber.value)
    {
        case '01': document.form_16.output_16.value = 'Республика Адыгея'; break;
        case '02': document.form_16.output_16.value = 'Республика Башкортостан'; break;
        case '03': document.form_16.output_16.value = 'Республика Бурятия'; break;
        case '04': document.form_16.output_16.value = 'Республика Алтай'; break;
        case '05': document.form_16.output_16.value = 'Республика Дагестан'; break;
        case '06': document.form_16.output_16.value = 'Кабардино-Балкарская Республика'; break;
    }
}

function showSchoolGrade() //17)
{
    switch(document.form_17.schoolGrade.value)
    {
        case '1': document.form_17.output_17.value = 'Привет, первоклассник'; break;
        case '2': document.form_17.output_17.value = 'Привет, второклассник'; break;
        case '3': document.form_17.output_17.value = 'Привет, третьеклассник'; break;
        case '4': document.form_17.output_17.value = 'Привет, четвероклассник'; break;
        case '5': document.form_17.output_17.value = 'Привет, пятиклассник'; break;
        case '6': document.form_17.output_17.value = 'Привет, шестиклассник'; break;
        case '7': document.form_17.output_17.value = 'Привет, семиклассник'; break;
        case '8': document.form_17.output_17.value = 'Привет, восьмиклассник'; break;
        case '9': document.form_17.output_17.value = 'Привет, девятиклассник'; break;
        case '10': document.form_17.output_17.value = 'Привет, десятиклассник'; break;
        case '11': document.form_17.output_17.value = 'Привет, одиннадцатиклассник'; break;
        default : document.form_17.output_17.value = 'Неправильный ввод'
    }
}

function showAngleType() //18)
{
    angle = parseFloat(document.form_18.angle.value)
    if (angle > 0 && angle <= 180)
        switch(angle)
        {
            case angle == 90? angle : true: document.form_18.output_18.value = 'Прямой'; break;
            case angle < 90? angle : true: document.form_18.output_18.value = 'Острый'; break;
            case angle > 90? angle : true: document.form_18.output_18.value = 'Тупой'; break;
        }
    else
        document.form_18.output_18.value = 'Неправильный угол';
}