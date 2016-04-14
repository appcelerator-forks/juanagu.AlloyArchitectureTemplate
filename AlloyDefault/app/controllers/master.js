/** ------------------------
 Fields
 ------------------------**/
// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

/** ------------------------
 Methods
 ------------------------**/
/**
 * apply properties to controller
 * @param {Object} properties
 */
var applyProperties = function(properties) {
	if (_.isObject(properties)) {
		/*
		 * e.g
		 */

		/*
		 *
		 * if(_.has(properties, 'window')){
		 * 	_.extend($.window, properties.window)
		 * }
		 *
		 *
		 *
		 *
		 */
	}
};

/**
 * http://www.tidev.io/2014/09/18/cleaning-up-alloy-controllers/
 */
var cleanup = function() {
	// let Alloy clean up listeners to global collections for data-binding
	// always call it since it'll just be empty if there are none
	$.destroy();
	// remove all event listeners on the controller
	$.off();
};

/**
 * apply listeners to controller
 */
var applyListeners = function() {
	$.win.addEventListener('some', onSome);
};

/**
 * initialize controller
 */
var init = function() {
	applyProperties(args);
	applyListeners();
};

/** ------------------------
 Listeners
 ------------------------**/
/**
 *
 */
/**
 * e-g
 * @param {Object} e
 */
var onSome = function(e) {

};

/**
 * when window is opened
 */
var onOpen = function(e) {
	_.defer(init);
	//$.view.onOpen(e);

};

/**
 * when window is closed
 * @param {Object} e
 */
var onClose = function(e) {
	//$.view.onClose(e);
};

/**
 * add
 * @param {Object} e
 */
var onAdd = function(e) {
	//$.view.onAdd(e);
};

/** ------------------------
 public
 ------------------------**/
exports.applyProperties = applyProperties;
exports.cleanup = cleanup;
$.cleanup = cleanup;
