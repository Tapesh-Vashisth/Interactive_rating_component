$(function(){
    let rating;
    let old_rating;
    $(".numbers").on("click", function(e){
        e.preventDefault();
        let target = e.target;
        let id = target.getAttribute("id");
        rating = id;
        console.log(rating);
        target = $(`#${id}`);
        if (old_rating !== undefined){
            old_rating.css({
                'background-color': 'hsla(216, 12%, 54%, 0.5)'
            });
            old_rating = target;
        }else{
            old_rating = target;
        }
        target.css({
            'background-color': 'hsl(216, 12%, 54%)'
        })
    });

    $("button").on("click", function(e){
        e.preventDefault();
        if (rating !== undefined){
            console.log(rating);
            $("#rating").css({
                'display' : 'none'
            });
            $("#thanks").css({
                'display' : 'grid'
            });
            $("#rate").text(rating);
        }else{
            ;
        }
    })
});