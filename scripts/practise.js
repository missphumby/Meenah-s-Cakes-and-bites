
(function () {
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('#img-container')
    //console.log(buttons)
    //console.log(storeItems)

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            //prevent the default link jump to top of page
            e.preventDefault()
            //grab the filter button that was clicked
            const filter = e.target.dataset.filter


            if (filter === 'all') {
                //show all items
                storeItems.forEach(function (item) {
                    item.style.display = 'inline-block'
                })
            }
            else if (filter === 'cakes') {
                storeItems.forEach(function (item) {
                    if (item.classList.contains('cakes')) {
                        item.style.display = 'inline-block'
                    } else {
                        item.style.display = 'none'
                    }
                })

            }
            else if (filter === 'cupcakes') {
                storeItems.forEach(function (item) {
                    if (item.classList.contains('cupcakes')) {
                        item.style.display = 'inline-block'
                    } else {
                        item.style.display = 'none'
                    }
                })

            } else if (filter === 'sweets') {
                storeItems.forEach(function (item) {
                    if (item.classList.contains('sweets')) {
                        item.style.display = 'inline-block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            } else if (filter === 'doughnuts') {
                storeItems.forEach(function (item) {
                    if (item.classList.contains('doughnuts')) {
                        item.style.display = 'inline-block'
                    } else {
                        item.style.display = 'none'
                    }


                })
            }

        })
    })
})();

    //target cart button
    const cartInfo = document.querySelector('.bar');
console.log(cartInfo)
    const cart = document.querySelector('.cart');
    

    cartInfo.addEventListener('click', function(e){
        e.preventDefault
        cart.classList.toggle('show-cart');
    })




const storeItems = document.querySelectorAll('#img-container')
const explore = document.querySelector(`.explore1`)
console.log(explore)

explore.addEventListener(`click`, showItems);

function showItems() {
    e.preventDefault()
    if (button.classList.contains(`explore1`)) {
        storeItems.style.display = `inline-block`
    } else {
        showItems.style.display = 'none'

    }
};





(function(){
    const storeItems = document.querySelectorAll('#img-container')
    const searchItem = document.querySelector('#search-item')
//  console.log(searchItem)
// console.log(storeItems)
    searchItem.addEventListener(`keyup`, (e) => {

        const searchFilter = e.target.value.toLowerCase().trim()

        storeItems.forEach((item) =>{
            if (item.innerHTML.includes(searchFilter)) {
                item.style.display = `inline-block`
            } else {
                item.style.display = 'none'
            }
        })
    })
})();



// modal
(function(){
    let storeItems = document.querySelectorAll('#img-container');
    let lightBox = document.querySelector('.lightbox-container');
    let lightBoxItem = document.querySelector('.lightbox-item');
    let images = document.querySelectorAll('.store-img');

    let imageList = [];
  let imageCounter = 0;
  //use a forEach loop to get a copy of all the images and push into an array of items
  images.forEach(function(image){
    //push each imageto the array of images
    imageList.push(image.src);
  })

  storeItems.forEach(function(item) {
    item.addEventListener('click', function(e){
    let image = e.target.src;
    lightBoxItem.style.backgroundImage = `url(${image})`;
    lightBox.classList.add('show');
    imageCounter = imageList.indexOf(image);
    });
  }); 
  
  let btnLeft = document.querySelector('.btnLeft');
  btnLeft.addEventListener('click', function(){
    imageCounter--;
    if (imageCounter < 0){
      imageCounter = imageList.length -1;
    }
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
  });


  let btnRight = document.querySelector('.btnRight');
  btnRight.addEventListener('click', function(){
    imageCounter++;
    if (imageCounter >= imageList.length){
      imageCounter = 0;
    }
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
  });
  
  //wire up the modal's close button
    let lightBoxClose = document.querySelector('.lightbox-close');
    lightBoxClose.addEventListener('click', function(){
    lightBox.classList.remove('show');
    });
  
  
})();

    
    // cart button
(function(){
    const cartBtn = document.querySelectorAll('.item-icon');

    // cartBtn.addEventListener('click', alert('item added to the cart'));

    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            //make sure event fires only if it has a parent of a certain class.
            if(event.target.parentElement.classList.contains('item-icon')){
    
                let fullPath = event.target.parentElement.previousElementSibling.src;
       console.log(fullPath)
                let pos = fullPath.indexOf('imgs') + 3; //use the 3 to get rid of the 'img' string
    
                let partPath = fullPath.slice(pos);
    
                const item = {};
    
                item.img = `img${partPath}`;
    
                let name = event.target.parentElement.nextElementSibling.children[0].textContent;
    console.log(name)
                item.name = name;
    
                let price = event.target.parentElement.nextElementSibling.children[1].textContent;
               console.log(price)
                let finalPrice = price.slice(1).trim();
    
                item.price = finalPrice.toString(2)
    
                const cartItem = document.createElement('div');
    
                // cartItem.classList.add('cart-item');
    
                cartItem.innerHTML = `<div class="cart-item">
                <img src="${item.img}" class="item-img" alt="">
                  <div class="item-text"><p id="item-title">${item.name}</p><span id="dollar">$</span>
                    <strong id="item-price" class="item-price">${item.price}</strong></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fa fa-trash"></i></a></div>`;
    
            // select cart
    
            const cart = document.getElementById('cart');
            const total = document.querySelector('.cart-total');
    
            cart.insertBefore(cartItem, total);
            alert('item added to the cart');
    
            showTotals();
    
            }
        });
    });

    function showTotals(){

        const total = [];
        const items = document.querySelectorAll('.item-price');
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })
        
        const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
        },0);
    
        const finalMoney = totalMoney.toFixed(2);
        
        document.getElementById('cart-total').textContent = `Total   ${finalMoney}`;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = document.querySelectorAll('.cart-item').length;

    }
})()

    
    