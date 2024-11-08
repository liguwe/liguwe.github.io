import React from "react";
import { ScopedContext, IScopedContext, RendererProps } from "amis-core";
import { createApp, getCurrentInstance, ref, isProxy, shallowRef } from "vue";
import { isObject, extendObject } from "../utils";
export function createVue3Component(vueObj: any) {
  if (!vueObj || (typeof vueObj !== "function" && typeof vueObj !== "object")) {
    return;
  }
  class VueFactory extends React.Component<RendererProps> {
    domRef: any;
    app: any;
    vm: any;
    isUnmount: boolean;
    static contextType = ScopedContext;
    constructor(props: RendererProps, context: IScopedContext) {
      super(props);
      this.domRef = React.createRef();
      const scoped = context;
      scoped.registerComponent(this);
      this.resolveAmisProps = this.resolveAmisProps.bind(this);
    }
    componentDidMount() {
      const { amisData, amisFunc } = this.resolveAmisProps();
      const { data, ...rest } = (vueObj =
        typeof vueObj === "function" ? new vueObj() : vueObj);
      const vueData = typeof data === "function" ? data() : data;
      const curVueData = extendObject(vueData, amisData);
      this.app = createApp({
        data: () => curVueData,
        ...rest,
        props: extendObject(amisFunc, rest.props || {}),
      });
      this.vm = this.app.mount(this.domRef.current);
    }
    componentDidUpdate() {
      if (!this.isUnmount) {
        const { amisData } = this.resolveAmisProps();
        if (this.vm) {
          Object.keys(amisData).forEach((key) => {
            this.vm[key] = amisData[key];
          });
          this.vm.$forceUpdate();
        }
      }
    }
    componentWillUnmount() {
      this.isUnmount = true;
      const scoped = this.context as IScopedContext;
      scoped.unRegisterComponent(this);
      this.app.unmount();
    }
    resolveAmisProps() {
      let amisFunc: any = {};
      let amisData: any = {};
      Object.keys(this.props).forEach((key) => {
        const value = this.props[key];
        if (typeof value === "function") {
          amisFunc[key] = value;
        } else {
          if (isProxy(value)) {
            amisData[key] = shallowRef(value);
          } else if (isObject(value)) {
            amisData[key] = ref(value);
          } else {
            amisData[key] = value;
          }
        }
      });
      return { amisData, amisFunc };
    }
    render() {
      return <div ref={this.domRef}></div>;
    }
  }
  return VueFactory;
}
