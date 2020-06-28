### vuex 辅助函数
    带来便利的
    vuex提供的快速获取 vuex中的 同步方法也好，全局状态也好，actions也行，getters也能
    import { mapState } from 'vuex'

    mapState,mapGetters

    使用在
    数组形式：
    computed:{
        ...mapState(["shopList","num",'count']),
        ...mapGetters(["sum"]),
    }
    对象形式：
    computed:{
        ...mapState({sl:"shopList"}),
        ...mapGetters({sumCount:'sum'}),
    }

    mapMutations,mapAcitons

    使用在
    methods：{
        ...mapMutations(["changeChecked","changeAllChecked"]),
        ...mapActions([""]),
    }

    取到的变量也好，可以直接使用，方法也好，也可以直接在组件中使用
### vuex actions getters modules

    vuex完整流程：
        components(组件) => actions（异步方法） => mutations（同步方法） => state（全局状态） => components（组件）
        组件触发actions 使用 this.$store.dispatch()  
        异步方法调同步 使用的
            示例：
                ajaxList(context) {
                    context.commit()  // 调用同步方法
                }
        同步方法：
            示例:
                saveList(state,data) {
                    state.list = data
                }

### 实现请求接口加载中的效果

    技术栈：
        axios  axios拦截器   组件   vuex

    1. 创建一个加载中 给用户提示的样式
    2. 样式隐藏显示  通过vuex中的某个状态来控制
    3. 使用axios拦截器  做隐藏显示的 条件
    4. 实现的目标，只要请求接口，没有拿到数据，那么就一直loading，数据获取到，loading隐藏


### 拦截器
    import axios from 'axios'
```js
    // 请求拦截器
    axios.interceptors.request.use((config)=>{
        // 显示loading
        store.state.isLoading = true 
        return config
    })

    //相应拦截器
    axios.interceptors.response.use((response)=>{
        // 隐藏loading
        // setTimeout(() => {
            store.state.isLoading = false
            return response
        // }, 2000);
    })
    // 将axios在原型上定义
    Vue.prototype.$http = axios
```


### 作业
    1. 每个人 做一个自己的loading组件
    2. 走一遍vuex 异步到同步 同步改变数据流程
    3. 效果网址：https://cnodejs.org/
        

### 预习 vuex 中的 moudles

    