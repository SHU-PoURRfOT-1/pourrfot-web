<template>
  <div class="dashboard-container">
    <Divider :content="title" />
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card dashboard-user">
          <el-avatar
            shape="circle"
            :size="200 * fontSize"
            :src="url"
          ></el-avatar>
          <p :style="{ fontSize: 2 * fontSize + 'rem' }">
            欢迎您~{{ userInfo.nickname }}
            <i
              :class="classObj"
              :style="{ color: userInfo.sex === 'female' ? 'pink' : 'blue' }"
            ></i>
            <span>{{ userRole }}</span>
          </p>
          <div class="card-footer">
            <span>你本次登录的用户名是：{{ userInfo.username }}</span>
          </div>
        </el-card>
        <div class="timeline-container">
          <el-timeline>
            <el-timeline-item
              timestamp="2021/5/12"
              placement="top"
              type="success "
              size="large"
            >
              <el-card :body-style="{ fontSize: 1.25 * fontSize + 'rem' }">
                <h4>讲课</h4>
                <p>算了还是先讲讲课吧</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item
              timestamp="2021/5/19"
              placement="top"
              type="warning "
              size="large"
            >
              <el-card :body-style="{ fontSize: 1.25 * fontSize + 'rem' }">
                <h4>汇报总结项目</h4>
                <p>重点是注意讲清楚项目管理过程！！</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item
              timestamp="2021/5/26"
              placement="top"
              type="danger "
              size="large"
            >
              <el-card :body-style="{ fontSize: 1.25 * fontSize + 'rem' }">
                <h4>项目演示</h4>
                <p>我猜他们也做不完 嘿嘿</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <el-col :span="16">
        <el-calendar v-model="date"></el-calendar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Divider from '@/components/Divider'
import { mapState } from 'vuex'
const role = {
  admin: '管理员',
  teacher: '老师',
  student: '同学',
}
export default {
  name: 'Dashboard',
  data() {
    return {
      title: '首页',
      url: require('../../assets/images/cat.jpg'),
      date: new Date(),
    }
  },
  components: {
    Divider,
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      fontSize: state => state.app.fontSize,
    }),
    classObj() {
      return this.userInfo.sex === 'female' ? 'el-icon-female' : 'el-icon-male'
    },
    userRole() {
      return role[this.userInfo.role]
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-user {
    text-align: center;
    .card-footer {
      font-size: 0.8rem;
      text-align: right;
      color: #ccc;
    }
  }
}
.timeline-container {
  margin-top: 20px;
}
</style>
