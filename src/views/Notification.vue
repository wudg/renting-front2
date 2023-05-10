<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>消息通知</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleClearAll">清空全部</el-button>
      </div>
      <div v-if="notifications.length === 0" style="text-align: center; padding: 20px;">暂无消息</div>
      <el-timeline>
        <el-timeline-item v-for="(item, index) in notifications" :key="index" :timestamp="item.time">
          <el-card>
            <div slot="header">
              <span>{{ item.title }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleClear(index)">清空</el-button>
            </div>
            <div>{{ item.content }}</div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          title: '系统消息',
          content: '恭喜您成功注册租房系统！',
          time: '2021-09-01 10:00:00'
        },
        {
          title: '租房消息',
          content: '您的房间已经被租出去了。',
          time: '2021-09-02 11:30:00'
        },
        {
          title: '系统消息',
          content: '您的账户余额不足，请及时充值。',
          time: '2021-09-03 12:00:00'
        }
      ]
    }
  },
  methods: {
    handleClear(index) {
      this.notifications.splice(index, 1);
    },
    handleClearAll() {
      this.notifications = [];
    }
  }
}
</script>
