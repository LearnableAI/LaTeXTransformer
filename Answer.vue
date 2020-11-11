<template>
      <latex-mathjax :content="resultWord" />
</template>
<script>
import LatexMathjax from './LatexMathjax'
export default {
  components: {
    LatexMathjax
  }, // Object
  data() {
    return {
      resultWord:''
    }
  },
}
</script>