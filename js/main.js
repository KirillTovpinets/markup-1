(function(){
    createCircle = (id, color) => {
        return new ProgressBar.Circle(`#${id}`, {
            color: color,
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth:10
        })
    }

    let basic = createCircle('basic-package', '#fcb03c');
    basic.animate(0.25);

    let normal = createCircle('normal-package', '#7f8c8d');
    normal.animate(0.5);

    let big = createCircle('big-package', '#f85f40');
    big.animate(0.75);

    let biggest = createCircle('biggest-package', '#21be9f');
    biggest.animate(1);

    $("#comment-carousel").on("slide.bs.carousel", (e) => {
        const authId = e.relatedTarget.dataset.author;
        $(".author.active").removeClass("active");
        $("#author-" + authId).toggleClass("active");
    })
})()