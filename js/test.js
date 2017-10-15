// console.log(1);
// new Promise(function(resolve, reject) {
//     reject(true);
//     window.setTimeout(function(){
//         resolve(false);
//     },0);
// }).then(function(){
//     console.log(2);
// },function(){
//     console.log(3);
// });
// console.log(4);
// abc-de-fg-hij-k-lm-nop
//abcDeFgHijKLmNop
function fn(str) {
    let arr1 = str.split('-');
    for(let i = 1, h = arr1.length; i < h; i++){
        let arr2 =  arr1[i].split('');
        let s = arr2[0].toUpperCase();
        arr2.shift();
        arr2.unshift(s);
        arr1[i] = arr2.join('');
    }
    str = arr1.join('');
    console.log(str)
}
let str = 'abc-de-fg-hij-k-lm-nop'
fn(str)