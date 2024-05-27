import{_ as e,c as a,o as s,a1 as t}from"./chunks/framework.DSzkhk7e.js";const g=JSON.parse('{"title":"基于脚手架搭建 Vue 的多种方式","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/create-vue.md","filePath":"vue2/create-vue.md","lastUpdated":1716447218000}'),p={name:"vue2/create-vue.md"},n=t(`<h1 id="基于脚手架搭建-vue-的多种方式" tabindex="-1">基于脚手架搭建 Vue 的多种方式 <a class="header-anchor" href="#基于脚手架搭建-vue-的多种方式" aria-label="Permalink to &quot;基于脚手架搭建 Vue 的多种方式&quot;">​</a></h1><p><code>vue-cli</code> 基于 <code>webpack</code>，而 <code>create-vue</code> 基于 <code>vite</code> ，若需要基于 <code>vite</code> 创建 <code>vue2.x</code> 的项目推荐使用 <code>create-vue</code></p><h2 id="create-vue" tabindex="-1">create-vue <a class="header-anchor" href="#create-vue" aria-label="Permalink to &quot;create-vue&quot;">​</a></h2><p><a href="https://github.com/vuejs/create-vue" target="_blank" rel="noreferrer">官网链接</a></p><p>创建基于 <code>vite</code> 的 <code>vue</code> 项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm create vue@3</span></span></code></pre></div><p>或者使用下面命令创建基于 <code>vue2.x</code> 的项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm create vue@2</span></span></code></pre></div><h2 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;vite&quot;">​</a></h2><p><a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noreferrer">官网链接</a></p><p>使用 NPM:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm create vite@latest</span></span></code></pre></div><p>使用 PNPM:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm create vite</span></span></code></pre></div><p>使用 <code>pnpm</code> 创建 <code>vue3 + ts</code> 的项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm create vite my-vue-app --template vue</span></span></code></pre></div><h2 id="vue-cli" tabindex="-1">vue-cli <a class="header-anchor" href="#vue-cli" aria-label="Permalink to &quot;vue-cli&quot;">​</a></h2><p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">官网链接</a></p><p>安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g @vue/cli</span></span>
<span class="line"><span># OR</span></span>
<span class="line"><span>yarn global add @vue/cli</span></span></code></pre></div><p>创建一个项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vue create my-project</span></span>
<span class="line"><span># OR</span></span>
<span class="line"><span>vue ui</span></span></code></pre></div>`,22),c=[n];function i(o,l,d,r,u,h){return s(),a("div",null,c)}const b=e(p,[["render",i]]);export{g as __pageData,b as default};
