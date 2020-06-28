<template>
    <div>
        <h4>list</h4>
        <table>
            <tbody>
                <tr v-for="(item) in list" :key="item.id">
                    <td>
                        <img width="80" :src="item.imgSrc" alt="">
                    </td>
                    <td>
                        {{ item.name }}
                    </td>
                    <td>
                        ￥{{ item.price }}
                    </td>
                    <td>
                        <button @click="addShop(item)">加入购物车</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        addShop(item) {
            // 调用同步方法，同步仓库中的state中的shopList
            this.$store.commit("addShop",item)

            // 跳转
            this.$router.push("/shop")
        }
    },
    computed:{
        list() {
            return this.$store.state.list
        }
    }
};
</script>

<style scoped>
    table{
        width:80%;
        margin: 0 auto;
        border-collapse: collapse;
    }
    td{
        
        border: 1px solid #ddd;
    }
</style>
