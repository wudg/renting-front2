<template>
  <div class="register">
    <h2>注册</h2>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="角色" prop="role">
        <el-radio-group v-model="form.role">
          <el-radio-button label="房东"></el-radio-button>
          <el-radio-button label="租户"></el-radio-button>
          <el-radio-button label="管理员"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="email">
        <el-input v-model="form.email" placeholder="请输入电子邮件"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        role: '租户',
        username: '',
        password: '',
        checkPass: '',
        email: ''
      },
      rules: {
        role: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '请输入电子邮件', trigger: 'blur' },
          { type: 'email', message: '请输入正确的电子邮件格式', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 提交表单
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.el-form-item__label {
  font-weight: bold;
}
</style>
