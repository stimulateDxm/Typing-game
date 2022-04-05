<<<<<<< HEAD
<template>
  <div class="calendar">
    <ul class="calendar-ym">
      <li @click="lt">&lt;</li>
      <li v-text="`${years}年${months}月`"></li>
      <li @click="gt">&gt;</li>
    </ul>
    <ul class="calendar-day">
      <li v-for="(itme,index) in days "
          :key=itme
          :class="{dateclass: new Date().getDay() === index}"
      > {{itme}}</li>
    </ul>
    <ul class="calendar-date">
      <li v-for="i in dates"
          :key="i"
          :class="{dateclass: new Date().getDate()===i }"
      >
       {{i}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data(){
    return{
      days:["日","一","二","三","四","五","六"],
      dates:[],
      years:new Date().getFullYear(),
      months:new Date().getMonth()+1,
      vacancy:null,
    }
  },
  methods:{
    //获取上一个月
    lt(){
      this.months--
      if(this.months === 0){
        this.months=12
        this.years--
      }
    },
    //获取下一个月
    gt(){
      this.months++
      if(this.months === 12){
        this.months=1
        this.years++
      }
    },

  },
  computed:{
    //获取当月有多少天
    getdate(){
      let nexMonth=this.months;
      let d=new Date(this.years,nexMonth,0);
      return d.getDate()
    },
    //获取当月1号是星期几
    getday(){
      let nexMonth=this.months-1;
      let d=new Date(this.years,nexMonth,1);
      return d.getDay()
    },

  },
  mounted() {
    //遍历出当月的天数，增加到dates数组中
    for (let i=1;i<=this.getdate;i++){
      this.dates.push(i)
    }
    //遍历出当前的1号是星期几,使1号出现在对应的星期几上
   for (let i=0; i<this.getday;i++){
     this.dates.unshift(this.vacancy)
   }
  },
  watch:{
    months(){
      //遍历出选择月份的天数，增加到dates数组中
      this.dates=[]
      for (let i=1;i<=this.getdate;i++){
        this.dates.push(i)
      }
      //遍历出选择月份的1号是星期几,使1号出现在对应的星期几上
      for (let i=0; i<this.getday;i++){
        this.dates.unshift(this.vacancy)
      }
    }
  }

}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
.dateclass{
  border: 1px solid black;
  background-color: #bee5e3;
}
.flex-wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.calendar{
  padding: 20px;
  width: 280px;
  height: 200px;
  background-color: blanchedalmond;
  border: 1px solid #99ece7;
  .calendar-ym{
    .flex-wrap();
  }
  .calendar-day{
    margin-top: 10px;
    .flex-wrap();
    text-align: center;
    justify-content: left;
    li{
      width: 34px;
    }
  }
  .calendar-date{
    .flex-wrap();
    justify-content: left;
    li{
      width:34px ;
      text-align: center;
    }
  }

}

</style>
=======
<template>
  <div class="calendar">
    <ul class="calendar-ym">
      <li @click="lt">&lt;</li>
      <li v-text="`${years}年${months}月`"></li>
      <li @click="gt">&gt;</li>
    </ul>
    <ul class="calendar-day">
      <li v-for="(itme,index) in days "
          :key=itme
          :class="{dateclass: new Date().getDay() === index}"
      > {{itme}}</li>
    </ul>
    <ul class="calendar-date">
      <li v-for="i in dates"
          :key="i"
          :class="{dateclass: new Date().getDate()===i }"
      >
       {{i}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data(){
    return{
      days:["日","一","二","三","四","五","六"],
      dates:[],
      years:new Date().getFullYear(),
      months:new Date().getMonth()+1,
      vacancy:null,
    }
  },
  methods:{
    //获取上一个月
    lt(){
      this.months--
      if(this.months === 0){
        this.months=12
        this.years--
      }
    },
    //获取下一个月
    gt(){
      this.months++
      if(this.months === 12){
        this.months=1
        this.years++
      }
    },

  },
  computed:{
    //获取当月有多少天
    getdate(){
      let nexMonth=this.months;
      let d=new Date(this.years,nexMonth,0);
      return d.getDate()
    },
    //获取当月1号是星期几
    getday(){
      let nexMonth=this.months-1;
      let d=new Date(this.years,nexMonth,1);
      return d.getDay()
    },

  },
  mounted() {
    //遍历出当月的天数，增加到dates数组中
    for (let i=1;i<=this.getdate;i++){
      this.dates.push(i)
    }
    //遍历出当前的1号是星期几,使1号出现在对应的星期几上
   for (let i=0; i<this.getday;i++){
     this.dates.unshift(this.vacancy)
   }
  },
  watch:{
    months(){
      //遍历出选择月份的天数，增加到dates数组中
      this.dates=[]
      for (let i=1;i<=this.getdate;i++){
        this.dates.push(i)
      }
      //遍历出选择月份的1号是星期几,使1号出现在对应的星期几上
      for (let i=0; i<this.getday;i++){
        this.dates.unshift(this.vacancy)
      }
    }
  }

}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
.dateclass{
  border: 1px solid black;
  background-color: #bee5e3;
}
.flex-wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.calendar{
  padding: 20px;
  width: 280px;
  height: 200px;
  background-color: blanchedalmond;
  border: 1px solid #99ece7;
  .calendar-ym{
    .flex-wrap();
  }
  .calendar-day{
    margin-top: 10px;
    .flex-wrap();
    text-align: center;
    justify-content: left;
    li{
      width: 34px;
    }
  }
  .calendar-date{
    .flex-wrap();
    justify-content: left;
    li{
      width:34px ;
      text-align: center;
    }
  }

}

</style>
>>>>>>> 393e73d621e115479aef4e958590ee3e23016f8c
