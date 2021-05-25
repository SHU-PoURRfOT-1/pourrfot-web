<template>
  <div class="project-container">
    <Divider :content="title" />
    <el-table :data="projectList" style="width: 100%" class="loading-area">
      <el-table-column
        align="center"
        prop="projectCode"
        label="项目代码"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="projectName"
        label="项目名称"
      ></el-table-column>
      <el-table-column align="center" label="创建时间">
        <template slot-scope="scope">
          {{ new Date(scope.row.createTime).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="250">
        <template>
          <el-button size="mini" type="primary">
            编辑
          </el-button>
          <el-button size="mini" type="danger">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Divider from '@/components/Divider'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Project',
  components: {
    Divider,
  },
  data() {
    return {
      title: '项目信息',
    }
  },
  computed: {
    ...mapState({
      projectList: state => state.project.projectList,
    }),
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(['getProject']),
    fetchData() {
      this.getProject()
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  &-container {
    padding: 20px 50px;
  }
}
</style>
