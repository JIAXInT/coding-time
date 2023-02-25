function debounce(fn,delay){
    //用于记录上一次事件触发的timer
    let timer = nul

    //触发事件时 执行的函数
    const _debounce = function(){
        //如果有再次触发（多次）事件，那么取消上一次事件
       if(timer) clearTimeout(timer)

       //延迟去执行传入的fn函数
       timer = setTimeout(()=>{
            fn()
            timer = null //执行函数之后，将timer重新制为null
        },deleay)
    }

    //返回一个新的函数 
    return _debounce
}