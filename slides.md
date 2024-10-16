---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: bg.jpeg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## 个人简介
   - author: 代文文
   - email: foliage@gmail.com
   - github: https://github.com/Dai-ww
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---

# Welcome to My World

<!-- 使用 基于Web的幻灯片制作和演示工具Slidev 制作 -->

Read more about [Slidev](https://sli.dev/guide/why)

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
   按 space 或 左右箭头键 查看幻灯片 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/Dai-ww/Personal-info/tree/main/personal%20slide" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: image-right
image: /w.jpeg
---

# Basic personal information

<br>

- 📝 **Name** - 代文文
- 🎨 **Age** - 24
- 🎥 **Email** - daiwenwena@foxmail.com
- 📤 **phone** - 15672405257
- 🛠 **workExperience** - three years

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# About me

<p class='text-gray-600 font-thin text-sm '>Graduated from the Internet of Things Engineering major at Zhixing College, Hubei University</p>

- 🎨 I’m interested in JavaScript
- 🌱 Currently learning in REACT
- 🧑‍💻 I’m looking to collaborate on WuHan

---

# Languages and Tools

<br>

<v-clicks>
  <div>
  💻&nbsp;
    <img src="https://img.shields.io/badge/-Vue-333333?style=flat&logo=Vue.js&logoColor=007396" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-React-333333?style=flat&logo=React&logoColor=00599C" class="m-1 h-5 inline-block" />
  </div>

  <div>
  🌐&nbsp;
    <img src="https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=JavaScript" class="m-1 h-5 inline-block" />
  </div>

  <div>
  🛢 &nbsp;
    <img src="https://img.shields.io/badge/-AntDesign-333333?style=flat&logo=ant-design&logoColor=1572B6" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-ElementPlus-333333?style=flat&logo=element-plus" class="m-1 h-5 inline-block" />
  </div>

  <div>
  ⚙️ &nbsp;
    <img src="https://img.shields.io/badge/-Git-333333?style=flat&logo=git" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-Markdown-333333?style=flat&logo=markdown" class="m-1 h-5 inline-block" />
  </div>

  <div>
  🔧 &nbsp;
    <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC" class="m-1 h-5 inline-block" />
    <img src="https://img.shields.io/badge/-微信开发者工具-333333?style=flat&logo=wechat&logoColor=1479f3" class="m-1 h-5 inline-block" />
  </div>

</v-clicks>

---

# Self evaluation


<div class="bg-slate-200 w-3/4 p-4 rounded-md slidev-vclick-target slidev-vclick-current mt-10">
  <li>I am optimistic, sincere, adaptable and have good team spirit</li>
  <li> 3 years of experience in web development. I think I have reached the level of a junior engineer. I hope to grow into an architect in the future</li>
  <li> Will actively refactor code, code cleanliness</li>
  <li> Love technical books, recently looking at graphic http, css secrets, etc</li>
</div>

<div class="absolute top-0 right-0 w-60 mt-6">
  <div class="w-60 relative mt-2">
    <div class="relative w-40 h-40">
      <img
        v-motion
        :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
        :enter="final"
        class="absolute top-0 left-0 right-0 bottom-0"
        src="https://sli.dev/logo-square.png"
      />
      <img
        v-motion
        :initial="{ y: 500, x: -100, scale: 2 }"
        :enter="final"
        class="absolute top-0 left-0 right-0 bottom-0"
        src="https://sli.dev/logo-circle.png"
      />
      <img
        v-motion
        :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
        :enter="final"
        class="absolute top-0 left-0 right-0 bottom-0"
        src="https://sli.dev/logo-triangle.png"
      />
    </div>
  </div>
</div>
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">
</div>

---
download: true
---

# Thanks for watching

<br>

- 🍀 愿目光所及，皆是好运。
- 💞 愿一切尽意，百事从欢。
- 🤩 平安喜乐，来日方长。
- 🍺 祝我们 有数不尽的笑意和浪漫。
