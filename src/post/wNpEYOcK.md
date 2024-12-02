
# 低代码平台的设计态实现思路


## 目录
<!-- toc -->
 ## 1. 设计态核心概念 

设计态主要包含以下几个核心部分：

1. 属性面板（Properties Panel）
2. 组件配置器（Component Configurator）
3. 事件绑定器（Event Binding）
4. 样式编辑器（Style Editor）
5. 数据源配置（Data Source）

### 1.1. 基础类型定义

```typescript
// types/designer.ts

// 组件设计器配置
interface ComponentDesigner {
  // 组件属性配置
  props: PropConfig[];
  // 组件事件配置
  events?: EventConfig[];
  // 组件样式配置
  styles?: StyleConfig[];
  // 数据源配置
  dataSources?: DataSourceConfig[];
}

// 属性配置
interface PropConfig {
  name: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'expression' | 'custom';
  defaultValue?: any;
  options?: Array<{label: string; value: any}>;
  // 自定义属性编辑器
  editor?: Component;
  // 属性值校验
  validator?: (value: any) => boolean;
  // 属性依赖关系
  dependencies?: string[];
  // 条件显示
  visible?: (props: Record<string, any>) => boolean;
}

// 事件配置
interface EventConfig {
  name: string;
  label: string;
  params?: Array<{
    name: string;
    type: string;
    description?: string;
  }>;
}

// 样式配置
interface StyleConfig {
  name: string;
  label: string;
  type: 'color' | 'size' | 'layout' | 'custom';
  editor?: Component;
}
```

## 2. 设计器实现示例

### 2.1. 按钮组件设计器配置

```typescript
// components/button/designer.ts
import { ComponentDesigner } from '@/types/designer';
import ColorPicker from '@/designers/ColorPicker.vue';
import IconSelector from '@/designers/IconSelector.vue';

export const buttonDesigner: ComponentDesigner = {
  props: [
    {
      name: 'text',
      label: '按钮文本',
      type: 'string',
      defaultValue: '按钮'
    },
    {
      name: 'type',
      label: '按钮类型',
      type: 'select',
      options: [
        { label: '主要按钮', value: 'primary' },
        { label: '次要按钮', value: 'secondary' },
        { label: '文本按钮', value: 'text' }
      ],
      defaultValue: 'primary'
    },
    {
      name: 'icon',
      label: '图标',
      type: 'custom',
      editor: IconSelector
    },
    {
      name: 'disabled',
      label: '禁用状态',
      type: 'boolean',
      defaultValue: false
    }
  ],
  
  events: [
    {
      name: 'click',
      label: '点击事件',
      params: [
        { name: 'event', type: 'MouseEvent' }
      ]
    },
    {
      name: 'dblclick',
      label: '双击事件',
      params: [
        { name: 'event', type: 'MouseEvent' }
      ]
    }
  ],
  
  styles: [
    {
      name: 'backgroundColor',
      label: '背景颜色',
      type: 'color',
      editor: ColorPicker
    },
    {
      name: 'size',
      label: '尺寸',
      type: 'select',
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'medium' },
        { label: '大', value: 'large' }
      ]
    }
  ]
};
```

### 2.2. 属性面板实现

```vue hl:91,92
<!-- designers/PropertiesPanel.vue -->
<template>
  <div class="properties-panel">
    <template v-for="prop in designer.props" :key="prop.name">
      <!-- 根据属性类型渲染不同的编辑器 -->
      <div class="prop-item" v-if="isVisible(prop)">
        <label>{{ prop.label }}</label>
        
        <!-- 字符串输入 -->
        <input
          v-if="prop.type === 'string'"
          v-model="componentProps[prop.name]"
          type="text"
        />
        
        <!-- 选择器 -->
        <select
          v-else-if="prop.type === 'select'"
          v-model="componentProps[prop.name]"
        >
          <option
            v-for="opt in prop.options"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </option>
        </select>
        
        <!-- 布尔值开关 -->
        <input
          v-else-if="prop.type === 'boolean'"
          type="checkbox"
          v-model="componentProps[prop.name]"
        />
        
        <!-- 表达式编辑器 -->
        <expression-editor
          v-else-if="prop.type === 'expression'"
          v-model="componentProps[prop.name]"
        />
        
        <!-- 自定义编辑器 -->
        <component
          v-else-if="prop.type === 'custom' && prop.editor"
          :is="prop.editor"
          v-model="componentProps[prop.name]"
        />
      </div>
    </template>
    
    <!-- 事件配置区域 -->
    <div class="events-section" v-if="designer.events">
      <h3>事件</h3>
      <div v-for="event in designer.events" :key="event.name">
        <event-binding
          :event="event"
          v-model="componentEvents[event.name]"
        />
      </div>
    </div>
    
    <!-- 样式配置区域 -->
    <div class="styles-section" v-if="designer.styles">
      <h3>样式</h3>
      <div v-for="style in designer.styles" :key="style.name">
        <component
          v-if="style.editor"
          :is="style.editor"
          v-model="componentStyles[style.name]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useDesignerStore } from '@/stores/designer';
import ExpressionEditor from './ExpressionEditor.vue';
import EventBinding from './EventBinding.vue';

export default defineComponent({
  components: {
    ExpressionEditor,
    EventBinding
  },
  
  setup() {
    const store = useDesignerStore();
    const selectedComponent = computed(() => store.selectedComponent);
    const designer = computed(() => selectedComponent.value?.designer);
    
    const componentProps = computed({
      get: () => store.getComponentProps(selectedComponent.value?.id),
      set: (props) => store.updateComponentProps(selectedComponent.value?.id, props)
    });
    
    const componentEvents = computed({
      get: () => store.getComponentEvents(selectedComponent.value?.id),
      set: (events) => store.updateComponentEvents(selectedComponent.value?.id, events)
    });
    
    const componentStyles = computed({
      get: () => store.getComponentStyles(selectedComponent.value?.id),
      set: (styles) => store.updateComponentStyles(selectedComponent.value?.id, styles)
    });
    
    const isVisible = (prop: any) => {
      if (!prop.visible) return true;
      return prop.visible(componentProps.value);
    };
    
    return {
      designer,
      componentProps,
      componentEvents,
      componentStyles,
      isVisible
    };
  }
});
</script>
```

### 2.3. 表达式编辑器示例

```vue
<!-- designers/ExpressionEditor.vue -->
<template>
  <div class="expression-editor">
    <div class="editor-header">
      <select v-model="expressionType">
        <option value="static">静态值</option>
        <option value="data">数据源</option>
        <option value="expression">表达式</option>
      </select>
    </div>
    
    <div class="editor-content">
      <!-- 静态值编辑 -->
      <input
        v-if="expressionType === 'static'"
        v-model="localValue"
        @input="updateValue"
      />
      
      <!-- 数据源选择 -->
      <data-source-selector
        v-else-if="expressionType === 'data'"
        v-model="localValue"
        @change="updateValue"
      />
      
      <!-- 表达式编辑器 -->
      <div v-else class="expression-area">
        <textarea
          v-model="localValue"
          @input="updateValue"
          placeholder="请输入表达式，例如：${data.user.name}"
        ></textarea>
        <div class="expression-tools">
          <button @click="insertVariable">插入变量</button>
          <button @click="insertFunction">插入函数</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import DataSourceSelector from './DataSourceSelector.vue';

export default defineComponent({
  components: {
    DataSourceSelector
  },
  
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  
  emits: ['update:modelValue'],
  
  setup(props, { emit }) {
    const expressionType = ref('static');
    const localValue = ref(props.modelValue);
    
    watch(() => props.modelValue, (newVal) => {
      localValue.value = newVal;
    });
    
    const updateValue = () => {
      emit('update:modelValue', localValue.value);
    };
    
    const insertVariable = () => {
      // 实现变量插入逻辑
    };
    
    const insertFunction = () => {
      // 实现函数插入逻辑
    };
    
    return {
      expressionType,
      localValue,
      updateValue,
      insertVariable,
      insertFunction
    };
  }
});
</script>
```

### 2.4. 事件绑定器示例

```vue
<!-- designers/EventBinding.vue -->
<template>
  <div class="event-binding">
    <div class="event-header">
      <span>{{ event.label }}</span>
      <button @click="addHandler">添加处理器</button>
    </div>
    
    <div class="handlers-list">
      <div
        v-for="(handler, index) in handlers"
        :key="index"
        class="handler-item"
      >
        <select v-model="handler.type">
          <option value="function">执行函数</option>
          <option value="message">显示消息</option>
          <option value="navigation">页面跳转</option>
        </select>
        
        <!-- 函数处理器 -->
        <div v-if="handler.type === 'function'">
          <input
            v-model="handler.function"
            placeholder="输入函数名称"
          />
          <div class="params-editor">
            <div v-for="param in event.params" :key="param.name">
              <label>{{ param.name }}</label>
              <expression-editor
                v-model="handler.params[param.name]"
              />
            </div>
          </div>
        </div>
        
        <!-- 消息处理器 -->
        <div v-else-if="handler.type === 'message'">
          <input
            v-model="handler.message"
            placeholder="输入提示消息"
          />
          <select v-model="handler.messageType">
            <option value="info">提示</option>
            <option value="success">成功</option>
            <option value="warning">警告</option>
            <option value="error">错误</option>
          </select>
        </div>
        
        <!-- 导航处理器 -->
        <div v-else-if="handler.type === 'navigation'">
          <input
            v-model="handler.url"
            placeholder="输入跳转地址"
          />
          <select v-model="handler.target">
            <option value="_self">当前窗口</option>
            <option value="_blank">新窗口</option>
          </select>
        </div>
        
        <button @click="removeHandler(index)">删除</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import ExpressionEditor from './ExpressionEditor.vue';

export default defineComponent({
  components: {
    ExpressionEditor
  },
  
  props: {
    event: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  
  emits: ['update:modelValue'],
  
  setup(props, { emit }) {
    const handlers = ref(props.modelValue);
    
    watch(() => props.modelValue, (newVal) => {
      handlers.value = newVal;
    });
    
    const addHandler = () => {
      handlers.value.push({
        type: 'function',
        function: '',
        params: {}
      });
      emit('update:modelValue', handlers.value);
    };
    
    const removeHandler = (index: number) => {
      handlers.value.splice(index, 1);
      emit('update:modelValue', handlers.value);
    };
    
    return {
      handlers,
      addHandler,
      removeHandler
    };
  }
});
</script>
```

## 3. 设计态核心特性

### 3.1. **属性联动**：

```typescript hl:13
// 属性依赖示例
{
  props: [
    {
      name: 'useIcon',
      label: '使用图标',
      type: 'boolean'
    },
    {
      name: 'icon',
      label: '图标',
      type: 'custom',
      editor: IconSelector,
      visible: (props) => props.useIcon
    }
  ]
}
```

### 3.2. **数据源绑定**：

```typescript
// 数据源配置示例
{
  dataSources: [
    {
      type: 'api',
      name: 'userList',
      url: '/api/users',
      method: 'GET',
      params: {
        page: 1,
        size: 10
      }
    }
```


让我重点介绍低代码平台中设计态的核心实现思路。设计态是低代码平台中最关键的部分之一，主要包含以下几个核心概念：

## 4. 设计态核心

**设计态的核心是维护一个 Schema 结构**，==用于描述页面的组件树和属性==：

```typescript hl:7,9,13,22
// 核心 Schema 类型定义
interface ComponentSchema {
  // 组件唯一标识
  id: string;
  // 组件类型
  componentName: string;
  // 组件属性
  props: Record<string, any>;
  // 组件样式
  style?: CSSProperties;
  // 子组件
  children?: ComponentSchema[];
  // 事件处理器
  events?: {
    [key: string]: {
      type: 'function' | 'dataSource';
      content: string;
    }
  };
}

// 页面 Schema
interface PageSchema {
  version: string;
  componentsTree: ComponentSchema;
  // 页面级配置
  configuration: {
    theme: string;
    layout: string;
    // ...其他配置
  };
}
```

## 5. 设计器核心实现：设计器状态管理

```typescript
// 设计器状态管理
class DesignerStore {
  // 当前页面 schema
  private pageSchema: PageSchema;
  // 选中的组件
  private selectedId: string | null = null;
  // 历史记录
  private history: PageSchema[] = [];
  
  // 更新组件属性
  updateComponentProps(id: string, props: Record<string, any>) {
    const component = this.findComponentById(id);
    if (component) {
      this.saveHistory();
      component.props = { ...component.props, ...props };
      this.notifyChange();
    }
  }
  
  // 添加组件
  addComponent(parentId: string, component: ComponentSchema) {
    const parent = this.findComponentById(parentId);
    if (parent) {
      this.saveHistory();
      parent.children = parent.children || [];
      parent.children.push(component);
      this.notifyChange();
    }
  }
  
  // 移动组件
  moveComponent(sourceId: string, targetId: string, position: 'before' | 'after' | 'inside') {
    // 实现组件拖拽移动逻辑
  }
}
```

## 6. 画布实现：

```typescript hl:38
// 画布组件
const Designer = defineComponent({
  setup() {
    const store = inject('designer-store');
    
    // 拖拽处理
    const onDragOver = (e: DragEvent) => {
      e.preventDefault();
      e.dataTransfer!.dropEffect = 'move';
    };
    
    const onDrop = (e: DragEvent) => {
      const componentData = JSON.parse(
        e.dataTransfer!.getData('component')
      );
      
      // 计算放置位置
      const { x, y } = e;
      const target = document.elementFromPoint(x, y);
      const targetId = target?.getAttribute('data-component-id');
      
      if (targetId) {
        store.addComponent(targetId, {
          id: generateId(),
          ...componentData
        });
      }
    };
    
    return () => (
      <div 
        class="designer-canvas"
        onDragover={onDragOver}
        onDrop={onDrop}
      >
        <ComponentRenderer 
          schema={store.pageSchema.componentsTree}
          onSelect={store.selectComponent}
        />
      </div>
    );
  }
});
```

## 7. 组件渲染器

```typescript
// 组件动态渲染
const ComponentRenderer = defineComponent({
  props: {
    schema: {
      type: Object as PropType<ComponentSchema>,
      required: true
    }
  },
  
  setup(props) {
    const componentMap = inject('component-map');
    
    const renderComponent = (schema: ComponentSchema) => {
      const Component = componentMap[schema.componentName];
      if (!Component) return null;
      
      return (
        <Component
          {...schema.props}
          style={schema.style}
          data-component-id={schema.id}
        >
          {schema.children?.map(child => renderComponent(child))}
        </Component>
      );
    };
    
    return () => renderComponent(props.schema);
  }
});
```

## 8. 属性面板

```typescript
// 属性编辑面板
const PropEditor = defineComponent({
  setup() {
    const store = inject('designer-store');
    const selected = computed(() => store.getSelectedComponent());
    
    // 根据组件 schema 生成表单
    const renderForm = () => {
      if (!selected.value) return null;
      
      const component = selected.value;
      const schema = componentMap[component.componentName].propSchema;
      
      return (
        <SchemaForm
          schema={schema}
          value={component.props}
          onChange={(values) => {
            store.updateComponentProps(component.id, values);
          }}
        />
      );
    };
    
    return () => (
      <div class="prop-editor">
        {renderForm()}
      </div>
    );
  }
});
```

## 9. 拖拽排序实现

```typescript
// 拖拽排序处理
const useDraggable = (props: { schema: ComponentSchema }) => {
  const store = inject('designer-store');
  
  // 开始拖拽
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer!.setData('component-id', props.schema.id);
    e.dataTransfer!.effectAllowed = 'move';
  };
  
  // 拖拽进入
  const onDragEnter = (e: DragEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.classList.add('drag-over');
  };
  
  // 拖拽放置
  const onDrop = (e: DragEvent) => {
    const sourceId = e.dataTransfer!.getData('component-id');
    const targetId = props.schema.id;
    
    // 判断放置位置
    const { offsetY } = e;
    const { height } = (e.currentTarget as HTMLElement).getBoundingClientRect();
    
    let position: 'before' | 'after' | 'inside' = 'inside';
    if (offsetY < height * 0.25) position = 'before';
    else if (offsetY > height * 0.75) position = 'after';
    
    store.moveComponent(sourceId, targetId, position);
  };
  
  return {
    onDragStart,
    onDragEnter,
    onDragOver: (e: DragEvent) => e.preventDefault(),
    onDrop
  };
};
```

