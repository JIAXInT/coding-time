function debounce(fn, delay, immediate = false, resultCallback) {
    //用于记录上一次事件触发的timer
    let timer = nul
    let isInoke = false

    //触发事件时 执行的函数
    const _debounce = function (...args) {
        return new Promise((resolve, reject) => {
            try {
                //如果有再次触发（多次）事件，那么取消上一次事件
                if (timer) clearTimeout(timer)

                //第一次操作不需要延迟
                let res = undefined
                if (immediate && !isInoke) {
                    fn.apply(this, args)
                    if(resolve) resultCallback(res)
                    resolve(res)
                    this.isInoke = true
                    return

                }

                //延迟去执行传入的fn函数
                timer = setTimeout(() => {
                    fn.apply(this, args)
                    resultCallback(res)
                    timer = null //执行函数之后，将timer重新制为null
                    isInoke = false
                }, delay)
            } catch (error) {
                reject(error)
            }
        })
    }

    //给_debounce绑定一个取消的函数
    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        isInoke = false
    }

    //返回一个新的函数 
    return _debounce
}

export default debounce