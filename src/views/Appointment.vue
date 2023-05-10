<template>
  <div class="appointment">
    <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="预约时间" prop="time">
        <el-date-picker
          v-model="form.time"
          type="datetime"
          placeholder="选择日期时间"
          :picker-options="pickerOptions"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即预约</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        time: '',
        remark: ''
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    };
  },
  props: ['id'],
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 发送预约请求
          console.log('预约信息：', this.form);
          this.$message.success('预约成功');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.appointment {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>
