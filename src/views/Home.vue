<template>
  <div class="home">
    <!-- 搜索栏 -->
    <el-form class="search-form" inline>
      <el-form-item>
        <el-input v-model="keywords" placeholder="请输入关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="region" placeholder="请选择地区">
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="广州" value="guangzhou"></el-option>
          <el-option label="深圳" value="shenzhen"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="price" placeholder="请选择租金">
          <el-option label="1000元以下" value="1"></el-option>
          <el-option label="1000-2000元" value="2"></el-option>
          <el-option label="2000-3000元" value="3"></el-option>
          <el-option label="3000-4000元" value="4"></el-option>
          <el-option label="4000元以上" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="layout" placeholder="请选择户型">
          <el-option label="一室" value="1"></el-option>
          <el-option label="二室" value="2"></el-option>
          <el-option label="三室" value="3"></el-option>
          <el-option label="四室及以上" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>

    <!-- 幻灯片轮播 -->
    <el-carousel class="carousel" :interval="5000">
      <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <img :src="item.image" alt="">
        <div class="carousel-item-desc">
          <h3 class="carousel-item-title">{{ item.title }}</h3>
          <p class="carousel-item-subtitle">{{ item.subtitle }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 推荐房源列表 -->
    <div class="house-list">
      <h2 class="house-list-title">推荐房源</h2>
      <div class="house-list-items">
        <div class="house-list-item" v-for="(item, index) in houseItems" :key="index">
          <div class="house-list-item-img">
            <img :src="item.image" alt="">
          </div>
          <div class="house-list-item-desc">
            <h3 class="house-list-item-title">{{ item.title }}</h3>
            <p class="house-list-item-price">{{ item.price }}元/月</p>
            <p class="house-list-item-area">{{ item.area }}平米 | {{ item.layout }}</p>
            <p class="house-list-item-location">{{ item.location }}</p>
            <div class="house-list-item-actions">
              <el-button type="primary" @click="viewDetail(item.id)">查看详情</el-button>
              <el-button type="primary" @click="book(item.id)">预约看房</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 特色服务介绍 -->
    <div class="features">
      <h2 class="features-title">特色服务</h2>
      <div class="features-items">
        <div class="features-item">
          <i class="el-icon-location"></i>
          <h3 class="features-item-title">在线看房</h3>
          <p class="features-item-desc">随时随地，想看就看</p>
        </div>
        <div class="features-item">
          <i class="el-icon-edit"></i>
          <h3 class="features-item-title">在线签约</h3>
          <p class="features-item-desc">轻松签订合同，省时省力</p>
        </div>
        <div class="features-item">
          <i class="el-icon-pay"></i>
          <h3 class="features-item-title">在线支付</h3>
          <p class="features-item-desc">安全便捷，快速缴纳租金</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 100,
      keywords: '',
      region: '',
      price: '',
      layout: '',
      carouselItems: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: '精品公寓',
          subtitle: '高品质生活，尽在精品公寓'
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: '豪华别墅',
          subtitle: '尊贵享受，尽在豪华别墅'
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: '舒适公寓',
          subtitle: '温馨舒适，尽在舒适公寓'
        },
        {
          image: 'https://picsum.photos/800/400?random=4',
          title: '精品公寓',
          subtitle: '高品质生活，尽在精品公寓'
        }
      ],
      houseItems: [
        {
          id: 1,
          image: 'https://picsum.photos/240/160?random=1',
          title: '精品公寓-一室一厅',
          price: 2000,
          area: 50,
          layout: '一室一厅',
          location: '北京市朝阳区'
        },
        {
          id: 2,
          image: 'https://picsum.photos/240/160?random=2',
          title: '豪华别墅-四室两厅',
          price: 10000,
          area: 300,
          layout: '四室两厅',
          location: '上海市浦东新区'
        },
        {
          id: 3,
          image: 'https://picsum.photos/240/160?random=3',
          title: '舒适公寓-二室一厅',
          price: 3000,
          area: 70,
          layout: '二室一厅',
          location: '广州市天河区'
        },
        {
          id: 4,
          image: 'https://picsum.photos/240/160?random=4',
          title: '精品公寓-一室一厅',
          price: 2000,
          area: 50,
          layout: '一室一厅',
          location: '深圳市福田区'
        },
        {
          id: 5,
          image: 'https://picsum.photos/240/160?random=5',
          title: '豪华别墅-五室三厅',
          price: 15000,
          area: 500,
          layout: '五室三厅',
          location: '北京市海淀区'
        },
        {
          id: 6,
          image: 'https://picsum.photos/240/160?random=6',
          title: '舒适公寓-三室一厅',
          price: 4000,
          area: 90,
          layout: '三室一厅',
          location: '上海市徐汇区'
        }
      ]
    }
  },
  methods: {
    search() {
      // 根据筛选条件进行搜索
      console.log('搜索：', this.keywords, this.region, this.price, this.layout)
    },
    viewDetail(id) {
      // 查看房源详情
      console.log('查看详情：', id)
      this.$router.push({path:'/houseDetail',query:{id:id}});
    },
    book(id) {
      // 预约看房
      console.log('预约看房：', id)
      this.$router.push({path:"/appointment",query:{id:id}})
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.search-form {
  margin: 20px 0;
  text-align: center;
}

.carousel {
  margin: 20px 0;
}

.house-list {
  margin: 20px 0;
  text-align: center;
}

.house-list-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.house-list-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.house-list-item {
  width: 240px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.house-list-item-img img {
  width: 100%;
}

.house-list-item-desc {
  padding: 10px;
  text-align: left;
}

.house-list-item-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.house-list-item-price {
  color: #f60;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.house-list-item-area {
  font-size: 14px;
  color: #999;
  margin: 10px 0;
}

.house-list-item-location {
  font-size: 14px;
  color: #999;
  margin: 10px 0;
}

.house-list-item-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.features {
  background-color: #f5f5f5;
  margin: 20px 0;
  text-align: center;
}

.features-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.features-items {
  display: flex;
  justify-content: center;
}

.features-item {
  width: 200px;
  margin: 20px;
  text-align: center;
}

.features-item i {
  font-size: 48px;
  color: #f60;
  margin-bottom: 20px;
}

.features-item-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.features-item-desc {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
</style>
