<!--
  - name: code
  - description: add
  - author: lichongbing
  - date:  2022/4/9 8:11 下午
  - version: 1.0
  -->
<template>
  <div class="detail-content">
    <span class="code-copy-btn" @click="copyToClipboard">{{ buttonText }}</span>
    <div class="article-content" v-html="markdownHtml"></div>
  </div>
</template>

<script>
import hljs from './highlight.js/lib/highlight'
import javascript from './highlight.js/lib/languages/javascript'
import MarkdownIt from 'markdown-it'
import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor'

hljs.registerLanguage('javascript', javascript)
let md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>'
      } catch (__) {
      }
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
export default {
  data() {
    return {
      buttonText: copybuttonText,
      markdownHtml: '',
    }
  },
  mounted() {
    this.getMarkdownHtml()
  },
  methods: {
    getMarkdownHtml() {
      let res
      res = md.use(markdownItTocAndAnchor).render(this.code)
      this.$nextTick(() => {
        this.markdownHtml = res
      })
    },
    copyToClipboard(el) {
      this.setClipboard(this.code, this.setText);
    },
    setClipboard(code, cb) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(
            cb,
            () => {
            }
        )
      } else {
        let copyelement = document.createElement('textarea')
        document.body.appendChild(copyelement)
        copyelement.value = code
        copyelement.select()
        document.execCommand('Copy')
        copyelement.remove()
        cb()
      }
    },
    setText() {
      this.buttonText = copiedButtonText

      setTimeout(() => {
        this.buttonText = copybuttonText
      }, 1000)
    }
  }

}
</script>

<style>

.code-copy-btn {
  position: absolute;
  bottom: 10px;
  right: 7.5px;
  opacity: 0.75;
  cursor: pointer;
  font-size: 14px;
}

.code-copy-btn:hover {
  opacity: 1;
}
</style>
