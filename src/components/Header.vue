<template>
  <div class="header-container">
    <el-menu :router=true :default-active="$router.name" mode="horizontal">
      <el-menu-item index="home" route="/">
        <i class="el-icon-house"></i>首页
      </el-menu-item>
      <el-menu-item index="publish" route="/publish">
        <i class="el-icon-edit-outline"></i>发布房源
      </el-menu-item>
      <el-menu-item index="search" route="/search">
        <i class="el-icon-search"></i>搜索房源
      </el-menu-item>
      <el-menu-item index="contract" route="/contract">
        <i class="el-icon-document"></i>签订合同
      </el-menu-item>
      <el-menu-item index="payment" route="/payment">
        <i class="el-icon-bank-card"></i>支付租金
      </el-menu-item>
      <el-menu-item index="repair" route="/repair">
        <i class="el-icon-wrench"></i>报修维护
      </el-menu-item>
      <el-menu-item index="notification" route="/notification">
        <i class="el-icon-bell"></i>消息通知
      </el-menu-item>
      <el-menu-item index="statistics" route="/statistics">
        <i class="el-icon-data-analysis"></i>数据统计
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
