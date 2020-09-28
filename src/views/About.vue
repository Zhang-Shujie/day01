<template>
  <div class="div-box2">
    <div class="div-box1">
      <!-- -----------搜索 -->
      <van-search
        v-model="value"
        show-action
        background="red"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <van-icon size="20" color="#eee" name="arrow" />
        </template>
      </van-search>
      <!-- ---------------------轮播-------------- -->
      <div class="div-lunb">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img width="100%" height="100%" src="http://localhost:8080/1.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img width="100%" height="100%" src="http://localhost:8080/2.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img width="100%" height="100%" src="http://localhost:8080/3.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- ================宫格=========== -->
      <van-grid :border="false" :column-num="5">
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
          <van-grid-item>
          <template>
            <img class="van-grid-item-img" width="100%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          </template>
        </van-grid-item>
      </van-grid>
<!-- ========通知栏=========== -->
      <van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
<!-- ========= -->
<div class="div-dyg">
<van-cell value-class="title" value="查看更多" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">热销精品</span>
    <span>每周准时上新</span> 
  </template>
</van-cell>


   <!-- ======================== -->
  <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <template>
            <img  class="gg-img" width="76%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
          <div class="gg-span"><span>￥130</span><s>￥200</s></div>
          </template>
        </van-grid-item>
          <van-grid-item>
          <template>
            <img class="gg-img" width="76%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
           <div class="gg-span"><span>￥130</span><s>￥200</s></div>

          </template>
        </van-grid-item>
          <van-grid-item>
          <template>
            <img class="gg-img" width="76%" src="http://localhost:8080/3.jpg" alt />
            <div>热门</div>
            <div class="gg-span"><span>￥130</span><s>￥200</s></div>

          </template>
        </van-grid-item>
      </van-grid>
      </div>
<!-- ===================================================== -->
<van-row>
  <van-col span="1"></van-col>

  <van-col class="van-col-span1" span="11"><img width="100%" height="130px" src="http://localhost:8080/3.jpg" alt=""></van-col>
  <van-col class="van-col-span2" span="11"><img width="100%" height="130px" src="http://localhost:8080/2.jpg" alt=""></van-col>
  <van-col span="1"></van-col>
</van-row>
<!-- ========================== -->
<h3>为您推荐</h3>
<Home></Home>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home"
export default {
  components:{
Home
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>

<style scoped>
/* *{
  margin: 0;
  padding: 0;
} */
.div-box2 {
  width: 100%;
  height: 220px;
  border-radius: 0 0 100px 100px;
  background: red;
}
.div-box1{
  width: 100%;
  margin-bottom: 50px;
}
.my-swipe .van-swipe-item {
  text-align: center;
  height: 160px;
}
.my-swipe {
  border-radius: 15px;
  width: 95%;
  margin: 0 auto;
}
.van-grid-item-img{
  width: 100%;
  height: 60px;
  border-radius: 30px;
}
.title{
 color: red;
}
.custom-title{
  font-size: 18px;
}
.div-dyg{
  margin-top: 5px;
  width: 100%;
  height: 220px;
  background: rgb(252, 248, 248);
  border-radius: 10px;
}
.gg-img{
  border-radius: 20px;
  margin-bottom: 5px;
}
.gg-span{
  margin-top: 5px;
  color: red;
}
s{
  color: gray;
}
.van-col-span1 img{
  border-radius: 10px 0 0 10px;
}
.van-col-span2 img{
  border-radius: 0px 10px 10px 0px;

}
h3{
  text-align: center;
  margin: 5px;
  color: rgb(155, 219, 219);
}
</style>