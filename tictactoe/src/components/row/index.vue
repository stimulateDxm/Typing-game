<template>
  <div>
  <div class="row" @click="num" >
      <template v-if="isxo">{{xo}}</template>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props:['n'],
  data(){
    return{
      //点击出现的XO初始值
      xo:'',
      //初始控制XO值是空隐藏
      isxo:false,
    }
  },
  methods:{
    num(){
      //如果已点击就不能再点击了
      if (this.xo !== ''){
        return ;
      }
      //点击有值控制xo值显示
      this.isxo = true;
      //:n="n"是父组件给子组件传递n的值，让子组件n是单数xo值就变成X 是偶数就是o
      this.n % 2 !==0 ? this.xo='O' : this.xo='X';
      //给父组件传递数据
      this.$emit('click',this.xo);
    }
  },

}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

.row{
    background-color: orange;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    font-size: 80px;
    display: grid;
    place-items: center;

}
</style>
