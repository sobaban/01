/**
 * regist periodical event
 * ex)
 * var a = function(str){ console.log(str); };
 * setPeriodical(a, ["hello"], 3);
 * @param {function} f function executed periodicaly
 * @param {Object} arg argument(array)
 * @param {Number} rate periodical time
*/
function setPeriodical(f, arg, rate) {
    if (typeof (f) === 'function') {
        var interval = 1000 / rate;
        window.addEventListener('load', periodicalFunc(f, arg, interval), false);
    }
    else {
        console.log("f is not function");
    }
}

/**
 * execute periodical event
 * @param {function} f :function executed periodicaly
 * @param {Object} arg :argument(array)
 * @param {Number} interval :periodical interval
*/
function periodicalFunc(f, arg, interval) {
  return function() {
    var o = new (function(){})();
    f.apply(o,arg);
    setTimeout(arguments.callee, interval);
  }
}

//var a = function(str){ console.log(str); };
//setPeriodical(a, ["hello"], 3);
