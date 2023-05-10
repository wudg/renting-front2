<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="login-form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="$router.push('/register')">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
// import store from '../store/index'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios.post('/api/login', {
            username: this.form.username,
            password: this.form.password
          }).then(res => {
            console.log(this.$store)  
            this.$store.commit('setUser', res.data)
            this.$router.push('/')
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style>
.login-container {
  width: 400px;
  margin: 0 auto;
  padding-top: 60px;
}

.login-form {
  margin-top: 40px;
}
</style>
