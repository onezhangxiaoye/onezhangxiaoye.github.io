import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.DSzkhk7e.js";const y=JSON.parse('{"title":"nginx笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/nginx.md","filePath":"server/nginx.md","lastUpdated":1716447218000}'),l={name:"server/nginx.md"},t=n(`<h1 id="nginx笔记" tabindex="-1">nginx笔记 <a class="header-anchor" href="#nginx笔记" aria-label="Permalink to &quot;nginx笔记&quot;">​</a></h1><h2 id="nginx-map" tabindex="-1">nginx map <a class="header-anchor" href="#nginx-map" aria-label="Permalink to &quot;nginx map&quot;">​</a></h2><p><code>map</code> 的主要作用是创建自定义变量，通过使用 <code>nginx</code> 的内置变量，去匹配某些特定规则，如果匹配成功则设置某个值给自定义变量。 而这个自定义变量又可以作于他用。</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解释： 若 $uri 中匹配到了 index.html ，则把 $set_log 设置为 1 ，默认和未匹配到设置未 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $set_log {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="设置自定义变量" tabindex="-1">设置自定义变量 <a class="header-anchor" href="#设置自定义变量" aria-label="Permalink to &quot;设置自定义变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>set $common_ip http://127.0.0.1:2001;</span></span></code></pre></div><h2 id="location-匹配规则" tabindex="-1">location 匹配规则 <a class="header-anchor" href="#location-匹配规则" aria-label="Permalink to &quot;location 匹配规则&quot;">​</a></h2><ul><li><code>=</code> 绝对匹配，一个字符也不能差</li><li><code>^~</code> 前缀匹配</li><li><code>~</code>(区分大小写); <code>~*</code>(不区分大小写) <strong>正则匹配</strong></li><li>普通前缀匹配</li></ul><h2 id="nginx-例子代码" tabindex="-1">nginx 例子代码 <a class="header-anchor" href="#nginx-例子代码" aria-label="Permalink to &quot;nginx 例子代码&quot;">​</a></h2><ul><li><a href="http://nginx.org/en/docs/varindex.html" target="_blank" rel="noreferrer">内置变量大全-官网</a></li><li><a href="https://www.cnblogs.com/larry-luo/p/10119842.html" target="_blank" rel="noreferrer">内置变量大全-博客园</a></li><li><a href="https://juejin.cn/post/7134540187064860679" target="_blank" rel="noreferrer">常用配置详解-掘金</a></li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $set_log {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出日志格式化</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main-test </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proxy_add_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;-- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;-- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -- $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream_response_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 使用 return 返回字符串若发现浏览器显示的文本乱码，可以加上此设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	charset </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf-8;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 只在uri中匹配到了 index.html 才输出日志</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# format 后的参数必须 写了 format 才是可选的但是若没有配置 format 可以写默认值 combined</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# Syntax:	access_log path [format [buffer=size] [gzip[=level]] [flush=time] [if=condition]];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# access_log logs/main-test.log combined if=$set_log;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logs/main-test.log main-test if=$set_log;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$root F:/test-test-test/example_0820/html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$common_ip http://127.0.0.1:2001;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	    # 使用 return 返回字符串需要设置默认类型，否则浏览器会当为文件下载</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($http_user_agent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!~ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Weixin|WindowsWechat)){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 401</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;请使用微信打开&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F:/test-test-test/example_0820/html/Weixin;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 这里是为了移除 /hello/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /hello/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 实际请求地址 http://127.0.0.1:2000/hello/get</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 代理后的请求地址 http://127.0.0.1:2001/get</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:2001/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /get/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 实际请求地址 http://127.0.0.1:2000/get/hello</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 代理后的请求地址 http://127.0.0.1:2001/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 最后的 / 会导致整个 URI 被移除</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$common_ip/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /haha/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 实际请求地址 http://127.0.0.1:2000/haha/hello</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 代理后的请求地址 http://127.0.0.1:2001/haha/hello</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$common_ip;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 实际请求地址 http://127.0.0.1:2000/api</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 代理后的请求地址 http://127.0.0.1:2001/api</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$common_ip;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这是个错误的例子 会导致异常</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # cannot have URI part in location given by regular expression</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 如果匹配使用的正则表达式，proxy_pass 就不能后面就不能带 URI 了，即使最后带 / 都不行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #location ~ ^/ha {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    proxy_pass http://127.0.0.1:2001/get;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 这是个正确的例子</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> /ha </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 实际请求地址 http://127.0.0.1:2000/get/ha</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 代理后的请求地址 http://127.0.0.1:2001/get/ha</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:2001;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	error_page </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> /404.html </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F:/test-test-test/example_0820/html/404;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">404.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11),p=[t];function h(k,e,r,E,d,g){return a(),i("div",null,p)}const o=s(l,[["render",h]]);export{y as __pageData,o as default};
