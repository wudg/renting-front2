<template>
  <div class="payment-page">
    <h2>房租水电费用支付</h2>
    <el-form :model="form" label-position="left" label-width="80px" ref="form">
      <el-form-item label="房间号">
        <el-input v-model="form.roomNumber"></el-input>
      </el-form-item>
      <el-form-item label="租客姓名">
        <el-input v-model="form.tenantName"></el-input>
      </el-form-item>
      <el-form-item label="房租金额">
        <el-input v-model="form.rentAmount"></el-input>
      </el-form-item>
      <el-form-item label="水费金额">
        <el-input v-model="form.waterAmount"></el-input>
      </el-form-item>
      <el-form-item label="电费金额">
        <el-input v-model="form.electricityAmount"></el-input>
      </el-form-item>
    </el-form>
    <div class="payment-buttons">
      <el-button type="primary" @click="submitForm">确认支付</el-button>
      <el-button @click="resetForm">重置表单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentPage",
  data() {
    return {
      form: {
        roomNumber: "",
        tenantName: "",
        rentAmount: "",
        waterAmount: "",
        electricityAmount: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 提交表单
          console.log(this.form);
          this.$message.success("支付成功！");
          this.resetForm();
        } else {
          this.$message.error("请正确填写表单！");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style>
.payment-page {
  margin: 20px;
}

.payment-buttons {
  margin-top: 20px;
  text-align: center;
}
</style>
