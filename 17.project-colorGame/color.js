var numSquare=6;
// 用numSquare变量去记录是easy还是hard

var square=document.querySelectorAll(".square");
var color=randomNumColor(numSquare);
var correct=pickOneColor(color);
var pickColor=document.getElementById("pickColor");


var mess=document.querySelector("#message");
// 显示对错的信息

var h1=document.querySelector("h1");

// 重置颜色命令
var newColor=document.querySelector("button");
var mode=document.querySelectorAll(".mode");
// querySelector要加# .   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

setupMode();

function setupMode(){
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		// 先关掉样式再打开

		this.classList.add("selected");
		// 要用this替代具体的mode[i]

		this.textContent==="Easy"?numSquare=3:numSquare=6;
		// 等价于if (this.textContent==="Easy") {
		// 	numSquare=3;
		// }else{
		// 	numSquare=6;
		// }
		reset();
	})
	}
}


// easyBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	// 生成3个颜色的列表，从3个里面挑一个
// 	numSquare=3;
// 	color=randomNumColor(numSquare);
// 	correct=pickOneColor(color);
// 	pickColor.textContent=correct;

// 	// 将3个颜色apply到方块，隐藏剩余的方块
// 	for (var i = 0; i < square.length; i++) {
// 		if (color[i]){
// 			square[i].style.background=color[i];
// 		}else{
// 			square[i].style.display="none";
// 		}
// 	}
// });


// hardBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	// 生成6个颜色的列表，从6个里面挑一个
// 	numSquare=6;
// 	color=randomNumColor(numSquare);
// 	correct=pickOneColor(color);
// 	pickColor.textContent=correct;

// 	// 将3个颜色apply到方块，隐藏剩余的方块
// 	for (var i = 0; i < square.length; i++) {
// 		square[i].style.background=color[i];
// 		square[i].style.display="block";
// 	}
// });

function reset(){
	// 按了play again要把按钮变成newColor
	newColor.textContent="New Color";
	// reset颜色列表
	color=randomNumColor(numSquare);
	// reset被选中的颜色
	correct=pickOneColor(color);
	// reset h1显示的颜色
	pickColor.textContent=correct;
	// h1胜利颜色去掉
	h1.style.background="steelblue";
	mess.textContent="";

	// 将颜色列表apply到显示的square中
	for (var i = 0; i < square.length; i++) {
		if (color[i]) {
			// 先全部设置成显示，如果color[i]有空集就display=none;
			square[i].style.display="block";
			square[i].style.background=color[i];
		}else{
			square[i].style.display="none";
		}
	}
}

newColor.addEventListener("click",function(){
	reset();
})


// 判断对错
for (var i = 0; i < square.length; i++) {
	square[i].style.background=color[i];
	// 将颜色apply到各个色块中
	square[i].addEventListener("click",function(){
		// console.log(this.style.background, correct)
		// 点击后判断对错
	var clickColor=this.style.background;
		// 储存点击的颜色
		if (clickColor==correct) {
			changeColor(clickColor);
			mess.textContent="Correct!"
			h1.style.background=clickColor;
			// 把选对后的newColor按钮改成Play again?
			newColor.textContent="Play again?";
		}else{
			this.style.background="#232323";
			mess.textContent="Try again!!"
		}
	})
}


// 如果选对怎么把所以方块颜色都变成同样的颜色
function changeColor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background=color;
	}
}

// 从颜色Array中随机选择一个作为正确的颜色
function pickOneColor(array){
	var num=Math.floor(Math.random()*(array.length));
	return array[num];
}

// 随机生成n种颜色
function randomNumColor(num){
	// 定义array
	array=[];
	// 生成N个颜色的array
	for (var i = 0; i < num; i++) {
		var rgb=generateAColor();
		array.push(rgb);
		// push是个函数，后面不用加.
	}
	// 返回array
	return array
}


// 生成单个颜色
function generateAColor(){
	// 分别随机生成rgb 0-255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r +", "+ g +", "+ b + ")";
}