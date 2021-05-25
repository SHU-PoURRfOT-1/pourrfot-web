<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <div>
      <svg-icon class-name="size-icon" icon-class="size" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item of sizeOptions"
        :key="item.value"
        :disabled="size === item.value"
        :command="item.value"
      >
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SizeSelect',
  data() {
    return {
      sizeOptions: [
        { label: '大', value: 'default' },
        { label: '默认', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '迷你', value: 'mini' },
      ],
      fontSizeOptions: {
        default: 1.25,
        medium: 1,
        small: 0.8,
        mini: 0.6,
      },
    }
  },
  computed: {
    ...mapState({
      size: state => state.app.size,
    }),
  },
  methods: {
    ...mapActions(['setSize', 'setFontSize']),
    handleSetSize(size) {
      this.$ELEMENT.size = size
      this.setSize(size)
      setTimeout(() => {
        this.setFontSize(this.fontSizeOptions[size])
      }, 500)
      this.refreshView()
      this.$message({
        message: '切换成功',
        type: 'success',
      })
    },
    refreshView() {
      const { fullPath } = this.$route

      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath,
        })
      })
    },
  },
}
</script>
