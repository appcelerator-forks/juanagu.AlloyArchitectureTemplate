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
		if (_.has(properties, 'menu')) {
			_.extend($.partial_menu, properties.menu);
		}
	}
};

/**
 * apply listeners to controller
 */
var applyListeners = function() {
	
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

};

/**
 * when window is closed
 * @param {Object} e
 */
var onClose = function(e) {

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
