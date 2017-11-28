<template>
    <div class="g-index">
        <div v-if="isLogin">
            <img :src="userInfo.profile_image_url">
            <p>{{ userInfo.name }}</p>

            <CPost></CPost>
            
            <CTimeline></CTimeline>
        </div>
        <div v-else>
            <router-link to="/login">登录</router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import CTimeline from '@/components/timeline.vue';
import CPost from '@/components/post.vue';

export default {
    name: "index",

    data() {
        return {
        }
    },

    computed: {
        ...mapGetters(['isLogin', 'userInfo'])
    },

    components: {
        CTimeline,
        CPost,
    }
};
</script>