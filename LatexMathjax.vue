<template>
  <!-- for learnable -->
  <span ref="mathJaxEl" class="latex-mathjax--span"></span>
</template>
<script>
export default {
  name: 'LatexMathjax', // string
  props: {
    content: {
      type: String,
      required: false,
      default: function () {
        return ''
      }
    }
  }, // propsData
  data() {
    return {
      regex: '/\\&/g'
    }
  },
  computed: {
    comContent() {
      return this.content.replace(this.regex, '&').replace(/\\textcircled/g, '\\enclose{circle}')
    }
  }, // { [key: string]: Function | { get: Function, set: Function } }
  watch: {
    comContent: {
      handler: function (newValue, oldValue) {
        this.$nextTick(() => {
          this.$refs.mathJaxEl.textContent = ` $$${this.comContent}$$`
          MathJax.typesetPromise([this.$refs.mathJaxEl])
        })
        // MathJax.typesetClear([$node])
      },
      immediate: true
    }
  }, // { [key: string]: string | Function | Object | Array }
  methods: {}// { [key: string]: Function }
}
</script>
