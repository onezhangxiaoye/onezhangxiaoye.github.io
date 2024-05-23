import{_ as s,o as a,c as n,a as l}from"./app.b90595f9.js";const g=JSON.parse('{"title":"使用Hugo","description":"","frontmatter":{"title":"使用Hugo","date":"2021-01-16T09:57:07.000Z","lastmod":"2021-02-01T10:21:35.000Z","author":"ZhangXiaoYe","avatar":"/images/avatar.png","authorlink":"http://cai12317.gitee.io/blog","categories":["Hugo"],"tags":["教程","Hugo"],"draft":false},"headers":[{"level":2,"title":"1 创建新的内容文件","slug":"_1-创建新的内容文件","link":"#_1-创建新的内容文件","children":[]},{"level":2,"title":"2 启动webserver","slug":"_2-启动webserver","link":"#_2-启动webserver","children":[]},{"level":2,"title":"3 在Gitee上发布之后不显示文章","slug":"_3-在gitee上发布之后不显示文章","link":"#_3-在gitee上发布之后不显示文章","children":[]},{"level":2,"title":"4 块引用","slug":"_4-块引用","link":"#_4-块引用","children":[]},{"level":2,"title":"5 代码高亮","slug":"_5-代码高亮","link":"#_5-代码高亮","children":[]},{"level":2,"title":"6 md文件中嵌入原生Html代码并原样输出","slug":"_6-md文件中嵌入原生html代码并原样输出","link":"#_6-md文件中嵌入原生html代码并原样输出","children":[]},{"level":2,"title":"7 文章A标签渲染","slug":"_7-文章a标签渲染","link":"#_7-文章a标签渲染","children":[]}],"relativePath":"hugo/use-hugo.md","lastUpdated":1716447218000}'),e={name:"hugo/use-hugo.md"},p=l(`<h1 id="使用hugo" tabindex="-1">使用Hugo <a class="header-anchor" href="#使用hugo" aria-hidden="true">#</a></h1><p>Hugo的一些常用命令.</p><h2 id="_1-创建新的内容文件" tabindex="-1">1 创建新的内容文件 <a class="header-anchor" href="#_1-创建新的内容文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    # 需要在跟目录使用 否则会提示找不到配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    hugo new posts/my-first-post.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-启动webserver" tabindex="-1">2 启动webserver <a class="header-anchor" href="#_2-启动webserver" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    # 根目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    hugo server -D</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 参考帮助文档</span></span>
<span class="line"><span style="color:#A6ACCD;">    hugo help</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-在gitee上发布之后不显示文章" tabindex="-1">3 在Gitee上发布之后不显示文章 <a class="header-anchor" href="#_3-在gitee上发布之后不显示文章" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: &quot;Twice&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">date: 2021-01-15T00:03:05+08:00</span></span>
<span class="line"><span style="color:#A6ACCD;"># 这里表示当前文章还属于草稿，在生产环境中不会显示</span></span>
<span class="line"><span style="color:#A6ACCD;">draft: true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>参照<a href="https://gohugo.io/getting-started/usage/#draft-future-and-expired-content" target="_blank" rel="noreferrer">Hugo文档-Basic Usage</a></p><h2 id="_4-块引用" tabindex="-1">4 块引用 <a class="header-anchor" href="#_4-块引用" aria-hidden="true">#</a></h2><p><code>blockquote</code> 块引用，默认没有样式，可以直接去自定义 css 添加一个预期的样式就可以了，样式参照的掘金的样式</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">markdown-body</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">blockquote</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">666</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">cbcbcb</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f8f8f8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">markdown-body</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">blockquote</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_5-代码高亮" tabindex="-1">5 代码高亮 <a class="header-anchor" href="#_5-代码高亮" aria-hidden="true">#</a></h2><p>想通过<code>highlightjs</code>调整到自己想要的代码主题样式，但是怎么调整视乎都有点不对劲，后面检查元素发现是hugo自动生成的部分内联的样式覆盖了<code>highlightjs</code>的样式，</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  # highlightjs样式的设置</span></span>
<span class="line"><span style="color:#A6ACCD;">  highlightjs = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  # highlightjsCDN = &quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  highlightjsExtraLanguages = [&quot;ocaml&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  highlightjsTheme = &quot;atom-one-dark&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  highlightjsThemeDark = &quot;atom-one-dark&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这里通过<a href="https://gohugo.io/getting-started/configuration-markup#highlight" target="_blank" rel="noreferrer">Hugo-Highlight</a>，<code>codeFences = false</code> 关闭他本身的代码样式生成</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[markup]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [markup.highlight]</span></span>
<span class="line"><span style="color:#A6ACCD;">    anchorLineNos = false</span></span>
<span class="line"><span style="color:#A6ACCD;">    codeFences = false # 是否使用 内置 代码样式</span></span>
<span class="line"><span style="color:#A6ACCD;">    guessSyntax = false # 猜测语法，如果你没有设置要显示的语言则会自动匹配</span></span>
<span class="line"><span style="color:#A6ACCD;">    hl_Lines = &quot;&quot; # 高亮的行号</span></span>
<span class="line"><span style="color:#A6ACCD;">    lineAnchors = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    lineNoStart = 1 # 行号从编号几开始</span></span>
<span class="line"><span style="color:#A6ACCD;">    lineNos = true # 是否显示行号</span></span>
<span class="line"><span style="color:#A6ACCD;">    lineNumbersInTable = true #使用表来格式化行号和代码,而不是 标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    noClasses = false # 是否使用 class 标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    style = &quot;dracula&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tabWidth = 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_6-md文件中嵌入原生html代码并原样输出" tabindex="-1">6 <code>md</code>文件中嵌入原生<code>Html</code>代码并原样输出 <a class="header-anchor" href="#_6-md文件中嵌入原生html代码并原样输出" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[markup]</span></span>
<span class="line"><span style="color:#A6ACCD;">  # https://gohugo.io/getting-started/configuration-markup#goldmark</span></span>
<span class="line"><span style="color:#A6ACCD;">  [markup.goldmark]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [markup.goldmark.renderer]</span></span>
<span class="line"><span style="color:#A6ACCD;">      unsafe = true #开启后可在md 中直接嵌入 html 代码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_7-文章a标签渲染" tabindex="-1">7 文章A标签渲染 <a class="header-anchor" href="#_7-文章a标签渲染" aria-hidden="true">#</a></h2><p><a href="https://gohugo.io/getting-started/configuration-markup/#markdown-render-hooks" target="_blank" rel="noreferrer">Markdown Render Hooks</a></p><p><a href="https://gohugo.io/getting-started/configuration-markup/#link-with-title-markdown-example" target="_blank" rel="noreferrer">Link with title Markdown example</a></p>`,22),o=[p];function t(r,c,i,C,d,h){return a(),n("div",null,o)}const y=s(e,[["render",t]]);export{g as __pageData,y as default};
