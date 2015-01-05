var Controller = {
		keyEvent: function(e){
			if(e.keyCode == 37 && Controller.isMoveable(37)){
				Shape.leftMove();
			}
			if(e.keyCode == 38){
							
			}
			if(e.keyCode == 39 && Controller.isMoveable(39)){
				Shape.rightMove();
			}
			if(e.keyCode == 40){
				if(Controller.isDownable())
					Shape.downMove();
			}
		},
		isMoveable: function(d){
			var min = 0, max = 0;
			for(var i = 0; i < Shape.rects.length; i++){
				var t = parseInt($(Shape.rects[i]).attr("x"));
				if(i == 0){
					min = max = t;
				}
				min = min < t ? min : t;
				max = max > t ? max : t;
			}
			if(min < 120)
				return false;
			if(d == 39 && max > 344)
				return false;
			return true;
		},
		isDownable: function(){
			var max = 0, min = 0;
			for(var i = 0; i < Shape.rects.length; i++){
				var t = parseInt($(Shape.rects[i]).attr("y"));
				max = max > t ? max : t;
			}
			if(max > 342){
				this.accept();
				ShapeFactory.getShape();
				return false;
			}
			for(var i = 0; i < Shape.rects.length; i++){
				var row = Shape.top + parseInt($(Shape.rects[i]).attr("row"));
				var col = Shape.left + parseInt($(Shape.rects[i]).attr("col"));
				var dt = rects[row + 1][col];
				if(dt != -1){
					this.accept();
					ShapeFactory.getShape();
					return false;
				}
			}
			return true;
		},
		accept: function(){
			var curr = Shape.body[Shape.status];
			for(var i = 0; i < Shape.rects.length; i++){
				$(Shape.rects[i]).attr("id", idIndex);
				var row = parseInt($(Shape.rects[i]).attr("row"));
				var col = parseInt($(Shape.rects[i]).attr("col"));
				rects[Shape.top + row][Shape.left + col] = idIndex;
				idIndex++;
			}
		}
};