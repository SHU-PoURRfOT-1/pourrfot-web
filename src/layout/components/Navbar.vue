<template>
  <div class="navbar" :style="{ backgroundColor: bgColor }">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggle"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <ColorPicker id="color-picker" class="right-menu-item hover-effect" />
      </template>

      <template v-if="device !== 'mobile'">
        <el-tooltip content="字体切换" effect="dark" placement="bottom">
          <SizeSelect id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>

      <el-dropdown class="right-menu-item hover-effect" trigger="hover">
        <div class="avatar-wrapper">
          <i class="el-icon-user-solid" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/SHU-PoURRfOT-1">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="http://47.98.133.186/api/swagger-ui">
            <el-dropdown-item>API文档</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="handleLogout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import SizeSelect from '@/components/SizeSelect'
import ColorPicker from '@/components/ColorPicker'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    SizeSelect,
    ColorPicker,
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      avatar: state => state.user.avatar,
      bgColor: state => state.app.bgColor,
    }),
  },
  methods: {
    ...mapActions(['toggleSideBar', 'logout']),
    toggle() {
      this.toggleSideBar()
    },
    async handleLogout() {
      await this.logout()
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 18px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
  }
}
</style>
