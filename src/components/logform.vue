<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="email"
                 v-model="usernameModel" placeholder="请输入用户名" required>
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
                 v-model="passwordModel" placeholder="请输入密码" required>
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: '',
      }
    },
    methods: {
      onLogin() {
        this.$http.get('api/login').then(
          (res) => {
            this.$emit('on-log', res.data)
          },
          (error) => {
            console.log(error)
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
