$(function () {
    console.log("New");
    var url = "localhost:3000/cart/add";
    var postData = function (id) {
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                productId: id
            },
            success: function (response) {
                console.log("Server Response: ", response);
            },
            error: function (status, error) {
                console.log("Error: ", error);
            }
        });
    };
    var addToCartButtons = $(".add-to-cart");
    addToCartButtons.on('click', function (e) {
        var target = $(e.currentTarget);
        var productId = target.data('product-id');
        postData(productId);
        console.log("Product ID: ", productId);
    });
});
// $("#1").on("click", ()=>{
//     const item = $(this).closest(".item-wrapper1").find(".product-title1").text();
//     console.log($(".add-to-cart").val())
// //     console.log("first item: ")
// //    const id = 1;
// //    postData(id);
// })
// $("#2").on("click", ()=>{
//     const item = $(this).closest(".item-wrapper1").find(".product-title1").text();
//     console.log($(".add-to-cart").val())
//     // console.log("item: ",item)
// })
// $("#3").on("click", ()=>{
//     const item = $(this).closest(".item-wrapper1").find(".product-title1").text();
//     console.log($(".add-to-cart").val())
//     // console.log("item: ",item)
// })
