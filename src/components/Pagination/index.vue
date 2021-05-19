<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    :hide-on-single-page="true"
    @current-change="changePage"
  ></el-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    changePage(currentPage) {
      this.$emit('changePage', currentPage)
    },
  },
}
</script>

<style lang="scss" scoped></style>
