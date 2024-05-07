import{d as n,h as a}from"./index-VAPUoo6H.js";const s=n({name:"Markdown"}),t=()=>a("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="组件开发">组件开发</h2><p>组件内部可通过 <strong>inject</strong> 获取 <code>isDevelopmentMode</code> 和 <code>isPreviewMode</code> 变量，分别表示是否处于开发模式和是否处于预览模式。</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-comment">// 是否是开发模式</span>
<span class="hljs-keyword">const</span> isDevelopmentMode = inject(<span class="hljs-string">&#x27;isDevelopmentMode&#x27;</span>, <span class="hljs-literal">false</span>)
<span class="hljs-comment">// 是否是预览模式</span>
<span class="hljs-keyword">const</span> isPreviewMode = inject(<span class="hljs-string">&#x27;isPreviewMode&#x27;</span>, <span class="hljs-literal">false</span>)</code></pre>

    </div><p>在组件开发中，可以通过判断是否处于开发模式或预览模式来判断输出不同内容：</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!--开发模式占位符--&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isDevelopmentMode&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-comment">&lt;!--正式模式组件内容--&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;dialogVisible&quot;</span> <span class="hljs-attr">v-else</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></code></pre>

    </div><p>在开发模式中，组件还会接收到组件本身的配置信息<code>comOwnConfig</code>，<strong>仅在开发模式下有效</strong>：</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">const props = defineProps({
  comOwnConfig: Object <span class="hljs-comment">// 当前组件的配置文件</span>
})
<span class="hljs-comment">// 如果要修改本组件的配置信息的话，请确保是在开发模式下</span>
<span class="hljs-keyword">if</span> (isDevelopmentMode) {
  console<span class="hljs-selector-class">.log</span>(props.comOwnConfig)
  props<span class="hljs-selector-class">.comOwnConfig</span><span class="hljs-selector-class">.slots</span><span class="hljs-selector-class">.push</span>(<span class="hljs-string">&#x27;mySlot&#x27;</span>)
}</code></pre>

    </div><p>组件还会接收到一个固定的props<code>parentSlotProps</code>:</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> props = defineProps({
  parentSlotProps: {
    <span class="hljs-keyword">default</span>: <span class="hljs-literal">null</span>
  }
})</code></pre>

    </div><p><code>parentSlotProps</code>来自父组件的插槽传值，如下所示：</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dataTableWidget</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>=<span class="hljs-string">&quot;slotProps&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:parentSlotProps</span>=<span class="hljs-string">&quot;slotProps&quot;</span>&gt;</span>编辑<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dataTableWidget</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></code></pre>

    </div><blockquote>
<h3 id="绑定机制">绑定机制</h3></blockquote>
<p>属性和事件由<code>bindType</code>和<code>bindValue</code>计算得出</p>
<blockquote>
<h3 id="属性">属性</h3></blockquote>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">const prop = computedValue({
  <span class="hljs-keyword">bindType,
</span>  <span class="hljs-keyword">bindValue
</span>})</code></pre>

    </div><ul>
<li><p><code>value</code>：属性编辑器输入值</p>
</li>
<li><p><code>code</code>：由函数表达式返回的值，可动态响应</p>
</li>
<li><p><code>globalVar</code>：与全局变量绑定，可动态响应</p>
</li>
<li><p><code>dataSource</code>：从数据源获取值</p>
</li>
<li><h4 id="属性的定义">属性的定义</h4><p>属性传递到组件内部的值统一为<code>ref</code>值:</p>
</li>
</ul>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> props = defineProps({
  <span class="hljs-keyword">value</span>: {
    <span class="hljs-literal">default</span>: <span class="hljs-keyword">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  },
  cssText: {
    <span class="hljs-literal">default</span>: <span class="hljs-keyword">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>)
  }
})</code></pre>

    </div><p><code>ref</code>双向绑定，可以在组件内部动态修改值。</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-symbol">&lt;template&gt;</span>
  &lt;<span class="hljs-keyword">el</span>-<span class="hljs-built_in">input</span> :style=<span class="hljs-string">&quot;props.cssText.value&quot;</span> v-model=<span class="hljs-string">&quot;props.value.value&quot;</span>&gt;&lt;/<span class="hljs-keyword">el</span>-<span class="hljs-built_in">input</span>&gt;
&lt;/template&gt;</code></pre>

    </div><p>如果要接收属性传递，则需要在组件配置文件中定义属性：</p>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">{
  <span class="hljs-attr">&quot;props&quot;</span>: [
    {
      <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;value&quot;</span>,
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;内容&quot;</span>,
      <span class="hljs-attr">&quot;group&quot;</span>: <span class="hljs-string">&quot;基础属性&quot;</span>,
      <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">&quot;hidden&quot;</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;textEdit&quot;</span>,
      <span class="hljs-attr">&quot;editorProps&quot;</span>: {
        <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;string&quot;</span>
      }
    },
    {
      <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;cssText&quot;</span>,
      <span class="hljs-attr">&quot;group&quot;</span>: <span class="hljs-string">&quot;基础属性&quot;</span>,
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;自定义css样式&quot;</span>,
      <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">&quot;hidden&quot;</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;codeEdit&quot;</span>
    }
  ]
}</code></pre>

    </div><ul>
<li><h4 id="属性显隐快捷条件">属性显隐快捷条件</h4></li>
</ul>
<p>hidden属性可以直接传递Boolean值，也可以传递运算字符串。</p>
<p>假设有以下属性：</p>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">[
  {
    <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;height&quot;</span>,
    <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;图片高度&quot;</span>,
    <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-attr">&quot;hidden&quot;</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;textEdit&quot;</span>
  },
  {
    <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;title&quot;</span>,
    <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;标题&quot;</span>,
    <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">&quot;hidden&quot;</span>: <span class="hljs-string">&quot;height&lt;200&quot;</span>,
    <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;textEdit&quot;</span>
  },
  {
    <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;alt&quot;</span>,
    <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;占位符&quot;</span>,
    <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">&quot;hidden&quot;</span>: <span class="hljs-string">&quot;height&lt;200||title!=&#x27;&#x27;&quot;</span>,
    <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;textEdit&quot;</span>
  }
]</code></pre>

    </div><p>标题当图片高度低于200时隐藏，即<code>&quot;hidden&quot;: &quot;height&lt;200&quot;</code></p>
<p>占位符当标题不为空或图片高度低于200时隐藏，即<code>&quot;hidden&quot;: &quot;height&lt;200||title!=&#39;&#39;&quot;</code></p>
<ul>
<li>支持的操作符号<ul>
<li><code>&amp;&amp;</code>：且</li>
<li><code>||</code>：或</li>
<li><code>!</code>：非</li>
<li><code>=</code>：等于</li>
<li><code>&gt;</code>：大于</li>
<li><code>&lt;</code>：小于</li>
</ul>
</li>
</ul>
<blockquote>
<h3 id="事件">事件</h3></blockquote>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">const eventHandler = computedValue({
  <span class="hljs-keyword">bindType,
</span>  <span class="hljs-keyword">bindValue
</span>})</code></pre>

    </div><ul>
<li><p><code>code</code>：函数表达式</p>
</li>
<li><p><code>actions</code>：由组件提供的动作</p>
</li>
<li><p><code>globalFunc</code>：执行全局方法</p>
</li>
<li><p><code>dataSource</code>：直接调用数据源的请求，返回值由数据源定义存放位置</p>
</li>
<li><h4 id="事件的定义">事件的定义</h4><p>首先在组件配置文件中定义事件：</p>
</li>
</ul>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">{
  <span class="hljs-attr">&quot;events&quot;</span>: [
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;自定义事件&quot;</span>,
      <span class="hljs-attr">&quot;event&quot;</span>: <span class="hljs-string">&quot;myEvent&quot;</span>,
      <span class="hljs-attr">&quot;args&quot;</span>: [<span class="hljs-string">&quot;data&quot;</span>]
    },
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
      <span class="hljs-attr">&quot;event&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
      <span class="hljs-attr">&quot;args&quot;</span>: [<span class="hljs-string">&quot;event&quot;</span>]
    }
  ]
}</code></pre>

    </div><p>dom事件不需要在组件中定义，自定义事件需要在组件中手动触发：</p>

        <div class="md-code-hijs">
        <pre><code class="language-JavaScript hljs">const emit = defineEmits(<span class="hljs-selector-attr">[<span class="hljs-string">&#x27;myEvent&#x27;</span>]</span>)
<span class="hljs-function"><span class="hljs-title">emit</span><span class="hljs-params">(<span class="hljs-string">&#x27;myEvent&#x27;</span>, data)</span></span></code></pre>

    </div><h5 id="组件之间的插槽传值：">组件之间的插槽传值：</h5>
        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-comment">&lt;!--父组件--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span> <span class="hljs-attr">v-on</span>=<span class="hljs-string">&quot;eventList&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in tableColumnList&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;item.attrs&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;scope&quot;</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;item.slot&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item.slotName&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></code></pre>

    </div><p>上面的案例中，<code>table</code>组件在slot中传递了data值，在子组件中，可以通过<code>props.parentSlotProps</code>获取插槽传值：</p>

        <div class="md-code-hijs">
        <pre><code class="language-JavaScript hljs"><span class="hljs-comment">// 子组件</span>
<span class="hljs-keyword">const</span> props = defineProps({
  parentSlotProps: {
    <span class="hljs-literal">default</span>: <span class="hljs-literal">null</span>
  }
})

<span class="hljs-comment">// 在事件中，可以将获取的插槽值传递出去，以便于其他方法调用</span>
<span class="hljs-keyword">const</span> emit = defineEmits([<span class="hljs-string">&#x27;click&#x27;</span>])
<span class="hljs-keyword">const</span> handlerClick = <span class="hljs-keyword">event</span> =&gt; {
  emit(<span class="hljs-string">&#x27;click&#x27;</span>, <span class="hljs-keyword">event</span>, props.parentSlotProps)
}</code></pre>

    </div><p>在配置文件中修改click事件的参数：</p>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">{
  <span class="hljs-attr">&quot;events&quot;</span>: [
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
      <span class="hljs-attr">&quot;event&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
      <span class="hljs-attr">&quot;args&quot;</span>: [<span class="hljs-string">&quot;event&quot;</span>, <span class="hljs-string">&quot;scoped&quot;</span>]
    }
  ]
}</code></pre>

    </div><p>如此，便可在源码编写/动作绑定/全局方法调用/数据源调用中传递scoped值</p>
<p><img src="docImages/img19.png" alt="slot传值" title="slot传值"></p>
<blockquote>
<h3 id="动作">动作</h3></blockquote>
<p>动作的定义需要在组件中导出内部函数：</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> fontSize = ref(<span class="hljs-number">12</span>)
  <span class="hljs-comment">// 字体变大</span>
  <span class="hljs-keyword">const</span> fontEnlarge = <span class="hljs-function">() =&gt;</span> </span></span><span class="hljs-template-variable">{
    fontSize.value++
  }</span><span class="xml"><span class="javascript">

  <span class="hljs-comment">// 字体变小</span>
  <span class="hljs-keyword">const</span> fontReduce = <span class="hljs-function">() =&gt;</span> </span></span><span class="hljs-template-variable">{
    fontSize.value--
  }</span><span class="xml">

  defineExpose(</span><span class="hljs-template-variable">{
    fontEnlarge,
    fontReduce
  }</span><span class="xml">)
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre>

    </div><ul>
<li><h4 id="动作的定义">动作的定义</h4><p>在组件配置文件中定义动作：</p>
</li>
</ul>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">{
  <span class="hljs-attr">&quot;actions&quot;</span>: [
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;字体变大&quot;</span>,
      <span class="hljs-attr">&quot;action&quot;</span>: <span class="hljs-string">&quot;fontEnlarge&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;字体变小&quot;</span>,
      <span class="hljs-attr">&quot;action&quot;</span>: <span class="hljs-string">&quot;fontReduce&quot;</span>
    }
  ]
}</code></pre>

    </div><p><strong>如果是组件事件调用的动作，则参数由事件传入。<em>全局事件调用组件动作没有参数。</em></strong></p>
<blockquote>
<h3 id="插槽">插槽</h3></blockquote>
<p>在组件中，默认插槽为default，你可以自定义组件插槽存放位置：</p>

        <div class="md-code-hijs">
        <pre><code class="language-html hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;dialogVisible&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">header</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;header&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;footer&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></code></pre>

    </div><p>以上组件包含了默认插槽，<code>header</code>插槽和<code>footer</code>插槽，除了默认插槽，其他自定义插槽需要在组件配置文件中定义:</p>

        <div class="md-code-hijs">
        <pre><code class="language-JSON hljs">{
  <span class="hljs-attr">&quot;slots&quot;</span>: [<span class="hljs-string">&quot;header&quot;</span>, <span class="hljs-string">&quot;footer&quot;</span>]
}</code></pre>

    </div><blockquote>
<h3 id="配置文件解析">配置文件解析</h3></blockquote>

        <div class="md-code-hijs">
        <pre><code class="language-json hljs">{
  <span class="hljs-attr">&quot;groupType&quot;</span>: <span class="hljs-string">&quot;基础组件库&quot;</span>,
  <span class="hljs-attr">&quot;groupClass&quot;</span>: <span class="hljs-string">&quot;基础字段&quot;</span>,
  <span class="hljs-attr">&quot;belongProject&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;isHidden&quot;</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;文本&quot;</span>,
  <span class="hljs-attr">&quot;target&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;props&quot;</span>: [
    {
      <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;value&quot;</span>,
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;内容&quot;</span>,
      <span class="hljs-attr">&quot;group&quot;</span>: <span class="hljs-string">&quot;基础属性&quot;</span>,
      <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;点击此处修改文字&quot;</span>,
      <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;textEdit&quot;</span>,
      <span class="hljs-attr">&quot;editorProps&quot;</span>: {
        <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;textarea&quot;</span>,
        <span class="hljs-attr">&quot;autosize&quot;</span>: {
          <span class="hljs-attr">&quot;minRows&quot;</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">&quot;maxRows&quot;</span>: <span class="hljs-number">6</span>
        }
      }
    },
    {
      <span class="hljs-attr">&quot;key&quot;</span>: <span class="hljs-string">&quot;cssText&quot;</span>,
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;自定义css样式&quot;</span>,
      <span class="hljs-attr">&quot;group&quot;</span>: <span class="hljs-string">&quot;基础属性&quot;</span>,
      <span class="hljs-attr">&quot;default&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">&quot;editor&quot;</span>: <span class="hljs-string">&quot;codeEdit&quot;</span>
    }
  ],
  <span class="hljs-attr">&quot;events&quot;</span>: [
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
      <span class="hljs-attr">&quot;event&quot;</span>: <span class="hljs-string">&quot;click&quot;</span>,
      <span class="hljs-attr">&quot;args&quot;</span>: [<span class="hljs-string">&quot;event&quot;</span>]
    }
  ],
  <span class="hljs-attr">&quot;actions&quot;</span>: [
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;字体变大&quot;</span>,
      <span class="hljs-attr">&quot;action&quot;</span>: <span class="hljs-string">&quot;fontEnlarge&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;字体变小&quot;</span>,
      <span class="hljs-attr">&quot;action&quot;</span>: <span class="hljs-string">&quot;fontReduce&quot;</span>
    }
  ],
  <span class="hljs-attr">&quot;slots&quot;</span>: [<span class="hljs-string">&quot;header&quot;</span>, <span class="hljs-string">&quot;footer&quot;</span>]
}</code></pre>

    </div><table>
<thead>
<tr>
<th>属性名</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>groupType</td>
<td>组件分类大类</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>groupClass</td>
<td>组件分类二级类</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>belongProject</td>
<td>组件所属项目</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>isHidden</td>
<td>是否在组件列表隐藏</td>
<td>Boolean</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>组件描述</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>target</td>
<td>组件名。组件所属的父组件，定义后组件只能拖放到target父组件</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>组件属性列表</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>props[].key</td>
<td>属性key</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>props[].label</td>
<td>属性描述</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>props[].group</td>
<td>属性分组</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>props[].default</td>
<td>属性默认值</td>
<td>Any</td>
<td>—</td>
</tr>
<tr>
<td>props[].hidden</td>
<td>是否隐藏</td>
<td>Boolean/String</td>
<td>—</td>
</tr>
<tr>
<td>props[].editor</td>
<td>属性对应编辑器名字</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>props[].editorProps</td>
<td>传递给属性编辑器的参数</td>
<td>Object</td>
<td>—</td>
</tr>
<tr>
<td>events</td>
<td>组件事件列表</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>events[].label</td>
<td>事件描述</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>events[].event</td>
<td>事件名称</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>events[].args</td>
<td>事件参数</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>actions</td>
<td>组件动作列表</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>actions[].label</td>
<td>动作名称</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>actions[].action</td>
<td>动作参数</td>
<td>String</td>
<td>—</td>
</tr>
<tr>
<td>slots</td>
<td>组件提供给子组件的插槽</td>
<td>Array[String]</td>
<td>—</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};const e=[{text:"组件开发",level:2,raw:"组件开发"},{text:"绑定机制",level:3,raw:"绑定机制"},{text:"属性",level:3,raw:"属性"},{text:"属性的定义",level:4,raw:"属性的定义"},{text:"属性显隐快捷条件",level:4,raw:"属性显隐快捷条件"},{text:"事件",level:3,raw:"事件"},{text:"事件的定义",level:4,raw:"事件的定义"},{text:"组件之间的插槽传值：",level:5,raw:"组件之间的插槽传值："},{text:"动作",level:3,raw:"动作"},{text:"动作的定义",level:4,raw:"动作的定义"},{text:"插槽",level:3,raw:"插槽"},{text:"配置文件解析",level:3,raw:"配置文件解析"}],p=[{code:`src\\widget
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
}`,infostring:"json"}];export{p as codeBlocks,s as default,e as headings};
