<template>
  <div class="cp-container">
    <el-color-picker v-model="color" @change="changeColor"></el-color-picker>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ColorPicker',
  data() {
    return {}
  },
  computed: {
    color: {
      get() {
        return this.$store.state.app.bgColor
      },
      set(color) {
        this.$store.commit('SET_COLOR', color)
      },
    },
  },
  methods: {
    ...mapActions(['setColor']),
    changeColor(color) {
      this.setColor(color)
    },
  },
}
</script>

<style lang="scss" scoped>
.cp-container {
  padding-top: 5px !important;
}
</style>
