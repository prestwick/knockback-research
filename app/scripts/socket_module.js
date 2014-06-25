/*global io*/
/*jshint unused: false */

//In this module the web socket is setup up. 
var socketModule  = (function () {
    'use strict';
    var socket = io.connect('http://localhost:1337');
    return {socket: socket};
}());