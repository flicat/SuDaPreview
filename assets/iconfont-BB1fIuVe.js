import{d as e,h as s}from"./index-VAPUoo6H.js";const n=e({name:"Markdown"}),t=()=>s("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="图标资源">图标资源</h2><blockquote>
<h3 id="存放位置">存放位置</h3></blockquote>
<p>图标资源存放在<code>src\\widgetIconfont</code>目录下，</p>
<p><img src="docImages/img20.png" alt="默认值" title="默认值"></p>
<blockquote>
<h3 id="资源">资源</h3></blockquote>
<p><strong>图标资源必须包含<code>iconfont.js</code>和<code>iconfont.json</code>，每个项目的图标资源单独存放，所有图标应该避免重名</strong></p>
<blockquote>
<h3 id="在项目和组件开发中使用">在项目和组件开发中使用</h3></blockquote>
<ul>
<li><strong>图标编辑必须使用图标编辑器<code>iconEditor</code>，图标才会被加载。</strong></li>
<li>图标编辑器<code>iconEditor</code>返回的是组件名，在组件开发中使用如下：</li>
</ul>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">component</span> <span class="hljs-attr">:is</span>=<span class="hljs-string">&quot;props.icon.value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">component</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> </span></span><span class="hljs-template-variable">{ref}</span><span class="xml"><span class="javascript"> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>

  <span class="hljs-keyword">const</span> props = defineProps(</span></span><span class="hljs-template-variable">{
    comOwnConfig: Object,
    parentSlotProps: {
      <span class="hljs-keyword">default</span>: null
    }</span><span class="xml">,
    icon: </span><span class="hljs-template-variable">{
      <span class="hljs-keyword">default</span>: ref(&#x27;&#x27;)
    }</span><span class="xml">
  })
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre>

    </div><p>组件配置文件：</p>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">{
  <span class="hljs-attr">&quot;props&quot;</span>: [
    {
      <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;icon&quot;</span>,
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;图标&quot;</span>,
      <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;HomeFilled&quot;</span>,
      <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;iconEdit&quot;</span>
    }
  ]
}</code></pre>

    </div><blockquote>
<h3 id="组件内部使用图标">组件内部使用图标</h3></blockquote>
<p>如果组件内部的图标没有在<code>config.json</code>中配置，则需要在组件中单独引入：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> {IconName} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;virtual:icon-import&#x27;</span> <span class="hljs-comment">// widgetIconfont 里的图标</span>
<span class="hljs-keyword">import</span> {IconName} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@element-plus/icons-vue&#x27;</span> <span class="hljs-comment">// element 图标</span></code></pre>

    </div>`});n.render=t;n.mounted=()=>{};const a=[{text:"图标资源",level:2,raw:"图标资源"},{text:"存放位置",level:3,raw:"存放位置"},{text:"资源",level:3,raw:"资源"},{text:"在项目和组件开发中使用",level:3,raw:"在项目和组件开发中使用"},{text:"组件内部使用图标",level:3,raw:"组件内部使用图标"}],l=[{code:`src\\widget
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
import {IconName} from '@element-plus/icons-vue' // element 图标`,infostring:"javascript"}];export{l as codeBlocks,n as default,a as headings};
