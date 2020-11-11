
# 可之科技 Mathjax 临时版本

## 详情看源码

index.html 引入 Mathjax 和 自定义Mathjax配置

``` HTML
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="./mathjax.js"></script>
```

配置CSS

``` css
    mjx-container.MathJax {
      display: inline-block !important;
    }
```


使用的地方 引入组件,注册组件,编写组件,绑定数据

``` javascript
// 引入
import LatexMathjax from './LatexMathjax'
// 注册
components: {
    LatexMathjax
  }
```

``` HTML
<!-- 编写与绑定数据 -->
<latex-mathjax :content="resultWord" />
```

MathJax | Beautiful math in all browsers. https://www.mathjax.org/
