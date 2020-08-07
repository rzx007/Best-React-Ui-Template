import { CHANGE_COLOR } from "./actionType"
import { combineReducers } from 'redux'
const colors = {
    themeColor: localStorage.getItem("themeColor") || '#6064f4',
    navColor: '#fff',
}
function theme(state = colors, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return Object.assign({}, state, {
                themeColor: action.color
            })
        default:
            return state
    }
}
const todoApp = combineReducers({
    theme
})

export default todoApp

// 不要修改 state。 使用 Object.assign() 新建了一个副本。不
// 能这样使用 Object.assign(state, { themeColor: action.color })，
// 因为它会改变第一个参数的值。你必须把第一个参数设置为空对象。你也可以开启对 ES7 提案对象展开运算符的支持, 
// 从而使用 { ...state, ...newState } 达到相同的目的。
// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。