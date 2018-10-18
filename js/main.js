(function(){
    createCircle = (id, color) => {
        return new ProgressBar.Circle(`#${id}`, {
            color: color,
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth:10
        })
    }

    let basic = createCircle('basic-package', '#FCB03C');
    basic.animate(0.25);

    let normal = createCircle('normal-package', '#7F8C8D');
    normal.animate(0.5);

    let big = createCircle('big-package', '#F85F40');
    big.animate(0.75);

    let biggest = createCircle('biggest-package', '#21BE9F');
    biggest.animate(1);
})()