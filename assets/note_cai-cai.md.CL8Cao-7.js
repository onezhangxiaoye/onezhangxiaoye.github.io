import{_ as o,c as e,o as i,a1 as t}from"./chunks/framework.DSzkhk7e.js";const x=JSON.parse('{"title":"好记性不如烂骨头","description":"","frontmatter":{},"headers":[],"relativePath":"note/cai-cai.md","filePath":"note/cai-cai.md","lastUpdated":1716447218000}'),a={name:"note/cai-cai.md"},l=t('<h1 id="好记性不如烂骨头" tabindex="-1">好记性不如烂骨头 <a class="header-anchor" href="#好记性不如烂骨头" aria-label="Permalink to &quot;好记性不如烂骨头&quot;">​</a></h1><h2 id="日常git提交规范" tabindex="-1">日常Git提交规范 <a class="header-anchor" href="#日常git提交规范" aria-label="Permalink to &quot;日常Git提交规范&quot;">​</a></h2><p><a href="https://github.com/jiayisheji/blog/issues/12" target="_blank" rel="noreferrer">规范参照</a></p><ul><li><code>build</code>:影响构建系统或外部依赖关系的更改（示例范围：gulp, broccoli, npm）</li><li><code>ci</code>: 更改我们的配置文件和脚本（示例范围：Travis, Circle, BrowserStack, SauceLabs）</li><li><code>docs</code>: 仅文档更改，比如README, CHANGELOG, CONTRIBUTE等等</li><li><code>feat</code>: 一个新功能</li><li><code>fix</code>: 一个错误修复</li><li><code>perf</code>: 一个改进性能的代码更改，比如提升性能、体验</li><li><code>refactor</code>: 代码更改，既不修复错误也不添加功能</li><li><code>style</code>: 不改变代码逻辑，仅仅修改代码风格（空格，格式化，分号分号等）</li><li><code>test</code>: 添加缺失测试或更正现有测试（测试用例，包括单元测试、集成测试等）</li><li><code>revert</code>: 回滚到某一个版本（带上版本号）</li></ul><h2 id="win10" tabindex="-1">win10 <a class="header-anchor" href="#win10" aria-label="Permalink to &quot;win10&quot;">​</a></h2><ul><li><code>netstat -aon|findstr “8080”</code> 查找端口号</li><li><code>tasklist|findstr 2524</code> 查找端口对应进程</li><li><code>gc -wait -encoding utf8 -tail 3 .\\logs\\main-test.log</code> <code>windows</code> 下实时查看日志</li></ul><h2 id="git-proxy" tabindex="-1">git proxy <a class="header-anchor" href="#git-proxy" aria-label="Permalink to &quot;git proxy&quot;">​</a></h2><h4 id="http-proxy" tabindex="-1">http proxy <a class="header-anchor" href="#http-proxy" aria-label="Permalink to &quot;http proxy&quot;">​</a></h4><ul><li><code>git config --global https.proxy http://127.0.0.1:10800</code></li><li><code>git config --global https.proxy https://127.0.0.1:10800</code></li></ul><h4 id="socks5-proxy" tabindex="-1">socks5 proxy <a class="header-anchor" href="#socks5-proxy" aria-label="Permalink to &quot;socks5 proxy&quot;">​</a></h4><ul><li><code>git config --global http.proxy socks5://127.0.0.1:10800</code></li><li><code>git config --global https.proxy socks5://127.0.0.1:10800</code></li></ul><h4 id="查看-proxy" tabindex="-1">查看 proxy <a class="header-anchor" href="#查看-proxy" aria-label="Permalink to &quot;查看 proxy&quot;">​</a></h4><ul><li><code>git config --global --get http.proxy</code></li><li><code>git config --global --get https.proxy</code></li></ul><h4 id="取消-proxy" tabindex="-1">取消 proxy <a class="header-anchor" href="#取消-proxy" aria-label="Permalink to &quot;取消 proxy&quot;">​</a></h4><ul><li><code>git config --global --unset http.proxy</code></li><li><code>git config --global --unset https.proxy</code></li></ul>',15),c=[l];function r(d,s,n,h,p,g){return i(),e("div",null,c)}const f=o(a,[["render",r]]);export{x as __pageData,f as default};
