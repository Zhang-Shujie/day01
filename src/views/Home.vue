<template>
  <div>
   <router-view />

<van-tabbar route>
  <van-tabbar-item replace to="/about" icon="home-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/add" icon="search">
    分类
  </van-tabbar-item>
    <van-tabbar-item replace to="/app" icon="search">
    购物车
  </van-tabbar-item>
    <van-tabbar-item replace to="/main" icon="search">
    我的
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script >
export default {
data(){
  return{
    active:'1'
  }
}
}
</script>

<style scoped>

</style>