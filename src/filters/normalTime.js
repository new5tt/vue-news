export const normalTime = (time) => {
    if (time) {
        var oDate = new Date();
        oDate.setTime(time);
        var y = oDate.getFullYear();
        var m = oDate.getMonth();
        var d = oDate.getDate();
        var h = oDate.getHours();
        var mm = oDate.getSeconds();
        var s = oDate.getMinutes();
        return y + '/' + m + '/' + d + ' ' + h + ':' + mm + ':' + s;
    }
}