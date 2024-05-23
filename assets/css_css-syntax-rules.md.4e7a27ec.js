import{_ as s,o as a,c as n,a as l}from"./app.b90595f9.js";const F=JSON.parse('{"title":"CSS语法规则","description":"","frontmatter":{},"headers":[{"level":2,"title":"渐变例子： linear-gradient()","slug":"渐变例子-linear-gradient","link":"#渐变例子-linear-gradient","children":[{"level":3,"title":"符合规则的多种语法","slug":"符合规则的多种语法","link":"#符合规则的多种语法","children":[]}]},{"level":2,"title":"重复渐变例子： repeating-linear-gradient()","slug":"重复渐变例子-repeating-linear-gradient","link":"#重复渐变例子-repeating-linear-gradient","children":[{"level":3,"title":"符合规则的多种语法","slug":"符合规则的多种语法-1","link":"#符合规则的多种语法-1","children":[]}]}],"relativePath":"css/css-syntax-rules.md","lastUpdated":1716447218000}'),p={name:"css/css-syntax-rules.md"},t=l(`<h1 id="css语法规则" tabindex="-1">CSS语法规则 <a class="header-anchor" href="#css语法规则" aria-hidden="true">#</a></h1><p>参照： <a href="https://weread.qq.com/web/reader/13c32c90726fa07d13c0072kc51323901dc51ce410c121b" target="_blank" rel="noreferrer">css新世界-微信读书</a></p><p>参照： <a href="https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/" target="_blank" rel="noreferrer">CSS值类型文档大全</a></p><table><thead><tr><th>符号</th><th>名称</th><th>描述</th></tr></thead><tbody><tr><td></td><td>字面符号</td><td></td></tr><tr><td>,</td><td>并列分隔符</td><td>用来分隔数个并列值，或分隔函数的参数值</td></tr><tr><td>/</td><td>缩写分隔符</td><td>用来分隔一个值的多个部分，在CSS缩写中用于分离类型相同但属于不同CSS属性的值，以及用在部分CSS函数中</td></tr><tr><td></td><td>组合符号</td><td></td></tr><tr><td>空格</td><td>并列</td><td>符号为普通空格字符，表示各部分必须出现，同时需要按顺序出现</td></tr><tr><td>&amp;&amp;</td><td>“于”组合符</td><td>各部分必须出现，但可以不按顺序出现</td></tr><tr><td>||</td><td>“或”组合符</td><td>各部分至少出现一个，可以不按顺序出现</td></tr><tr><td>|</td><td>“互斥”组合符</td><td>各部分恰好出现其中一个</td></tr><tr><td>[]</td><td>方括号</td><td>将各部分进行分组以绕过上面几个符号的优先规则，因此方括号的优先级最高</td></tr><tr><td></td><td>数量符号</td><td></td></tr><tr><td></td><td>无数量符号</td><td>恰好出现一次</td></tr><tr><td>*</td><td>星号</td><td>可以出现任意次数</td></tr><tr><td>+</td><td>加号</td><td>可以出现一次或者多次</td></tr><tr><td>?</td><td>问号</td><td>可以出现零次或者一次，也就是该元素可有可无</td></tr><tr><td>{m,n}</td><td>花括号</td><td>最少出现m次，最多出现n次</td></tr><tr><td>#</td><td>井号</td><td>可以出现一次或者多次，但出现时必须以逗号分隔</td></tr><tr><td>!</td><td>叹号</td><td>表示当前分组必须产生一个值，该符号多出现在组合符号方括号的后面</td></tr></tbody></table><h2 id="渐变例子-linear-gradient" tabindex="-1">渐变例子： linear-gradient() <a class="header-anchor" href="#渐变例子-linear-gradient" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">linear-gradient(</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ &lt;angle&gt; | to &lt;side-or-corner&gt; ,]? &lt;color-stop-list&gt; )</span></span>
<span class="line"><span style="color:#A6ACCD;">  \\---------------------------------/ \\----------------------------/</span></span>
<span class="line"><span style="color:#A6ACCD;">    Definition of the gradient line        List of color stops</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">where &lt;side-or-corner&gt; = [ left | right ] || [ top | bottom ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  and &lt;color-stop-list&gt; = [ &lt;linear-color-stop&gt; [, &lt;color-hint&gt;? ]? ]#, &lt;linear-color-stop&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  and &lt;linear-color-stop&gt; = &lt;color&gt; [ &lt;color-stop-length&gt; ]?</span></span>
<span class="line"><span style="color:#A6ACCD;">  and &lt;color-stop-length&gt; = [ &lt;percentage&gt; | &lt;length&gt; ]{1,2}</span></span>
<span class="line"><span style="color:#A6ACCD;">  and &lt;color-hint&gt; = [ &lt;percentage&gt; | &lt;length&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="符合规则的多种语法" tabindex="-1">符合规则的多种语法 <a class="header-anchor" href="#符合规则的多种语法" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">css-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30vh</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 当不设置 &lt;side-or-corner&gt; 时，默认是 to bottom */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5 </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5 </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> bottom right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5 </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 为角度时，为逆时针旋转 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5 </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">8E8883</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">083E80</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FF5722</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F51B5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">8E8883 </span><span style="color:#F78C6C;">10%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">083E80</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FF5722 </span><span style="color:#F78C6C;">5%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">45deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue </span><span style="color:#F78C6C;">50%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="重复渐变例子-repeating-linear-gradient" tabindex="-1">重复渐变例子： repeating-linear-gradient() <a class="header-anchor" href="#重复渐变例子-repeating-linear-gradient" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">repeating-linear-gradient(  [ &lt;angle&gt; | to &lt;side-or-corner&gt; ,]? &lt;color-stop&gt; [, &lt;color-stop&gt;]+ )</span></span>
<span class="line"><span style="color:#A6ACCD;">                            \\---------------------------------/ \\----------------------------/</span></span>
<span class="line"><span style="color:#A6ACCD;">                              渐变轴的定义                                色标列表</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">where &lt;side-or-corner&gt; = [left | right] || [top | bottom]</span></span>
<span class="line"><span style="color:#A6ACCD;">   and &lt;color-stop&gt;     = &lt;color&gt; [ &lt;percentage&gt; | &lt;length&gt; ]?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="符合规则的多种语法-1" tabindex="-1">符合规则的多种语法 <a class="header-anchor" href="#符合规则的多种语法-1" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">css-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30vh</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeating-linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> transparent </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue </span><span style="color:#F78C6C;">20px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> transparent </span><span style="color:#F78C6C;">22px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red </span><span style="color:#F78C6C;">42px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44px</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#82AAFF;">repeating-linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> transparent </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue </span><span style="color:#F78C6C;">20px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> transparent </span><span style="color:#F78C6C;">22px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red </span><span style="color:#F78C6C;">42px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),o=[t];function e(r,c,C,D,y,A){return a(),n("div",null,o)}const i=s(p,[["render",e]]);export{F as __pageData,i as default};
