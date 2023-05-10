<template>
  <div class="about-us">
    <h1>关于我们</h1>
    <p>我们是一家专业的租房系统公司，致力于为广大用户提供优质的租房服务。</p>
    <h2>我们的团队</h2>
    <ul>
      <li v-for="(member, index) in team" :key="index">{{ member.name }} - {{ member.position }}</li>
    </ul>
    <h2>联系我们</h2>
    <p>电话：{{ phone }}</p>
    <p>邮箱：{{ email }}</p>
    <p>地址：{{ address }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',  
  data() {
    return {
      team: [
        { name: '张三', position: 'CEO' },
        { name: '李四', position: 'CTO' },
        { name: '王五', position: 'CFO' },
        { name: '赵六', position: 'COO' }
      ],
      phone: '1234567890',
      email: 'info@rental.com',
      address: '北京市朝阳区xxx街道xxx号'
    }
  }
}
</script>

<style>
.about-us {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

li {
  font-size: 16px;
  margin-bottom: 5px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
