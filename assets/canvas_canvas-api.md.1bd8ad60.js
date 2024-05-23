import{_ as a,o as e,c as s,a as n}from"./app.b90595f9.js";const D=JSON.parse('{"title":"canvas 笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"canvas 介绍","slug":"canvas-介绍","link":"#canvas-介绍","children":[]},{"level":2,"title":"canvas 使用","slug":"canvas-使用","link":"#canvas-使用","children":[{"level":3,"title":"获取 canvas 上下文","slug":"获取-canvas-上下文","link":"#获取-canvas-上下文","children":[]},{"level":3,"title":"路径绘制的api 和 直接绘制图形的api","slug":"路径绘制的api-和-直接绘制图形的api","link":"#路径绘制的api-和-直接绘制图形的api","children":[]}]},{"level":2,"title":"使用 canvas 绘图","slug":"使用-canvas-绘图","link":"#使用-canvas-绘图","children":[{"level":3,"title":"beginPath","slug":"beginpath","link":"#beginpath","children":[]},{"level":3,"title":"strokeStyle","slug":"strokestyle","link":"#strokestyle","children":[]},{"level":3,"title":"lineWidth","slug":"linewidth","link":"#linewidth","children":[]},{"level":3,"title":"moveTo","slug":"moveto","link":"#moveto","children":[]},{"level":3,"title":"lineTo","slug":"lineto","link":"#lineto","children":[]},{"level":3,"title":"closePath","slug":"closepath","link":"#closepath","children":[]},{"level":3,"title":"stroke","slug":"stroke","link":"#stroke","children":[]},{"level":3,"title":"lineCap","slug":"linecap","link":"#linecap","children":[]},{"level":3,"title":"beginPath 的作用","slug":"beginpath-的作用","link":"#beginpath-的作用","children":[]},{"level":3,"title":"beginPath 和 closePath 的区别","slug":"beginpath-和-closepath-的区别","link":"#beginpath-和-closepath-的区别","children":[]},{"level":3,"title":"画长方形和圆","slug":"画长方形和圆","link":"#画长方形和圆","children":[]},{"level":3,"title":"transform 变换","slug":"transform-变换","link":"#transform-变换","children":[]},{"level":3,"title":"状态保存 save restore","slug":"状态保存-save-restore","link":"#状态保存-save-restore","children":[]},{"level":3,"title":"指针时钟","slug":"指针时钟","link":"#指针时钟","children":[]}]},{"level":2,"title":"canvas 像素操作","slug":"canvas-像素操作","link":"#canvas-像素操作","children":[{"level":3,"title":"ImageData","slug":"imagedata","link":"#imagedata","children":[]},{"level":3,"title":"getImageData","slug":"getimagedata","link":"#getimagedata","children":[{"level":4,"title":"putImageData","slug":"putimagedata","link":"#putimagedata","children":[]},{"level":4,"title":"用于解释 putImageData 后 4 个参数的 demo","slug":"用于解释-putimagedata-后-4-个参数的-demo","link":"#用于解释-putimagedata-后-4-个参数的-demo","children":[]}]},{"level":3,"title":"把 文字/图片 转换为像素 文字/图片","slug":"把-文字-图片-转换为像素-文字-图片","link":"#把-文字-图片-转换为像素-文字-图片","children":[]}]}],"relativePath":"canvas/canvas-api.md","lastUpdated":1716447218000}'),o={name:"canvas/canvas-api.md"},l=n(`<h1 id="canvas-笔记" tabindex="-1">canvas 笔记 <a class="header-anchor" href="#canvas-笔记" aria-hidden="true">#</a></h1><h2 id="canvas-介绍" tabindex="-1">canvas 介绍 <a class="header-anchor" href="#canvas-介绍" aria-hidden="true">#</a></h2><blockquote><p>摘抄自 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API" target="_blank" rel="noreferrer">MDN</a></p></blockquote><p><strong>Canvas API</strong> 提供了一个通过<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank" rel="noreferrer">HTML</a>的<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas" target="_blank" rel="noreferrer"><code>&lt;canvas&gt;</code></a>元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。</p><p>Canvas API 主要聚焦于 2D 图形。而同样使用<code>&lt;canvas&gt;</code>元素的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API" target="_blank" rel="noreferrer">WebGL API</a> 则用于绘制硬件加速的 2D 和 3D 图形。</p><h2 id="canvas-使用" tabindex="-1">canvas 使用 <a class="header-anchor" href="#canvas-使用" aria-hidden="true">#</a></h2><h3 id="获取-canvas-上下文" tabindex="-1">获取 canvas 上下文 <a class="header-anchor" href="#获取-canvas-上下文" aria-hidden="true">#</a></h3><p>Canvas 的默认大小为 300 像素 ×150 像素（宽 × 高，像素的单位是 px）</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">outline: 2px solid #ccc;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#canvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 获取 2d 上下文</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="路径绘制的api-和-直接绘制图形的api" tabindex="-1">路径绘制的api 和 直接绘制图形的api <a class="header-anchor" href="#路径绘制的api-和-直接绘制图形的api" aria-hidden="true">#</a></h3><ul><li><strong>路径绘制相关的api</strong>：<code>beginPath</code> <code>moveTo</code> <code>lineTo</code> <code>closePath</code> <code>rect</code> <code>arc</code> <code>arcTo</code> <code>bezierCurveTo</code> <code>roundRect</code></li><li><strong>直接绘制图形的api</strong>：<code>strokeRect</code> <code>strokeText</code> <code>fillRect</code> <code>fillText</code></li></ul><blockquote><p>需要注意的是 <strong>路径绘制相关的api</strong> 后需要使用 <code>stroke</code> 或者 <code>fill</code> 才会把图形绘制到画布上；<strong>直接绘制图形的api</strong> 可以直接在画布上绘制图形，不会影响当前的子路径列表</p></blockquote><h2 id="使用-canvas-绘图" tabindex="-1">使用 canvas 绘图 <a class="header-anchor" href="#使用-canvas-绘图" aria-hidden="true">#</a></h2><h3 id="beginpath" tabindex="-1">beginPath <a class="header-anchor" href="#beginpath" aria-hidden="true">#</a></h3><p>清空子路径列表开始一个新路径，当你想创建一个新的路径时，调用此方法</p><h3 id="strokestyle" tabindex="-1">strokeStyle <a class="header-anchor" href="#strokestyle" aria-hidden="true">#</a></h3><p>描述画笔（绘制图形）颜色或者样式的属性。默认值是 <code>#000</code></p><h3 id="linewidth" tabindex="-1">lineWidth <a class="header-anchor" href="#linewidth" aria-hidden="true">#</a></h3><p>设置线段宽度的属性</p><h3 id="moveto" tabindex="-1">moveTo <a class="header-anchor" href="#moveto" aria-hidden="true">#</a></h3><p>将一个新的子路径的起始点移动到 (x，y) 坐标的方法</p><h3 id="lineto" tabindex="-1">lineTo <a class="header-anchor" href="#lineto" aria-hidden="true">#</a></h3><p>使用直线连接子路径的终点到 x，y 坐标的方法<code>（并不会真正地绘制）</code></p><h3 id="closepath" tabindex="-1">closePath <a class="header-anchor" href="#closepath" aria-hidden="true">#</a></h3><p>将笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作</p><h3 id="stroke" tabindex="-1">stroke <a class="header-anchor" href="#stroke" aria-hidden="true">#</a></h3><p>使用非零环绕规则，根据当前的画线样式（子路径列表），绘制当前或已经存在的路径的方法，<code>若调用 stroke 时传递了参数，则不会使用当前的子路径列表绘制</code></p><h3 id="linecap" tabindex="-1">lineCap <a class="header-anchor" href="#linecap" aria-hidden="true">#</a></h3><p>指定如何绘制每一条线段末端的属性。有 3 个可能的值，分别是：<code>butt (线段末端以方形结束)</code>, <code>round (线段末端以圆形结束)</code> and <code>square (线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域)</code>。默认值是 <code>butt</code></p><iframe style="width:100%;height:400px;" src="https://code.juejin.cn/pen/7185414857754148896"></iframe><h3 id="beginpath-的作用" tabindex="-1">beginPath 的作用 <a class="header-anchor" href="#beginpath-的作用" aria-hidden="true">#</a></h3><p><code>beginPath</code> 清空子路径列表开始一个新路径，当使用了 <code>beginPath</code> 后，接下来绘制的所有的路径都会保存在 <code>子路径列表</code> 中，若后面没有再执行 <code>beginPath</code> ，那么再执行 <code>stroke</code> <code>fill</code> 将会绘制当前子路径列表中所有的图形。</p><blockquote><p>在下面的例子中，第二次绘制前未使用 <code>beginPath</code>，实际绘制出来的两个图形都变成了红色，这是因为 <code>stroke</code> 会把当前 子路径列表 中的所有路径都绘制出来，两个红色图形，实际上是第二次执行 <code>stroke</code> 时把上面的路径再绘制了一次，只是这次绘制的颜色是红色，覆盖掉开始绘制的黑色图形</p></blockquote><iframe style="width:100%;height:400px;" src="https://code.juejin.cn/pen/7185458950501269563"></iframe><h3 id="beginpath-和-closepath-的区别" tabindex="-1">beginPath 和 closePath 的区别 <a class="header-anchor" href="#beginpath-和-closepath-的区别" aria-hidden="true">#</a></h3><p><code>beginPath</code> 和 <code>closePath</code> 是完全是没有关系的，<code>closePath</code> 的作用仅仅只是<code>连接当前的路径的起点和终点,把当前路径的起点设置为后面路径绘制的起点</code>，比如说我们画一个三角形，当画了两条边后，我们可以直接使用 <code>closePath</code> 把三角形的起点和终点进行连线</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[jcode](https:</span><span style="color:#676E95;font-style:italic;">//code.juejin.cn/pen/7185470174076600357)</span></span>
<span class="line"></span></code></pre></div><h3 id="画长方形和圆" tabindex="-1">画长方形和圆 <a class="header-anchor" href="#画长方形和圆" aria-hidden="true">#</a></h3><p>画长方形和圆和画线的操作基本上是一样的</p><blockquote><p>在下面例子中，正方形的起点到圆形的起点有一根连线，在同一个子路径列表中使用 <code>rect</code> 和 <code>arc</code> 画图时，若不使用 <code>moveTo</code>，两个不同图形的起点和终点始终会被线连接</p></blockquote><iframe style="width:100%;height:400px;" src="https://code.juejin.cn/pen/7185472747349213240"></iframe><h3 id="transform-变换" tabindex="-1">transform 变换 <a class="header-anchor" href="#transform-变换" aria-hidden="true">#</a></h3><ul><li><code>transform(a, b, c, d, e, f)</code> 使用矩阵多次叠加当前变换； <strong>a (m11)</strong> 水平缩放；<strong>b (m12)</strong> 垂直倾斜；<strong>c (m21)</strong> 水平倾斜；<strong>d (m22)</strong> 垂直缩放；<strong>e (dx)</strong> 水平移动；<strong>f (dy)</strong> 垂直移动；</li><li><code>translate(x,y)</code> 将 canvas 按原始 x 点的水平方向、原始的 y 点垂直方向进行<strong>平移变换</strong></li><li><code>scale(x, y)</code> 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换</li><li><code>rotate(angle)</code> 在变换矩阵中增加旋转的方法，角度变量表示一个顺时针旋转角度并且用弧度表示</li></ul><p><code>transform</code> 变换中的所有 api 设置的变换都是全局的，<code>transform</code> 所设置的变换相当于把当前输入的坐标经过变换后再绘制到画布上，如下：代码中设置的正方形的左上角坐标是 <code>(10,10)</code> 但是实际绘制的正方形的左上角坐标是 <code>(30，30)</code>，接下来我们再设置一个 <code>(20, 20)</code> 的平移，第二个正方形实际绘制的坐标是 <code>(50, 50)</code> ，<strong><code>多次设置的变化，会累积</code></strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beginPath</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beginPath</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="状态保存-save-restore" tabindex="-1">状态保存 save restore <a class="header-anchor" href="#状态保存-save-restore" aria-hidden="true">#</a></h3><ul><li><code>save</code> 通过将当前状态放入栈中，保存 canvas 全部状态</li><li><code>restore</code> 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。如果没有保存状态，此方法不做任何改变</li></ul><p><strong>保存到栈中的绘制状态由下面部分组成：</strong></p><ul><li>当前的变换矩阵。</li><li>当前的剪切区域。</li><li>当前的虚线列表。</li><li>以下属性当前的值： <code>strokeStyle</code>, <code>fillStyle</code>, <code>globalAlpha</code>, <code>lineWidth</code>, <code>lineCap</code>, <code>lineJoin</code>, <code>miterLimit</code>, <code>lineDashOffset</code>, <code>shadowOffsetX</code>, <code>shadowOffsetY</code>, <code>shadowBlur</code>, <code>shadowColor</code>, <code>globalCompositeOperation</code>, <code>font</code>, <code>textAlign</code>, <code>textBaseline</code>, <code>direction</code>, <code>imageSmoothingEnabled</code>.</li></ul><p><code>save restore</code> 的作用就是重置状态，特别是重置 <strong>变换状态</strong>，在 canvas 中其他的属性的设置都会被后面设置的属性所覆盖，比如 <code>strokeStyle</code> ；但是 <strong>变换状态</strong> 是累积计算的，虽然我们可以使用下面这种方式还原 <strong>变换状态</strong>。但是当变换被设置了多次时，还原状态就很麻烦了，这时候我们可以在变换使用之前使用 <code>save</code> 保存一次当前的状态，然后等所有操作执行完成，再使用 <code>restore</code> 还原到 <code>save</code> 保存的状态，这时候后面绘制的内容就不会受变换的影响了</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 还原平移状态</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 还原多次变换状态</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 先使用 save 保存状态</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">translate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">180</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scale</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 还原状态</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">restore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这时候后面绘制的内容就不会受变换的影响了</span></span>
<span class="line"></span></code></pre></div><h3 id="指针时钟" tabindex="-1">指针时钟 <a class="header-anchor" href="#指针时钟" aria-hidden="true">#</a></h3><p>在时针的绘制中，刻度和指针都需要使用变换来调整他当前的位置，在变换时为了不影响下一次绘制，所以多次使用了 <code>save</code> 和 <code>restore</code> 来保存和恢复状态</p><iframe style="width:100%;height:400px;" src="https://code.juejin.cn/pen/7186559745271005243"></iframe><h2 id="canvas-像素操作" tabindex="-1">canvas 像素操作 <a class="header-anchor" href="#canvas-像素操作" aria-hidden="true">#</a></h2><p>对于一个300*150的 canvas 画布，相当于每行有 300 个像素点，每列有 150 个像素点。像素操可能会用到下面这些 api</p><h3 id="imagedata" tabindex="-1">ImageData <a class="header-anchor" href="#imagedata" aria-hidden="true">#</a></h3><p><strong><code>ImageData</code></strong> 接口描述 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas" target="_blank" rel="noreferrer"><code>&lt;canvas&gt;</code></a> 元素的一个隐含像素数据的区域。使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData/ImageData" title="ImageData()" target="_blank" rel="noreferrer"><code>ImageData()</code></a> 构造函数创建或者使用和 canvas 在一起的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noreferrer"><code>CanvasRenderingContext2D</code></a> 对象的创建方法： <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createImageData" title="createImageData()" target="_blank" rel="noreferrer"><code>createImageData()</code></a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getImageData" title="getImageData()" target="_blank" rel="noreferrer"><code>getImageData()</code></a>。也可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData" title="putImageData()" target="_blank" rel="noreferrer"><code>putImageData()</code></a> 设置 canvas 的一部分</p><blockquote><p><strong>语法</strong></p><p><code>const imageData = new ImageData(array, width, height)</code></p><p><code>const imageData = new ImageData(width, height)</code></p><p><strong>width 和 height 都需要是大于 0 的整数</strong></p></blockquote><ul><li><code>array</code> 包含图像隐藏像素的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray" target="_blank" rel="noreferrer"><code>Uint8ClampedArray</code></a> 数组。如果数组没有给定，指定大小的黑色矩形图像将会被创建</li><li><code>width</code> 无符号长整型（unsigned long）数值，描述图像的宽度</li><li><code>height</code> 无符号长整型（unsigned long）数值，描述图像的高度。 如果已给定数组，这个值是可选的：它将通过它的大小和给定的宽度进行推断</li><li><code>imageData.width</code> 图片宽度，单位是像素</li><li><code>imageData.height</code> 图片高度，单位是像素</li><li><code>imageData.data</code> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray" target="_blank" rel="noreferrer"><code>Uint8ClampedArray</code></a> 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）；<strong>这里的 alpha 和 css 中使用的 rgba 中的 alpha(0-1) 不一样，他也是 0-255</strong></li></ul><p>data 属性返回一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray" target="_blank" rel="noreferrer"><code>Uint8ClampedArray</code></a>，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是&quot;RGBA&quot;格式) 来代表。每个颜色值用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组</p><p><strong>举个例子</strong>： 现在有一个长宽2像素、左上角为(0,0)、背景色为黑色的矩形。相当于这整个矩形需要用2*2=4个像素显示</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 我们先获取矩形的像素数据</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imageData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getImageData</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这里 imageData.data 类似于这个数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//r,g,b,a</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">255</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="getimagedata" tabindex="-1">getImageData <a class="header-anchor" href="#getimagedata" aria-hidden="true">#</a></h3><p>返回一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData" target="_blank" rel="noreferrer"><code>ImageData</code></a>对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为 (<code>sx: 将要被提取的图像数据矩形区域的左上角 x 坐标</code>, <code>sy: 将要被提取的图像数据矩形区域的左上角 y 坐标</code>)、<code>将要被提取的图像数据矩形区域的宽度 sw</code>、<code>将要被提取的图像数据矩形区域的高度 sh</code></p><blockquote><p><strong>语法</strong> <code>ctx.getImageData(sx, sy, sw, sh)</code></p></blockquote><h4 id="putimagedata" tabindex="-1">putImageData <a class="header-anchor" href="#putimagedata" aria-hidden="true">#</a></h4><p>将数据从已有的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData" target="_blank" rel="noreferrer"><code>ImageData</code></a> 对象绘制到位图的方法。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。<strong>此方法不受画布转换矩阵的影响</strong></p><blockquote><p><strong>语法</strong></p><p><code>void ctx.putImageData(imagedata, dx, dy);</code></p><p><code>void ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);</code></p></blockquote><ul><li><code>imagedata</code> 包含像素值的数组对象</li><li><code>dx</code> 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）</li><li><code>dy</code> 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）</li><li><code>dirtyX</code> 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）</li><li><code>dirtyY</code> 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）</li><li><code>dirtyWidth</code> 在源图像数据中，矩形区域的宽度。默认是图像数据的宽度</li><li><code>dirtyHeight</code> 在源图像数据中，矩形区域的高度。默认是图像数据的高度</li></ul><p><code>putImageData</code> <strong>后4个参数的作用类似裁剪图片</strong></p><h4 id="用于解释-putimagedata-后-4-个参数的-demo" tabindex="-1">用于解释 putImageData 后 4 个参数的 demo <a class="header-anchor" href="#用于解释-putimagedata-后-4-个参数的-demo" aria-hidden="true">#</a></h4><iframe style="width:100%;height:400px;" src="https://code.juejin.cn/pen/7187662967725359156"></iframe><h3 id="把-文字-图片-转换为像素-文字-图片" tabindex="-1">把 文字/图片 转换为像素 文字/图片 <a class="header-anchor" href="#把-文字-图片-转换为像素-文字-图片" aria-hidden="true">#</a></h3><ol><li>使用 <code>getImageData</code> 获取需要转换区域内的 <code> imageData.data</code></li><li>间隔的遍历 <code>imageData.data</code> 获取像素点，把像素点使用需要的图形或者文字重新绘制的新的位置</li></ol><iframe style="width:100%;height:400px;" src="https://code.juejin.cn/pen/7187692270928756794"></iframe>`,76),t=[l];function c(p,r,i,d,h,y){return e(),s("div",null,t)}const g=a(o,[["render",c]]);export{D as __pageData,g as default};