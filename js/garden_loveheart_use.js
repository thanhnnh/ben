var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2018, 2, 16);
together.setHours(8); //地域时钟差
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
    //错误时
} else {
    setTimeout(function () {
        startHeartAnimation();
    }, 2000);
    //开始动画的时间
    timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 1000);

}
