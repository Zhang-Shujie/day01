<template>
  <div> 
     <div>
       
    <van-tabs>
      <van-tab title="商品"></van-tab>
      <van-tab title="评价"></van-tab>
      <van-tab title="详情"></van-tab>
      <van-tab title="推荐"></van-tab>
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in hlist.imgs " :key="index">
        <img width="100%" height="300px" :src="item" />
      </van-swipe-item>
    </van-swipe>


      <van-row class="div-jiag">
        <van-col span="1"></van-col>
        <van-col span="3">
          <van-tag mark size="danger" type="danger">婚淘价</van-tag>
        </van-col>
        <van-col span="6">
          <span>
            ￥
            <b>{{hlist.actualPrice}}</b>/套
          </span>
        </van-col>
        <van-col span="9"></van-col>
        <van-col span="5">
          <van-tag
            color="#ffe1e1"
            size="large"
            text-color="#ad0000"
          >节省:{{hlist.originalPrice-hlist.actualPrice}}元</van-tag>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="3">
          <van-tag size="danger" plain>淘宝价</van-tag>
        </van-col>
        <van-col span="4">
          <s>{{hlist.originalPrice}}/套</s>
        </van-col>
        <van-col span="11"></van-col>
      </van-row>
      <div class="div-title">
        <van-tag round type="warning">新款</van-tag>
        {{hlist.title}}
      </div>

      <div class="div-xiaol">
        <div>
          <van-icon size="16" name="passed" />&nbsp;&nbsp;
          <span>包邮</span>
        </div>
        <div>已售：{{hlist.monthSales}}件</div>
      </div>

      <h3>商品详情</h3>
      <div v-for="(items, index) in hlist.detailPics" :key="index">
<img width="100%" :src="items" alt="">
      </div>
      <div class="div-spdh">
          <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
  <van-goods-action-icon :badge="str.length" to='/app' icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button @click="goto(hlist)" type="warning"
   text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hlist: {},  
      str:[]
    };
  },
  created() {
let str =localStorage.str;
if(str){
  this.str=JSON.parse(str)
}

    let id = this.$route.query.id;
    this.$axios
      .get("http://api.kudesoft.cn/tdk/details", {
        params: {
          id
        }
      })
      .then(res => {
        this.hlist = res.data.data.data;
        this.hlist.imgs = this.hlist.imgs.split(",");
        this.hlist.detailPics= this.hlist.detailPics.split(",");

        console.log(res.data.data.data);
      });
  },
  methods:{
    goto(hlist){
      let rel = true;
      this.hlist.map(item =>{
        if(item.items.id == this.list.id){
          item.num++;
          rel = false
        }
      })
      if(rel){
        this.hlist.push({
          items:list,
          num:this.num
        })
      }

      // this.str.push(this.hlist)
      this.save()
      
    },
    save(){
      localStorage.str=JSON.stringify(this.str)
    }
  }
};
</script>

<style scoped>
.div-jiag {
  margin: 10px 0;
}
b{
  font-size: 20px;
  color: red;
}
.div-title {
  margin: 10px 0;
  padding: 0 13px;
}
.div-xiaol {
  height: 30px;
  padding: 0 13px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
h3 {
  text-align: center;
  height: 40px;
  color: gray;
}
.div-spdh{
  margin-bottom: 0px;
}
</style>>
