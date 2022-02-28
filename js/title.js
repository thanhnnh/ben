$(document).ready(function () {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="shortcut icon"]').attr('href', "/images/favicon.ico");
            document.title = 'Trần minh ben';
            clearTimeout(titleTime);
        } else {
            $('[rel="shortcut icon"]').attr('href', "/images/favicon.ico");
            document.title = 'Ben' + OriginTitile;
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
})
