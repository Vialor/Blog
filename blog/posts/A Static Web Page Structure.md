---
title: 'A Static Web Page Structure'
date: '2020-05-27'
---

# A Static Web Page Structure

index.html

otherhtmlpage.html

js/

css/

assets/



### Details

#### css/

##### index.css/otherhtmlpage.css

specifc css file for each page

`@import common.css`



##### common.css

change default css (like h1, footer, input, a and etc)

```css
@import 'global-var.css';
@import 'component.css';
/* @import 'normalize.css' */
@media only screen and (min-width:600px){ /* responsive layout */
  /* css code */
} 
```


##### global-var.css

Global variables

```css
:root{
  --some-global-var: value;
}
```



##### component.css

common components like navbar, sidebar...



#### assets/

img/

pdf/

...