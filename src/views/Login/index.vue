<template>
  <div class="bg-image">
    <div class="mask"></div>
    <section class="ftco-section">
      <div class="container">
        <div class="content-flex">
          <div class="header-wrapper text-center">
            <h2 class="heading-section">SHU老年教师工作平台</h2>
          </div>
        </div>
        <div class="content-flex">
          <div class="login-wrapper">
            <div class="login-wrap">
              <h3 class="login-small-title text-center">PoURRfOT</h3>
              <div class="signin-form">
                <div class="form-group">
                  <form action="#">
                    <input
                      type="text"
                      v-model="username"
                      class="form-control"
                      placeholder="Username"
                      autocomplete
                      required
                    />
                  </form>
                </div>
                <div class="form-group">
                  <form action="#">
                    <input
                      v-if="isShowPassword"
                      type="text"
                      v-model="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete
                      required
                    />
                    <input
                      v-else
                      type="password"
                      v-model="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete
                      required
                    />
                  </form>
                  <span
                    class="field-icon"
                    @click="isShowPassword = !isShowPassword"
                  >
                    <svg-icon v-if="isShowPassword" icon-class="eye" />
                    <svg-icon v-else icon-class="eye-slash" />
                  </span>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary"
                    @click="submitLogin"
                    v-loading.fullscreen.lock="loading"
                    element-loading-background="rgba(0, 0, 0, 0.6)"
                  >
                    Sign in
                  </button>
                </div>
                <div class="form-group" style="display:flex">
                  <div class="w-l">
                    <label
                      @click="isChecked = !isChecked"
                      class="checkbox-wrap checkbox-primary"
                      :class="{ isChecked: isChecked }"
                    >
                      Remember Me
                      <span class="checkmark" v-show="isChecked">
                        <svg-icon icon-class="checkbox" />
                      </span>
                    </label>
                  </div>
                  <div class="w-r text-right">
                    <a href="#" style="color: #fff">Forget Password</a>
                  </div>
                </div>
              </div>
              <p class="text-center">&mdash; Or Sign In With &mdash;</p>
              <div class="social text-center">
                <a href="#" class="mr-1">
                  <span class="icon-logo">
                    <svg-icon icon-class="wechat" />
                  </span>
                  WeChat
                </a>
                <a href="#" class="ml-1">
                  <span class="icon-logo">
                    <svg-icon icon-class="qq" />
                  </span>
                  QQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      username: '20721647',
      password: '123456789',
      isShowPassword: false,
      isChecked: false,
      loading: false,
    }
  },
  // computed: {
  //   ...mapActions(['login']),
  // },
  methods: {
    submitLogin() {
      this.loading = true
      setTimeout(() => {
        // this.login().then(() => {
        this.loading = false
        this.$router.push({ path: '/' })
        // })
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
$primary: #fbceb5;
$white: #fff;
$black: #000;
%padding-15 {
  padding-left: 15px;
  padding-right: 15px;
}

.bg-image {
  height: 100vh;
  background: center center url('../../assets/images/bg.jpg') no-repeat;
  background-size: cover;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  background: #000;
  opacity: 0.3;
}
.ftco-section {
  padding: 7em 0;
  @media (max-width: 576px) {
    padding: 5em 0;
  }
  @media (max-width: 375px) {
    padding: 3em 0;
  }
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  @extend %padding-15;
  .text-center {
    text-align: center;
  }
}
.content-flex {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -15px;
  margin-left: -15px;
}
.header-wrapper {
  @extend %padding-15;
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 3rem;
  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
  @media (max-width: 375px) {
    margin-bottom: 0;
  }
}
//HEADING SECTION
.heading-section {
  font-size: 28px;
  color: $white;
}
.login-wrapper {
  @extend %padding-15;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  @media (max-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 66.7%;
    max-width: 66.7%;
  }
  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.login-wrap {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  h3 {
    font-weight: 300;
    color: $white;
    line-height: 1.5;
  }
  .login-small-title {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    font-weight: 400;
    @media (max-width: 375px) {
      margin-bottom: 1rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }
  .social {
    width: 100%;
    display: flex;
    a {
      width: 100%;
      display: block;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: $black;
      background: $white;
      &:hover {
        background: $black;
        color: $white;
        border-color: $black;
      }
    }
    .mr-1 {
      margin-right: 0.25rem;
    }
    .ml-1 {
      margin-left: 0.25rem;
    }
  }
}
.form-group {
  position: relative;
  margin-bottom: 1rem;
  .w-l,
  .w-r {
    width: 50%;
  }
  @media (max-width: 890px) {
    .w-l {
      width: 60%;
    }
    .w-r {
      width: 40%;
    }
  }
  .text-right {
    text-align: right;
  }
}
.field-icon {
  position: absolute;
  font-size: 20px;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.9);
}
//FORM CONTROL
.form-control {
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  height: 50px;
  color: rgba(255, 255, 255, 1) !important;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 40px;
  padding: 0.375rem 1.25rem;
  transition: all ease 0.3s;
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(255, 255, 255, 0.8) !important;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(255, 255, 255, 0.8) !important;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(255, 255, 255, 0.8) !important;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(255, 255, 255, 0.8) !important;
  }
  &:hover,
  &:focus {
    background: transparent;
    outline: none;
    box-shadow: none;
    border-color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    border-color: rgba(255, 255, 255, 0.4);
  }
}
//CHECKBOX STYLE
.checkbox-wrap {
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all ease 0.3s;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: -18%;
  left: 0;
  font-size: 20px;
  transition: all ease 0.3s;
}
.checkbox-primary {
  color: $white;
  &.isChecked {
    color: $primary;
  }
}
//BUTTON
.btn {
  cursor: pointer;
  border-radius: 40px;
  box-shadow: none !important;
  font-size: 15px;
  text-transform: uppercase;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  &.btn-primary {
    background: $primary !important;
    border: 1px solid $primary !important;
    color: $black !important;
    &:hover {
      border: 1px solid $primary;
      background: transparent;
      color: $primary;
    }
  }
}
</style>
