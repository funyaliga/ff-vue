<template>
    <div>
        timeline
        <ul v-for="(v, i) in timeline" :key="v.id" class="floor">
            <li>
                <div>{{ v.text }}</div>
            </li>
        </ul>
    </div>
    
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import store from '@/store'

export default {
    name: "tiemline",

    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['timeline'])
    },

    created() {
        // 获取时间轴
        // store.dispatch('timeline', {})
    },

    methods: {
        
    },

    watch: {
        timeline(val) {
            console.log(val)
        }
    },
};
</script>