const product1 = {
    productName:'Крепления АМ12567 обшивки/молдингов',
    price: '60',
    img:'img/pic02.jpg'
}

const product2 = {
    productName:'Крепления АМ12002 обшивки/молдингов',
    price: '50',
    img:'img/pic01.jpg'
}

const myShop = [product1, product2];
let id = 0;
let main={}
let section={}
let basket=0
let word
let resultWord
let calc=1
let sum

function sectionProduct(product){
    word= 'товар'
    ++id
  main = document.querySelector('main');


// создаем section и вставляем в верх main
section = document.createElement('section');
// let section = document.createElement('section');

main.append(section)
section.setAttribute('id',id)
// добавляем div под картинку и вставляем в section
let divImg=document.createElement('div')
divImg.setAttribute('class','img')
section.append(divImg)

let img=document.createElement('img')
// img.setAttribute('src','img/pic02.jpg')
img.setAttribute('src',product.img)
img.setAttribute('alt','крепление')
divImg.append(img)

let divName = document.createElement('div')
divName.setAttribute('class','name')
// divName.innerText='Крепления АМ12567 обшивки/молдингов'
divName.innerText=product.productName
section.append(divName)

let divCalc=document.createElement('div')
divCalc.setAttribute('class','calc')
section.append(divCalc)

let divMinus = document.createElement('div')
divMinus.setAttribute('class','minus')
divMinus.innerText = '-'
divCalc.append(divMinus)

let divCount = document.createElement('div')
divCount.setAttribute('class','count')
divCount.setAttribute('id', id)
divCount.innerText = calc
divCalc.append(divCount)

let divPlus = document.createElement('div')
divPlus.setAttribute('class','plus')
divPlus.setAttribute('id', id)
divPlus.innerText = '+'
divCalc.append(divPlus)

let divPrice=document.createElement('div')
divPrice.setAttribute('class','price')
section.append(divPrice)

let spanPrice=document.createElement('span')
spanPrice.setAttribute('class','sum_price')
// spanPrice.innerText='60.00'
spanPrice.innerText= product.price
divPrice.append(spanPrice)

let spanUAN=document.createElement('span')
spanUAN.innerText=' грн'
divPrice.append(spanUAN)

let divTrash = document.createElement('div')
divTrash.setAttribute('class','icon-trash')
divTrash.setAttribute('id',id)
section.append(divTrash)

++basket
let bascetSpanText=document.getElementById('basket')
// console.log(bascetSpanText)

resultWord = articleWord()

bascetSpanText.innerText=`В корзине ${resultWord}`

}
// /////////////////////////////////////////////////
sectionProduct(product1);
sectionProduct(product2);
sectionProduct(product1);
sectionProduct(product2);

// //////////////////////////////////////////////////

main.addEventListener('click', function(e){
let element=e.target

// нажатие на корзину
if(element.className==='icon-trash'){
// ищем элемент с id= element.id
let remuvElement = document.getElementById(`${element.id}`)
let divCount = document.querySelector('.count')
divCount=divCount.textContent
// удаляем нужную section отобранную по id
remuvElement.parentNode.removeChild(remuvElement)
// пересчет товара в корзине
basket -=divCount
word= 'товар'
// ф-я смены окончания
let result = articleWord()
//  добавляем цифру и слово в контекст
let bascetSpanText=document.getElementById('basket')
bascetSpanText.innerText=`В корзине ${result}`
}

// НАЖАТИЕ НА "+"
if(element.className==='plus'){
++calc
let divCount = document.querySelector(`.count`)
divCount.innerText = `${calc}`
// доб суммы в гривнах
let sumPrice = document.querySelector('.sum_price')
sum = Number(sumPrice.innerText)
sum +=Number(product1.price)
sumPrice.innerText = sum
console.dir(sumPrice)
// пересчитываем верхнее поле
++basket
word= 'товар'
resultWord = articleWord()
let bascetSpanText=document.getElementById('basket')
bascetSpanText.innerText=`В корзине ${resultWord}`
}


// НАЖАТИЕ НА "-"
if(element.className==='minus'){
   
    if(calc<=1) return// както еще кнопку заблокировать!
    --calc
    let divCount = document.querySelector('.count')
    divCount.innerText = `${calc}`
    // доб суммы в гривнах
let sumPrice = document.querySelector('.sum_price')
sum = Number(sumPrice.innerText)
sum -=Number(product1.price)
sumPrice.innerText = sum
console.dir(sumPrice)
    // пересчитываем верхнее поле
    --basket
    word= 'товар'
    resultWord = articleWord()
    let bascetSpanText=document.getElementById('basket')
    bascetSpanText.innerText=`В корзине ${resultWord}`
    }

})

// ////////////////////////////////////////////////////
// ЗАМЕНА ОКОНЧАНИЯ СЛОВА 'товар'
function articleWord(){
    basket=String(basket)
    let simbol = basket.slice(-1);
    if (simbol === '1'&& basket!='11') return basket + word
    if ((simbol === '2' || simbol === '3' || simbol === '4') && (basket.slice(0,1)!=='1')) word = word + 'а' //
    else     word=word+'ов'
    return (basket+' ' + word)

}

// ///////////////////////////////////////////////////
// for(let i=0;i<30;i++){
// i=String(i);
//     console.log(articleWord(i,'товар'))
// }


// const myPicture = ["pic01.png", "pic02.png", "pic03.png", "pic04.png", "pic05.png", "pic06.png", "pic07.png", "pic08.png"]
// const pictureHost = 'img'
// let calc = 0;

// let sectionSmall = document.getElementsByClassName('small'),
//     sectionBig = document.getElementsByClassName('big'),
//     spanCalc = document.getElementById('calc');

// myPicture.forEach(v => {
//     // let newDiv = document.createElement('div');
//     // section.append(newDiv);
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src', `${pictureHost}/${v}`);
//     newImg.setAttribute('width', '90%');
//     sectionSmall[0].append(newImg);
// })

// делегирование///////////////////////////////////
// sectionSmall[0].addEventListener('click', function (e) {
//     let element = e.target;
//     console.dir(element)
//     if (element.localName == 'img') {
//         console.log(e.target)
//         ++calc
//         sectionBig[0].append(element);// добавляем в большое поле
//         spanCalc.innerText = calc
//     }
    
// })
// sectionBig[0].addEventListener('click', function (f) {
//     let product = f.target;
//     if (product.localName == 'img') {
//     --calc
//     sectionSmall[0].append(product);// возвращаем в малое поле
//     spanCalc.innerText = calc
//     }
// })




