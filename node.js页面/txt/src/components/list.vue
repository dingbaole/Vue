<template>
    <div>
        <h4>列表</h4>
        <ul class="navlist">
            <li v-for="(item,index) in nav" :key="index" @click="navclass(index,item.type)" :class="index==$store.state.navIndex?'nav':''">
                {{ item.name }}
            </li>
        </ul>
        <ul class="list">
            <li v-for="(item) in list" :key="item.id">
                <p>{{ item.reply_count }}/{{ item.visit_count }}</p>
                <p> {{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data() {
        return {

        };
    },
    created() {
        this.$store.dispatch("shuaxin")
    },
    mounted() {
    },
    methods: {
        navclass(index,type){
            console.log(index,type)
            this.$store.dispatch("shuju",{index,type})
        }
    },
    computed:{
        ...mapState([ "nav","list","navIndex" ]),
        
    }
};
</script>

<style scoped>
    .navlist{
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 20px;
    }
    .navlist li{
        padding: 5px 10px;
        margin-left: 20px;
    }
    .nav{
        background: #80bd01;
        color: white;
        border-radius: 15px;
    }
    img{
        width: 20px;
        height: 20px;
    }
    .list{
        list-style: none;
    }
    .list li{
        display: flex;
    }
    .list li p{
        margin-right: 20px;
    }
</style>
