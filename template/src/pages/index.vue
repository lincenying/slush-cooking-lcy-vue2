<template>
    <div class="g-mn">
        我是首页
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
const fetchInitialData = async (store, config) => {
    console.log(config)
}
export default {
    computed: {
        ...mapGetters({
            index: 'getIndex'
        })
    },
    mounted() {
        fetchInitialData(this.$store, {page: 1})
    },
    watch: {
        '$route'() {
            fetchInitialData(this.$store, {page: 1})
        }
    }
}
</script>
