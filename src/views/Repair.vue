<template>
  <div class="repair">
    <h2>房屋报修</h2>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
      <el-form-item label="房屋地址" prop="address">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="报修内容" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        address: '',
        content: '',
        phone: ''
      },
      rules: {
        address: [
          { required: true, message: '请输入房屋地址', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入报修内容', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 提交表单数据
          console.log(this.form)
          // 清空表单
          this.resetForm()
          // 提示用户提交成功
          this.$message.success('提交成功')
        } else {
          // 提示用户表单验证失败
          this.$message.error('表单验证失败')
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
.repair {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form {
  margin-top: 20px;
}
</style>
