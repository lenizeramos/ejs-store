$(()=>{
    console.log("I'm Ivan")

    const url = "localhost:3000/cart/add";

    const postData = (id:number)=>{
        $.ajax({
            url: url,
            type: 'POST',
            data:{
                id:id
            },
            success: function(response){
                console.log("Server Response: ", response)
            },
            error: function(status, error){
                console.log("Error: ", error)
            }
        })
    }


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
})