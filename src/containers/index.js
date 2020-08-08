//  菜单mode，store容器组件
import { connect } from 'react-redux'
function containers(Component, reducerName = 'silderMode', mapDispatchToProps) {
    return connect(state => ({
        state: state[reducerName]
    }), mapDispatchToProps)(Component)
}
export default containers;

// 获取redux的sate，在组件中通过this.props.state访问
// reducerName
// otherActions参数是其他的diapatch 操作