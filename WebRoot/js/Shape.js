var Shape = function(body, status){
	this.body = body;				//图形的所有状态
	this.statusv = status;	//当前状态
	this.topDistence = -1;	//图形到顶部的距离
	this.leftDistence = 6;	//图形到左边界的距离

	this.setBody = function(body){
		this.body = body;
	};
	this.setStatus = function(status){
		this.status = status;
	};
	this.leftMove = function(){
		this.leftDistence--;
	};
	this.rightMove = function(){
		this.leftDistence++;
	};
	this.downMove = function(){
		this.topDistence++;
	};
	this.rotate = function(){
		this.status = (this.status + 1) % this.body.length;
	};
};