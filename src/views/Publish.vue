<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="120px">
      <!-- 房源基本信息 -->
      <el-card class="card">
        <div slot="header" class="card-header">房源基本信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="房屋类型" prop="houseType">
              <el-select v-model="registerForm.houseType" placeholder="请选择">
                <el-option label="一室一厅" value="1室1厅"></el-option>
                <el-option label="两室一厅" value="2室1厅"></el-option>
                <el-option label="两室两厅" value="2室2厅"></el-option>
                <el-option label="三室一厅" value="3室1厅"></el-option>
                <el-option label="三室两厅" value="3室2厅"></el-option>
                <el-option label="四室及以上" value="4室及以上"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="面积" prop="area">
              <el-input v-model.number="registerForm.area" suffix="㎡"></el-input>
            </el-form-item>
            <el-form-item label="朝向" prop="orientation">
              <el-radio-group v-model="registerForm.orientation">
                <el-radio label="东"></el-radio>
                <el-radio label="南"></el-radio>
                <el-radio label="西"></el-radio>
                <el-radio label="北"></el-radio>
                <el-radio label="东南"></el-radio>
                <el-radio label="东北"></el-radio>
                <el-radio label="西南"></el-radio>
                <el-radio label="西北"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="楼层" prop="floor">
              <el-input v-model.number="registerForm.floor"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="装修" prop="decoration">
              <el-select v-model="registerForm.decoration" placeholder="请选择">
                <el-option label="毛坯" value="毛坯"></el-option>
                <el-option label="简装" value="简装"></el-option>
                <el-option label="精装" value="精装"></el-option>
                <el-option label="豪装" value="豪装"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="价格" prop="price">
              <el-input v-model.number="registerForm.price" suffix="元/月"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <!-- 房源位置信息 -->
      <el-card class="card">
        <div slot="header" class="card-header">房源位置信息</div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="所在省" prop="province">
              <el-select v-model="registerForm.province" placeholder="请选择">
                <el-option v-for="province in provinces" :key="province" :label="province" :value="province"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在市" prop="city">
              <el-select v-model="registerForm.city" placeholder="请选择">
                <el-option v-for="city in cities" :key="city" :label="city" :value="city"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在区" prop="district">
              <el-select v-model="registerForm.district" placeholder="请选择">
                <el-option v-for="district in districts" :key="district" :label="district" :value="district"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="街道" prop="street">
              <el-input v-model="registerForm.street"></el-input>
            </el-form-item>
            <el-form-item label="小区名称" prop="community">
              <el-input v-model="registerForm.community"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="address">
              <el-input v-model="registerForm.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <!-- 房源图片信息 -->
      <el-card class="card">
        <div slot="header" class="card-header">房源图片信息</div>
        <el-form-item label="房屋内照片" prop="interiorPhotos">
          <el-upload
            class="upload"
            action="#"
            :show-file-list="false"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload">
            <img v-if="registerForm.interiorPhotos" :src="registerForm.interiorPhotos" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="房屋外照片" prop="exteriorPhotos">
          <el-upload
            class="upload"
            action="#"
            :show-file-list="false"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload">
            <img v-if="registerForm.exteriorPhotos" :src="registerForm.exteriorPhotos" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="周边环境照片" prop="environmentPhotos">
          <el-upload
            class="upload"
            action="#"
            :show-file-list="false"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload">
            <img v-if="registerForm.environmentPhotos" :src="registerForm.environmentPhotos" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-card>

      <!-- 房源设施信息 -->
      <el-card class="card">
        <div slot="header" class="card-header">房源设施信息</div>
        <el-form-item label="房屋内设施" prop="interiorFacilities">
          <el-checkbox-group v-model="registerForm.interiorFacilities">
            <el-checkbox label="床"></el-checkbox>
            <el-checkbox label="沙发"></el-checkbox>
            <el-checkbox label="电视"></el-checkbox>
            <el-checkbox label="衣柜"></el-checkbox>
            <el-checkbox label="书桌"></el-checkbox>
            <el-checkbox label="空调"></el-checkbox>
            <el-checkbox label="热水器"></el-checkbox>
            <el-checkbox label="洗衣机"></el-checkbox>
            <el-checkbox label="冰箱"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="周边配套设施" prop="surroundingFacilities">
          <el-select v-model="registerForm.surroundingFacilities" multiple placeholder="请选择">
            <el-option label="超市" value="超市"></el-option>
            <el-option label="医院" value="医院"></el-option>
            <el-option label="学校" value="学校"></el-option>
            <el-option label="公园" value="公园"></el-option>
            <el-option label="商场" value="商场"></el-option>
          </el-select>
        </el-form-item>
      </el-card>

      <!-- 房源描述信息 -->
      <el-card class="card">
        <div slot="header" class="card-header">房源描述信息</div>
        <el-form-item label="房屋特点" prop="features">
          <el-input type="textarea" v-model="registerForm.features"></el-input>
        </el-form-item>
        <el-form-item label="优点" prop="advantages">
          <el-input type="textarea" v-model="registerForm.advantages"></el-input>
        </el-form-item>
        <el-form-item label="缺点" prop="disadvantages">
          <el-input type="textarea" v-model="registerForm.disadvantages"></el-input>
        </el-form-item>
      </el-card>

      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        houseType: '',
        area: '',
        orientation: '',
        floor: '',
        decoration: '',
        price: '',
        province: '',
        city: '',
        district: '',
        street: '',
        community: '',
        address: '',
        interiorPhotos: '',
        exteriorPhotos: '',
        environmentPhotos: '',
        interiorFacilities: [],
        surroundingFacilities: [],
        features: '',
        advantages: '',
        disadvantages: ''
      },
      registerRules: {
        houseType: [{ required: true, message: '请选择房屋类型', trigger: 'change' }],
        area: [{ required: true, message: '请输入面积', trigger: 'blur' }],
        orientation: [{ required: true, message: '请选择朝向', trigger: 'change' }],
        floor: [{ required: true, message: '请输入楼层', trigger: 'blur' }],
        decoration: [{ required: true, message: '请选择装修', trigger: 'change' }],
        price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
        province: [{ required: true, message: '请选择所在省', trigger: 'change' }],
        city: [{ required: true, message: '请选择所在市', trigger: 'change' }],
        district: [{ required: true, message: '请选择所在区', trigger: 'change' }],
        street: [{ required: true, message: '请输入街道', trigger: 'blur' }],
        community: [{ required: true, message: '请输入小区名称', trigger: 'blur' }],
        address: [{ required: true, message: '请输入详细地址', trigger: 'blur' }]
      },
      provinces: ['北京市', '上海市', '天津市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'],
      cities: [],
      districts: []
    }
  },
  methods: {
    // 提交表单
    submitForm() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          console.log(this.registerForm)
          // TODO: 提交表单
        } else {
          console.log('表单验证失败')
          return false
        }
      })
    },
    // 上传成功回调
    handleUploadSuccess(res, file) {
      console.log(res)
      console.log(file)
      // TODO: 处理上传成功后的回调
    },
    // 上传前校验
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
        return false
      }
      return true
    },
    // 根据省份获取城市列表
    getCities(province) {
      // TODO: 根据省份获取城市列表
    },
    // 根据城市获取区县列表
    getDistricts(city) {
      // TODO: 根据城市获取区县列表
    }
  },
  watch: {
    // 监听省份变化
    'registerForm.province'(val) {
      this.getCities(val)
      this.registerForm.city = ''
      this.registerForm.district = ''
    },
    // 监听城市变化
    'registerForm.city'(val) {
      this.getDistricts(val)
      this.registerForm.district = ''
    }
  }
}
</script>

<style>
.register-container {
  width: 80%;
  margin: 0 auto;
}

.card {
  margin-bottom: 20px;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
}
</style>
