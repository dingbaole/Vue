<template>
  <div>
    <h5>购物车</h5>
    <table>
      <tbody>
        <tr v-for="(item,index) in shoplist" :key="item.id">
          <td>
            <input type="checkbox" @click="check(index)" :checked="item.checked" />
          </td>
          <td>
            <img :src="item.img" alt />
          </td>
          <td>名称：{{ item.name }}</td>
          <td>价格：{{ item.price }}</td>
          <td>
            <button @click="numadd(index,'+')">+</button>
            <span>{{ item.num }}</span>
            <button @click="numadd(index,'-')">-</button>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" v-model="all" />全选
          </td>
          <td>总价:{{ sum }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(["check"]),
    numadd(index,key){
        this.$store.commit("sumadd",{key,index})
    }
  },
  computed: {
    ...mapState(["shoplist"]),
    all: {
      get() {
        console.log(this.$store.state.shoplist);
        let bool = this.$store.state.shoplist.every((item)=>{
            return item.checked
        })
        return bool
      },
      set(val) {
        console.log(val);
        this.$store.commit("allcheck",val)
      }
    },
    sum(){
        let sum = 0
        this.$store.state.shoplist.forEach((item)=>{
            if(item.checked){
                sum += item.pay*item.num
            }
        })
        return sum
    }
  }
};
</script>

<style scoped>
table {
  margin: 0 auto;
}
</style>
