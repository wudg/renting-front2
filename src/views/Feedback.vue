<template>
  <div class="feedback">
    <el-card class="feedback-card" shadow="hover">
      <h3 class="feedback-title">意见反馈</h3>
      <el-form ref="feedbackForm" :model="feedbackForm" :rules="feedbackRules" label-width="80px" class="feedback-form">
        <el-form-item label="反馈类型" prop="type">
          <el-select v-model="feedbackForm.type" placeholder="请选择反馈类型">
            <el-option label="界面体验" value="1"></el-option>
            <el-option label="功能建议" value="2"></el-option>
            <el-option label="Bug反馈" value="3"></el-option>
            <el-option label="其他" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="反馈内容" prop="content">
          <el-input v-model="feedbackForm.content" type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="请输入反馈内容"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
          <el-input v-model="feedbackForm.contact" placeholder="请输入您的联系方式"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('feedbackForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbackForm: {
        type: '',
        content: '',
        contact: ''
      },
      feedbackRules: {
        type: [
          { required: true, message: '请选择反馈类型', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入反馈内容', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入您的联系方式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 表单验证通过，提交数据
          // 这里可以调用接口将数据提交到后台
          // 提交成功后，清空表单并提示用户提交成功
          this.$message.success('提交成功')
          this.resetForm(formName)
        } else {
          // 表单验证失败，提示用户错误信息
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.feedback {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.feedback-card {
  width: 500px;
}
.feedback-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.feedback-form {
  margin-top: 20px;
}
</style>
