function oilDepot(S, V) //1)
{
    S = parseFloat(S)
    V = parseFloat(V)  
    document.getElementById('output1').innerText = 'В первый день: ' + (S - V) / 2 + ' Во второй день: ' + ((S - V) / 2 + V)
}

function change(sneakersPrice, shirtPrice, ballPrice, totalSum) //2)
{
    sneakersPrice = parseFloat(sneakersPrice)
    shirtPrice = parseFloat(shirtPrice)  
    ballPrice = parseFloat(ballPrice)  
    totalSum = parseFloat(totalSum)  
    document.getElementById('output2').innerText = 'Сдача равна: ' + (totalSum - (sneakersPrice + shirtPrice + ballPrice)) + ' руб.'
}


function milkDelivery(litersPerDay, pricePerLiter, priceIncrease) //3)
{
    litersPerDay = parseFloat(litersPerDay)
    pricePerLiter = parseFloat(pricePerLiter)
    priceIncrease = parseFloat(priceIncrease)   
    document.getElementById('output3').innerText = 'Надо заплатить: ' + (litersPerDay * pricePerLiter * 31 + (litersPerDay * (pricePerLiter + priceIncrease)) * 30) + ' руб.'
}

function wallpaper(A, B, X, Y, K) //4)
{
    A = parseFloat(A)
    B = parseFloat(B)
    X = parseFloat(X)   
    Y = parseFloat(Y)
    K = parseFloat(K) 
    document.getElementById('output4').innerText = 'Стоимость: ' + Math.ceil((A * B) / (X * Y)) * K + ' руб., Количество рулонов: ' + Math.ceil((A * B) / (X * Y))
}

function rent(N1, N2, rentNow) //5)
{
    N1 = parseFloat(N1)
    N2 = parseFloat(N2)
    rentNow = parseFloat(rentNow)
    rentNow += (rentNow / 100) * N1
    rentNow += (rentNow / 100) * N2
    document.getElementById('output5').innerText = 'Квартплата сейчас: ' + rentNow + ' руб.'
}

function goodsSale(productTotalPrice, percent_N1) //6)
{
    productTotalPrice = parseFloat(productTotalPrice)
    percent_N1 = parseFloat(percent_N1)
    document.getElementById('output6').innerText = 'Сумма в январе: ' + productTotalPrice * 100 / (100 + percent_N1) + ' млн. руб.'
}

function saleOfSugar(firstSeller, secondSellerPercent, workingTime) //7)
{
    firstSeller = parseFloat(firstSeller)
    secondSellerPercent = parseFloat(secondSellerPercent)
    workingTime = parseFloat(workingTime)
    document.getElementById('output7').innerText = 'Количество: ' + (firstSeller + (firstSeller / 100) * (100 + secondSellerPercent)) * workingTime
}

function paymentForEnergy(powerСonsumption, electricityTax) //8)
{
    powerСonsumption = parseFloat(powerСonsumption)
    electricityTax = parseFloat(electricityTax)
    document.getElementById('output8').innerText = 'Платёж: ' + powerСonsumption * electricityTax + ' руб.'
}

function tablesInTheStore(inAllStores, firstAndSecond, secondAndThird) //9)
{
    inAllStores = parseInt(inAllStores)
    electricityTax = parseInt(firstAndSecond)
    secondAndThird = parseInt(secondAndThird)
    let firstStore = inAllStores - secondAndThird
    let secondStore = firstAndSecond - firstStore
    let thirdStore = inAllStores - firstAndSecond
    document.getElementById('output9').innerText = 'В первом: ' + firstStore + ', Во втором:' + secondStore + ' В третьем: ' + thirdStore
}

function averageProductionVolume(totalProductionVolume) //10)
{
    totalProductionVolume = parseFloat(totalProductionVolume)   
    document.getElementById('output10').innerText = 'Средний объём: ' + totalProductionVolume / 6
}

function recalculation(kopejki) //11)
{
    kopejki = parseFloat(kopejki)
    document.getElementById('output11').innerText = 'Рубли: ' + kopejki / 100 + 
                                                    ', Гривны: ' + kopejki / 10 + 
                                                    ', Алтын: ' + kopejki / 3 + 
                                                    ', Полушка:' + kopejki / 0.25
}

function secondsToMinutes(seconds) //12)
{
    seconds = parseInt(seconds)
    document.getElementById('output12').innerText = 'Минут: ' + parseInt(seconds / 60) + ', Секунд: ' + seconds % 60 
}

function badWatermelons(numberOfWatermelons, numberOfBadWatermelons) //13)
{
    numberOfWatermelons = parseInt(numberOfWatermelons)
    numberOfBadWatermelons = parseInt(numberOfBadWatermelons)
    document.getElementById('output13').innerText = 'Незрелых арбузов: ' + (numberOfBadWatermelons / numberOfWatermelons) * 100 + '%'
}

function productPrice(firstPriceDrop, secondPriceDrop, initialСost) //14)
{
    firstPriceDrop = parseFloat(firstPriceDrop)
    secondPriceDrop = parseFloat(secondPriceDrop)
    initialСost = parseFloat(initialСost)
    let newCost = initialСost - (firstPriceDrop + secondPriceDrop)
    document.getElementById('output14').innerText = 'Цена товара понизилась на: ' + ((1 - newCost / initialСost) * 100).toFixed(2) + '%' + 
                                                    ' и теперь составляет: ' + newCost + ' руб.'
}

function totalRevenue(revenueForTheJanuary, revenueGrowth) //15)
{
    revenueForTheJanuary = parseFloat(revenueForTheJanuary)
    revenueGrowth = parseFloat(revenueGrowth)
    let revenueForTheFebruary = revenueForTheJanuary / 2
    let revenueForTheMarch = revenueForTheFebruary + revenueForTheFebruary * (revenueGrowth / 100)
    document.getElementById('output15').innerText = 'Суммарная выручка за три месяца: ' + (revenueForTheJanuary +
                                                                                        revenueForTheFebruary + 
                                                                                        revenueForTheMarch) + ' руб.'
}

function specificGravity(product_A, product_B, product_C, cost_X, cost_Y, cost_Z) //16)
{
    let totalCost = product_A * cost_X + product_B * cost_Y + product_C * cost_Z
    document.getElementById('output16').innerText = 'Суммарная выручка: ' + totalCost + ' руб., ' + 
                                                    'Удельные веса: ' + ((product_A * cost_X) / totalCost * 100).toFixed(2) + '% ' +
                                                                        ((product_B * cost_Y) / totalCost * 100).toFixed(2) + '% ' +
                                                                        ((product_C * cost_Z) /totalCost * 100).toFixed(2) + '% '
}

function priceOfFlour(riseInPrice, fallInPrice) //17)
{
    riseInPrice = parseFloat(riseInPrice)
    fallInPrice = parseFloat(fallInPrice)
    let price = 100
    price += riseInPrice
    price -= price / 100 * fallInPrice
    document.getElementById('output17').innerText = 'Цена изменилась на: ' + (100 - price).toFixed(2) + '%' 
}

function revenueDecline(revenueForFirstYear) //18)
{
    //riseInPrice = parseFloat(riseInPrice)
    //fallInPrice = parseFloat(fallInPrice)
    let revenueForSecondYear = revenueForFirstYear * 2/3
    
    document.getElementById('output18').innerText = 'Выручка снизилась на: ' + (100 - revenueForSecondYear / revenueForFirstYear * 100).toFixed(2) + '%' + 
                                                    ', что составляет: ' + (revenueForFirstYear - revenueForSecondYear).toFixed(2) + ' руб.'
}