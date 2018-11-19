import navigate from './navigate'
import 'simple-vue-tree'
import 'simple-vue-tree/dist/lib/simple-tree.css'

export default {
  install: function (Vue, opts = {}) {
    Vue.directive('navigate', navigate)
  },
  navigate
}