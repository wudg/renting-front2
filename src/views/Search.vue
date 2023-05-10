<template>
  <div class="search-page">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-input
          placeholder="请输入关键词"
          v-model="searchKeyword"
          prefix-icon="el-icon-search"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="province"
          placeholder="请选择省份"
          clearable
          @change="handleProvinceChange"
        >
          <el-option
            v-for="province in provinces"
            :key="province"
            :label="province"
            :value="province"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="city"
          placeholder="请选择城市"
          clearable
          :disabled="!province"
          @change="handleCityChange"
        >
          <el-option
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="district"
          placeholder="请选择区县"
          clearable
          :disabled="!city"
          @change="handleDistrictChange"
        >
          <el-option
            v-for="district in districts"
            :key="district"
            :label="district"
            :value="district"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="houseType"
          placeholder="请选择房屋类型"
          clearable
        >
          <el-option
            v-for="type in houseTypes"
            :key="type"
            :label="type"
            :value="type"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="orientation"
          placeholder="请选择朝向"
          clearable
        >
          <el-option
            v-for="ori in orientations"
            :key="ori"
            :label="ori"
            :value="ori"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="floor"
          placeholder="请选择楼层"
          clearable
        >
          <el-option
            v-for="f in floors"
            :key="f"
            :label="f"
            :value="f"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-select
          v-model="decoration"
          placeholder="请选择装修"
          clearable
        >
          <el-option
            v-for="dec in decorations"
            :key="dec"
            :label="dec"
            :value="dec"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        价格区间：
        <el-slider
          v-model="price"
          range
          :min="500"
          :max="8000"
          :show-input="true"
          :format-tooltip="formatPriceTooltip"
        ></el-slider>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        面积大小：
        <el-slider
          v-model="area"
          range
          :min="20"
          :max="200"
          :show-input="true"
          :format-tooltip="formatAreaTooltip"
        ></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="house-list">
          <el-row>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(house, index) in filteredHouses" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="house.image" class="house-image" />
                <div style="padding: 14px;">
                  <h4 class="house-title">{{ house.title }}</h4>
                  <div class="house-info">
                    <span>{{ house.area }}平米 / {{ house.orientation }} / {{ house.floor }}</span>
                  </div>
                  <div class="house-price">{{ house.price }}元/月</div>
                  <div class="house-list-item-actions">
                      <el-button type="primary" @click="viewDetail(house.id)">查看详情</el-button>
                      <el-button type="primary" @click="book(house.id)">预约看房</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="houses.length"
          layout="prev, pager, next"
          @current-change="handleCurrentPageChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
      province: '',
      city: '',
      district: '',
      houseType: '',
      orientation: '',
      floor: '',
      decoration: '',
      price: [0, 10000],
      area: [0, 1000],
      provinces: ['北京', '上海', '广东', '江苏', '浙江', '湖南', '湖北', '四川', '重庆'],
      cities: [],
      districts: [],
      houseTypes: ['公寓', '别墅', '平房', '写字楼', '商铺'],
      orientations: ['南', '北', '东', '西', '东南', '西南', '东北', '西北'],
      floors: ['1楼', '2楼', '3楼', '4楼', '5楼及以上'],
      decorations: ['简装', '精装', '豪华装修'],
      houses: [
        {
          id: 100,
          title: '整租 · 紫金新苑 2室1厅1卫 70平米',
          image: 'https://picsum.photos/id/237/200/300',
          area: 70,
          orientation: '南',
          floor: '5楼',
          decoration: '简装',
          price: 2000,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 101,
          title: '整租 · 金色家园 3室2厅1卫 110平米',
          image: 'https://picsum.photos/id/238/200/300',
          area: 110,
          orientation: '南',
          floor: '3楼',
          decoration: '精装',
          price: 3000,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 102,
          title: '整租 · 蓝山国际 4室2厅2卫 150平米',
          image: 'https://picsum.photos/id/239/200/300',
          area: 150,
          orientation: '南',
          floor: '10楼',
          decoration: '豪华装修',
          price: 5000,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 103,
          title: '整租 · 瑞丽湾 3室2厅1卫 90平米',
          image: 'https://picsum.photos/id/240/200/300',
          area: 90,
          orientation: '南',
          floor: '6楼',
          decoration: '精装',
          price: 2500,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 104,
          title: '整租 · 紫金新苑 2室1厅1卫 70平米',
          image: 'https://picsum.photos/id/237/200/300',
          area: 70,
          orientation: '南',
          floor: '5楼',
          decoration: '简装',
          price: 2000,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 105,
          title: '整租 · 金色家园 3室2厅1卫 110平米',
          image: 'https://picsum.photos/id/238/200/300',
          area: 110,
          orientation: '南',
          floor: '3楼',
          decoration: '精装',
          price: 3000,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 106,
          title: '整租 · 蓝山国际 4室2厅2卫 150平米',
          image: 'https://picsum.photos/id/239/200/300',
          area: 150,
          orientation: '南',
          floor: '10楼',
          decoration: '豪华装修',
          price: 5000,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        },
        {
          id: 107,
          title: '整租 · 瑞丽湾 3室2厅1卫 90平米',
          image: 'https://picsum.photos/id/240/200/300',
          area: 90,
          orientation: '南',
          floor: '6楼',
          decoration: '精装',
          price: 2500,
          province: '湖南',
          city: '长沙',
          district: '岳麓区',
          type: '公寓'
        }
      ],
      currentPage: 1,
      pageSize: 8
    };
  },
  methods: {
    handleProvinceChange() {
      this.cities = ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界'];
      this.districts = [];
      this.city = '';
      this.district = '';
    },
    handleCityChange() {
      this.districts = ['岳麓区', '芙蓉区', '天心区', '开福区', '雨花区'];
      this.district = '';
    },
    handleDistrictChange() {
      // do something
    },
    formatPriceTooltip(val) {
      return val + '元';
    },
    formatAreaTooltip(val) {
      return val + '平米';
    },
    handleCurrentPageChange(currentPage) {
      this.currentPage = currentPage;
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
  },
  computed: {
    filteredHouses() {
      let filteredHouses = this.houses.filter(house => {
        let match = true;
        if (this.searchKeyword && !house.title.includes(this.searchKeyword)) {
          match = false;
        }
        if (this.province && house.province !== this.province) {
          match = false;
        }
        if (this.city && house.city !== this.city) {
          match = false;
        }
        if (this.district && house.district !== this.district) {
          match = false;
        }
        if (this.houseType && house.type !== this.houseType) {
          match = false;
        }
        if (this.orientation && house.orientation !== this.orientation) {
          match = false;
        }
        if (this.floor && house.floor !== this.floor) {
          match = false;
        }
        if (this.decoration && house.decoration !== this.decoration) {
          match = false;
        }
        if (house.price < this.price[0] || house.price > this.price[1]) {
          match = false;
        }
        if (house.area < this.area[0] || house.area > this.area[1]) {
          match = false;
        }
        return match;
      });
      let startIndex = (this.currentPage - 1) * this.pageSize;
      let endIndex = startIndex + this.pageSize;
      return filteredHouses.slice(startIndex, endIndex);
    }
  },
  mounted() {
    this.cities = ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界'];
  }
};
</script>

<style scoped>
.search-page {
  margin: 20px;
}

.house-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.house-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.house-title {
  font-size: 14px;
  margin: 0;
}

.house-info {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}

.house-price {
  font-size: 14px;
  color: #f00;
}
</style>
