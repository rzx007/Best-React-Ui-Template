import { CHANGE_COLOR, CHANGE_SILDER } from "../actionType"

const uiSetting = {
    themeColor: localStorage.getItem("themeColor") || '#6064f4',
    navColor: '#fff',
    mode:'horizontal'
}
export function theme(state = uiSetting, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return Object.assign({}, state, {
                themeColor: action.color
            })
        default:
            return state
    }
}

export function silderMode(state = uiSetting, action) {
    switch (action.type) {
        case CHANGE_SILDER:
            return Object.assign({}, state, {
                mode: action.mode
            })
        default:
            return state
    }
}

// 不要修改 state。 使用 Object.assign() 新建了一个副本。不
// 能这样使用 Object.assign(state, { themeColor: action.color })，
// 因为它会改变第一个参数的值。你必须把第一个参数设置为空对象。你也可以开启对 ES7 提案对象展开运算符的支持, 
// 从而使用 { ...state, ...newState } 达到相同的目的。
// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。