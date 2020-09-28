<template>
  <div>
    <!-- ==============搜索框 -->
    <van-search shape="round" @click="ssk" background="#4fc08d" placeholder="请输入搜索关键词" />
    <!-- ===================导航栏 -->
    <van-tabs v-model="itemindex" @click="chenged">
      <van-tab v-for="(item, index) in array" :key="index" :title="item.cname"></van-tab>
    </van-tabs>

    <div class="div-div2">
      <div>人气</div>
      <div>新品</div>
      <div @click="xiaol">销量</div>
      <div @click="jiag">价格</div>
    </div>
    <div class="div-box">
      <div class="div-div1" v-for="(item, index) in list" :key="index" @click="goto1(item.id)">
        <div>
          <img width="95%" :src="item.mainPic" alt />
        </div>
        <div class="div-div3">{{item.title}}</div>
        <div class="div-div2">
          <span class="div-span">婚淘价</span>
          <span class="div-span2">{{item.actualPrice}}</span>
        </div>
        <div>已售：{{item.monthSales}}件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
      list: [],
      itemindex: 0,
      // cid: 6
    };
  },
  created() {
    this.getClass();
    this.getList();
  },
  methods: {
    getClass() {
      this.$axios.get("http://api.kudesoft.cn/tdk/category", {}).then(res => {
        this.array = res.data.data.data;
        console.log(res.data.data.data);
      });
    },
    getList() {
      this.$axios
        .get("http://api.kudesoft.cn/tdk/goods", {
          params: {
            pageSize: 10,
            cids: this.cid,
          },
        })
        .then(res => {
           console.log(this.cids)
          console.log(res.data.data.data.list);
          this.list = res.data.data.data.list;
        });
    },
    xiaol(){
      this.sort=!this.sort
      if(this.sort){
        this.list.sort((a,b) =>{
              return a.monthSales-b.monthSales
            })
      }else {
         this.list.sort((a,b) =>{
              return b.monthSales-a.monthSales
            })
      }
            
    },
      jiag(){
      this.sort=!this.sort
      if(this.sort){
        this.list.sort((a,b) =>{
              return a.actualPrice-b.actualPrice
            })
      }else {
         this.list.sort((a,b) =>{
              return b.actualPrice-a.actualPrice
            })
      }
            
    },
    ssk(){
  this.$router.push({
          path:'/ss',
         
        })
    },
 
    goto1(id) {
      this.$router.push({
        path: "/xiangq",
        query: {
          id
        }
      });
      console.log(id);
    },
    chenged() {
      this.cid = this.array[this.itemindex].cid;
      // console.log(this.itemindex);
      // console.log(this.array[this.itemindex].cid);
      this.getList();
    }
  }
};
</script>

<style scoped>
.div-div2 {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
  font-size: 14px;
}

.div-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.div-div1 {
  width: 44%;
  height: 300px;
  border: 1px solid pink;
}
.div-span {
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
.div-span2 {
  font-size: 22px;
  color: red;
}
.div-div2 {
  width: 100%;
  height: 30px;
}
.div-div3 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>