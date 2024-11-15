$("#updateCartForm").on("submit", function (event) {
  event.preventDefault();

  const formData = $(this).serializeArray();
  const data: { [key: string]: string } = {};
  formData.forEach((field) => {
    data[field.name] = field.value;
  });

  $.ajax({
    url: "/cart/update",
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify({
      productId: data.productId,
      quantity: data.quantity
    }),
    success: function (response) {
      window.location.href = "/cart";
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      alert("An error occurred while updating the cart.");
    }
  });
});
