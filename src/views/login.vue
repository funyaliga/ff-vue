<template>
    <div id="app">
    <form @submit.prevent="submit">
        <div class="field">
            账户<input type="text" v-model="forms.username">
        </div>
        
        <div class="field">
            密码：<input type="text" v-model="forms.password">
        </div>
        
        <button type="submit">提交</button>
    </form>
</div>
</template>


<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: "login",

    data() {
        return {
            forms: {
                username: 'ping88914@hotmail.com',
                password: 'fanpyadizleron9',
            }
        }
    },

    computed: {
        ...mapGetters(['isLogin'])
    },

    created() {
        this.isLogin && this.$router.push('/')
    },

    // 方法
    methods: {
        ...mapActions(['login']),
        
        goHome() {
            this.$router.replace('/')
        },
        submit() {
            this.login(this.forms)
        },
    },

    watch: {
        isLogin(val) {
            if (val) {
                this.$router.push('/')
            }
        }
    },
};
</script>