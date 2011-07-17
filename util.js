util = {
	/**
	 * Add an event.
	 * @param {Object} element DOM element, e.g. window, to bind the event to.
	 * @param {String} type Any type supported by the DOM element.
	 * @param {Function} ... One or several functions to execute.
	 */
	addEvent: function(element, type){
		for (var i = 2; i < arguments.length; i++) {
			if (element.addEventListener) {
				element.addEventListener(type, arguments[i], false);
			}
			else { // IE
				element.attachEvent('on' + type, arguments[i]);
			}
		}
	},
	getEnumName: function(en, type){
		
		for (var n in en){
			if(en[n] === type){
				return n;
			}
		}
		return false
	}
}
