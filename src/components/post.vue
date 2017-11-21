<template>
    <div>test</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import store from '@/store'

export default {
    name: "post",

    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['timeline'])
    },

    created() {
    },


    methods: {
        
    },

    watch: {
    },
};
</script>