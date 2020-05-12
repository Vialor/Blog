---
title: 'CSS'
date: '2020-05-11'
---

- Core Topics

  - Selector and Pseudo-Selector

  - Display: block, inline-block, inline, none

    Inline: cannot change vertical layout

    block, inline-block: can change vertical layout

    ---

    block: put next element below itself

    Inline, inline-block: put next element next to itself

  - Box Model: **Content=>Padding=>Border**(=>Outline)=>Margin

    margin/padding: a (top right bottom left)

    ​                               a b (top bottom) (right left)

    ​                               a b c (top) (right left) (bottom)

    ​                               a b c d (top) (right) (left) (bottom)

    Margin Collapse

    box-sizing: content-box/border-box;

  - Position: static, absolute, relative, fixed, sticky

  - Size: 

    - px: absolute (be careful of the line-height)
    - em: relative to parent container
    - rem: relative to root container
    - vw: relative to viewport width
    - vh: relative to viewport height
    - vmin: relative to min(viewport.width, viewport.height)
    - vmax: relative to max(viewport.width, viewport.height)

  - Float: (Don't use it unless you want text-around-image effect)

    - .floating-content::after{content:''; clear: both; display: cblock}
    - BFC method: .floating-content{overflow: hidden/auto}

  - Flexbox

  - Grid

  - SVG

  - Transition

---

* Techniques
  * Center
    - Horizontal
      - Inline/inline-block: text-align: center
      - block: margin-left, margin-right: auto
    - Vertical
      - position: absolute; top: 50%; left: 50%; transform: translateX(50%) translateY(50%);
      - flex justfy-content/align-items: center;



Strongly recommend Youtuber "Coding Startup"  if you can understand Mandarin/Cantonese. This guy saved my life.



***

* Resources & Tools

  https://cssgr.id/ grid generator

  https://www.cssfilters.co/ CSS filter generator

  https://flatuicolors.com/ palette design

  http://zhongguose.com/ Chinese colors

  https://www.sj520.cn/tools/jianbian/ gradient design

  https://daneden.github.io/animate.css/ animate.css