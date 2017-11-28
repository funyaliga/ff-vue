<template>
    <form @submit.prevent="submit">
        <textarea v-model="forms.status"></textarea>
        <button>提交</button>
    </form>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import store from '@/store'

export default {
    name: "post",

    data() {
        return {
            forms: {
                status: ''
            }
        }
    },
    computed: {
        ...mapGetters(['timeline'])
    },

    created() {
    },


    methods: {
        ...mapActions(['post']),
        submit() {
            this.post(this.forms)
        }
    },

    watch: {
    },
};
</script>