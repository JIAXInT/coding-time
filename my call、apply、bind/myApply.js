//给函数对象添加方法
Function.prototype.myApply = function (thisArg, otherArg) {
  //确保thisArg是一个对象类型
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);

  //thisArg => 传入的第一个参数 要绑定的this
  thisArg.fn = this;
  //执行剩余参数
  thisArg.fn(...otherArg);

  delete thisArg.fn;
};
