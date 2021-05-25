<template>
  <div class="group-container">
    <el-page-header
      @back="goBack"
      content="分组详情"
      style="margin:15px 0"
    ></el-page-header>
    <el-table
      :data="groupList"
      class="loading-area"
      style="width: 80%;margin:0 auto"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            :data="props.row.students"
            class="loading-area"
            style="width: 100%"
            border
          >
            <el-table-column
              align="center"
              prop="studentId"
              label="ID"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="studentName"
              label="姓名"
            ></el-table-column>
            <el-table-column align="center" label="总分">
              <template slot-scope="scope">
                <el-popover placement="top" trigger="hover" content="哈哈哈">
                  <el-table :data="scope.row.detailScore">
                    <el-table-column
                      prop="description"
                      label="详细"
                    ></el-table-column>
                    <el-table-column
                      property="score"
                      label="分数"
                    ></el-table-column>
                    <el-table-column
                      property="weight"
                      label="权重"
                    ></el-table-column>
                  </el-table>
                  <span slot="reference">
                    {{ scope.row.totalScore / 100 }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="group.id"
        label="ID"
        width="50"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="group.groupName"
        label="小组名称"
      ></el-table-column>
      <el-table-column align="center" label="创建日期">
        <template slot-scope="scope">
          {{ new Date(scope.row.group.createTime).toLocaleString() }}
        </template>
      </el-table-column>
    </el-table>
    <div class="group-footer">
      <Pagination
        :total="total"
        :pageSize="10"
        @changePage="changeCurrentPage"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Group',
  data() {
    return {}
  },
  components: {
    Pagination,
  },
  computed: {
    ...mapState({
      courseId: state => state.course.courseId,
      groupList: state => state.group.groupList,
      total: state => state.group.totalGroups,
    }),
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(['getGroup']),
    fetchData(query) {
      const payload = {
        courseId: this.courseId,
        query,
      }
      this.getGroup(payload)
    },
    goBack() {
      this.$emit('backCourseView')
    },
    changeCurrentPage(page) {
      const query = {
        current: page,
      }
      this.fetchData(query)
    },
  },
}
</script>

<style lang="scss" scoped>
.group {
  &-container {
    .el-table__expanded-cell {
      padding: 20px !important;
    }
  }
  &-footer {
    text-align: center;
    margin: 30px auto;
  }
}
</style>
