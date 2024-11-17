// import Swal from 'sweetalert2';
// import { stringify } from "querystring";
$(function () {
    console.log("New");
    var url = "http://localhost:3000/cart/add";
    var postData = function (id) {
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ productId: id }),
            success: function (response) {
                console.log("Server Response: ", response);
            },
            error: function (jqXHR, status, error) {
                console.log("Error: ", status, error);
            }
        });
    };
    var addToCartButtons = $(".add-to-cart");
    addToCartButtons.on('click', function (e) {
        var target = $(e.currentTarget);
        var productId = target.data('product-id');
        var productTitle = target.data('product-title');
        postData(productId);
        console.log("Title: ", productTitle);
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
