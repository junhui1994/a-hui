//修改h1标题的内容
/* var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */
// html全页面的点击 用法:document.querySelector('对象名').onclick = function() {}
/* document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
} */
//把 <img> 元素的引用存放在 myImage 变量里   //getAttribute() 通过名称获取属性的值。
var myImage = document.querySelector('img');
/* 将这个变量的 onclick 事件与一个匿名函数绑定。每次点击图片时：
获取这张图片的 src 属性值。
用一个条件句来判断 src 的值是否等于原始图像的路径:
如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片。
如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态。 */
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');//srtAttribute把指定的属性设置为指定的值。如果不存在具有指定名称的属性，该方法将创建一个新属性。

    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


var myButton = document.querySelector('button');//声明html中下方按钮
var myHeading = document.querySelector('h1');//声明h1标题
function setUserName() {
  let myName = prompt('请输入你的名字。');//prompr生成一个需要输入内容的弹窗,存储在 myName 变量里
  //避免输入内容为空或者null
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);//创建一个name 并把myName的值给name
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;//输出欢迎语句+输入的名字
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  /* 
  使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
  若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过），
  调用 getItem() 获取保存的名字，像上文的 setUserName() 那样设置 textContent。
  */
}

//为按钮设置 onclick 事件处理器。
//按钮按下时运行 setUserName() 函数。这样用户就可以通过按这个按钮来自由设置新名字了：
myButton.onclick = function() {
   setUserName();
}
/* 
 第一次访问网页时，页面将询问用户名并发出一段个性化的信息。可随时点击按钮来改变用户名 。
 告诉你一个额外的福利，因为用户名是保存在 localStorage 里的，
 网页关闭后也不会丢失，所以重新打开浏览器时所设置的名字信息将依然存在:)*/