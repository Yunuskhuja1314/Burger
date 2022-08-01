// объект продуктов
const products = {
  plainBurger: {
    name: 'Гамбургер простой',
    price: 10000,
    kcall: 400,
    amount: 0, 
    get Summ(){return this.price * this.amount},
    get Kcall(){return this.kcall * this.amount},
  },
  freshBurger: {
    name: 'Гамбургер FRESH',
    price: 20500,
    kcall: 500,
    amount: 0, 
    get Summ(){return this.price * this.amount},
    get Kcall(){return this.kcall * this.amount},
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 700,
    amount: 0, 
    get Summ(){return this.price * this.amount},
    get Kcall(){return this.kcall * this.amount},
  },
}
// объект дополнительных модификаций
const extraProducts = {
  doubleMayonnaise: {
    name: 'Двойной майонез',
    price: 500,
    kcall: 50,
  },
  lettuce: {
    name: 'Салатный лист',
    price: 300,
    kcall: 10,
  },
  cheese: {
    name: 'Сыр',
    price: 400,
    kcall: 30,
  },
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
      productCheckbox = document.querySelectorAll('.main__product-checkbox');

for(let i = 0; i <  btnPlusOrMinus.length; i++){
  btnPlusOrMinus[i].addEventListener('click', function(){
    PlusOrMinus(btnPlusOrMinus[i]);
    // console.log(btnPlusOrMinus[i].dataset.symbol);
  })
}
function PlusOrMinus(element) {
  const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        outAmount = parent.querySelector('.main__product-num'),
        outPrice = parent.querySelector('.main__product-price span'),
        outKcall = parent.querySelector('.main__product-kcall span'),
        symbolData = element.getAttribute('data-symbol');

  if(symbolData == '+' && products[parentId].amount < 100){
    products[parentId].amount++;
  }else if(symbolData == '-' && products[parentId].amount > 0){
    products[parentId].amount--;
  }

  outAmount.innerHTML = products[parentId].amount;
  outPrice.innerHTML = products[parentId].Summ;
  outKcall.innerHTML = products[parentId].Kcall;
}

for(let i = 0; i < productCheckbox.length; i++){
  productCheckbox[i].addEventListener('click', function(){
    addExtraProduct(productCheckbox[i]);
  })
  // console.log(productCheckbox[i]);
}
function addExtraProduct(element){
  const parent = element.closest('.main__product'),
        dataExtra = element.getAttribute('data-extra'),
        parentId = parent.getAttribute('id'),
        outKcall = parent.querySelector('.main__product-kcall span'),
        outPrice = parent.querySelector('.main__product-price span');

        products[parentId][dataExtra] = element.checked;
        
        if(products[parentId][dataExtra] === true){
          products[parentId].price += extraProducts[dataExtra].price;
          products[parentId].kcall += extraProducts[dataExtra].kcall;
        }else{
          products[parentId].price -= extraProducts[dataExtra].price;
          products[parentId].kcall -= extraProducts[dataExtra].kcall;
        }

        outPrice.innerHTML = products[parentId].Summ;  
        outKcall.innerHTML = products[parentId].Kcall;  
}

const time = document.querySelector('.header__timer-extra');
let speed = 50;
function LVL(i = 0){
  time.innerHTML = i;
  i++;
  if(i > 50 && i <= 60){
    speed = 80;
  }else if(i > 60 && i <= 70){
    speed = 110;
  }else if(i > 70 && i <= 80){
    speed = 140;
  }else if(i > 80 && i <= 90){
    speed = 170;
  }else if(i > 90 && i <= 100){
    speed = 200;
  }
  if(i <= 100){
    setTimeout(function(){LVL(i)}, speed)
  }
}
LVL();