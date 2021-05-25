<template>
  <div class="file-container">
    <Divider :content="title" />
    <el-table :data="fileList" class="loading-area" style="width: 100%" border>
      <el-table-column
        align="center"
        prop="id"
        label="ID"
        min-width="40"
      ></el-table-column>
      <el-table-column align="center" label="上传时间" min-width="180">
        <template slot-scope="scope">
          {{ new Date(scope.row.createTime).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="owner.nickname"
        label="上传者"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="文件名称"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        align="center"
        prop="resource.title"
        show-overflow-tooltip
        label="来源"
      ></el-table-column>
      <el-table-column align="center" label="标签">
        <template slot-scope="scope">
          <el-tag
            v-for="item in scope.row.metadata"
            :key="item.label"
            :type="item.type"
            effect="dark"
          >
            {{ item.label || '无' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="120">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="download(scope.row.downloadUri)"
          >
            下载
          </el-button>
          <el-button
            type="danger"
            size="mini"
            circle
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { domain } from '@/settings'
import Divider from '@/components/Divider'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'File',
  data() {
    return {
      title: '文件列表',
    }
  },
  components: {
    Divider,
  },
  computed: {
    ...mapState({
      fileList: state => state.file.fileList,
    }),
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(['getFile', 'downloadFile', 'deleteFile']),
    fetchData() {
      this.getFile()
    },
    download(url) {
      const downloadUrl = domain + url
      window.open(downloadUrl)
    },
    handleDelete(index, id) {
      this.$confirm('确定删除该文件吗?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const payload = { index, id }
        this.deleteFile(payload).then(() => {
          this.$message({
            message: '删除成功！',
            type: 'success',
            duration: 3 * 1000,
          })
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.file {
  &-container {
    padding: 20px 50px;
    .el-tag + .el-tag {
      margin-top: 10px !important;
      margin-left: 10px !important;
    }
  }
}
</style>
