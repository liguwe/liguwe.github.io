import {h} from "vue";
export default{
    render(){
        // 虚拟 DOM
        return h('h1',{ onClick: fn });

        // 或者直接返回 js 对的
        return {
            tag: 'h1', // tag 名称
            props:{ // 属性与事件
                onClick:handler
            }
            children:[ // 子节点
                {tag: 'span'}
            ]
        }
    }
}
