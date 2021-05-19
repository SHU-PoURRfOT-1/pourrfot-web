<template>
  <div class="dashboard-container">
    <p class="dashboard-text">这是后台管理首页</p>
    <p class="dashboard-text">暂时先空着 一般用于引导或者放一些介绍的内容</p>

    <div class="info" v-if="userInfo">
      <p>你登录的身份是 {{ userInfo.role }}</p>
      <p>你的登录名是 {{ userInfo.username }}</p>
      <p>你的昵称是 {{ userInfo.nickname }}</p>
      <p>你的性别是 {{ userInfo.sex }}</p>
    </div>
    <div class="info" v-else>你还没登录</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
    }),
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.info {
  font-size: 1.5rem;
  p {
    margin-top: 20px;
  }
}
</style>
