var Shape = function(body, status){
	this.body = body;		//图形的所有状态
	this.status = status;	//当前状态
	this.topDistence = -1;	//图形到顶部的距离
	this.leftDistence = 6;	//图形到左边界的距离
	this.rects = function(){
		var temp = [],row = 0, col = 0, curr = body[status];
		for(var i = 0; i < curr.length; i++){
			row = Math.floor(i / 4);
			col = i % 4;
			if(curr[i] == 1){
				var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
				$(rect).attr("x", Global.firstX + Global.cellSize * col);
				$(rect).attr("y", Global.firstY + Global.cellSize * row);
				$(rect).attr("width", Global.cellSize);
				$(rect).attr("height", Global.cellSize);
				$("#panel").append(rect);
				temp.push(rect);
			}
		}
		return temp;
	};
};
Shape.prototype = {
	setBody: function(body){
		this.body = body;
	},
	setStatus: function(status){
		this.status = status;
	},
	leftMove: function(){
		this.leftDistence--;
	},
	rightMove: function(){
		this.leftDistence++;
	},
	downMove: function(){
		this.topDistence++;
	},
	rotate: function(){
		this.status = (this.status + 1) % this.body.length;
		
	}
};