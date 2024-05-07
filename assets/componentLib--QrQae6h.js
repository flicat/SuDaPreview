import{d as l,h as n}from"./index-VAPUoo6H.js";const e=l({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="组件编辑">组件编辑</h2><ul>
<li>将左侧组件库的组件按住拖放到画板，即可对页面进行设计。</li>
<li>点击选中组件，右侧将显示组件配置tab，显示当前选中组件的属性和事件列表。</li>
<li>右键点击选中的组件，可以进行复制/删除/定位父节点等操作。</li>
</ul>
<blockquote>
<h3 id="ID修改">ID修改</h3></blockquote>
<p><strong>注意：组件id必须全局唯一，且命名需要符合js变量命名规范！修改组件id之后，其他使用该组件的地方不会同步修改！</strong></p>
<blockquote>
<h3 id="Parent Slot 修改">Parent Slot 修改</h3></blockquote>
<p>选择插入到父组件中的插槽名称，由父组件提供，详情请查看组件开发</p>
<blockquote>
<h3 id="属性绑定">属性绑定</h3></blockquote>
<p>所有属性都是基于 <code>bindType</code> 和 <code>bindValue</code> 的计算值。</p>
<ul>
<li><h4 id="默认值">默认值</h4></li>
</ul>
<p>直接从属性编辑器中获取的值。</p>
<p><img src="docImages/img1.png" alt="默认值" title="默认值"></p>
<ul>
<li><h4 id="表达式">表达式</h4></li>
</ul>
<p>在属性编辑框的右侧，点击 <code>ƒx</code> 按钮，弹框内选择绑定表达式。</p>
<p><img src="docImages/img2.png" alt="表达式" title="表达式"></p>
<p><em>需要注意的是，表达式必须有返回值。</em></p>
<ul>
<li><h4 id="全局变量">全局变量</h4></li>
</ul>
<p>在属性编辑框的右侧，点击 <code>ƒx</code> 按钮，弹框内选择绑定表达式。</p>
<p><img src="docImages/img3.png" alt="全局变量" title="全局变量"></p>
<p>在输入框内填入全局变量的访问路径即可。</p>
<ul>
<li><h4 id="数据源">数据源</h4></li>
</ul>
<p>在属性编辑框的右侧，点击 <code>ƒx</code> 按钮，弹框内选择绑定数据源。</p>
<p><img src="docImages/img4.png" alt="数据源" title="数据源"></p>
<p>在数据源定义的时候，需要成功回调函数中确认或者重新定义接口返回值，确保赋值到组件能被正确使用。</p>
<p><img src="docImages/img5.png" alt="数据源" title="数据源"></p>
<blockquote>
<h3 id="事件绑定">事件绑定</h3></blockquote>
<p>事件绑定只能绑定一种方式。事件参数由组件在定义事件的时候确认。</p>
<ul>
<li><h4 id="源码编写">源码编写</h4></li>
</ul>
<p>编写js源码。</p>
<p><img src="docImages/img6.png" alt="数据源" title="数据源"></p>
<ul>
<li><h4 id="动作绑定">动作绑定</h4></li>
</ul>
<p>触发其他组件提供的动作。</p>
<p><img src="docImages/img7.png" alt="数据源" title="数据源"></p>
<ul>
<li><h4 id="全局方法调用">全局方法调用</h4></li>
</ul>
<p>调用全局函数，可一次调用多个，顺序不确定。</p>
<p><img src="docImages/img8.png" alt="数据源" title="数据源"></p>
<ul>
<li><h4 id="数据源调用">数据源调用</h4></li>
</ul>
<p>调用数据源，可一次调用多个，顺序不确定。</p>
<p><img src="docImages/img9.png" alt="数据源" title="数据源"></p>
<p><em>建议调用的数据源将数据绑定到全局对象global中。</em></p>
`});e.render=t;e.mounted=()=>{};const p=[{text:"组件编辑",level:2,raw:"组件编辑"},{text:"ID修改",level:3,raw:"ID修改"},{text:"Parent Slot 修改",level:3,raw:"Parent Slot 修改"},{text:"属性绑定",level:3,raw:"属性绑定"},{text:"默认值",level:4,raw:"默认值"},{text:"表达式",level:4,raw:"表达式"},{text:"全局变量",level:4,raw:"全局变量"},{text:"数据源",level:4,raw:"数据源"},{text:"事件绑定",level:3,raw:"事件绑定"},{text:"源码编写",level:4,raw:"源码编写"},{text:"动作绑定",level:4,raw:"动作绑定"},{text:"全局方法调用",level:4,raw:"全局方法调用"},{text:"数据源调用",level:4,raw:"数据源调用"}],o=[{code:`src\\widget
src\\widgetIconfont
src\\widgetAssets
src\\widgetStyles
src\\widgetUtils`,infostring:""}];export{o as codeBlocks,e as default,p as headings};
