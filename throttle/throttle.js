function throttle(fn,interval,leading = true,trailing = false) {
    let startTime = 0



    const _throttle = function (...args) {
        //获取当前时间
        const nowTime = new Date().getTime()

        //判断是否需要立即执行
        if (!leading && startTime === 0) {
            startTime = nowTime
        }

        //计算需要等待的时间
        const waitTime = interval - (nowTime - startTime)
        if(waitTime <= 0){
            fn.apply(this,args)
            startTime = nowTime
        }
    }
    
    return _throttle
}