import Vue from 'vue'
import VueResource from 'vue-resource'
export default {
    getSomeData(config) {
        return Vue.resource('/api').save('', {target: 'Target', type: 'Type', ...config})
    }
}

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.options.xhr = {withCredentials: true}

Vue.http.options.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
