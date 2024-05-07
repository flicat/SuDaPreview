import{d as s,h as t}from"./index-VAPUoo6H.js";const e=s({name:"Markdown"}),n=()=>t("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="打包构建">打包构建</h2><blockquote>
<h3 id="打包">打包</h3></blockquote>
<p>运行命令<code>npm run build</code>打包组件，打包后的组件存放位置为<code>lib</code>目录下，</p>
<p><img src="docImages/img18.png" alt="默认值" title="默认值"></p>
<blockquote>
<h3 id="版本号">版本号</h3></blockquote>
<p><strong>打包后的文件带版本号，版本号从<code>package.json</code>中获取，在项目使用中，为了区分新旧版本库，建议添加或者修改组件后修改版本号。</strong></p>
<blockquote>
<h3 id="需要打包的文件">需要打包的文件</h3></blockquote>
<p>在修改了以下目录时，需要重新打包组件：</p>

        <div class="md-code-hijs">
        <pre><code class="hljs"><span class="hljs-attribute">src</span>\\widget
<span class="hljs-attribute">src</span>\\widgetIconfont
<span class="hljs-attribute">src</span>\\widgetAssets
<span class="hljs-attribute">src</span>\\widgetStyles
<span class="hljs-attribute">src</span>\\widgetUtils</code></pre>

    </div>`});e.render=n;e.mounted=()=>{};const o=[{text:"打包构建",level:2,raw:"打包构建"},{text:"打包",level:3,raw:"打包"},{text:"版本号",level:3,raw:"版本号"},{text:"需要打包的文件",level:3,raw:"需要打包的文件"}],d=[{code:`src\\widget
src\\widgetIconfont
src\\widgetAssets
src\\widgetStyles
src\\widgetUtils`,infostring:""}];export{d as codeBlocks,e as default,o as headings};
