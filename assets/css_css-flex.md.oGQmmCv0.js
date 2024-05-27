import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.DSzkhk7e.js";const g=JSON.parse('{"title":"CSS-Flex-弹性布局","description":"","frontmatter":{},"headers":[],"relativePath":"css/css-flex.md","filePath":"css/css-flex.md","lastUpdated":1716447218000}'),l={name:"css/css-flex.md"},t=e(`<h1 id="css-flex-弹性布局" tabindex="-1">CSS-Flex-弹性布局 <a class="header-anchor" href="#css-flex-弹性布局" aria-label="Permalink to &quot;CSS-Flex-弹性布局&quot;">​</a></h1><p>参照：<a href="https://www.runoob.com/w3cnote/flex-grammar.html" target="_blank" rel="noreferrer">Flex 布局语法教程</a></p><h2 id="容器的属性" tabindex="-1">容器的属性 <a class="header-anchor" href="#容器的属性" aria-label="Permalink to &quot;容器的属性&quot;">​</a></h2><h3 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h3><blockquote><p>决定主轴的方向（即项目的排列方向）</p></blockquote><ul><li><code>row（默认值）</code>：主轴为水平方向，起点在左端。</li><li><code>row-reverse</code>：主轴为水平方向，起点在右端。</li><li><code>column</code>：主轴为垂直方向，起点在上沿。</li><li><code>column-reverse</code>：主轴为垂直方向，起点在下沿。</li></ul><h3 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h3><blockquote><p>定义如果一条轴线排不下，如何换行</p></blockquote><ul><li><code>nowrap（默认）</code>：不换行。</li><li><code>wrap</code>：换行，第一行在上方。</li><li><code>wrap-reverse</code>：换行，第一行在下方。</li></ul><h3 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;flex-flow&quot;">​</a></h3><blockquote><p><code>flex-flow</code> 属性是 <code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式，默认值为 <code>row</code> <code>nowrap</code>。</p></blockquote><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h3><blockquote><p>定义了项目在主轴上的对齐方式</p></blockquote><ul><li><code>flex-start（默认值）</code>：左对齐。</li><li><code>flex-end</code>：右对齐。</li><li><code>center</code>： 居中。</li><li><code>space-between</code>：两端对齐，项目之间的间隔都相等。</li><li><code>space-around</code>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h3><blockquote><p>定义项目在交叉轴上如何对齐</p></blockquote><ul><li><code>flex-start</code>：交叉轴的起点对齐。</li><li><code>flex-end</code>：交叉轴的终点对齐。</li><li><code>center</code>：交叉轴的中点对齐。</li><li><code>baseline</code>: 项目的第一行文字的基线对齐。</li><li><code>stretch（默认值）</code>：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h3><blockquote><p>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p></blockquote><ul><li><code>flex-start</code>：与交叉轴的起点对齐。</li><li><code>flex-end</code>：与交叉轴的终点对齐。</li><li><code>center</code>：与交叉轴的中点对齐。</li><li><code>space-between</code>：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li><code>space-around</code>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li><code>stretch（默认值）</code>：轴线占满整个交叉轴。</li></ul><h2 id="项目属性" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性" aria-label="Permalink to &quot;项目属性&quot;">​</a></h2><h3 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order&quot;">​</a></h3><blockquote><p>定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p></blockquote><h3 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;align-self&quot;">​</a></h3><blockquote><p><code>align-self</code> 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 <code>align-items</code> 属性。默认值为 <code>auto</code>；<br> 属性值： <code>auto | flex-start | flex-end | center | baseline | stretch</code> ，意思同 <code>align-content</code></p></blockquote><h3 id="flex-grow-flex-shrink-flex-basis-flex" tabindex="-1">flex-grow flex-shrink flex-basis ; flex <a class="header-anchor" href="#flex-grow-flex-shrink-flex-basis-flex" aria-label="Permalink to &quot;flex-grow flex-shrink flex-basis ; flex&quot;">​</a></h3><p><code>flex-grow</code> ：属性定义项目的放大比例，默认为 <code>0</code>，即如果存在剩余空间，也不放大 <br><code>flex-shrink</code> ：属性定义了项目的缩小比例，默认为 <code>1</code>，即如果空间不足，该项目将缩小。<br><code>flex-basis</code> ：属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 <code>auto</code>，即项目的本来大小。</p><blockquote><p><code>flex</code> 属性是 <code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code> 的简写，默认值为 <code>0 1 auto</code>。后两个属性可选。</p></blockquote><h4 id="经典的左侧宽度不定或者确定-右侧宽度自适应填满" tabindex="-1">经典的左侧宽度不定或者确定，右侧宽度自适应填满 <a class="header-anchor" href="#经典的左侧宽度不定或者确定-右侧宽度自适应填满" aria-label="Permalink to &quot;经典的左侧宽度不定或者确定，右侧宽度自适应填满&quot;">​</a></h4><div class="css-flex-demo-box"><div class="css-flex-demo-box-item-1">左侧宽度不定或者确定，右侧宽度自适应填满</div><div class="css-flex-demo-box-item"></div></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-flex-demo-box&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-flex-demo-box-item-1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;经典的左侧宽度不定或者确定，右侧宽度自适应填满&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-flex-demo-box-item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.css-flex-demo-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    outline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dashed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.css-flex-demo-box-item-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.css-flex-demo-box-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,31),n=[t];function h(o,d,k,c,p,r){return a(),i("div",null,n)}const f=s(l,[["render",h]]);export{g as __pageData,f as default};