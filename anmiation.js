/**
 * @description: 获取当前元素属性值
 * @param {*} EL
 * @param {*} attr
 * @return {*}
 */
function currValue(EL, attr) {
    if (EL.currentStyle) {
        return getComputedStyle(EL, false)[attr].match(/(\d+.\d+)|(\d+)/g)
    } else {
        return getComputedStyle(EL, false)[attr].match(/(\d+.\d+)|(\d+)/g)
    }
}
/**
 * @description: 运动实现
 * @param {*} targetEl
 * @param {*} attrObj
 * @param {*} speed
 * @param {*} fn
 * @return {*}
 */
function anmiation(targetEl, attrObj, speed, fn) {
    clearInterval(targetEl.timer)
    targetEl.timer = setInterval(() => {
        let cur, flag = true
        for (let attr of Object.keys(attrObj)) {

            let attrTarget = attrObj[attr]
            cur = Math.floor(parseFloat(currValue(targetEl, attr)))
            speed = (attrTarget - cur) / 20
            attrTarget > cur ?
                speed = Math.ceil(speed)
                :
                speed = Math.floor(speed)

            targetEl.style[attr] = cur + speed + "px"

            attrTarget != cur && (flag = false)

        }
        flag && (() => {
            clearInterval(targetEl.timer)
            fn && fn()
            return
        })()


    }, 50)
}
export default anmiation