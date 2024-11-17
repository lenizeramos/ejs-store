import Swal from 'sweetalert2';

$(()=>{
    
    console.log("New")

    const url = "localhost:3000/cart/add";

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

    const addToCartButtons = $(".add-to-cart");
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
    
    addToCartButtons.on('click', (e:JQuery.ClickEvent) => {
        const target = $(e.currentTarget);
        const productId = target.data('product-id') as number;
        const productTitle = target.data('product-title') as string
        console.log(productTitle)

        // Toast.fire({
        //     text: ` ${productTitle} added to cart`,
        //     icon: "success",
        //     color: "black",
        //   });

        // postData(productId)

        console.log("Product ID: ", productId)
    })

    const moreDetails = $(".more-details");

    moreDetails.on('click', (e:JQuery.ClickEvent) => {
        const target = $(e.currentTarget);
        const description = target.data('product-description') as string
        const image = target.data('product-image') as string
        const title = target.data('product-title') as string

        //DOM 
        const wrapper = target.closest('.wrapper-container')
        const modal = wrapper.find('.product-modal')
        const modalDescription = modal.find('.item-description');
        const modalImage = modal.find('.image')
        const modalTitle = modal.find('.product-title')

        //
        modal.css('display','block')
        modalImage.attr('src', image)
        modalTitle.text(title)
        modalDescription.text(description)

        console.log("title: ", title)
    })

    $(document).on('keydown', (e:JQuery.KeyDownEvent)=>{
        if(e.key === 'Escape'){
            $('.product-modal').css('display', 'none')
        }
    })

    const closeTag = $(".close-tag")
    closeTag.on('click', (e:JQuery.ClickEvent)=>{
        const target = $(e.currentTarget);

        const modal = target.closest(".wrapper-container").find(".product-modal")
        modal.css('display','none')
        
    })


});





