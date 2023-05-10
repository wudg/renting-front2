<template>
  <div class="landlord-profile">
    <div class="profile-header">
      <div class="avatar">
        <img :src="landlord.avatar" alt="avatar">
      </div>
      <div class="profile-info">
        <h2>{{ landlord.name }}</h2>
        <p>{{ landlord.email }}</p>
        <p>{{ landlord.phone }}</p>
        <el-button type="primary" icon="el-icon-edit" @click="editProfile">编辑</el-button>
      </div>
    </div>
    <div class="profile-body">
      <h3>我的房源</h3>
      <el-table :data="houses" style="width: 100%">
        <el-table-column prop="name" label="房源名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="编辑基本信息" :visible.sync="dialogVisible" width="30%">
      <el-form :model="landlordForm" ref="landlordForm" :rules="landlordRules" label-width="80px" style="margin-top: 20px;">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="landlordForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="landlordForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="landlordForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      landlord: {
        name: '张三',
        email: 'zhangsan@example.com',
        phone: '18888888888',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      houses: [
        {
          name: '整租 · 精装修两居室',
          address: '上海市浦东新区张江镇',
          price: '2500元/月',
          status: '已出租'
        },
        {
          name: '合租 · 精装修主卧',
          address: '上海市浦东新区张江镇',
          price: '1500元/月',
          status: '未出租'
        }
      ],
      dialogVisible: false,
      landlordForm: {
        name: '',
        email: '',
        phone: '',
        avatar: ''
      },
      landlordRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的电话号码格式', trigger: ['blur', 'change'] }
        ]
      },
      imageUrl: ''
    }
  },
  methods: {
    editProfile() {
      this.dialogVisible = true;
      this.landlordForm = Object.assign({}, this.landlord);
    },
    submitForm() {
      this.$refs.landlordForm.validate(valid => {
        if (valid) {
          this.landlord = Object.assign({}, this.landlordForm);
          this.dialogVisible = false;
          this.$message.success('保存成功');
        } else {
          return false;
        }
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        return false;
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
        return false;
      }
      return true;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    }
  }
}
</script>

<style scoped>
.landlord-profile {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.profile-header {
  display: flex;
  align-items: center;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profile-info {
  margin-left: 20px;
}
.profile-body {
  margin-top: 30px;
}
</style>
