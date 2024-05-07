import{d as e,h as t}from"./index-VAPUoo6H.js";const n=e({name:"Markdown"}),o=()=>t("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="工具栏">工具栏</h2><blockquote>
<h3 id="后撤/重做">后撤/重做</h3></blockquote>
<p>针对画板操作的前进/后退操作，最多记录20步。</p>
<blockquote>
<h3 id="结构树">结构树</h3></blockquote>
<p>点击左侧显示结构树弹窗，点击可选择组件。</p>
<blockquote>
<h3 id="清空">清空</h3></blockquote>
<p>清空画板。</p>
<blockquote>
<h3 id="预览">预览</h3></blockquote>
<p>预览组件效果，如果包含数据源，建议开启和配置mock。</p>
<blockquote>
<h3 id="导入JSON">导入JSON</h3></blockquote>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">{
  <span class="hljs-attr">&quot;globalCss&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局样式字符串</span>
  <span class="hljs-attr">&quot;globalCssCompiler&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局变量json字符串</span>
  <span class="hljs-attr">&quot;globalCssScoped&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局变量json字符串</span>
  <span class="hljs-attr">&quot;globalVar&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局变量json字符串</span>
  <span class="hljs-attr">&quot;globalFunction&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局函数字符串</span>
  <span class="hljs-attr">&quot;globalEvents&quot;</span>: [],   <span class="hljs-comment">// 全局事件定义</span>
  <span class="hljs-attr">&quot;dataSources&quot;</span>: [],    <span class="hljs-comment">// 数据源</span>
  <span class="hljs-attr">&quot;components&quot;</span>: []    <span class="hljs-comment">// 组件列表</span>
}</code></pre>

    </div><p>可以将之前导出的JSON配置文件再导入二次编辑。</p>
<blockquote>
<h3 id="导出">导出</h3></blockquote>
<ul>
<li><h4 id="导出JSON">导出JSON</h4></li>
</ul>
<p>导出的JSON用于再次导入开发，或者制作模板。格式如下：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">{
  <span class="hljs-attr">&quot;globalCss&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局样式字符串</span>
  <span class="hljs-attr">&quot;globalVar&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局变量json字符串</span>
  <span class="hljs-attr">&quot;globalFunction&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 全局函数字符串</span>
  <span class="hljs-attr">&quot;globalEvents&quot;</span>: [],   <span class="hljs-comment">// 全局事件定义</span>
  <span class="hljs-attr">&quot;dataSources&quot;</span>: [],    <span class="hljs-comment">// 数据源</span>
  <span class="hljs-attr">&quot;components&quot;</span>: []    <span class="hljs-comment">// 组件列表</span>
}</code></pre>

    </div><ul>
<li><h4 id="导出sfc">导出sfc</h4><p>源码导出，需要确认组件库引入位置。默认位于 <code>/lib</code>，项目中需要将组件库复制到当前位置。</p>
<p><img src="docImages/img11.png" alt="默认值" title="默认值"></p>
<ul>
<li>导出setup模式<blockquote>
<p>导出vue3 setup模式代码。</p>
</blockquote>
</li>
<li>导出option模式<blockquote>
<p>导出vue3 option模式代码。</p>
</blockquote>
</li>
</ul>
<p><img src="docImages/img10.png" alt="默认值" title="默认值"></p>
</li>
</ul>
<p><strong>在项目中新建vue文件然后粘贴源码即可。</strong></p>
`});n.render=o;n.mounted=()=>{};const l=[{text:"工具栏",level:2,raw:"工具栏"},{text:"后撤/重做",level:3,raw:"后撤/重做"},{text:"结构树",level:3,raw:"结构树"},{text:"清空",level:3,raw:"清空"},{text:"预览",level:3,raw:"预览"},{text:"导入JSON",level:3,raw:"导入JSON"},{text:"导出",level:3,raw:"导出"},{text:"导出JSON",level:4,raw:"导出JSON"},{text:"导出sfc",level:4,raw:"导出sfc"}],a=[{code:`src\\widget
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
<\/script>`,infostring:"html"},{code:`{
  "name": "测试模板",   // 模板名称
  "project": "我的项目",  // 模板归属项目
  "template": {}        // 模板内容，将已经设计好的页面导出JSON，粘贴到此处即可
}`,infostring:"javascript"},{code:`{
  "globalCss": "", // 全局样式字符串
  "globalCssCompiler": "", // 全局变量json字符串
  "globalCssScoped": "", // 全局变量json字符串
  "globalVar": "", // 全局变量json字符串
  "globalFunction": "", // 全局函数字符串
  "globalEvents": [],   // 全局事件定义
  "dataSources": [],    // 数据源
  "components": []    // 组件列表
}`,infostring:"javascript"},{code:`{
  "globalCss": "", // 全局样式字符串
  "globalVar": "", // 全局变量json字符串
  "globalFunction": "", // 全局函数字符串
  "globalEvents": [],   // 全局事件定义
  "dataSources": [],    // 数据源
  "components": []    // 组件列表
}`,infostring:"javascript"}];export{a as codeBlocks,n as default,l as headings};
