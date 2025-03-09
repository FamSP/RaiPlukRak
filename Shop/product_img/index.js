let product = [
    {
        id:1,
        img:"./product_img/img-beef-stake-3.jpg",
        name: "Meat Steak",
        price: 500,
        desc: "Wait to put information",
        type: "meat"
    },
    {
        id:2,
        img:"./product_img/Caesar-Salad.jpg",
        name: "Salad",
        price: 100,
        desc: "Wait to put information",
        type: "salad"
    },
    {
        id:3,
        img:"./product_img/drink-1.png",
        name: "Hot Shck Milk",
        price: 60,
        desc: "Wait to put information",
        type: "drink"
    }];

    $(document).ready(() => {
        let html = '';
        for (let i = 0; i < product.length; i++) {
            html += `<div onclick="openProductDetail(${i})" class="product-item  ${product[i].type}">
                        <img class="product-img" src="${product[i].img}">
                        <p style="font-size: 1.2vw;">${product[i].name}</p>
                        <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)}</p>
                    </div>`;
        }
        $("#productlist").html(html)
    })

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    function searchitem(elem) {
        let value = $('#' + elem.id).val().trim().toLowerCase();
    
        let html = '';
        for (let i = 0; i < product.length; i++) {
            if (product[i].name.toLowerCase().includes(value)) {
                html += `<div class="product-item ${product[i].type}">
                            <img class="product-img" src="${product[i].img}">
                            <p style="font-size: 1.2vw;">${product[i].name}</p>
                            <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)}</p>
                        </div>`;
            }
        }
    
        if (html === '') {
            $("#productlist").html('<p>Not Found Product</p>');
        } else {
            $("#productlist").html(html);
        }
    }

    function menutap(param){
        $(".product-item").css('display', 'none')
        if(param == 'all'){
            $(".product-item").css('display', 'block')
        }else{
            $("."+param).css('display', 'block')
        }
    }

    let productIndex= 0;
    function openProductDetail(index) {
        productIndex = index;
        $('#modalDesc').fadeIn(); // Smooth opening
        $("#mdd-img").attr('src', product[index].img);
        $("#mdd-name").text(product[index].name);
        $("#mdd-price").text(numberWithCommas(product[index].price) + " THB");
        $("#mdd-desc").text(product[index].desc);
    }
    
    function closeModal() {
        $(".modal").fadeOut(); // Smooth closing
    }

    let cart= [];
    function addtocart(){
        let pass = true;

        for (let i = 0; i < cart.length; i++) {
            if(productIndex == cart[i].index){
                cart[i].count++;
                pass= false;
            }
        }

        if(pass){
            let obj={
                index: productIndex,
                id: product[productIndex].id,
                name: product[productIndex].name,
                price: product[productIndex].price,
                img: product[productIndex].img,
                count: 1
            };
            cart.push(obj)
        }
        Swal.fire({
            icon: 'success',
            title: 'Add ' + product[productIndex].name + ' to cart !'
        })

        $('#cartcount').show().text(cart.length)
    }

    function openCart(){
        $('#modalCart').show()
        rendercart()
    }

    function rendercart() {
        if(cart.length > 0) {
            var html = '';
            for (let i = 0; i < cart.length; i++) {
                html += `<div class="cart-list-item">
                    <div class="cart-list-left">
                        <img src="${cart[i].img}">
                        <div class="cart-list-detail">
                            <p style="font-size: 1.5vw;">${cart[i].name}</p>
                            <p style="font-size: 1.2vw;">${cart[i].price}</p>
                        </div>
                    </div>
                    
                    <div class="cart-list-right">
                        <p onclick="deniitem('decrease', ${i})" class="btnc">-</p>
                        <p id="countitems${i}" style="margin: 0 5px;">${cart[i].count}</p>
                        <p onclick="deniitem('increase', ${i})" class="btnc">+</p>
                    </div>
                </div>`
            }
            $('#mycart').html(html)
        }
        else{
            $('#mycart').html(`<p>Not found product list !</p>`)
        }
    }

    function deniitem(action, index) {
        if(action == 'decrease') {
            if(cart[index].count > 0) {
                cart[index].count--;
                $("#countitems"+index).text(cart[index].count)
    
                if(cart[index].count <= 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Are you sure to delete?',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Delete',
                        cancelButtonText: 'Cancel'
                    }).then((res) => {
                      if(res.isConfirmed) {
                         cart.splice(index, 1) 
                         console.log(cart)
                         rendercart();
                         $("#cartcount").css('display','flex').text(cart.length)
                         
                         if(cart.length <= 0) {
                            $("#cartcount").css('display','none')
                         }
                      }  
                      else {
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count)
                        rendercart();
                      }
                    })
                }
                rendercart();
            }
            
        }
        else if(action == 'increase') {
            cart[index].count++;
            $("#countitems"+index).text(cart[index].count)
            rendercart();
        }
    }