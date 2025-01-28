var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1; 
var day = today.getDate();

console.log(year + '年' + month + '月' + day + '日');

// JavaScriptでの月は0から11までだから+1する必要がある　12月表示される