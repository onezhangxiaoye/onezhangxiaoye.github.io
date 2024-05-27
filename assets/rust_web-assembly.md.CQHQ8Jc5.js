import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.DSzkhk7e.js";const g=JSON.parse('{"title":"WebAssembly尝鲜","description":"","frontmatter":{},"headers":[],"relativePath":"rust/web-assembly.md","filePath":"rust/web-assembly.md","lastUpdated":1716447218000}'),p={name:"rust/web-assembly.md"},l=n(`<h1 id="webassembly尝鲜" tabindex="-1">WebAssembly尝鲜 <a class="header-anchor" href="#webassembly尝鲜" aria-label="Permalink to &quot;WebAssembly尝鲜&quot;">​</a></h1><ul><li><a href="https://juejin.cn/post/7156250334082367496" target="_blank" rel="noreferrer">rust安装教程及第一个 WebAssembly Demo</a></li></ul><h2 id="通过模板创建第一个-wasm-程序" tabindex="-1">通过模板创建第一个 wasm 程序 <a class="header-anchor" href="#通过模板创建第一个-wasm-程序" aria-label="Permalink to &quot;通过模板创建第一个 wasm 程序&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cargo generate --git https://github.com/rustwasm/wasm-pack-template.git</span></span>
<span class="line"><span># 或者使用</span></span>
<span class="line"><span>cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-project</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\adminc\\Desktop\\123&gt;cargo generate --git https://github.com/rustwasm/wasm-pack-template</span></span>
<span class="line"><span> Project Name: first-wasm # 输入后会提示填写项目名称</span></span>
<span class="line"><span> Destination: C:\\Users\\adminc\\Desktop\\123\\wasm2 ...</span></span>
<span class="line"><span> project-name: first-wasm ...</span></span>
<span class="line"><span> Generating template ...</span></span>
<span class="line"><span>[ 1/12]   Done: .appveyor.yml</span></span>
<span class="line"><span>[ 2/12]   Done: .gitignore</span></span>
<span class="line"><span>[ 3/12]   Done: .travis.yml</span></span>
<span class="line"><span>[ 4/12]   Done: Cargo.toml</span></span>
<span class="line"><span>[ 5/12]   Done: LICENSE_APACHE</span></span>
<span class="line"><span>[ 6/12]   Done: LICENSE_MIT</span></span>
<span class="line"><span>[ 7/12]   Done: README.md</span></span>
<span class="line"><span>[ 8/12]   Done: src\\lib.rs</span></span>
<span class="line"><span>[ 9/12]   Done: src\\utils.rs</span></span>
<span class="line"><span>[10/12]   Done: src</span></span>
<span class="line"><span>[11/12]   Done: tests\\web.rs</span></span>
<span class="line"><span>[12/12]   Done: tests</span></span>
<span class="line"><span>Moving generated files into: \`C:\\Users\\adminc\\Desktop\\123\\wasm2\`...</span></span>
<span class="line"><span> Initializing a fresh Git repository</span></span>
<span class="line"><span> Done! New project created C:\\Users\\adminc\\Desktop\\123\\wasm2</span></span></code></pre></div><h3 id="lib-rs" tabindex="-1">lib.rs <a class="header-anchor" href="#lib-rs" aria-label="Permalink to &quot;lib.rs&quot;">​</a></h3><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mod</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> utils</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wasm_bindgen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prelude</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// When the \`wee_alloc\` feature is enabled, use \`wee_alloc\` as the global</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// allocator.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[cfg(feature </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;wee_alloc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[global_allocator]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ALLOC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wee_alloc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WeeAlloc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wee_alloc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WeeAlloc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">INIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[wasm_bindgen]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[wasm_bindgen]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, first-wasm!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="构建-web-使用的-wasm" tabindex="-1">构建 web 使用的 wasm <a class="header-anchor" href="#构建-web-使用的-wasm" aria-label="Permalink to &quot;构建 web 使用的 wasm&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 构建 web 可以直接使用的包</span></span>
<span class="line"><span>wasm-pack build -t web</span></span></code></pre></div><p>构建后包被输出到了 <code>pkg</code> 文件夹下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- pkg</span></span>
<span class="line"><span>    - .gitignore</span></span>
<span class="line"><span>    - first_wasm.d.ts</span></span>
<span class="line"><span>    - first_wasm.js</span></span>
<span class="line"><span>    - first_wasm_bg.wasm</span></span>
<span class="line"><span>    - first_wasm_bg.wasm.d.ts</span></span>
<span class="line"><span>    - package.json</span></span>
<span class="line"><span>    - README.md</span></span></code></pre></div><h3 id="在-pkg-下新建-index-html-测试" tabindex="-1">在 pkg 下新建 index.html 测试 <a class="header-anchor" href="#在-pkg-下新建-index-html-测试" aria-label="Permalink to &quot;在 pkg 下新建 index.html 测试&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IE=edge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Document&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> init, {greet} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./first_wasm.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    doit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>打开网页会在页面上弹出 <code>Hello, first-wasm!</code></p><h3 id="build-配置" tabindex="-1">build 配置 <a class="header-anchor" href="#build-配置" aria-label="Permalink to &quot;build 配置&quot;">​</a></h3><ul><li>直接使用 <code>wasm-pack build</code> 进行构建，等同于 <code>wasm-pack build -t bundler</code> 他用来发布到 <code>npm</code> 然后使用</li><li>使用 <code>wasm-pack build -t web</code> 构建可以直接在在网页中使用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\adminc\\Desktop\\123\\wasm2&gt;wasm-pack build --help</span></span>
<span class="line"><span>wasm-pack-build 0.10.3</span></span>
<span class="line"><span>🏗️  build your npm package!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>USAGE:</span></span>
<span class="line"><span>    wasm-pack build [FLAGS] [OPTIONS] [ARGS]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FLAGS:</span></span>
<span class="line"><span>        --debug            Deprecated. Renamed to \`--dev\`</span></span>
<span class="line"><span>        --dev              Create a development build. Enable debug info, and disable optimizations</span></span>
<span class="line"><span>        --no-typescript    By default a *.d.ts file is generated for the generated JS file, but this flag will disable</span></span>
<span class="line"><span>                           generating this TypeScript file</span></span>
<span class="line"><span>    -h, --help             Prints help information</span></span>
<span class="line"><span>        --profiling        Create a profiling build. Enable optimizations and debug info</span></span>
<span class="line"><span>        --release          Create a release build. Enable optimizations and disable debug info</span></span>
<span class="line"><span>    -V, --version          Prints version information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OPTIONS:</span></span>
<span class="line"><span>    -m, --mode &lt;mode&gt;            Sets steps to be run. [possible values: no-install, normal, force] [default: normal]</span></span>
<span class="line"><span>    -d, --out-dir &lt;out-dir&gt;      Sets the output directory with a relative path [default: pkg]</span></span>
<span class="line"><span>        --out-name &lt;out-name&gt;    Sets the output file names. Defaults to package name</span></span>
<span class="line"><span>    -s, --scope &lt;scope&gt;          The npm scope to use in package.json, if any</span></span>
<span class="line"><span>    -t, --target &lt;target&gt;        Sets the target environment. [possible values: bundler, nodejs, web, no-modules]</span></span>
<span class="line"><span>                                 [default: bundler]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ARGS:</span></span>
<span class="line"><span>    &lt;path&gt;                The path to the Rust crate. If not set, searches up the path from the current directory</span></span>
<span class="line"><span>    &lt;extra-options&gt;...    List of extra options to pass to \`cargo build\`</span></span></code></pre></div>`,17),t=[l];function e(h,k,r,d,E,c){return i(),a("div",null,t)}const y=s(p,[["render",e]]);export{g as __pageData,y as default};
