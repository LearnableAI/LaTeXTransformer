<template>
  <!-- for learnable -->
  <span>
    <span ref="mathJaxEl" class="latex-math-jax--span"></span>
  </span>
</template>
<script>
import MATH_LIST from './math-list'
import MATH_JAX_TEX_MACROS from './math-jax-tex-macros'
export default {
  name: 'LatexMathJax', // string
  props: {
    content: {
      type: String,
      required: false,
      default: function () {
        return ''
      }
    }
  }, // propsData
  computed: {
    comContent() {
      let content = this.content
      content = content.replace(/\\textcircled/g, '\\enclose{circle}')
      content = content.replace(/<unk>/g, '')
      return `$${(this.trans(window.__L_MathJax.mathList, 0, content))}$ `
    },
  }, // { [key: string]: Function | { get: Function, set: Function } }
  watch: {
    comContent: {
      handler: function (newValue, oldValue) {
        this.$nextTick(() => {
          this.$refs.mathJaxEl.textContent = this.comContent
          if (window.__L_MathJax.ready === false) {
            return
          }
          window.__L_MathJax.ready = false // readied
          new Promise((resolve, reject) => {
            resolve()
          }).then(
            () => {
              MathJax.typesetPromise(document.querySelectorAll('.latex-math-jax--span')).then(
                () => {
                  window.__L_MathJax.ready = true
                }
              )
            }
          )
        })
      },
      immediate: true
    },
  }, // { [key: string]: string | Function | Object | Array }
  beforeCreate() {
    if (window.__L_MathJax) {
      return
    }
    window.__L_MathJax = {
      ready: false,
      inited: false,
      mathList: []
    }
    let newMathList = Array.from(new Set(MATH_LIST))
      .filter((item) => {
        return item.indexOf('\\') > -1
      })
      .sort((a, b) => {
        return b.length - a.length;
      })
    window.__L_MathJax.mathList = newMathList
  },
  created() {
    if (window.__L_MathJax && window.__L_MathJax.inited) {
      return
    }
    window.__L_MathJax.inited = true
    this.initMathJax()
    this.initScript()
  },
  methods: {
    initMathJax() {
      window.MathJax = {
        loader: { load: ['[tex]/enclose'] },
        startup: {
          pageReady: () => {
            MathJax.typesetPromise(document.querySelectorAll('.latex-math-jax--span')).then(
              () => {
                window.__L_MathJax.ready = true
              }
            )
          },
        },
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          packages: { '[+]': ['enclose'] },
          macros: MATH_JAX_TEX_MACROS
        }
      }
    },
    initScript() {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
      document.body.appendChild(s)
    },
    trans(mathList, i, content) {
      if (i === mathList.length) {
        return content
      }
      let res = ''
      let newContentArr = content.split(mathList[i])
      let transList = newContentArr.map((item) => {
        return this.trans(mathList, i + 1, item)
      });
      res = transList.join(mathList[i] + ' ')
      return res;
    }
  }// { [key: string]: Function }
}

</script>
<style lang="scss" scoped>
</style>
