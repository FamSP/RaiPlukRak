let product = [
    {
        id: 1,
        img: "./product_img/img-beef-stake-1.jpg",
        name: "ซี่โครงรมควัน",
        price: 800,
        desc: "ซี่โครงหมูรมควันที่ผ่านการย่างจนมีรสชาติที่เข้มข้นและหอมกลิ่นไม้รมควัน พร้อมสัมผัสเนื้อหมูที่นุ่มละลายในปาก เหมาะสำหรับผู้ที่ชื่นชอบรสชาติกลมกล่อมและกลิ่นหอมจากการย่างไฟอย่างแท้จริง.",
        type: "meat"
    },
    {
        id: 2,
        img: "./product_img/img-beef-stake-2.jpg",
        name: "ซี่โครงรมควัน",
        price: 800,
        desc: "ซี่โครงหมูรมควันที่ผ่านการรมควันด้วยไม้เฉพาะตัว ทำให้ได้รสชาติที่อร่อยและเนื้อนุ่มลิ้น มีความหอมจากการย่างไฟ เหมาะสำหรับทุกมื้ออาหาร ไม่ว่าจะเป็นมื้อกลางวันหรือมื้อเย็น.",
        type: "meat"
    },
    {
        id: 3,
        img: "./product_img/img-beef-stake-3.jpg",
        name: "เสต็กเนื้อวัวรมควัน",
        price: 500,
        desc: "เสต็กเนื้อวัวรมควันที่คัดสรรจากเนื้อวัวคุณภาพดี ย่างจนถึงระดับความสุกที่เหมาะสม สัมผัสนุ่มละมุน พร้อมกลิ่นหอมจากการรมควันไม้ชนิดพิเศษ จะช่วยเติมเต็มมื้ออาหารของคุณให้สมบูรณ์.",
        type: "meat"
    },
    {
        id: 4,
        img: "./product_img/img-salmon-stake-1.jpg",
        name: "แซลมอนรมควัน",
        price: 300,
        desc: "แซลมอนรมควันที่มีรสชาติกลมกล่อม และกลิ่นหอมจากการรมควันแบบดั้งเดิม เหมาะสำหรับผู้ที่ชื่นชอบรสชาติของปลาแซลมอนสดใหม่ พร้อมสัมผัสเนื้อปลาเนียนนุ่ม สามารถรับประทานได้ในทุกมื้อ.",
        type: "meat"
    },
    {
        id: 5,
        img: "./product_img/img-chiken-stake-1.jpg",
        name: "อกเป็ดรมควัน",
        price: 120,
        desc: "อกเป็ดรมควันที่มีรสชาติอร่อย เนื้อเป็ดนุ่ม หอมกลิ่นรมควัน และการปรุงรสอย่างพิถีพิถัน ทำให้ได้รสชาติที่เข้มข้น เหมาะสำหรับทานเป็นอาหารว่าง หรือจะทานคู่กับข้าวก็ได้.",
        type: "meat"
    },
    {
        id: 6,
        img: "./product_img/img-pork-stake-3.jpg",
        name: "หมูกรอบรมควัน",
        price: 99,
        desc: "หมูกรอบรมควันที่มีความกรอบนอกนุ่มใน รสชาติหวานมันจากเนื้อหมูผสมกับการรมควันแบบพิเศษ ทำให้ได้รสชาติที่ยอดเยี่ยม เหมาะสำหรับการทานคู่กับข้าว หรือทานเป็นกับแกล้มในมื้อพิเศษ.",
        type: "meat"
    },
    {
        id: 7,
        img: "./product_img/salad-1.jpg",
        name: "สลัดไข่",
        price: 70,
        desc: "สลัดไข่ที่มีรสชาติสดใหม่และความหอมจากผักสด พร้อมด้วยไข่ต้มที่เสริมรสชาติให้กลมกล่อม เหมาะสำหรับทานเป็นมื้อเบาๆ หรือทานคู่กับข้าว.",
        type: "salad"
    },
    {
        id: 8,
        img: "./product_img/salad-with-chicken.jpg",
        name: "สลัด อกไก่",
        price: 80,
        desc: "สลัดสดใหม่ที่ผสมผสานกับอกไก่ย่าง รสชาติอร่อยเต็มคำ เสริมด้วยผักสดและน้ำสลัดที่ลงตัว เหมาะสำหรับทานเป็นมื้อกลางวันหรืออาหารเบาๆ.",
        type: "salad"
    },
    {
        id: 9,
        img: "./product_img/se-pizza-salad.jpg",
        name: "พิซซ่า สลัด",
        price: 95,
        desc: "พิซซ่าสลัดที่ผสมผสานระหว่างผักสดและพิซซ่าสูตรพิเศษ รสชาติกลมกล่อมและเต็มไปด้วยความหลากหลายของเนื้อสัมผัส เหมาะสำหรับผู้ที่ชื่นชอบทั้งสลัดและพิซซ่า.",
        type: "salad"
    },
    {
        id: 10,
        img: "./product_img/Italian-Chopped-Salad.jpg",
        name: "อิตาลี สลัด",
        price: 70,
        desc: "สลัดอิตาเลียนที่คัดสรรผักสดและน้ำสลัดสูตรพิเศษจากอิตาลี รสชาติสดชื่นและเต็มไปด้วยรสชาติที่สดใหม่ เหมาะสำหรับทานเป็นมื้อกลางวันหรือมื้อเบาๆ.",
        type: "salad"
    },
    {
        id: 11,
        img: "./product_img/Garden-salad.jpg",
        name: "กราเด้น สลัด",
        price: 50,
        desc: "สลัดผักสดจากสวนที่คัดสรรมาอย่างดี พร้อมน้ำสลัดสูตรพิเศษที่ช่วยเสริมรสชาติให้สดชื่น เหมาะสำหรับทานเป็นมื้อเบาๆ หรืออาหารว่าง.",
        type: "salad"
    },
    {
        id: 12,
        img: "./product_img/Fruit-salad3.jpg",
        name: "สลัด ผลไม้",
        price: 60,
        desc: "สลัดผลไม้สดที่ผสมผสานระหว่างผลไม้หลากหลายชนิด รสชาติหวานสดชื่น เหมาะสำหรับการทานเป็นอาหารเบาๆ หรือของหวานในมื้ออาหาร.",
        type: "salad"
    },
    {
        id: 13,
        img: "./product_img/drink-1.png",
        name: "ลาเต้เย็น",
        price: 40,
        desc: "ลาเต้เย็นที่มีรสชาติกลมกล่อมจากกาแฟคุณภาพดี ผสมผสานกับนมสดให้ความรู้สึกสดชื่น เหมาะสำหรับการเริ่มต้นวันใหม่หรือทานในช่วงบ่าย.",
        type: "drink"
    },
    {
        id: 14,
        img: "./product_img/Drink-2.png",
        name: "อเมริกาโน่",
        price: 40,
        desc: "อเมริกาโน่รสเข้มข้นจากกาแฟคุณภาพดี มอบรสชาติของกาแฟที่แท้จริง เหมาะสำหรับคนรักกาแฟที่ชอบรสชาติที่เข้มข้น.",
        type: "drink"
    },
    {
        id: 15,
        img: "./product_img/Drink-3.png",
        name: "อเมริกาโน่-น้ำผึ้ง",
        price: 40,
        desc: "อเมริกาโน่รสเข้มข้นที่เติมความหวานจากน้ำผึ้ง ให้ความรู้สึกสดชื่นและไม่หวานเกินไป เป็นทางเลือกใหม่สำหรับคนรักกาแฟ.",
        type: "drink"
    },
    {
        id: 16,
        img: "./product_img/Drink-4.png",
        name: "คอฟฟี่-โรส",
        price: 40,
        desc: "คอฟฟี่-โรสที่มีการผสมผสานระหว่างกาแฟและกลิ่นหอมของดอกกุหลาบ ให้ประสบการณ์ที่แปลกใหม่และโรแมนติก.",
        type: "drink"
    },
    {
        id: 17,
        img: "./product_img/Drink-5.png",
        name: "น้ำมัลเบอรี่โซดา",
        price: 50,
        desc: "น้ำมัลเบอรี่โซดาที่สดชื่นและเปรี้ยวหวานจากผลมัลเบอรี่ ผสมผสานกับโซดาให้ความสดชื่นเหมาะสำหรับทานในวันที่อากาศร้อน.",
        type: "drink"
    },
    {
        id: 18,
        img: "./product_img/Drink-6.png",
        name: "มัลเบอรี่ปั่น",
        price: 60,
        desc: "มัลเบอรี่ปั่นที่ผสมผสานระหว่างผลมัลเบอรี่สดและน้ำแข็ง ปั่นให้เนื้อเนียนและสดชื่น เหมาะสำหรับการดื่มในช่วงบ่าย.",
        type: "drink"
    }
];

    $(document).ready(() => {
        loadCartFromLocalStorage();
        rendercart();
        
        let html = '';
        for (let i = 0; i < product.length; i++) {
            html += `<div onclick="openProductDetail(${i})" class="product-item  ${product[i].type}">
                        <img class="product-img" src="${product[i].img}">
                        <p style="font-size: 1.2vw;">${product[i].name}</p>
                        <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)}</p>
                    </div>`;
        }
        $("#productlist").html(html);
    });

    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    function loadCartFromLocalStorage() {
        let savedCart = localStorage.getItem("cart");
        if (savedCart) {
            cart = JSON.parse(savedCart);
            $("#cartcount").show().text(cart.length);
        }
    }

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
    function addtocart() {
    let pass = true;
    for (let i = 0; i < cart.length; i++) {
        if (productIndex == cart[i].index) {
            cart[i].count++;
            pass = false;
        }
    }

    if (pass) {
        let obj = {
            index: productIndex,
            id: product[productIndex].id,
            name: product[productIndex].name,
            price: product[productIndex].price,
            img: product[productIndex].img,
            count: 1
        };
        cart.push(obj);
    }

    saveCartToLocalStorage();
    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productIndex].name + ' to cart !'
    });

    $('#cartcount').show().text(cart.length);
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
        if (action == 'decrease') {
            if (cart[index].count > 1) {
                cart[index].count--;
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                    if (res.isConfirmed) {
                        cart.splice(index, 1);
                        $("#cartcount").text(cart.length);
                        if (cart.length <= 0) $("#cartcount").hide();
                        saveCartToLocalStorage();
                        rendercart();
                    }
                });
                return;
            }
        } else if (action == 'increase') {
            cart[index].count++;
        }
    
        saveCartToLocalStorage();
        rendercart();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const printButton = document.getElementById("printCart");
      
        if (printButton) {
          printButton.addEventListener("click", function () {
            let receiptContent = generateCartReceipt();
            if (receiptContent) {
              printReceipt("Cart Receipt", receiptContent);
            } else {
              alert("ไม่มีสินค้าในตะกร้า");
            }
          });
        }
      });
      
      function printReceipt(title, content) {
        const printWindow = window.open("", "_blank");
      
        if (!printWindow) {
          alert("กรุณาปลดบล็อคป๊อปอัพของเบราว์เซอร์");
          return;
        }
      
        printWindow.document.write(`
          <html>
            <head>
              <title>${title}</title>
              <style>
                @page { size: 100mm 100mm; }
                body { width: 100mm; height: 100mm; margin: 0; padding: 5px; font-family: Arial, sans-serif; text-align: left; }
                h2 { margin-bottom: 10px; text-align: left; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
                th, td { border: 1px solid #ddd; padding: 5px; text-align: left; }
                th { background-color: #f2f2f2; }
              </style>
            </head>
            <body>${content}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
      
      function generateCartReceipt() {
        let cart = JSON.parse(localStorage.getItem("cart")) || {};
        if (Object.keys(cart).length === 0) return null;
      
        let receiptContent = `
          <h2 style="text-align: left;">Cart Receipt</h2>
          <table border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></tr>
            </thead>
            <tbody>
        `;
        let totalPrice = 0;
      
        for (const productId in cart) {
          const item = cart[productId];
          const itemTotalPrice = item.count * item.price;
          receiptContent += `
            <tr>
              <td>${item.name}</td>
              <td>${item.count}</td>
              <td>฿${item.price}</td>
              <td>฿${itemTotalPrice}</td>
            </tr>
          `;
          totalPrice += itemTotalPrice;
        }
      
        receiptContent += `
            </tbody>
          </table>
          <p style="text-align: left;">Total ฿${totalPrice}</p>
        `;
        return receiptContent;
      }
      
    