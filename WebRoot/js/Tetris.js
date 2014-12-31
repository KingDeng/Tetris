/**
 * =================================================================
 * 
 * @author   King Deng
 * @email    kuohsing_don@163.com
 * @date     2014-12
 * @version  1.0
 * 
 * =================================================================
 */
var idIndex = 0;
var rects = new Array(Global.row);
//初始化面板
$(document).ready(function(){
	for(var i = 0; i < Global.row; i++){
		rects[i] = new Array(Global.column);
		for(var j = 0; j < Global.column; j++){
			rects[i][j] = -1;
		}
	}
	$(document).keydown(Controller.keyEvent);
	ShapeFactory.getShape();
});

function createRect(pointXy){
	var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	$(rect).attr("x", pointXy.x);
	$(rect).attr("y", pointXy.y);
	$(rect).attr("width", Global.cellSize);
	$(rect).attr("height", Global.cellSize);
	return rect;
};