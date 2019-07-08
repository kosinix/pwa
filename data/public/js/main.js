window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js').then(function (r) {
            console.log(r)
        }).catch(function (err) {
            console.log(err)
        })
    }



    
}

