<template>
    <div>
        timeline
        <ul v-for="(v, i) in timeline" :key="v.id" class="floor">
            <li>
                <a>{{ v.user.name }}</a>
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
        store.dispatch('timeline', {})
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