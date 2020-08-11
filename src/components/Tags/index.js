import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';
import appRoutes from "@/mock/menu" //菜单，应接登录时存储
import "./index.less"
class Tags extends Component {
    unListen;
    constructor(props) {
        super(props);
        this.state = {
            tagsList: [
                { path: "/Analysis", name: 'Analysis' }
            ],
            curentPath: ''
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(this.props);
        // console.log(nextProps);
        this.setState({
            curentPath: nextProps.location.pathname
        })
        this.setTags(nextProps)

    }

    setTags(nextProps) {
        const { location } = nextProps;
        let { tagsList } = this.state;
        let currentRoute = {}
        let currentPath = location.pathname
        const existIndex = tagsList.findIndex(item => {
            return item.path === currentPath;
        });
        if (existIndex > -1) {
            tagsList.splice(existIndex, 1, appRoutes[existIndex]);
        } else {
            appRoutes.forEach(item => {
                if (item.path === currentPath) {
                    currentRoute = {
                        path: currentPath,
                        name: item.name
                    }
                }
            })
            tagsList.push(currentRoute);
        }
        this.setState({
            tagsLis: tagsList
        })
        console.log(tagsList);
    }
    // 关闭单个标签
    closeTags(index) {
        let { tagsList, curentPath } = this.state;
        let delItem = tagsList.splice(index, 1)[0]; //删除的路由
        this.setState({
            tagsList: tagsList
        })
        // 剩余的tags
        const item = tagsList[index]
            ? tagsList[index]
            : tagsList[index - 1];
        if (item) {
            // 更改路由，watch监听，调用setTags,触发自定义事件tags
            console.log( delItem.path === curentPath);
            delItem.path === curentPath &&
                this.props.history.push(item.path);
        } else {
            this.props.history.push("/Analysis");
        }
    }
    setActive(path) {
        return path === this.state.curentPath;
    }
    render() {
        return (
            <div className="tags-wrapper">
                <ul className='tags-list'>
                    {
                        this.state.tagsList.map((item, i) =>
                            <li key={i} className={`${this.setActive(item.path) ? 'active-tag' : ''}`}>
                                <Link to={item.path}>{item.name}</Link>
                                <CloseOutlined className='tags-icon' onClick={this.closeTags.bind(this, i)} title={"关闭"} />
                            </li>

                        )
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(Tags);