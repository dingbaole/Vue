import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    // 数据
    state: {
        nav: [
            {
                name: "全部",
                type: "all"
            },
            {
                name: "精华",
                type: "good"
            },
            {
                name: "分享",
                type: "share"
            },
            {
                name: "问答",
                type: "ask"
            },
            {
                name: "招聘",
                type: "job"
            },
        ],
        list:[],
        navIndex: 0
    },
    // 同步事件
    mutations: {
        addlist(state,obj){
            console.log(obj)
            state.list = obj.res
            console.log(obj.index)
            state.navIndex = obj.index
            console.log(state.list)
        }
    },
    // 类似于计算属性
    getters: {

    },
    // 异步事件
    actions:{
        shuaxin(obj){
            var type =obj.state.nav[obj.state.navIndex].type
            var index = obj.state.navIndex
            console.log(type)
            axios.get(` https://cnodejs.org/api/v1/topics?tab=${type}`).then((res)=>{
                // console.log(res.data.data)
                obj.commit("addlist",{res:res.data.data,index})
            })
        },
        shuju(conton,obj){
            console.log(conton,obj)
            var type = obj.type
            var index = obj.index
            console.log(type)
            axios.get(` https://cnodejs.org/api/v1/topics?tab=${type}`).then((res)=>{
                // console.log(res.data.data)
                conton.commit("addlist",{res:res.data.data,index})
            })
        }
    },
    plugins: [persistedState()]
})