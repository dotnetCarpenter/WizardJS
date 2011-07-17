var Wizard = function(config){
	var	config = config || {},
		_handlers = [],
		_pages = config.pages || 0;

console.dir(_pages);
console.log(typeof _pages);

	// init
	function init(){
		for(var i = 1, l = _pages.length; i < l; i++){
			_pages[i].style.display = 'none';
		}
	}

	this.addHandler = function(type, handler, options){
		_handlers[type] = handler;

console.log(util.getEnumName(this.Type, type));

	}
	init();
}
Wizard.prototype.next = function(){}
Wizard.prototype.prev = function(){}
Wizard.prototype.addBeforeEffect = function(page, handler){
	this.addHandler(this.Type.effectBefore, handler, { page: page });
}
Wizard.prototype.addAfterEffect = function(page, handler){
	this.addHandler(this.Type.effectAfter, handler, { page: page });
}
Wizard.prototype.Type = {
	effectBefore: 1,
	effectAfter: 2
}
