// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


$.drawer.open();

function toggle(e) {
    var fn = 'toggle' + e.source.title + 'Window';
    $.drawer[fn]();
}