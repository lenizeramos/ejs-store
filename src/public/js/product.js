"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: "bottom-end",
    //     showConfirmButton: false,
    //     timer: 2000,
    //     timerProgressBar: true,
    //     didOpen: (toast:HTMLElement) => {
    //       toast.onmouseenter = Swal.stopTimer;
    //       toast.onmouseleave = Swal.resumeTimer;
    //     },
    //   });
    addToCartButtons.on('click', function (e) {
        var target = $(e.currentTarget);
        var productId = target.data('product-id');
        var productTitle = target.data('product-title');
        console.log(productTitle);
        // Toast.fire({
        //     text: ` ${productTitle} added to cart`,
        //     icon: "success",
        //     color: "black",
        //   });
        // postData(productId)
        console.log("Product ID: ", productId);
    });
    var moreDetails = $(".more-details");
    moreDetails.on('click', function (e) {
        var target = $(e.currentTarget);
        var description = target.data('product-description');
        var image = target.data('product-image');
        var title = target.data('product-title');
        //DOM 
        var wrapper = target.closest('.wrapper-container');
        var modal = wrapper.find('.product-modal');
        var modalDescription = modal.find('.item-description');
        var modalImage = modal.find('.image');
        var modalTitle = modal.find('.product-title');
        //
        modal.css('display', 'block');
        modalImage.attr('src', image);
        modalTitle.text(title);
        modalDescription.text(description);
        console.log("title: ", title);
    });
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('.product-modal').css('display', 'none');
        }
    });
    var closeTag = $(".close-tag");
    closeTag.on('click', function (e) {
        var target = $(e.currentTarget);
        var modal = target.closest(".wrapper-container").find(".product-modal");
        modal.css('display', 'none');
    });
});
