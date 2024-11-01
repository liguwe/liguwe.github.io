// 事件类型定义
type EventHandler = (...args: any[]) => void;

// 事件总线类
class EventBus {
  private events: Map<string, Set<EventHandler>>;

  constructor() {
    this.events = new Map();
  }

  // 订阅事件
  on(event: string, handler: EventHandler) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event)!.add(handler);
  }

  // 取消订阅
  off(event: string, handler: EventHandler) {
    if (this.events.has(event)) {
      this.events.get(event)!.delete(handler);
    }
  }

  // 发送事件
  emit(event: string, ...args: any[]) {
    if (this.events.has(event)) {
      this.events.get(event)!.forEach((handler) => {
        try {
          handler(...args);
        } catch (error) {
          console.error(`Error in event handler for ${event}:`, error);
        }
      });
    }
  }

  // 只订阅一次
  once(event: string, handler: EventHandler) {
    const wrapper = (...args: any[]) => {
      handler(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// 共享状态管理
class StateManager {
  private state: Record<string, any>;
  private subscribers: Map<string, Set<(value: any) => void>>;

  constructor() {
    this.state = {};
    this.subscribers = new Map();
  }

  // 设置状态
  setState(key: string, value: any) {
    this.state[key] = value;
    if (this.subscribers.has(key)) {
      this.subscribers.get(key)!.forEach((callback) => callback(value));
    }
  }

  // 获取状态
  getState(key: string) {
    return this.state[key];
  }

  // 监听状态变化
  subscribe(key: string, callback: (value: any) => void) {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }
    this.subscribers.get(key)!.add(callback);

    // 返回取消订阅函数
    return () => {
      this.subscribers.get(key)?.delete(callback);
    };
  }
}

// 通信管理类
class CommunicationManager {
  private eventBus: EventBus;
  private stateManager: StateManager;
  private apps: Map<string, any>;

  constructor() {
    this.eventBus = new EventBus();
    this.stateManager = new StateManager();
    this.apps = new Map();
  }

  // 注册应用
  registerApp(appName: string, appInstance: any) {
    this.apps.set(appName, appInstance);
  }

  // 获取应用实例
  getApp(appName: string) {
    return this.apps.get(appName);
  }

  // 获取事件总线
  getEventBus() {
    return this.eventBus;
  }

  // 获取状态管理器
  getStateManager() {
    return this.stateManager;
  }

  // 直接调用子应用方法
  invokeMethod(appName: string, methodName: string, ...args: any[]) {
    const app = this.apps.get(appName);
    if (app && typeof app[methodName] === "function") {
      return app[methodName](...args);
    }
    throw new Error(`Method ${methodName} not found in app ${appName}`);
  }
}

// 创建全局通信管理器实例
const communicationManager = new CommunicationManager();

// 导出通信实例
export const communication = {
  eventBus: communicationManager.getEventBus(),
  stateManager: communicationManager.getStateManager(),
  registerApp: (appName: string, instance: any) =>
    communicationManager.registerApp(appName, instance),
  getApp: (appName: string) => communicationManager.getApp(appName),
  invokeMethod: (appName: string, methodName: string, ...args: any[]) =>
    communicationManager.invokeMethod(appName, methodName, ...args),
};
