<template>
  <div class="div-box" >
    <div class="div-div1" v-for="(item, index) in list" :key="index" @click="goto1(item.id)" >
    <div>
      <img width="95%" :src="item.mainPic" alt="">
    </div>
    <div class="div-div3">{{item.title}}</div>
    <div class="div-div2" ><span class="div-span">婚淘价</span><span class="div-span2">{{item.actualPrice}}</span></div>
    <div >已售：{{item.monthSales}}件</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
list:[]
      }
    },
     mounted(){
       this.$axios.get('http://api.kudesoft.cn/tdk/goods',{
               
       }).then(res=>{
         console.log(res.data.data.data.list)
         this.list=res.data.data.data.list
       })
     },
    methods:{
      goto1(id){
        this.$router.push({
          path:'/xiangq',
          query:{
            id
          }
        })
        console.log(id)
      }
    }
}
</script>

<style scoped>
*{
margin: 0;
padding: 0;
}
.div-box{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
 
}

.div-div1{
  width: 45%;
  height: 300px;
  border:1px solid pink;

}
.div-span{
  font-size: 14px;
  float: left;
display: flex;
width: 50px;
height: 20px;
  padding: 3px;
 border-radius: 0 10px 10px 0;
  background: red;
  color: white;
}
.div-span2{
  font-size: 22px;
color: red;
}
.div-div2{
  width: 100%;
  height: 30px;
}
.div-div3{
   text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>