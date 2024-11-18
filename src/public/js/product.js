// import Swal from 'sweetalert2';
$(function () {
    var url = "http://localhost:3000/cart/add";
    var postData = function (id) {
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
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
    var notyf = new Notyf({
        duration: 2500,
        position: {
            x: "right",
            y: "bottom"
        },
        types: [
            {
                type: "success",
                background: "#47af2b",
                duration: 2000
            }
        ]
    });
    addToCartButtons.on("click", function (e) {
        var target = $(e.currentTarget);
        var productId = target.data("product-id");
        var productTitle = target.data("product-title");
        postData(productId);
        notyf.success("".concat(productTitle, " has been added to cart"));
    });
    var moreDetails = $(".more-details");
    moreDetails.on("click", function (e) {
        var target = $(e.currentTarget);
        var description = target.data("product-description");
        var image = target.data("product-image");
        var title = target.data("product-title");
        var wrapper = target.closest(".wrapper-container");
        var modal = wrapper.find(".product-modal");
        var modalDescription = modal.find(".item-description");
        var modalImage = modal.find(".image");
        var modalTitle = modal.find(".product-title");
        modal.css("display", "block");
        modalImage.attr("src", image);
        modalTitle.text(title);
        modalDescription.text(description);
    });
    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            $(".product-modal").css("display", "none");
        }
    });
    var closeTag = $(".close-tag");
    closeTag.on("click", function (e) {
        var target = $(e.currentTarget);
        var modal = target.closest(".wrapper-container").find(".product-modal");
        modal.css("display", "none");
    });
});
