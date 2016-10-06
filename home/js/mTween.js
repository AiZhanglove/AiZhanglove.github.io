/*已知量：
 	var target = 800;		//目标位置；
 	var duration = 5000;	//运动总时间；
 		
  */
function mTween(obj,attr,target,duration,fx,callback){
	//获取起始位置
	var begin = parseFloat(getComputedStyle(obj)[attr]);
	//计算出总距离
	var count = target - begin;
	//起始时间
	var time = new Date().getTime();
	//为了防止定时器冲突，每次定时器开启之前，都把之前的定时器清除；
	clearInterval(obj[attr]);
	//用给元素添加自定义属性 的方法来存定时器，有效的避免了同一元素不同属性之间的不同定时器之间的冲突！
	obj[attr] = setInterval(function(){
		//获取已走过事件
		t = new Date().getTime() - time;
		//如果时间超出总时间，则停止；
		if(t>=duration){
			//时间归为总时间（是为了让最后计算对应总长度）
			t = duration;
			//清除定时器
			clearInterval(obj[attr]);
		}
		//计算出现在应该所处的位置
		var value = Tween[fx](t,begin,count,duration);
		obj.style[attr] = value + 'px';
		if(t==duration){
			//如果有返回值就执行，如果没有就不执行；
			callback&&callback();
		}
	},30)
}
