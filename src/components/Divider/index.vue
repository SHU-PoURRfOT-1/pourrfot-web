<template>
  <div class="divider-wrapper">
    <el-divider content-position="left">{{ content }}</el-divider>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.divider-wrapper {
  .el-divider__text {
    font-size: 16px !important;
  }
}
</style>
