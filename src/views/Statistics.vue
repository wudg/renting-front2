<template>
  <div class="rent-statistics">
    <!-- 租房数量统计图表 -->
    <div class="chart-container">
      <div class="chart-title">租房数量统计</div>
      <div class="chart-wrapper">
        <div ref="rentNumChart" class="chart"></div>
      </div>
    </div>
    <!-- 租金收入统计图表 -->
    <div class="chart-container">
      <div class="chart-title">租金收入统计</div>
      <div class="chart-wrapper">
        <div ref="rentIncomeChart" class="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'

export default {
  name: 'Statistics',
  data() {
    return {
      // 初始化租房数量统计数据
      rentNumData: [
        { name: '北京', value: 100 },
        { name: '上海', value: 80 },
        { name: '广州', value: 60 },
        { name: '深圳', value: 50 },
        { name: '杭州', value: 40 }
      ],
      // 初始化租金收入统计数据
      rentIncomeData: [
        { name: '北京', value: 50000 },
        { name: '上海', value: 40000 },
        { name: '广州', value: 30000 },
        { name: '深圳', value: 20000 },
        { name: '杭州', value: 10000 }
      ]
    }
  },
  mounted() {
    // 渲染租房数量统计图表
    this.renderRentNumChart();
    // 渲染租金收入统计图表
    this.renderRentIncomeChart();
  },
  methods: {
    // 渲染租房数量统计图表
    renderRentNumChart() {
      const chart = echarts.init(this.$refs.rentNumChart);
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}套 ({d}%)'
        },
        series: [
          {
            name: '租房数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: this.rentNumData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      chart.setOption(option);
    },
    // 渲染租金收入统计图表
    renderRentIncomeChart() {
      const chart = echarts.init(this.$refs.rentIncomeChart);
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}元 ({d}%)'
        },
        series: [
          {
            name: '租金收入',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: this.rentIncomeData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      chart.setOption(option);
    }
  }
}
</script>

<style scoped>
.rent-statistics {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}

.chart-container {
  width: 48%;
  margin-bottom: 20px;
}

.chart-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.chart-wrapper {
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
