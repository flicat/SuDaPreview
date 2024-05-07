import{d as s,h as e}from"./index-VAPUoo6H.js";const n=s({name:"Markdown"}),a=()=>e("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="属性编辑器开发">属性编辑器开发</h2><blockquote>
<h3 id="属性介绍">属性介绍</h3></blockquote>
<p>组件编辑器放置于<code>src/propertyEditor</code>目录下，要使用对应的属性编辑器，只需要在组件配置文件中定义<code>props[].editor</code>的值为<strong>编辑器的文件名</strong>即可。</p>
<p>传递到组件编辑器中的 <code>label</code> <code>key</code> <code>editorProps</code> 分别是在<strong>组件配置文件</strong>中定义：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> props = defineProps({
  <span class="hljs-attr">modelValue</span>: [<span class="hljs-built_in">String</span>, <span class="hljs-built_in">Number</span>, <span class="hljs-built_in">Boolean</span>, <span class="hljs-built_in">Array</span>, <span class="hljs-built_in">Object</span>],
  <span class="hljs-attr">label</span>: <span class="hljs-built_in">String</span>, <span class="hljs-comment">// props[].label</span>
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">String</span>, <span class="hljs-comment">// props[].key</span>
  <span class="hljs-attr">editorProps</span>: <span class="hljs-built_in">Object</span>, <span class="hljs-comment">// props[].editorProps</span>
  <span class="hljs-attr">propList</span>: <span class="hljs-built_in">Object</span> <span class="hljs-comment">// 当前编辑组件的所有属性值（未计算）</span>
})</code></pre>

    </div><p>传递到属性编辑器的 <code>modelValue</code>是未经计算的键值对：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">{
  bindType: <span class="hljs-string">&#x27;code&#x27;</span>,
  bindValue: <span class="hljs-string">&#x27;return 123&#x27;</span>
}</code></pre>

    </div><p>需要经过二次计算后才能绑定到编辑器里：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> {computed} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">import</span> {computedValue} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../utils/index.js&#x27;</span>
const currentValue = computed(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> computedValue(props.modelValue))</code></pre>

    </div><p><code>currentValue</code>是具备双向绑定的ref值：</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-symbol">&lt;template&gt;</span>
  &lt;<span class="hljs-keyword">el</span>-form-item :label=<span class="hljs-string">&quot;label&quot;</span> :prop=<span class="hljs-string">&quot;name&quot;</span>&gt;
    &lt;<span class="hljs-keyword">el</span>-<span class="hljs-built_in">input</span> v-model=<span class="hljs-string">&quot;currentValue.value&quot;</span> v-bind=<span class="hljs-string">&quot;editorProps&quot;</span>&gt;&lt;/<span class="hljs-keyword">el</span>-<span class="hljs-built_in">input</span>&gt;
  &lt;/<span class="hljs-keyword">el</span>-form-item&gt;
&lt;/template&gt;</code></pre>

    </div><ul>
<li><h4 id="设置其他属性显隐">设置其他属性显隐</h4>在组件编辑器中可以通过触发<code>hideProp</code>和<code>showProp</code>事件来控制其他属性编辑器的显隐，例如，下面是通过<code>center</code>值来控制<code>alignCenter</code>属性编辑器的显隐：</li>
</ul>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> emit = defineEmits([<span class="hljs-string">&#x27;hideProp&#x27;</span>, <span class="hljs-string">&#x27;showProp&#x27;</span>])

<span class="hljs-keyword">const</span> center = computedValue(props.propList.center)
<span class="hljs-keyword">const</span> handlerToggleProp = () =&gt; {
  <span class="hljs-keyword">if</span> (center.value) {
    emit(<span class="hljs-string">&#x27;hideProp&#x27;</span>, <span class="hljs-string">&#x27;alignCenter&#x27;</span>)
  } <span class="hljs-keyword">else</span> {
    emit(<span class="hljs-string">&#x27;showProp&#x27;</span>, <span class="hljs-string">&#x27;alignCenter&#x27;</span>)
  }
}</code></pre>

    </div><blockquote>
<h3 id="完整示例">完整示例</h3></blockquote>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">:prop</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentValue.value&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;editorProps&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handlerToggleProp&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> {computed} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
  <span class="hljs-keyword">import</span> {computedValue} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../utils/index.js&#x27;</span>

  <span class="hljs-keyword">const</span> props = defineProps({
    <span class="hljs-attr">modelValue</span>: [<span class="hljs-built_in">String</span>, <span class="hljs-built_in">Number</span>, <span class="hljs-built_in">Boolean</span>, <span class="hljs-built_in">Array</span>, <span class="hljs-built_in">Object</span>],
    <span class="hljs-attr">label</span>: <span class="hljs-built_in">String</span>, <span class="hljs-comment">// 属性标签</span>
    <span class="hljs-attr">name</span>: <span class="hljs-built_in">String</span>, <span class="hljs-comment">// 属性key</span>
    <span class="hljs-attr">editorProps</span>: <span class="hljs-built_in">Object</span>, <span class="hljs-comment">// 属性传递给编辑器的额外参数</span>
    <span class="hljs-attr">propList</span>: <span class="hljs-built_in">Object</span> <span class="hljs-comment">// 当前编辑组件的所有属性值（未计算）</span>
  })

  <span class="hljs-keyword">const</span> currentValue = computed(<span class="hljs-function">() =&gt;</span> computedValue(props.modelValue))

  <span class="hljs-keyword">const</span> emit = defineEmits([<span class="hljs-string">&#x27;hideProp&#x27;</span>, <span class="hljs-string">&#x27;showProp&#x27;</span>])

  <span class="hljs-keyword">const</span> center = computedValue(props.propList.center)
  <span class="hljs-keyword">const</span> handlerToggleProp = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (center.value) {
      emit(<span class="hljs-string">&#x27;hideProp&#x27;</span>, <span class="hljs-string">&#x27;alignCenter&#x27;</span>)
    } <span class="hljs-keyword">else</span> {
      emit(<span class="hljs-string">&#x27;showProp&#x27;</span>, <span class="hljs-string">&#x27;alignCenter&#x27;</span>)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>

    </div>`});n.render=a;n.mounted=()=>{};const l=[{text:"属性编辑器开发",level:2,raw:"属性编辑器开发"},{text:"属性介绍",level:3,raw:"属性介绍"},{text:"设置其他属性显隐",level:4,raw:"设置其他属性显隐"},{text:"完整示例",level:3,raw:"完整示例"}],o=[{code:`src\\widget
src\\widgetIconfont
src\\widgetAssets
src\\widgetStyles
src\\widgetUtils`,infostring:""},{code:`// 是否是开发模式
const isDevelopmentMode = inject('isDevelopmentMode', false)
// 是否是预览模式
const isPreviewMode = inject('isPreviewMode', false)`,infostring:"javascript"},{code:`<template>
  <!--开发模式占位符-->
  <div class="content" v-if="isDevelopmentMode">
    <slot />
  </div>
  <!--正式模式组件内容-->
  <el-dialog v-model="dialogVisible" v-else>
    <slot />
  </el-dialog>
</template>`,infostring:"html"},{code:`const props = defineProps({
  comOwnConfig: Object // 当前组件的配置文件
})
// 如果要修改本组件的配置信息的话，请确保是在开发模式下
if (isDevelopmentMode) {
  console.log(props.comOwnConfig)
  props.comOwnConfig.slots.push('mySlot')
}`,infostring:"javascript"},{code:`const props = defineProps({
  parentSlotProps: {
    default: null
  }
})`,infostring:"javascript"},{code:`<template>
  <dataTableWidget>
    <template #action="slotProps">
      <el-button :parentSlotProps="slotProps">编辑</el-button>
    </template>
  </dataTableWidget>
</template>`,infostring:"html"},{code:`const prop = computedValue({
  bindType,
  bindValue
})`,infostring:"javascript"},{code:`const props = defineProps({
  value: {
    default: ref('')
  },
  cssText: {
    default: ref('')
  }
})`,infostring:"javascript"},{code:`<template>
  <el-input :style="props.cssText.value" v-model="props.value.value"></el-input>
</template>`,infostring:"html"},{code:`{
  "props": [
    {
      "key": "value",
      "label": "内容",
      "group": "基础属性",
      "default": "",
      "hidden": false,
      "editor": "textEdit",
      "editorProps": {
        "type": "string"
      }
    },
    {
      "key": "cssText",
      "group": "基础属性",
      "label": "自定义css样式",
      "default": "",
      "hidden": false,
      "editor": "codeEdit"
    }
  ]
}`,infostring:"json"},{code:`[
  {
    "key": "height",
    "label": "图片高度",
    "default": "auto",
    "hidden": false,
    "editor": "textEdit"
  },
  {
    "key": "title",
    "label": "标题",
    "default": "",
    "hidden": "height<200",
    "editor": "textEdit"
  },
  {
    "key": "alt",
    "label": "占位符",
    "default": "",
    "hidden": "height<200||title!=''",
    "editor": "textEdit"
  }
]`,infostring:"json"},{code:`const eventHandler = computedValue({
  bindType,
  bindValue
})`,infostring:"javascript"},{code:`{
  "events": [
    {
      "label": "自定义事件",
      "event": "myEvent",
      "args": ["data"]
    },
    {
      "label": "click",
      "event": "click",
      "args": ["event"]
    }
  ]
}`,infostring:"json"},{code:`const emit = defineEmits(['myEvent'])
emit('myEvent', data)`,infostring:"JavaScript"},{code:`<!--父组件-->
<template>
  <el-table :data="tableData" v-on="eventList">
    <el-table-column v-for="item in tableColumnList" v-bind="item.attrs" :key="item">
      <template #default="scope" v-if="item.slot">
        <slot :name="item.slotName" :data="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>`,infostring:"html"},{code:`// 子组件
const props = defineProps({
  parentSlotProps: {
    default: null
  }
})

// 在事件中，可以将获取的插槽值传递出去，以便于其他方法调用
const emit = defineEmits(['click'])
const handlerClick = event => {
  emit('click', event, props.parentSlotProps)
}`,infostring:"JavaScript"},{code:`{
  "events": [
    {
      "label": "click",
      "event": "click",
      "args": ["event", "scoped"]
    }
  ]
}`,infostring:"json"},{code:`<script setup>
  const fontSize = ref(12)
  // 字体变大
  const fontEnlarge = () => {
    fontSize.value++
  }

  // 字体变小
  const fontReduce = () => {
    fontSize.value--
  }

  defineExpose({
    fontEnlarge,
    fontReduce
  })
<\/script>`,infostring:"html"},{code:`{
  "actions": [
    {
      "label": "字体变大",
      "action": "fontEnlarge"
    },
    {
      "label": "字体变小",
      "action": "fontReduce"
    }
  ]
}`,infostring:"json"},{code:`<template>
  <el-dialog v-model="dialogVisible">
    <template #header>
      <slot name="header" />
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>`,infostring:"html"},{code:`{
  "slots": ["header", "footer"]
}`,infostring:"JSON"},{code:`{
  "groupType": "基础组件库",
  "groupClass": "基础字段",
  "belongProject": "",
  "isHidden": false,
  "label": "文本",
  "target": "",
  "props": [
    {
      "key": "value",
      "label": "内容",
      "group": "基础属性",
      "default": "点击此处修改文字",
      "editor": "textEdit",
      "editorProps": {
        "type": "textarea",
        "autosize": {
          "minRows": 2,
          "maxRows": 6
        }
      }
    },
    {
      "key": "cssText",
      "label": "自定义css样式",
      "group": "基础属性",
      "default": "",
      "editor": "codeEdit"
    }
  ],
  "events": [
    {
      "label": "click",
      "event": "click",
      "args": ["event"]
    }
  ],
  "actions": [
    {
      "label": "字体变大",
      "action": "fontEnlarge"
    },
    {
      "label": "字体变小",
      "action": "fontReduce"
    }
  ],
  "slots": ["header", "footer"]
}`,infostring:"json"},{code:`font-size: 16px;
color: #666;
font-family: '微软雅黑';`,infostring:"css"},{code:`function test1() {
  console.log(Date.now())
}
const test2 = function () {
  console.log(Date.now())
}
const test3 = () => {
  console.log(Date.now())
}`,infostring:"javascript"},{code:`<template>
  <component :is="props.icon.value"></component>
</template>

<script setup>
  import {ref} from 'vue'

  const props = defineProps({
    comOwnConfig: Object,
    parentSlotProps: {
      default: null
    },
    icon: {
      default: ref('')
    }
  })
<\/script>`,infostring:"html"},{code:`{
  "props": [
    {
      "key": "icon",
      "label": "图标",
      "default": "HomeFilled",
      "editor": "iconEdit"
    }
  ]
}`,infostring:"json"},{code:`import {IconName} from 'virtual:icon-import' // widgetIconfont 里的图标
import {IconName} from '@element-plus/icons-vue' // element 图标`,infostring:"javascript"},{code:`const props = defineProps({
  modelValue: [String, Number, Boolean, Array, Object],
  label: String, // props[].label
  name: String, // props[].key
  editorProps: Object, // props[].editorProps
  propList: Object // 当前编辑组件的所有属性值（未计算）
})`,infostring:"javascript"},{code:`{
  bindType: 'code',
  bindValue: 'return 123'
}`,infostring:"javascript"},{code:`import {computed} from 'vue'
import {computedValue} from '../utils/index.js'
const currentValue = computed(() => computedValue(props.modelValue))`,infostring:"javascript"},{code:`<template>
  <el-form-item :label="label" :prop="name">
    <el-input v-model="currentValue.value" v-bind="editorProps"></el-input>
  </el-form-item>
</template>`,infostring:"html"},{code:`const emit = defineEmits(['hideProp', 'showProp'])

const center = computedValue(props.propList.center)
const handlerToggleProp = () => {
  if (center.value) {
    emit('hideProp', 'alignCenter')
  } else {
    emit('showProp', 'alignCenter')
  }
}`,infostring:"javascript"},{code:`<template>
  <el-form-item :label="label" :prop="name">
    <el-switch v-model="currentValue.value" v-bind="editorProps" @change="handlerToggleProp" />
  </el-form-item>
</template>

<script setup>
  import {computed} from 'vue'
  import {computedValue} from '../utils/index.js'

  const props = defineProps({
    modelValue: [String, Number, Boolean, Array, Object],
    label: String, // 属性标签
    name: String, // 属性key
    editorProps: Object, // 属性传递给编辑器的额外参数
    propList: Object // 当前编辑组件的所有属性值（未计算）
  })

  const currentValue = computed(() => computedValue(props.modelValue))

  const emit = defineEmits(['hideProp', 'showProp'])

  const center = computedValue(props.propList.center)
  const handlerToggleProp = () => {
    if (center.value) {
      emit('hideProp', 'alignCenter')
    } else {
      emit('showProp', 'alignCenter')
    }
  }
<\/script>`,infostring:"html"}];export{o as codeBlocks,n as default,l as headings};
