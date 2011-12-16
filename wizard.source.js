var Wizard = function(config){
	var	config = config || {},
		_handlers = config.handlers || [],
		_pages = config.pages || 0;

/*=DEBUG */
if(typeof _pages == 'number') console.log(_pages); else console.dir(_pages);

	// init
	function init(){
		for(var i = 1, l = _pages.length; i < l; ++i){
			_pages[i].style.display = 'none';
		}
	}

	this.addHandler = function(type, handler, options){
		_handlers[type] = handler;
/*=DEBUG */
console.log(util.getEnumName(this.Type, type));

	}
	
	this.fireEvent = function(type){
        _handlers[type]();
/*=DEBUG */
console.log(util.getEnumName(this.Type, type));
	    
	}
	init();
}
Wizard.prototype.next = function(){ console.log('next'); }
Wizard.prototype.prev = function(){ console.log('prev'); }

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
