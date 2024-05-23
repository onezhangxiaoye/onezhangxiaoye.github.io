import{_ as a,o as s,c as n,a as e}from"./app.b90595f9.js";const h=JSON.parse('{"title":"win10安装rust","description":"","frontmatter":{},"headers":[{"level":2,"title":"记录一点问题","slug":"记录一点问题","link":"#记录一点问题","children":[{"level":3,"title":"wasm-pack 安装出现的问题","slug":"wasm-pack-安装出现的问题","link":"#wasm-pack-安装出现的问题","children":[]},{"level":3,"title":"cargo-generate 的安装","slug":"cargo-generate-的安装","link":"#cargo-generate-的安装","children":[]}]}],"relativePath":"rust/win10-install-rust.md","lastUpdated":1716447218000}'),l={name:"rust/win10-install-rust.md"},t=e(`<h1 id="win10安装rust" tabindex="-1">win10安装rust <a class="header-anchor" href="#win10安装rust" aria-hidden="true">#</a></h1><ul><li><a href="https://juejin.cn/post/7156250334082367496" target="_blank" rel="noreferrer">安装教程及第一个WebAssemblyDemo</a></li><li>win10 安装包下载 <a href="https://www.rust-lang.org/zh-CN/tools/install" target="_blank" rel="noreferrer">https://www.rust-lang.org/zh-CN/tools/install</a></li><li>安装后的路径 <code>C:\\Users\\adminc\\.cargo</code> ， 安装后可能需要手动配置 <code>path 环境变量</code></li></ul><h2 id="记录一点问题" tabindex="-1">记录一点问题 <a class="header-anchor" href="#记录一点问题" aria-hidden="true">#</a></h2><h3 id="wasm-pack-安装出现的问题" tabindex="-1">wasm-pack 安装出现的问题 <a class="header-anchor" href="#wasm-pack-安装出现的问题" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 安装编译打包工具</span></span>
<span class="line"><span style="color:#A6ACCD;">cargo install wasm-pack</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>出现了下面的报错</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">error: failed to run custom build command for \`openssl-sys v0.9.65\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Caused by:</span></span>
<span class="line"><span style="color:#A6ACCD;">  process didn&#39;t exit successfully: \`C:\\Users\\vilgo\\AppData\\Local\\Temp\\cargo-install2J8ZNz\\release\\build\\openssl-sys-932395a164949059\\build-script-main\` (exit code: 101)</span></span>
<span class="line"><span style="color:#A6ACCD;">  --- stdout</span></span>
<span class="line"><span style="color:#A6ACCD;">  cargo:rustc-cfg=const_fn</span></span>
<span class="line"><span style="color:#A6ACCD;">  cargo:rerun-if-env-changed=X86_64_PC_WINDOWS_MSVC_OPENSSL_NO_VENDOR</span></span>
<span class="line"><span style="color:#A6ACCD;">  X86_64_PC_WINDOWS_MSVC_OPENSSL_NO_VENDOR unset</span></span>
<span class="line"><span style="color:#A6ACCD;">  cargo:rerun-if-env-changed=OPENSSL_NO_VENDOR</span></span>
<span class="line"><span style="color:#A6ACCD;">  OPENSSL_NO_VENDOR unset</span></span>
<span class="line"><span style="color:#A6ACCD;">  openssl-src: Enable the assembly language routines in building OpenSSL.</span></span>
<span class="line"><span style="color:#A6ACCD;">  running &quot;perl&quot; &quot;./Configure&quot; &quot;--prefix=C:\\\\Users\\\\vilgo\\\\AppData\\\\Local\\\\Temp\\\\cargo-install2J8ZNz\\\\release\\\\build\\\\openssl-sys-a51d272dcebf1fc5\\\\out\\\\openssl-build\\\\install&quot; &quot;no-dso&quot; &quot;no-shared&quot; &quot;no-ssl3&quot; &quot;no-unit-test&quot; &quot;no-comp&quot; &quot;no-zlib&quot; &quot;no-zlib-dynamic&quot; &quot;no-md2&quot; &quot;no-rc5&quot; &quot;no-weak-ssl-ciphers&quot; &quot;no-camellia&quot; &quot;no-idea&quot; &quot;no-seed&quot; &quot;no-engine&quot; &quot;VC-WIN64A&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  --- stderr</span></span>
<span class="line"><span style="color:#A6ACCD;">  thread &#39;main&#39; panicked at &#39;called \`Result::unwrap()\` on an \`Err\` value: Os { code: 2, kind: NotFound, message: &quot;Det går inte att hitta filen.&quot; }&#39;, C:\\Users\\vilgo\\.cargo\\registry\\src\\github.com-1ecc6299db9ec823\\openssl-src-111.15.0+1.1.1k\\src\\lib.rs:469:39</span></span>
<span class="line"><span style="color:#A6ACCD;">  note: run with \`RUST_BACKTRACE=1\` environment variable to display a backtrace</span></span>
<span class="line"><span style="color:#A6ACCD;">warning: build failed, waiting for other jobs to finish...</span></span>
<span class="line"><span style="color:#A6ACCD;">error: failed to compile \`wasm-pack v0.10.0\`, intermediate artifacts can be found at \`C:\\Users\\vilgo\\AppData\\Local\\Temp\\cargo-install2J8ZNz\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Caused by:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build failed</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://stackoverflow.com/questions/68646684/cant-install-cargo-wasm-pack" target="_blank" rel="noreferrer">解决办法</a>，直接官网下载 <a href="https://rustwasm.github.io/wasm-pack/installer/#" target="_blank" rel="noreferrer">wasm-pack-init.exe</a> 进行安装</p><h3 id="cargo-generate-的安装" tabindex="-1">cargo-generate 的安装 <a class="header-anchor" href="#cargo-generate-的安装" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 安装编译打包工具</span></span>
<span class="line"><span style="color:#A6ACCD;">cargo install cargo-generate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>由于网络问题，<code>cargo-generate</code> 可能不容易安装成功，可以仓库直接下载 <a href="https://github.com/cargo-generate/cargo-generate/releases" target="_blank" rel="noreferrer">https://github.com/cargo-generate/cargo-generate/releases</a> <code>cargo-generate-v0.18.1-x86_64-pc-windows-msvc.tar.gz</code> ，解压后把 <code>cargo-generate.exe</code> 放到 <code>C:\\Users\\adminc\\.cargo\\bin</code> 下即可</p>`,11),o=[t];function r(c,p,i,u,d,g){return s(),n("div",null,o)}const A=a(l,[["render",r]]);export{h as __pageData,A as default};
