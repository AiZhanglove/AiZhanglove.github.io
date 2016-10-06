window.onload = function(){
	/*
	 思路
	 	1.创建对应屏幕个数的div;
	 	2.点击开始按钮，蛇开始移动（默认向右），并自动生成一个apple的位置；
	 	3.键盘按下，判断按下的键值来判断蛇向哪一个方向移动；
	 	4.吃到苹果，则长+1，分数+1，重新生成苹果；	
	 	5.撞墙，则死掉；
	 	6.吃到自己，则死掉；
	 	7.点击暂停按钮，暂停；
	  
	 * */
	var left = document.getElementById('left');
	
	var len = 1600;
	var divs = left.getElementsByTagName('div');
	var right = document.getElementById('right');
	var start = document.getElementById('start');
	var pause = document.getElementById('pause')
	var score = document.getElementById('score');
	//初始化页面；
	var n = 130;//蛇的位置
	var t = 300;//初始化延时时间；
	var arr = [];//初始化位置记录
	var dicr = 0; //初始化方向；
	var timer = null;//初始化定时器；
	var apple;//初始化苹果位置；
	var count = 0;//初始化得分为0；
	function int(n){
		var str = '';
		for(i=0;i<len;i++){
			str += '<div style="left: '+ i%40*15 +'px;top: '+ (Math.floor(i/40))*15 +'px;"></div>'
		}
		left.innerHTML = str;
		//divs[n-1].className = divs[n].className = 'snake';
		arr.push((n-1),n);
		for (var i=0;i<arr.length;i++){
			divs[arr[i]].className = 'snake';
		}
	}
	int(n);
	creatApple();
	//2.点击开始按钮，蛇开始移动（默认向右），并自动生成一个apple的位置；
	start.onclick = function(){
		//alert(1);
		if(timer)return;
		
		timer = setInterval(function(){
			move(dicr);
		},t)
	};
	//点击暂停按钮，暂停
	pause.onclick = function(){
		clear();
	}
	//用上下左右键控制移动方向；
	document.onkeydown = function(ev){
		switch(ev.keyCode){
			case 39:
				if(dicr != 0 & dicr != 2){
					dicr = 0;
				}
				break;
			case 40:
				if(dicr != 1 & dicr != 3){
					dicr = 1;
				}
				break;
			case 37:
				if(dicr != 0 & dicr != 2){
					dicr = 2;
				}
				break;
			case 38:
				if(dicr != 1 & dicr != 3){
					dicr = 3;
				}
				break;
		}
	}
	//吃掉苹果并得分；
	function eat(){
		creatApple();
		count++;
		score.innerHTML = count;
	}
	//随机生成苹果位置；
	function creatApple(){
		//确保苹果的位置不在蛇的身上；
		function applePos(){
			apple= Math.floor(Math.random()*(divs.length));
			for(var i=0;i<arr.length;i++){
				if(arr[i] == apple){
					applePos();
					return false;
				}
				return true;
			}
		}
		 if(applePos()){
		 	divs[apple].className = 'apple';
		 }
	}
	//蛇身移动；
	function move(dicr){
		var old = arr[arr.length-1];
		var head = old;
		switch (dicr){
			case 0://向右
				if(old%40 == 39){
					die();
					return;
				}
				head = old+1;
				break;
			case 1://向下
				if(Math.floor(old/40)==39){
					die();
					return;
				};
				head = old+40;
				break;
			case 2://向左
				if(old%40 == 0){
					die();
					return;
				}
				head = old-1;
				break;
			case 3://向上
				if(Math.floor(old/40)==0){
					die();
					return;
				};
				head = old-40;
				break;
		}
		//console.log(arr)
		//如果咬到自己，就死掉；
		if(arr.indexOf(head) != -1){
			bite();
			return;
		}
		
		arr.push(head);
		if(head != apple){
			//没有吃到苹果时；
			var last = arr.shift();
			divs[last].className = '';
		}else{
			//当吃到苹果时；
			eat();
			divs[arr[0]].className = '';
		}
		divs[arr[arr.length-1]].className = 'snake';
		
		
	}
	//撞墙死掉；
	function die(){
		alert('撞墙了！');
		clear();
	}
	//咬到自己死掉；
	function bite(){
		alert('咬到自己了！');
		clear();
	}
	//清除定时器；
	function clear(){
		clearInterval(timer);
		timer = null;
	}
	
	
	
	
	
	
	
}
