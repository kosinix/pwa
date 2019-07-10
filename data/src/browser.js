let jquery = require('jquery')
let popper = require('popper.js')
let bootstrap = require('bootstrap')
let vue = require('vue')
let vueRouter = require('vue-router')
let jsqr = require('jsqr')
let localforage = require('localforage')
let otpauth = require('otpauth')

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