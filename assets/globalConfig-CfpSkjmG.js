import{d as e,h as t}from"./index-VAPUoo6H.js";const n=e({name:"Markdown"}),o=()=>t("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="全局配置">全局配置</h2><blockquote>
<h3 id="全局css">全局css</h3></blockquote>
<p>不需要写选择器，直接编写样式规则，样式将插入到模板最外层。</p>

        <div class="md-code-hijs">
        <pre><code class="language-css hljs"><span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
<span class="hljs-attribute">color</span>: <span class="hljs-number">#666</span>;
<span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#x27;微软雅黑&#x27;</span>;</code></pre>

    </div><blockquote>
<h3 id="全局变量">全局变量</h3></blockquote>
<p>JSON字符串。需要遵循JSON格式。</p>
<blockquote>
<h3 id="全局函数">全局函数</h3></blockquote>
<p>定义全局函数，例如：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test1</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Date</span>.now())
}
<span class="hljs-keyword">const</span> test2 = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Date</span>.now())
}
<span class="hljs-keyword">const</span> test3 = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Date</span>.now())
}</code></pre>

    </div><blockquote>
<h3 id="数据源">数据源</h3></blockquote>
<p>点击+号添加数据源：</p>
<p><img src="docImages/img12.png" alt="数据源" title="数据源"></p>
<h4 id="字段详解">字段详解</h4><ul>
<li><code>名称 label</code>：数据源展示名字</li>
<li><code>链接 url</code>：请求的接口url，可以用函数表达式返回字符串</li>
<li><code>请求方法 method</code>：get|post|head|put|delete|options</li>
<li><code>返回数据格式 responseType</code>：json|text|blob|arrayBuffer|formData</li>
<li><code>跨域模式 mode</code>：cors|no-cors|same-origin</li>
<li><code>头信息 headers</code>：头信息对象，键值对</li>
<li><code>请求参数 body</code>：请求参数键值对</li>
<li><code>请求前回调函数 beforeRequest</code>请求前回调函数，参数为 <code>config</code>, <code>global</code>, <code>...args</code>。<code>args</code>参数由调用数据源的事件传递</li>
<li><code>成功回调函数 callback</code>成功回调函数，参数为<code>res</code>, <code>global</code></li>
<li><code>失败回调函数 error</code>：失败回调函数，参数为<code>error</code>, <code>global</code></li>
</ul>
<blockquote>
<h3 id="全局事件">全局事件</h3></blockquote>
<p>全局事件绑定可以绑定多种方式。参数为global对象。</p>
<p>选择对应的全局事件点击添加。</p>
<p><img src="docImages/img13.png" alt="全局事件" title="全局事件"></p>
<ul>
<li><h4 id="源码编写">源码编写</h4></li>
</ul>
<p>编写js源码。</p>
<p><img src="docImages/img14.png" alt="数据源" title="数据源"></p>
<ul>
<li><h4 id="动作绑定">动作绑定</h4></li>
</ul>
<p>触发其他组件提供的动作。</p>
<p><img src="docImages/img15.png" alt="数据源" title="数据源"></p>
<ul>
<li><h4 id="全局方法调用">全局方法调用</h4></li>
</ul>
<p>调用全局函数，可一次调用多个，顺序不确定。</p>
<p><img src="docImages/img16.png" alt="数据源" title="数据源"></p>
<ul>
<li><h4 id="数据源调用">数据源调用</h4></li>
</ul>
<p>调用数据源，可一次调用多个，顺序不确定。</p>
<p><img src="docImages/img17.png" alt="数据源" title="数据源"></p>
<p><em>建议调用的数据源将数据绑定到全局对象global中。</em></p>
`});n.render=o;n.mounted=()=>{};const l=[{text:"全局配置",level:2,raw:"全局配置"},{text:"全局css",level:3,raw:"全局css"},{text:"全局变量",level:3,raw:"全局变量"},{text:"全局函数",level:3,raw:"全局函数"},{text:"数据源",level:3,raw:"数据源"},{text:"字段详解",level:4,raw:"字段详解"},{text:"全局事件",level:3,raw:"全局事件"},{text:"源码编写",level:4,raw:"源码编写"},{text:"动作绑定",level:4,raw:"动作绑定"},{text:"全局方法调用",level:4,raw:"全局方法调用"},{text:"数据源调用",level:4,raw:"数据源调用"}],a=[{code:`src\\widget
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
}`,infostring:"javascript"}];export{a as codeBlocks,n as default,l as headings};
