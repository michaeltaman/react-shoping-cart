
function formatCurrency(num) {
    return "$" +  Number(num.toFixed(1)).toLocaleString() + " ";
}

function formatDate(dateStr) { 
    let date = new Date(dateStr)
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y ;
}

export {formatCurrency, formatDate} 