var Controller = {
		keyEvent: function(e){
			if(e.keyCode == 37 && Controller.isMoveable(37)){
				Shape.leftMove();
			}
			if(e.keyCode == 38){
				Shape.rotate();			
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
				var row = Shape.top + parseInt($(Shape.rects[i]).attr("row"));
				var col = Shape.left + parseInt($(Shape.rects[i]).attr("col"));
				if(i == 0){
					min = max = t;
				}
				min = min < t ? min : t;
				max = max > t ? max : t;
				if(d == 37 && rects[row][col - 1] != -1)
					return false;
				if(d == 39 && rects[row][col + 1] != -1)
					return false;
			}
			if(d == 37 && min < 120)
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
				if(!this.isFull()){
					ShapeFactory.getShape();
				}
				return false;
			}
			for(var i = 0; i < Shape.rects.length; i++){
				var row = Shape.top + parseInt($(Shape.rects[i]).attr("row"));
				var col = Shape.left + parseInt($(Shape.rects[i]).attr("col"));
				var dt = rects[row + 1][col];
				if(dt != -1){
					this.accept();
					if(!this.isFull()){
						ShapeFactory.getShape();
					}
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
//			this.deleteLine();
		},
		deleteLine: function(){
			for(var i = rects.length; i >= 0; i--){
				var flag = true, rect = [];
				for(var j = 0; j < rects[i].length; j++){
					rect.push($("#" + rects[i][j]));
					if(rects[i][j] == -1){
						flag = false;
						break;
					}
				}
				if(flag){
					$(rect).remove();
				}
			}
		},
		isFull: function(){
			for(var i = 0; i < rects[0].length; i++){
				if(rects[0][i] != -1){
					alert("You Have Lost.Game Over!");
					return true;
				}
			}
			return false;
		}
};