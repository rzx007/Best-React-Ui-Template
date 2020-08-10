import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// 回到顶部，useLocation ，router的hook函数
export default function ScrollToTop(props) {
    // const { pathname } = useLocation();
    const scrollView = React.createRef();
    // console.log('pathname=>', pathname);
    useEffect(() => {
        // 正真回到顶部的是包裹的子节点
        try {
            scrollView.current.children[0].scrollTo(0, 0);
        } catch (error) {
            throw new ReferenceError('A child node must be wrapped!');
        }

    });
    return (
        <div ref={scrollView}>
            {props.children}
        </div>
    );
}