<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="购物车" @click-left="onClickLeft" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    
    <!-- 商品卡片 -->
    <van-checkbox-group v-model="result" @change="bian" >
      <van-row>
        <van-swipe-cell v-for="(item, index) in str" :key="index">
          <van-col span="2">
            <van-checkbox :name="item"></van-checkbox>
          </van-col>
          <van-col span="22">
            <van-card
              num="2"
              :price="item.actualPrice"
              :desc="item.dtitle"
              :title="item.title"
              :thumb="item.mainPic"
            ></van-card>
          </van-col>

          <template #right>
            <van-button @click="del(index)" square text="删除" type="danger" class="delete-button"/>
          </template>
        </van-swipe-cell>
      </van-row>
    </van-checkbox-group>

    <!-- 判断购物车空状态 v-if="str.length<=0"  -->
    <div v-if="str.length<=0">
      <div class="div-kjz">
        <van-empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="购物车暂无商品"
        />
      </div>

      <!-- =======按钮 -->
      <div class="div-button">
        <button class="button">去首页逛逛吧</button>
      </div>
    </div>
    <!-- ===========分割线 -->
    <div class="div-fgx">
      <van-divider
        :style="{ color: 'rgb(156, 74, 122)', borderColor: 'rgb(156, 74, 122)', padding: '0 16px' }"
      >为您精选</van-divider>
    </div>
    <Home></Home>

<!-- 提交订单框 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked" @click="quanx">全选</van-checkbox>
</van-submit-bar>
  </div>
</template>

<script>
import Home from "@/components/Home";
export default {
  components: {
    Home
  },
  data() {
    return {
      str: [],
      result: [],
      checked:false
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },

    del(index) {
      this.str.splice(index, 1);
      this.save();
    },
    onSubmit(){

    },
    // 全选
    quanx(){
      if(this.checked){
        this.result = this.str
      }else{
        this.result =[]
      }
    },
// 
    bian(){
      if(this.result.length == this.str.length){
        this.checked = true
      }else {
        this.checked = false
      }
    },
    save() {
      localStorage.str = JSON.stringify(this.str);
    }
  },

  //  初始化  才可以让加入购物车的数据出现
  created() {
    let str = localStorage.str;
    if (str) {
      this.str = JSON.parse(str);
    }
  }
};
</script>

<style scoped>
.custom-image .van-empty__image {
  width: 170px;
  height: 170px;
}

.button {
  width: 150px;
  height: 42px;
  background: linear-gradient(to right, rgb(156, 74, 122), rgb(197, 136, 85));
  border: none;
  border-radius: 28px;
  color: white;
}
.div-button {
  text-align: center;
  margin: 30px;
}
.div-fgx {
  margin: 35px;
}
.div-kjz {
  margin: 10px 0;
}
.goods-card {
  margin: 10px 0;
  background-color: white;
}

.delete-button {
  height: 100px;
}
</style>