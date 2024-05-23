import{_ as e,o as a,c as r,a as c}from"./app.b90595f9.js";const g=JSON.parse('{"title":"v8垃圾回收机制","description":"","frontmatter":{},"headers":[{"level":2,"title":"v8介绍","slug":"v8介绍","link":"#v8介绍","children":[]},{"level":2,"title":"v8垃圾回收的限制","slug":"v8垃圾回收的限制","link":"#v8垃圾回收的限制","children":[]},{"level":2,"title":"全停顿 - Stop The World","slug":"全停顿-stop-the-world","link":"#全停顿-stop-the-world","children":[]},{"level":2,"title":"对象的可达性","slug":"对象的可达性","link":"#对象的可达性","children":[]},{"level":2,"title":"新生代垃圾回收器 - Scavenge","slug":"新生代垃圾回收器-scavenge","link":"#新生代垃圾回收器-scavenge","children":[]},{"level":2,"title":"新生对象晋升","slug":"新生对象晋升","link":"#新生对象晋升","children":[]},{"level":2,"title":"老生代垃圾回收 - Mark-Sweep & Mark-Compact","slug":"老生代垃圾回收-mark-sweep-mark-compact","link":"#老生代垃圾回收-mark-sweep-mark-compact","children":[]},{"level":2,"title":"增量标记 - Incremental Marking","slug":"增量标记-incremental-marking","link":"#增量标记-incremental-marking","children":[]},{"level":2,"title":"延迟清理 - lazy sweeping","slug":"延迟清理-lazy-sweeping","link":"#延迟清理-lazy-sweeping","children":[]}],"relativePath":"browser/gc.md","lastUpdated":1716447218000}'),l={name:"browser/gc.md"},i=c('<h1 id="v8垃圾回收机制" tabindex="-1">v8垃圾回收机制 <a class="header-anchor" href="#v8垃圾回收机制" aria-hidden="true">#</a></h1><p><a href="https://zhuanlan.zhihu.com/p/259579683" target="_blank" rel="noreferrer">参照1</a></p><p><a href="https://www.jianshu.com/p/b8ed21e8a4fb" target="_blank" rel="noreferrer">参照2</a></p><h2 id="v8介绍" tabindex="-1">v8介绍 <a class="header-anchor" href="#v8介绍" aria-hidden="true">#</a></h2><p>V8 名称叫 Chrome V8，是由谷歌开源的一个高性能 JavaScript 引擎。该引擎采用 C++ 编写，Google Chrome 浏览器用的就是这个引擎。V8 可以单独运行，也可以嵌入 C++ 应用当中。和其他的 JavaScript 引擎一样，V8 会编译、执行 JavaScript 代码，并一样会管理内存、垃圾回收等。就是因为 V8 的高性能以及跨平台等特性，所以它也是 Node.js 的 JavaScript 引擎</p><h2 id="v8垃圾回收的限制" tabindex="-1">v8垃圾回收的限制 <a class="header-anchor" href="#v8垃圾回收的限制" aria-hidden="true">#</a></h2><ul><li>由于 v8 的单线程机制，在垃圾回收时会暂停 JavaScript 线程，所以过大的内存会导致垃圾回收时间过长 会让用户感觉到明显的卡顿</li></ul><h2 id="全停顿-stop-the-world" tabindex="-1">全停顿 - Stop The World <a class="header-anchor" href="#全停顿-stop-the-world" aria-hidden="true">#</a></h2><p>垃圾回收算法执行之前，需要将其他任务全部暂停，等待垃圾回收执行完成后，再接着执行；全停顿是为了解决应用逻辑与垃圾回收器看到的情况不一致的问题</p><h2 id="对象的可达性" tabindex="-1">对象的可达性 <a class="header-anchor" href="#对象的可达性" aria-hidden="true">#</a></h2><p>从初始的根对象（window/gloall）开始，向下递归的搜索子对象，能被搜索到的对象将会被添加上标记，不能被搜索到的对象将会被回收</p><h2 id="新生代垃圾回收器-scavenge" tabindex="-1">新生代垃圾回收器 - Scavenge <a class="header-anchor" href="#新生代垃圾回收器-scavenge" aria-hidden="true">#</a></h2><p><code>Scavange</code> 算法将新生代堆分为两部分，分别叫 <code>from-space</code> 和 <code>to-space</code>。进行垃圾回收时，将 <code>from-space</code> 中活动的对象复制到 <code>to-space</code> 中，并进行整理，然后释放 <code>from-space</code> 中的内存，完成之后将 <code>from-space</code> 和 <code>to-space</code> 进行互换</p><h2 id="新生对象晋升" tabindex="-1">新生对象晋升 <a class="header-anchor" href="#新生对象晋升" aria-hidden="true">#</a></h2><ol><li>检查对象是否经理过一次 <code>Scavenge</code> 回收</li><li><code>to-space</code> 使用超过 <code>25%</code></li></ol><h2 id="老生代垃圾回收-mark-sweep-mark-compact" tabindex="-1">老生代垃圾回收 - Mark-Sweep &amp; Mark-Compact <a class="header-anchor" href="#老生代垃圾回收-mark-sweep-mark-compact" aria-hidden="true">#</a></h2><ul><li><code>Mark-Sweep</code> 标记清除：1、扫描老生代，标记活动对象；2、回收未标记的对象</li><li><code>Mark-Compact</code> 标记整理：1、扫描老生代，标记活动对象，将活动对象移动到一边；回收另外一边的对象</li></ul><p>由于 Mark-Compact 需要移动对象，所以执行速度上，比 Mark-Sweep 要慢。所以，V8 主要使用 Mark-Sweep 算法，然后在当空间内存分配不足时，采用 Mark-Compact 算法</p><h2 id="增量标记-incremental-marking" tabindex="-1">增量标记 - Incremental Marking <a class="header-anchor" href="#增量标记-incremental-marking" aria-hidden="true">#</a></h2><p>为了减少全停顿的影响，v8 把整个标记阶段拆分为多次进行，中途穿插 js 代码的执行，从而减少对 js线程 的影响</p><h2 id="延迟清理-lazy-sweeping" tabindex="-1">延迟清理 - lazy sweeping <a class="header-anchor" href="#延迟清理-lazy-sweeping" aria-hidden="true">#</a></h2><p>增量标记后，在内存足够的情况下允许垃圾回收延迟进行</p>',22),t=[i];function d(n,o,h,s,p,m){return a(),r("div",null,t)}const k=e(l,[["render",d]]);export{g as __pageData,k as default};
