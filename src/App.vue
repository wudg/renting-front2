<template>
  <div id="app">
     <!-- 顶部导航栏 -->
    <Header/>
    <el-header class="header">
      <div class="logo">租房系统</div>
      <div class="nav">
        <el-button type="text" @click="$router.push('/login')">登录/注册</el-button>
        <el-button type="text" @click="$router.push('/personalAccount')">我的账户</el-button>
      </div>
    </el-header>
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <el-footer class="footer">
      <div class="links">
        <router-link to="/aboutUs">联系我们</router-link>
        <router-link to="/aboutUs">关于我们</router-link>
        <router-link to="/feedback">意见反馈</router-link>
        <router-link to="/termService">服务条款</router-link>
        <a href="#">隐私政策</a>
      </div>
      <div class="copy-right">© 2021 租房系统</div>
    </el-footer>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {Header}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav {
  display: flex;
  align-items: center;
}
.footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

.links a {
  color: #666;
  margin: 0 10px;
}

.copy-right {
  color: #999;
  margin-top: 10px;
}
</style>

    Header