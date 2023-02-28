function throttle(fn,interval) {
    let startTime = 0

    const _throttle = function () {
        const nowTime = new Date().getTime()
        const waitTime = interval - (nowTime - startTime)
        if(waitTime <= 0){
            fn()
            startTime = nowTime
        }
    }
    
    return _throttle
}