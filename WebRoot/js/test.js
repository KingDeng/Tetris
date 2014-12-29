function Person(){
	var s = "s";
	this.getName = function(){
		return s;
	};
	this.setName = function(){
		s = "deng";
	};
}