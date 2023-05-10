<template>
  <div class="contract">
    <h2 class="title">租赁合同</h2>
    <div class="header">
      <div class="left">
        <div class="item">
          <span class="label">出租方：</span>
          <el-input v-model="contractData.landlord" placeholder="请输入出租方"></el-input>
        </div>
        <div class="item">
          <span class="label">地址：</span>
          <el-input v-model="contractData.address" placeholder="请输入地址"></el-input>
        </div>
        <div class="item">
          <span class="label">联系电话：</span>
          <el-input v-model="contractData.phone" placeholder="请输入联系电话"></el-input>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <span class="label">承租方：</span>
          <el-input v-model="contractData.tenant" placeholder="请输入承租方"></el-input>
        </div>
        <div class="item">
          <span class="label">身份证号码：</span>
          <el-input v-model="contractData.idCard" placeholder="请输入身份证号码"></el-input>
        </div>
        <div class="item">
          <span class="label">联系电话：</span>
          <el-input v-model="contractData.tenantPhone" placeholder="请输入联系电话"></el-input>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <span class="label">房屋地址：</span>
        <el-input v-model="contractData.houseAddress" placeholder="请输入房屋地址"></el-input>
        <span class="label">房屋面积：</span>
        <el-input v-model="contractData.houseArea" placeholder="请输入房屋面积"></el-input>
        <span class="label">租金：</span>
        <el-input v-model="contractData.rent" placeholder="请输入租金"></el-input>
      </div>
      <div class="item">
        <span class="label">租赁期限：</span>
        <el-date-picker v-model="contractData.rentalPeriod" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </div>
    </div>
    <div class="footer">
      <div class="item">
        <span class="label">甲方签字：</span>
        <el-input v-model="contractData.landlordSign" placeholder="请输入甲方签字"></el-input>
      </div>
      <div class="item">
        <span class="label">日期：</span>
        <el-date-picker v-model="contractData.landlordSignDate" type="date"></el-date-picker>
      </div>
      <div class="item">
        <span class="label">乙方签字：</span>
        <el-input v-model="contractData.tenantSign" placeholder="请输入乙方签字"></el-input>
      </div>
      <div class="item">
        <span class="label">日期：</span>
        <el-date-picker v-model="contractData.tenantSignDate" type="date"></el-date-picker>
      </div>
    </div>
    <div class="button">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contract',
  data() {
    return {
      contractData: {
        landlord: '',  // 出租方
        address: '',  // 地址
        phone: '',  // 联系电话
        tenant: '',  // 承租方
        idCard: '',  // 身份证号码
        tenantPhone: '',  // 联系电话
        houseAddress: '',  // 房屋地址
        houseArea: '',  // 房屋面积
        rentalPeriod: '',  // 租赁期限
        rent: '',  // 租金
        landlordSign: '',  // 甲方签字
        landlordSignDate: '',  // 甲方签字日期
        tenantSign: '',  // 乙方签字
        tenantSignDate: '',  // 乙方签字日期
      }
    }
  },
  methods: {
    submit() {
      // 提交数据
      console.log(this.contractData);
    }
  }
}
</script>

<style scoped>
.contract {
  padding: 20px;
}
.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 70px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}
.left, .right {
  width: 48%;
}
.item {
  margin-bottom: 10px;
}
.label {
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-right: 10px;
}
.content {
  width: 300px;
  margin-bottom: 80px;
  margin: auto;
  width: 300px;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.button {
  text-align: center;
}
</style>
