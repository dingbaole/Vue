import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)
import axios from 'axios'
export default  new Vuex.Store({
    state:{
        shoplist:[],
        list:[],
        loading:true
    },
    mutations:{
        push(state,item){
            console.log(item)
            var index = state.shoplist.findIndex((val)=>{
                return val.id == item.id
            })
            console.log(index)
            if(index == -1){
                state.shoplist.push(item)
            }else{
                state.shoplist[index].num ++
            }
        },
        check(state,index){
            console.log(index)
            console.log(state.shoplist[index].checked )
            state.shoplist[index].checked = !state.shoplist[index].checked
        },
        allcheck(state,val){
            console.log(val)
            state.shoplist.forEach((item)=>{
                item.checked = val
            })
        },
        sumadd(state,obj){
            console.log(obj)
            if(obj.key == "+"){
                state.shoplist[obj.index].num ++
            }else{
                state.shoplist[obj.index].num --
            }
        },
        listadd(state,data){
          state.list = data
        }
    },
    actions: {
      ajaxlist(context){
        setTimeout(()=>{
          axios.get('static/list.json').then((data)=>{
            context.commit("listadd",data.data)
          })
        },2000)
      }
    },
    plugins: [persistedState()]
})