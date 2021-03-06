
window.onload = function(){
	/*
	head部分点击出现消失
	 
	 */
	
	var navLis = document.querySelectorAll('.navLi');
	var shadow = document.querySelector('#shadow');
	var shad = shadow.getElementsByTagName('div')[0];
	var shadTitle = document.querySelector('.shad_l');
	var shadClose = document.querySelector('.shad_r');
	var shadText = document.querySelector('.shad_p');
	for(var i=0;i<navLis.length;i++){
		navLis[i].data = headData[i];
		navClick (navLis[i]);
	}
	function navClick (obj){
		obj.onclick = function(){
			var data = this.data;
			//console.log(data);
			shadow.style.display = 'block';
			shadChange();
			
			shadTitle.innerHTML = data.title;
			var str = '';
			for(var i=0;i<data.content.length;i++){
				str += '&nbsp;&nbsp;&nbsp;&nbsp;'+data.content[i]+'</br>';
			}
			
			shadText.innerHTML = str;
		}
	}
	function shadChange(){
		setTimeout(function(){
			shadow.style.display = "block";
			shad.style.left = '50%';
			shad.style.top = '150px';
			shad.style.marginLeft = '-350px';
			shad.style.transform = 'rotate(0deg)';
		},10)
	}
	function shadBack(){
		setTimeout(function(){
			shad.style.left = '';
			shad.style.top = '';
			shad.style.marginLeft = '';
			shad.style.transform = '';
		},10)
	}
	//点击关闭按钮，关闭遮罩层；
	shadClose.onclick = function(){
		shadow.style.display = '';
		shadBack();
	}
	
	/*
	 中间部分：
	 图片切换
	 1.控制图片切换；
	 	最上面的图片渐变消失；
	 	后面的图片往前推到第一张图片的位置；
	 2.图片对应文字出现；
	 	title文字逐个出现：
	 	ul中数据逐条出现；
	 3.每个图片添加点击事件：
	 	1）如果当前点击的图片是最前面的图片，则图片翻转正向，停止运动，文字对应；
	 		再次点击，翻转会原状，定时器继续；
	 	2）如果当前点击的图片不是最前面的图片，则直接运动到最前面，继续运动，文字对应；
	 */
	var content = document.getElementById('content');
	var main = content.getElementsByTagName('ul')[0];
	var mainLis =main.getElementsByTagName('li');
	var timer = null;
	var introduce = document.querySelector('#content .introduce');
	var aLink = document.querySelector('.introduce a');
	
	
	
	rotate();//左边初始化
	creatText(mainLis[mainLis.length-1].data);//右边初始化
	interval();//运动
	for(var i=0;i<mainLis.length;i++){
		click(mainLis[i]);
	}
	//点击图片
	function click(obj){
		obj.onOff = false;
		obj.onclick = function(){
			var subs = nextSubs(obj);//存储兄弟的数组；则旋转
			//若果是最前的那一个；
			if(subs.length==0){
				if(!this.onOff){
					this.style.transform = 'rotateY(0deg) translateZ(0px)';
					clearInterval(timer);
					
				}else{
					this.style.transform = 'rotateY(30deg) translateZ(0px)';
					interval();
				}
				this.onOff = !this.onOff;
			}else{//如果是后面的元素，则向前推；
				for(var i=subs.length-1;i>=0;i--){
					subs[i].style.opacity = 0;
					main.insertBefore(subs[i],mainLis[0]);
				}
				for(var j=mainLis.length-1;j>=0;j--){
					var n1 = mainLis.length-1-j;
					mainLis[j].style.transform = 'rotateY(30deg) translateZ('+-n1*200+'px)';
				}
				creatText(mainLis[mainLis.length-1].data);
				setTimeout(function(){
					for(var i=subs.length-1;i>=0;i--){
						subs[i].style.opacity = 1;
					}
				},30)
			}
		}
	}
	//获取兄弟节点集合
	function nextSubs(obj){
		var arr = [];//存储兄弟节点
		var subs = obj.parentNode.children;
		for(var i=0;i<subs.length;i++){
			subs[i].index = i;
		}
		var n = obj.index+1;
		for(i=n;i<subs.length;i++){
			arr.push(subs[i]);
		}
		return arr;
	}
	
	//控制图片运动；
	function interval(){
		timer = setInterval(function(){
			//console.log(3)
			mainLis[mainLis.length-1].style.opacity = 0;
			for(var i=mainLis.length-2;i>=0;i--){
				var n1 = mainLis.length-2-i;
				mainLis[i].style.transform = 'rotateY(30deg) translateZ('+-n1*200+'px)';
			}
			creatText(mainLis[mainLis.length-2].data);
			setTimeout(function(){
				main.insertBefore(mainLis[mainLis.length-1],mainLis[0]);
				mainLis[0].style.transform = 'rotateY(30deg) translateZ('+-(mainLis.length-1)*200+'px)';
				mainLis[0].style.opacity = 1;
				
			},500);
		},2500);
	}
	
	
	
	//初始化页面旋转
	function rotate(){
		var str = '';
		for(var i=0;i<data.length;i++){
			str += '<li class="mainLi"><img src="'+data[i].img+'"/><div class = "tips" style = "color:'+ data[i].color +';background-color:'+ data[i].bgColor +'" >'+ data[i].title +'</div></li>';
		};
		document.querySelector('#content .main').innerHTML = str;

		for(var i=mainLis.length-1;i>=0;i--){
			var n1 = mainLis.length-1-i;
			mainLis[i].data = data[i];
			//console.log(i,data[i])
			mainLis[i].style.transform = 'rotateY(30deg) translateZ('+-n1*200+'px)';
		}
	}
	
	//右边数据初始化
	function creatText(data){
		/*var data = mainLis[mainLis.length-2].data;*/
		//生成h2中的部分；
		aLink.href = data.aHerf;
		title(data);
		//生成对应ul 的内容；
		creatLi(data);
		
		
	}
	//生成h2中的部分；
	function title(data){
		//console.log(data);
		var h2 = introduce.getElementsByTagName('h2')[0];
		var title = data.title;
		var str = '';
		for(var i=0;i<title.length;i++){
			str += '<span style="left:'+24*i+'px">'+ title[i] +'</span>';
		}
		h2.innerHTML = str; 
		var spans = h2.getElementsByTagName('span');
		var num = -1;
		var timer = setInterval(function(){
			num++;
			if(num>= spans.length){
				clearInterval(timer);
				return;
			}
			mTween(spans[num],'top',0,400,'backOut');
			
		},30);
	}
	//生成对应ul 的内容；
	function creatLi(data){
		var introduce_ul = document.querySelector('.introduce_datail');
		var lis = introduce_ul.getElementsByTagName('li');
		str = '';
		//console.log(data);
		for(var i=0;i<data.details.length;i++){
			str += '<li>'+(i+1)+'.'+data.details[i]+'</li>';
		}
		introduce_ul.innerHTML = str;
		var target =20;
		var n = -1;
		//产生动作；
		next(target);
		function next(target){
			n++;
			if(n>=lis.length){
				return;
			}
			mTween(lis[n],'top',target,400,'easeOut',function(){
				target += lis[n].offsetHeight;
				//console.log(n);
				next(target);
			})
		}
	}
	
	/*
	 右下角部分
	 1.点击右下角的按钮
	 	1.小图标旋转；
	 	2.ul显示
	 		每一个li移动到对应位置；
	 		每一个li的透明度逐步变为1；
	 		
	*/
	
	var personal = document.querySelector('#personal');
	var personalIcon = document.querySelectorAll('#personal .icon')[0];
	var personalLis = personal.getElementsByTagName('li');
	
	
	personalIcon.onOff = false;
	personalIcon.onclick = function(){
		/*console.log(1);*/
		if(!this.onOff){
			/*展开*/
			spreadList();
		}else{
			/*关闭*/
			closeList();
		}
		this.onOff = !this.onOff;
		
	}
	function spreadList(){
		personalIcon.style.transform = 'rotate(0deg)';
		for(var i=0;i<personalLis.length;i++){
			personalLis[i].style.top = -(i+1)*60+'px';
			//personalLis[i].style.right = (i+1)*30+'px';
			personalLis[i].style.opacity = 1;
		}
	}
	function closeList(){
		personalIcon.style.transform = '';
		for(var i=0;i<personalLis.length;i++){
			personalLis[i].style.top = '';
			personalLis[i].style.right = '';
			personalLis[i].style.opacity = '';
		}
	}




}
