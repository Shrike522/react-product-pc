// onresize
export default function () {

    let offsetWid = document.documentElement.clientWidth;

    // mobile
    if (/(Android)/i.test(navigator.userAgent)) {
        offsetWid = window.screen.width;
    }

    return offsetWid;

}