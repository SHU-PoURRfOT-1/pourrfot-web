<template>
  <div class="course-container">
    <template v-if="isCourseView">
      <Divider :content="title" />
      <div class="course-operation">
        <el-button type="text" @click="createFormVisible = true">
          + 新增课程
        </el-button>
      </div>
      <el-table :data="courseData" style="width: 100%">
        <el-table-column
          align="center"
          prop="courseCode"
          label="课程代码"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="courseName"
          label="课程名称"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="classLocation"
          label="上课地点"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="classTime"
          label="上课时间"
        ></el-table-column>
        <el-table-column align="center" label="操作" width="250">
          <template slot-scope="scope">
            <el-button size="mini" @click="toGroupPage(scope.row.id)">
              查看分组
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="openDialog(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="新增课程"
        :visible.sync="createFormVisible"
        center
        @close="resetDialog"
      >
        <el-form :model="createForm">
          <el-form-item label="课程代码" required>
            <el-input
              v-model="createForm.courseCode"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="课程名称" required>
            <el-input
              v-model="createForm.courseName"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="上课地点" required>
            <el-input
              v-model="createForm.classLocation"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="上课时间" required>
            <el-input
              v-model="createForm.classTime"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="createFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleCreate(createForm)">
            确 定
          </el-button>
        </div>
      </el-dialog>
      <el-dialog title="修改课程信息" :visible.sync="editFormVisible" center>
        <el-form :model="editForm">
          <el-form-item label="课程代码">
            <el-input
              v-model="editForm.courseCode"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="课程名称">
            <el-input
              v-model="editForm.courseName"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="上课地点">
            <el-input
              v-model="editForm.classLocation"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="上课时间">
            <el-input
              v-model="editForm.classTime"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleEdit(clickIndex, editForm)">
            确 定
          </el-button>
        </div>
      </el-dialog>
    </template>
    <template v-else>
      <CourseGroup @backCourseView="isCourseView = true" />
    </template>
  </div>
</template>

<script>
import Divider from '@/components/Divider'
import CourseGroup from './Group'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'CourseInfo',
  components: {
    Divider,
    CourseGroup,
  },
  data() {
    return {
      title: '课程信息',
      editFormVisible: false,
      createFormVisible: false,
      isCourseView: true,
      clickIndex: 0,
      editForm: {
        courseCode: '',
        courseName: '',
        classLocation: '',
        classTime: '',
      },
      createForm: {
        courseCode: '',
        courseName: '',
        classLocation: '',
        classTime: '',
      },
      createFormReset: {
        courseCode: '',
        courseName: '',
        classLocation: '',
        classTime: '',
      },
    }
  },
  created() {
    if (this.courseData && this.courseData.length) return
    this.fetchData()
  },
  computed: {
    ...mapState({
      courseData: state => state.course.courseList,
      teacherId: state => state.user.userInfo.id,
    }),
  },
  methods: {
    ...mapMutations(['SET_COURSE_ID']),
    ...mapActions([
      'getCourse',
      'updateCourse',
      'createCourse',
      'deleteCourse',
    ]),
    fetchData() {
      this.getCourse()
    },
    handleDelete(index, id) {
      this.$confirm('确定删除该课程吗?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.deleteCourse({
            index,
            id,
          }).then(() => {
            this.$message({
              message: '删除成功！',
              type: 'success',
              duration: 3 * 1000,
            })
          })
        })
        .catch(() => {})
    },
    openDialog(index, row) {
      this.editFormVisible = true
      this.editForm = { ...row }
      this.clickIndex = index
      console.log(this.editForm)
    },
    handleEdit(index, data) {
      const payload = {
        index,
        data,
      }
      this.updateCourse(payload).then(() => {
        this.$message.success('更新成功')
        this.editFormVisible = false
      })
    },
    handleCreate(form) {
      const payload = {
        teacherId: this.teacherId,
        ...form,
      }
      for (let key in payload) {
        if (!payload[key]) {
          return this.$message.warning('请填写完整信息')
        }
      }
      this.createCourse(payload).then(() => {
        this.$message.success('添加成功')
        this.createFormVisible = false
      })
    },
    resetDialog() {
      this.createForm = { ...this.createFormReset }
    },
    toGroupPage(id) {
      this.SET_COURSE_ID(id)
      this.isCourseView = false
    },
  },
}
</script>

<style lang="scss" scoped>
.course {
  &-container {
    padding: 20px 50px;
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
