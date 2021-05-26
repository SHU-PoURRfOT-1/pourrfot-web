<template>
  <div class="group-container">
    <el-page-header
      @back="goBack"
      content="分组详情"
      style="margin:15px 0"
    ></el-page-header>
    <div class="group-operation" v-permission="['teacher']">
      <el-button type="text" @click="createGroupVisible = true">
        + 添加分组
      </el-button>
    </div>
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
      <template v-if="checkPermission(['student'])">
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleJoin(scope.row)">
              加入分组
            </el-button>
            <el-button
              type="danger"
              size="small"
              @click="handleQuit(scope.row)"
            >
              退出分组
            </el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-dialog title="新增分组" :visible.sync="createGroupVisible" center>
      <el-form :model="groupForm">
        <el-form-item label="分组名称" required>
          <el-input
            v-model="groupForm.groupName"
            autocomplete="off"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createGroupVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreate(groupForm)">
          确 定
        </el-button>
      </div>
    </el-dialog>
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
import checkPermission from '@/utils/permission'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Group',
  data() {
    return {
      createGroupVisible: false,
      groupForm: {
        groupName: '',
      },
    }
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
    ...mapActions(['getGroup', 'createGroup']),
    fetchData(query) {
      const payload = {
        courseId: this.courseId,
        query,
      }
      this.getGroup(payload)
    },
    checkPermission(role) {
      return checkPermission(role)
    },
    handleCreate(form) {
      if (this.groupForm.groupName === '') {
        return this.$message.warning('请填写完整信息')
      }
      const payload = {
        courseId: this.courseId,
        ...form,
      }
      this.createGroup(payload).then(() => {
        this.$message.success('添加成功')
        this.fetchData()
        this.createGroupVisible = false
      })
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
    handleJoin() {},
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
  &-operation {
    margin: 20px;
    text-align: right;
  }
  &-footer {
    text-align: center;
    margin: 30px auto;
  }
}
</style>
