window.onscroll = function (e) {
    if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600) {

        document.getElementById("boy").style.backgroundPosition = '0px 0px';
        document.getElementById("boy").style.top = '-80px';
    }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("boy").style.top = '50%';

    }



    if (document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800) {
        document.getElementById("boy").style.top = '75%';

    }



    // add the rest of the conditions here
}