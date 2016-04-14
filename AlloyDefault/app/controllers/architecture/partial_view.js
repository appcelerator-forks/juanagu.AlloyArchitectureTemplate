/**
 * @author jagu
 * @
 */
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
		 * if(_.has(properties, 'view')){
		 * 	_.extend($.view, properties.view)
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
	$.view.addEventListener('some', onSome);
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
};

/**
 * when window is closed
 * @param {Object} e
 */
var onClose = function(e) {
	cleanup();
};

/**
 * add
 * @param {Object} e
 */
var onAdd = function(e) {

};

/** ------------------------
 public
 ------------------------**/
exports.applyProperties = applyProperties;
exports.onOpen = onOpen;
exports.onClose = onClose;
exports.onAdd = onAdd;
exports.cleanup = cleanup;
$.cleanup = cleanup; 