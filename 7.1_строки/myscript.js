function numberOfLettersInString() //1)
{
    document.getElementById('output_1').innerText = document.getElementById('str_1').value.split(document.getElementById('letter').value).length - 1;
}

function numberOfWords() //2)
{
    document.getElementById('output_2').innerText = document.getElementById('str_2').value.trim().split(' ').length;
}

function isTheStringANubmer() //3)
{
    document.getElementById('output_3').innerText = isNaN(document.getElementById('str_3').value.trim()) ? 'Строка' : 'Число';
}

function removeSpaces() //4)
{
    document.getElementById('output_4').innerText = document.getElementById('str_4').value.replaceAll(' ', '');
}

function lengthOfTheShortestWord() //5)
{
    document.getElementById('output_5').innerText = document.getElementById('str_5').value.trim().split(' ')
                                                    .sort((a, b) => a.length - b.length)[0].length;
}

function letterOnEvenPosition() //6)
{
    let count = 0;
    for (i = 1; i <= document.getElementById('str_6').value.trim().length; i++)
    {
        if (i % 2 == 0 && document.getElementById('str_6').value.trim()[i - 1] == 'у')
            count++;
    }
    document.getElementById('output_6').innerText = count;
}

function replaceLetter() //7)
{
    document.getElementById('output_7').innerHTML = document.getElementById('str_7').value.trim().replaceAll('о', '&nbsp;');
}

function replaceLettersOnEvenPositions() //8)
{
    let str_1 = document.getElementById('str_8').value.split(' ')[0];
    let str_2 = document.getElementById('str_8').value.split(' ')[1];
    for (i = 1; i <= str_1.length; i++)
    {
        if (i % 2 == 0)
        {          
            let temp = str_1[i - 1];
            str_1 = str_1.substr(0, i - 1) + str_2[i - 1] + str_1.substr(i)
            str_2 = str_2.substr(0, i - 1) + temp + str_2.substr(i)
        }
    }
    document.getElementById('output_8').innerText = `${str_1}, ${str_2}`;
}

function showInitials() //9)
{
    let arr = document.getElementById('str_9').value.trim().split(' ');
    document.getElementById('output_9').innerText = `${arr[0]} ${arr[1].charAt(0)}.${arr[2].charAt(0)}.`;
}

function deleteSimilarLastLetter() //10)
{
    let str = document.getElementById('str_10').value.trim();
    document.getElementById('output_10').innerText = str.replaceAll(str.charAt(str.length - 1), '');
}

function deleteLettersFromAnotherString() //11)
{
    let str_S = document.getElementById('str_S').value.trim();
    let set_N = [...new Set(...document.getElementById('str_N').value.trim().split())];

    set_N.forEach(element => {
        str_S = str_S.replaceAll(element, '')
    });

    document.getElementById('output_11').innerText = str_S;
}

function deleteEveryThirdLetter() //12)
{
    let str = [...document.getElementById('str_12').value.trim()];
    document.getElementById('output_12').innerText = str.filter((value, number) => ((number + 1) % 3 > 0) ? value: '');
}

function sumOfPositions() //13)
{
    let str = document.getElementById('str_13').value.trim();
    res = 0;
    for(i = 0; i < str.length; i++)
    {
        if (str[i] == 'а' || str[i] == 'я')
        {
            res += (i + 1);
        }
    }
    document.getElementById('output_13').innerText = res;
}

function vowelOrConsonantLetter() //14)
{
    let str = document.getElementById('str_14').value.trim();
    if ('aeiou'.indexOf(str.toLowerCase()[str.length - 1]) >= 0)
        document.getElementById('output_14').innerText = 'Гласная';
    else
        document.getElementById('output_14').innerText = 'Согласная'; 
}

function numberOfDifferentLetters() //15)
{
    let str = document.getElementById('str_15').value.trim();

    document.getElementById('output_15').innerText = [...new Set([...document.getElementById('str_15').value.trim()])].length;
}

function numberOfDigitalCharacters() //16)
{
    let str = [...document.getElementById('str_16').value.trim()];
    document.getElementById('output_16').innerText = str.filter(value => !isNaN(value)).length;
}

function removeAllSubstringsFromAString() //17)
{
    let str_S1 = document.getElementById('str_S1').value.trim();
    let str_S2 = document.getElementById('str_S2').value.trim();
    document.getElementById('output_17').innerText = str_S1.replaceAll(str_S2, '');
}

function insertString() //18)
{
    let char_c = document.getElementById('char_c').value.trim();
    let st_S1 = document.getElementById('st_S1').value.trim();
    let st_S2 = document.getElementById('st_S2').value.trim();
    document.getElementById('output_18').innerText = st_S1.split(char_c)
                                                        .slice(0, st_S1.split(char_c).length - 1)
                                                        .map((value) => value += st_S2 + char_c)
                                                        .join('');
}