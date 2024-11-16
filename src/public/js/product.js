$(function () {
    console.log("New");
    var url = "localhost:3000/cart/add";
    // const postData = (id:number)=>{
    //     $.ajax({
    //         url: url,
    //         type: 'POST',
    //         data:{
    //             productId:id
    //         },
    //         success: function(response){
    //             console.log("Server Response: ", response)
    //         },
    //         error: function(status, error){
    //             console.log("Error: ", error)
    //         }
    //     })
    // }
    var addToCartButtons = $(".add-to-cart");
    addToCartButtons.on('click', function (e) {
        var target = $(e.currentTarget);
        var productId = target.data('product-id');
        // postData(productId)
        console.log("Product ID: ", productId);
    });
    var moreDetails = $(".more-details");
    moreDetails.on('click', function (e) {
        var target = $(e.currentTarget);
        var description = target.data('product-description');
        var modal = target.closest(".wrapper-container").find(".product-modal");
        var modalContent = target.closest('wrapper-container').find('modal-content');
        var descriptionElement = $("\n            <p>Description</p>\n            <p class = \"product-description\">".concat(description, "</p>\n            "));
        modal.css('display', 'block');
        modalContent.append(descriptionElement);
        console.log("Description: ", description);
    });
    var closeTag = $(".close-tag");
    closeTag.on('click', function (e) {
        var target = $(e.currentTarget);
        var modal = target.closest(".wrapper-container").find(".product-modal");
        modal.css('display', 'none');
    });
    // $(window).on('click', (event)=>{
    //     const modal = $(this).closest(".wrapper-container").find(".product-modal")
    //     if($(event.target).is(modal)){
    //         modal.css('display','none')
    //     }
    // })
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
