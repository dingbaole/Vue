<template>
    <div>
        <h5>列表</h5>
        <table>
            <tbody>
                <tr v-for="(item) in list" :key="item.id">
                    <td><img :src="item.img" alt=""></td>
                    <td>名称：{{ item.name }}</td>
                    <td>价格：{{ item.price }}</td>
                    <td><button @click="shop(item)">加入购物车</button></td>
                </tr>
            </tbody>
        </table>
        <loding v-if="$store.state.loading"></loding>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import loding from '../components/loding'
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {
        this.$store.dispatch("ajaxlist")
    },
    methods: {
        shop(item){
            this.$store.commit("push",item)
            this.$router.push('/shop')
        }
    },
    computed:{
        ...mapState(["list"])
    },
    components:{
        loding
    }
};
</script>

<style scoped>
    table{
        margin: 0 auto;
    }
</style>
