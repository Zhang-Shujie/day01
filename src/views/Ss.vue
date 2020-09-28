<template>
  <div>
    <van-search v-model="value" show-action shape="round" placeholder="请输入搜索关键词" @search="onSearch">
      <template #left >
        <van-icon @click="fh" name="arrow-left" />
      </template>
      <template #action>
        <div @click="onSearch">
          <button class="button">搜索</button>
        </div>
      </template>
    </van-search>

    <div>
      <div>
        历史查询
        <button @click="del">删除</button>
      </div>
      <span @click="lis(item)" v-for="(item, index) in sslist" :key="index">{{item}}&nbsp;&nbsp;</span>
    </div>

    <div class="div-box">
      <div class="div-div1" v-for="(item, index) in showlist" :key="index" @click="goto(item.id)">
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
      value: "", //关键字
      sslist: [], //历史搜素数组
      list: [], // 商品数据的数组
      showlist: [] //含关键字的全部数据
    };
  },
  created() {
    let sslist = localStorage.sslist;
    if (sslist) {
      this.sslist = JSON.parse(sslist);
    }
  },
  methods: {
    onSearch() {
      this.showlist = []; //当你搜索另一个关键字的时候  上一个关键字的内容清空
      this.sslist.push(this.value); //将关键字添加到sslist数组里
      this.saver(); //当搜索关键字的时候  让内容出现
      this.save();
      console.log(this.list);

      // 当title包含你输入的关键字的时候  添加到showlist中 让相关内容出现
      this.list.map(item => {
        if (item.title.includes(this.value)) {
          this.showlist.push(item);
        }
      });
    },
    del() {
      this.sslist = [];
      this.save();
    },
    fh(){
       window.history.back()
    },
    lis(item){
      this.value=item
      this.saver();
    },
    goto(id){
      this.$router.push({
        path:'/xiangq',
        query:{
          id
        }
      })

       this.$router.push({
        path: "/xiangq",
        query: {
          id
        }
      });
    },
    saver() {
      this.$axios.get("http://api.kudesoft.cn/tdk/goods", {}).then(res => {
        console.log(res.data.data.data.list);
        this.list = res.data.data.data.list;
      });
    },
    save() {
      localStorage.sslist = JSON.stringify(this.sslist);
    }
  }
};
</script>

<style scoped>
.button {
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: linear-gradient(to right, rgb(247, 193, 122), rgb(235, 120, 53));
  color: white;
}
.div-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.div-div1 {
  width: 45%;
  height: 300px;
  border: 1px solid pink;
  margin: 8px;
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