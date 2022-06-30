function numberOfZerosAndOnes() //1)
{
    document.getElementById('output_1').innerText =`\nКоличество нулей: ${[...document.getElementById('str_1').value].filter((value) => value == '0').length}
                                                    Количество единиц: ${[...document.getElementById('str_1').value].filter((value) => value == '1').length}`;
}

function numberOfWords() //2)
{
    document.getElementById('output_2').innerText =`\nКоличество слов: ${document.getElementById('str_2').value.trim().split(' ').length}`;
}

function numberOfPunctuationMarks() //3)
{
    let str = document.getElementById('str_3').value.trim();
    document.getElementById('output_3').innerText =`${str.match(/[.,!?]/g).length}`;
}

function numbersInAString() //4)
{
    let str = document.getElementById('str_4').value.trim();
    document.getElementById('output_4').innerText =`${[...str.replaceAll(' ', '')].filter(value => !isNaN(value)).join(', ')}`;
}

function numberOfEven() //5)
{
    let str = document.getElementById('str_5').value.trim();
    document.getElementById('output_5').innerText =`${str.split(' ').filter(value => value % 2 ==0).length}`;
}

function numberOfRussianLetters() //6)
{
    let str = document.getElementById('str_6').value.trim();
    document.getElementById('output_6').innerText =`${str.match(/[а-яё]/g).length}`;
}

function showOnlyRussianLetters() //7)
{
    let str = document.getElementById('str_7').value.trim();
    document.getElementById('output_7').innerText =`${str.match(/[а-яё]/g).join(', ')}`;
}

function upperCaseFirstLetters() //8)
{
    let str = document.getElementById('str_8').value.trim();
    document.getElementById('output_8').innerText =`${str.split(' ').map(value => value = value[0].toUpperCase() + value.slice(1)).join(' ')}`;
}

function deleteFirstLetters() //9)
{
    let str = document.getElementById('str_9').value.trim();
    document.getElementById('output_9').innerText =`${str.split(' ').map(value => value = value.slice(1)).join(' ')}`;
}

function swapPlaces() //10)
{
    let str = [...document.getElementById('str_10').value.trim()];
    let i = Number(document.getElementById('i').value);
    let j = Number(document.getElementById('j').value);
    [str[i], str[j]] = [str[j], str[i]];

    document.getElementById('output_10').innerText =`${str.join('')}`;
}

function swapTheFirstAndLastLetterInEachWord() //11)
{
    let str = document.getElementById('str_11').value.trim().split(' ');
    document.getElementById('output_11').innerText =`${str.map(value => 
                        value.length == 1 ? value : value[value.length - 1] + value.slice(1, value.length - 1) + value[0]).join(' ')}`;
}

function replaceLatinWithThePlus() //12)
{
    let str = document.getElementById('str_12').value.trim();
    document.getElementById('output_12').innerText =`${str.replaceAll(/[A-za-z]/g, '+')}`;
}

function replaceLetterWithAsterisk() //13)
{
    let str = document.getElementById('str_13').value.trim();
    document.getElementById('output_13').innerText =`${str.replaceAll(/А/g, '*')}`;
}

function isTheWordAPalindrome() //14)
{
    let str = document.getElementById('str_14').value.replaceAll(' ', '');
    document.getElementById('output_14').innerText =
    `${( str.split('').reverse().join('').toLowerCase() ==  str.toLowerCase())? 'Палиндром' : 'Не палиндром'}`;
}

function wordLengths() //15)
{
    let str = document.getElementById('str_15').value.trim();
    document.getElementById('output_15').innerText =`${str.split(' ').map(value => value.length).join(' ')}`;
}