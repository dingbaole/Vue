import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    // 全局状态
    state:{
        allCheck:false, // 全选状态
        count:100,
        num:999,
        // 购物车数据
        shopList:[],
        // 商品列表数据
        list:[
            {
                name:"小猪佩奇玩具",
                price:"50",
                number:1,
                id:1,
                checked:false,
                imgSrc:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1840984476,3545337261&fm=26&gp=0.jpg"
            },
            {
                name:"汪汪队玩具",
                price:"120",
                number:1,
                id:2,
                checked:false,
                imgSrc:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4142052013,564122852&fm=26&gp=0.jpg"
            },
            {
                name:"奥特曼玩具",
                price:"90",
                number:1,
                id:3,
                checked:false,
                imgSrc:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2026972934,2966106125&fm=26&gp=0.jpg"
            }
        ]
    },
    // 同步方法集合
    mutations:{
        addCount(state,num) {
            
            state.count  = num
        },
        addNum(state) {
            state.num ++
        },
        // 加入购物车的方法
        addShop({ shopList },obj) {
            let index = shopList.findIndex((item)=>{
                return item.id === obj.id
            })
            // console.log(index)
            if(index != -1) {
                // 如果不返回-1，那么在找到的索引，在shoplist找到指定的对象，数量加一
                shopList[index].number ++
            } else {
                // 如果返回-1，添加操作
                shopList.push(obj)
            }
           
        },
        // 全选
        changeAllChecked(state) {
            // 点击全选时，要让当前全选按钮 取反
            state.allCheck = !state.allCheck

            // 讲购物车列表数据同步选中状态
            state.shopList.forEach((item)=>{
                item.checked = state.allCheck
            })
        },
        // 切换选中状态
        changeChecked(state,index) {
            // 切换某一个选中状态
            state.shopList[index].checked = !state.shopList[index].checked

            // 对shoplist每一项进行 循环，每一条对象的checked属性值都为true，那么会返回一个bool，为true
            // 有一条为false，那么bool就是false
            let bool = state.shopList.every((item)=>{
                return item.checked == true
            })
            // 同步全选状态
            state.allCheck = bool
        },
        change(state,val) {
            state.shopList.forEach((item)=>{
                item.checked = val
            })
        }
    },
    getters:{
        // 计算属性，算的是仓库中state的数据
        sum(state) {
            // console.log(state)
            let sum = 0
            state.shopList.forEach((item)=>{
                if(item.checked){
                    sum += item.price* item.number
                }
            })
            return sum 
        },
        
    },
    plugins: [createPersistedState()]
})