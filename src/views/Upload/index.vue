<template>
  <div class="upload">
    <Divider :content="title" />
    <div class="upload-wrapper">
      <el-upload
        class="upload-area"
        drag
        ref="upload"
        action="#"
        :auto-upload="false"
        :limit="1"
        :on-exceed="handleExceed"
        :before-remove="beforeRemove"
        :on-change="onChange"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png/pdf/word/excel文件，且不超过500M
        </div>
      </el-upload>
      <div class="upload-form">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          label-position="left"
        >
          <el-form-item label="文件名" required>
            <el-input
              v-model="form.name"
              placeholder="文件名不能带空格"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="标签" required>
            <el-select
              v-model="form.metadata"
              value-key="type"
              placeholder="请选择文件标签"
              clearable
              multiple
            >
              <el-option
                :key="item.type"
                :label="item.label"
                :value="item"
                v-for="item in tagsOptions"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" required>
            <el-select
              v-model="form.resourceType"
              placeholder="请选择文件来源"
              clearable
              @change="getRegion"
              class="select-mb"
            >
              <el-option label="课程" value="courses"></el-option>
              <el-option label="项目" value="projects"></el-option>
              <el-option label="小组" value="groups"></el-option>
              <el-option label="消息" value="messages"></el-option>
              <el-option label="其他" value="transactions"></el-option>
            </el-select>
            <span class="line">/</span>
            <el-select v-model="form.resourceId" :disabled="hasItem" clearable>
              <el-option
                :key="item.id"
                :label="item.courseName"
                :value="item.id"
                v-for="item in courseList"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleUpload">上传</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from '@/components/Divider'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Upload',
  components: {
    Divider,
  },
  data() {
    return {
      title: '上传文件',
      form: {
        name: '',
        resourceType: '',
        resourceId: '',
        metadata: [],
      },
      tagsOptions: [
        { type: 'info', label: '一般' },
        { type: 'success', label: '留存' },
        { type: 'warning', label: '需要批阅' },
        { type: 'danger', label: '加急' },
      ],
    }
  },
  computed: {
    ...mapState({
      courseList: state => state.course.courseList,
      originOssUrl: state => state.file.originOssUrl,
    }),
    hasItem() {
      return Boolean(!this.courseList.length)
    },
  },
  methods: {
    ...mapActions(['getCourse', 'preUploadFile', 'uploadFile']),
    getRegion(value) {
      if (value === 'courses' && this.hasItem) {
        this.getCourse()
      }
    },
    async handleUpload() {
      const { uploadFiles } = this.$refs.upload
      if (!uploadFiles || !uploadFiles.length) {
        return this.$message.warning('请选择文件上传')
      }
      //  validate the form
      for (let key in this.form) {
        if (!this.form[key]) {
          return this.$message.warning('请填写完整信息')
        }
      }
      let fd = new FormData()
      const file = uploadFiles[0]
      fd.append('file', file.raw)
      await this.preUploadFile(fd)
      if (!this.originOssUrl) {
        return this.$message.error('上传出错！')
      }
      const payload = {
        originOssUrl: this.originOssUrl,
        ...this.form,
      }
      console.log(payload)
      this.uploadFile(payload).then(() => {
        this.$message.success('上传成功')
        this.$router.push({ path: '/file/index' })
      })
    },
    handleExceed() {
      this.$message.warning('每次上传限制选择 1 个文件')
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`).then(() => {
        this.form.name = ''
      })
    },
    onChange(file) {
      this.form.name = file.name
    },
  },
}
</script>

<style lang="scss" scoped>
.upload {
  padding: 20px 50px;
  &-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px;
  }
  &-area {
    flex: 1;
    text-align: center;
  }
  &-form {
    flex: 2;
    width: 300px;
    margin-left: 20px;
    margin-top: 20px;
    .el-input {
      width: 350px !important;
      @media (max-width: 576px) {
        width: 200px !important;
      }
    }
    .line {
      padding: 10px;
      text-align: center;
    }
    .select-mb {
      margin-bottom: 20px !important;
      @media (max-width: 539px) {
        margin-bottom: unset !important;
      }
    }
  }
}
</style>
