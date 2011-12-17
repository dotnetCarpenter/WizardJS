var Wizard = function(config){
	var	config = config || {},
		_handlers = [],
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
	    _handlers.push([ util.getEnumName(this.Type, type), handler, options ]);
/*=DEBUG */
console.log("Type", util.getEnumName(this.Type, type));
console.dir(_handlers);
	}
	
	this.fireEvent = function(type){
	    var self = this;
	    /* sorted approach */
	    _handlers.sort(function(a,b){ return a[0]-b[0]; });
	    var start = _handlers.indexOf(util.getEnumName(self.Type, type));
	    var end = _handlers.lastIndexOf(util.getEnumName(self.Type, type));
	    /* filter approach */
	    
	    /* forEach approach */
	    _handlers.forEach(function(value, index, array){
	        if(util.getEnumName(self.Type, type) === value[0]){
	            value[1].call(self, value[2]);
	        }
	    });
/*=DEBUG */
console.log(util.getEnumName(this.Type, type));
	    
	}
	init();
}
Wizard.prototype.next = function(){
/*=DEBUG */
console.log('next');

    this.fireEvent(this.Type.effectBefore);
    this.fireEvent(this.Type.pageNext);
    this.fireEvent(this.Type.effectAfter);
}
Wizard.prototype.prev = function(){
/*=DEBUG */
console.log('prev');

    this.fireEvent(this.Type.effectBefore);
    this.fireEvent(this.Type.pagePrev);
    this.fireEvent(this.Type.effectAfter);
}

Wizard.prototype.addBeforeEffect = function(page, handler){
	this.addHandler(this.Type.effectBefore, handler, { page: page });
}
Wizard.prototype.addAfterEffect = function(page, handler){
	this.addHandler(this.Type.effectAfter, handler, { page: page });
}
Wizard.prototype.Type = {
	effectBefore: 1,
	effectAfter: 2,
	pageNext: 4,
	pagePrev: 8
}
