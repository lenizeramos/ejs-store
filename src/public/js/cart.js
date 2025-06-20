$(function () {
    var postData = function (url, method, data) {
        $.ajax({
            url: url,
            method: method,
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (response) {
                window.location.reload();
            },
            error: function (xhr, status, error) {
                console.log("Request failed. Status: " + status);
                console.log("Error: " + error);
                console.log("Response text: " + xhr.responseText);
            }
        });
    };
    var updateButtons = $(".update-button");
    updateButtons.on("click", function (e) {
        var target = $(e.currentTarget);
        var productId = target.data("product-id");
        var quantity = target.closest("form").find("input[name='quantity']").val();
        var quantityNumber = parseInt(quantity, 10);
        if (!isNaN(quantityNumber) && quantityNumber >= 1) {
            postData("/cart/update", "PUT", { productId: productId, quantity: quantityNumber });
        }
        else {
            alert("Invalid quantity!");
        }
    });
    var deleteButtons = $(".delete-button");
    deleteButtons.on("click", function (e) {
        var target = $(e.currentTarget);
        var productId = target.data("product-id");
        postData("/cart/delete", "DELETE", { productId: productId });
    });
});
