<template>
  <div class="house-detail">
    <div class="house-list-item-actions">
        <el-button type="primary" @click="book()">预约看房</el-button>
    </div>
    <div class="basic-info">
      <h2>房源基本信息</h2>
      <ul style="width: 500px;margin: auto;">
        <li>
          <span>房屋类型：</span>
          <span>{{ houseInfo.type }}</span>
        </li>
        <li>
          <span>面积：</span>
          <span>{{ houseInfo.area }}</span>
        </li>
        <li>
          <span>朝向：</span>
          <span>{{ houseInfo.direction }}</span>
        </li>
        <li>
          <span>楼层：</span>
          <span>{{ houseInfo.floor }}</span>
        </li>
        <li>
          <span>装修：</span>
          <span>{{ houseInfo.decoration }}</span>
        </li>
        <li>
          <span>价格：</span>
          <span>{{ houseInfo.price }}</span>
        </li>
      </ul>
    </div>
    <div class="location-info">
      <h2>房源位置信息</h2>
      <ul style="width: 500px;margin: auto;">
        <li>
          <span>所在省：</span>
          <span>{{ houseInfo.province }}</span>
        </li>
        <li>
          <span>所在市：</span>
          <span>{{ houseInfo.city }}</span>
        </li>
        <li>
          <span>所在区：</span>
          <span>{{ houseInfo.district }}</span>
        </li>
        <li>
          <span>街道：</span>
          <span>{{ houseInfo.street }}</span>
        </li>
        <li>
          <span>小区名称：</span>
          <span>{{ houseInfo.community }}</span>
        </li>
        <li>
          <span>详细地址：</span>
          <span>{{ houseInfo.address }}</span>
        </li>
      </ul>
    </div>
    <div class="image-info">
      <h2>房源图片信息</h2>
      <ul>
        <li v-for="(img, index) in houseInfo.images" :key="index">
          <img :src="img" alt="房屋图片">
        </li>
      </ul>
    </div>
    <div class="facility-info">
      <h2>房源设施信息</h2>
      <ul>
        <li v-for="(facility, index) in houseInfo.facilities" :key="index">
          <span>{{ facility }}</span>
        </li>
      </ul>
    </div>
    <div class="description-info">
      <h2>房源描述信息</h2>
      <p>{{ houseInfo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houseInfo: {
        type: '公寓',
        area: '80平米',
        direction: '南',
        floor: '5/10层',
        decoration: '精装修',
        price: '3000元/月',
        province: '北京市',
        city: '北京市',
        district: '海淀区',
        street: '中关村大街',
        community: '中关村小区',
        address: '中关村大街1号',
        images: [
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300'
        ],
        facilities: [
          '空调',
          '电视',
          '冰箱',
          '洗衣机',
          '热水器',
          '床',
          '衣柜',
          '书桌',
          '椅子'
        ],
        description: '这是一套位于中关村的精装修公寓，南向采光好，楼层高视野开阔，周边交通便利，生活配套设施完善。'
      }
    }
  },
  props: ['id'],
  methods: {
      book() {
      // 预约看房
      this.$router.push({path:"/appointment",query:{id:this.id}})
    }
  },
  created(){
      console.log(this.$router)
  }
}
</script>

<style>
.house-detail {
  margin: 0 auto;
  width: 80%;
}
.house-detail h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.house-detail ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.house-detail ul li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.house-detail ul li span:first-child {
  width: 120px;
  font-weight: bold;
}
.house-detail .image-info ul li {
  display: inline-block;
  margin-right: 10px;
}
.house-detail .image-info ul li img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}
.house-detail .facility-info ul li {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.house-detail .description-info p {
  line-height: 1.5;
}
</style>
