<template>
  <div class="dashboard-container">
    <p class="dashboard-text">这是后台管理首页</p>
    <p class="dashboard-text">暂时先空着 一般用于引导或者放一些介绍的内容</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name']),
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
</style>
