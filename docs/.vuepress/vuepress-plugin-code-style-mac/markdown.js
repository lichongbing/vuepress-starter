import Vue from 'vue'
import code from './code'


export default {
    updated() {
        setTimeout(() => {
            document.querySelectorAll('div[class*="language-"] pre').forEach(el => {
                if (el.classList.contains('code-copy-added')) return
                let ComponentClass = Vue.extend(code)
                let instance = new ComponentClass()
                instance.code = el.innerText
                instance.$mount()
                el.classList.add('code-copy-added')
                el.appendChild(instance.$el)
            })
        }, 100)
    }

}
