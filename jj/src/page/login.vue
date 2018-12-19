<template>
  <section class="login-wrap">
    <Form ref='form' class="login-form">
      <h3>系统登录</h3>
      <div class="fields">
          <el-input
            class="field"
            v-model="admin.account"
            placeholder="账号" 
          >
          </el-input>
<vuc-input type='rect' v-model="admin.account"></vuc-input>
          <el-input
            class="field"
            v-model="admin.password"
            type="password" 
            placeholder="密码" 
            @keyup.native.enter="check"
          >
          </el-input>
          <el-checkbox v-model="remember" class="save-account">记住账号</el-checkbox>
      </div>
      <div class="submit">
        <el-button
          style='width:100%;' 
          @click.native="adminlogin"
          type="primary"
          :loading="loading"
        >
          {{ loading ? '登录中' : '登录' }}
        </el-button>
      </div>
      <div class="other">
        <el-button type="text"  class='blacktext'>忘记密码</el-button> | <el-button type="text"  class='blacktext' @click="register">注册用户</el-button>
      </div>
      <div class="other">
       第三方登录
      </div>
      <div class="other">
        <div class='qq' ></div>  <div class='wx' ></div>
      </div>
    </Form>
     <canvas id='canvas'></canvas>
  </section>
  
</template>

<script>
  import {token} from '@/service/getData'
  import {setStore} from '@/config/util'
  import { render } from '@/config/canvas'
  import {register,login} from '@/service/getData'
  import {mapMutations, mapState} from 'vuex'
  export default {
    data () {
      return {
        admin: {
          account: '',
          password: ''
        },
        remember: true,
        loading: false
      }
    },
    computed:{
      ...mapState([
          'showAlert', 'alertText'
      ]), 
    },
    methods: {
    ...mapMutations([
      'showAlerttext','setuserinfo'
    ]),
    async register(){
        if (this.admin.account === '') {
          this.showAlerttext("账号不能为空")
          return
        }
        if (this.admin.password === '') {
          this.showAlerttext("密码不能为空")
          return
        } else if (this.admin.password.length < 6) {
          this.showAlerttext("密码不能少于6个字符")
          return
        } else {
          await register({user_name:this.admin.account,password:this.admin.password})
        }
      },
      render: render,
      async adminlogin () {
        if (this.admin.account === '') {
          this.showAlerttext("账号不能为空")
          return
        }
        if (this.admin.password === '') {
          this.showAlerttext("密码不能为空")
          return
        } else if (this.admin.password.length < 6) {
          this.showAlerttext("密码不能少于6个字符")
          return
        } else {
          this.loading = true
          let res = await login({user_name:this.admin.account,password:this.admin.password})
          console.log(res,res.status)
          if (
            res.status == 0
          ) {
            this.loading = false
            this.showAlerttext("用户名或密码错误")
            return
          } else {
            var usertoken = await token({user_name:this.admin.account})
            console.log(usertoken)
            setStore("token",usertoken.token)
            this.loading = false
            this.setuserinfo({user_name:this.admin.account})
            this.$router.push({path:'/index'});
            //this.showAlerttext("登录成功")
          }
        }
      }
    },
    // watch: {
    //   '$route' () {
    //     if (this.$route.name === 'login') {
    //       this.render()
    //     }
    //   }
    // },
    created () {
    },
    mounted () {
      this.render()
    }
  }
</script>

<style>
  .login-wrap {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: white;
  }
  .login-wrap>canvas {
      width: 100%;
      height: 100%;
            position:fixed;
            top:0;
            left:0;
            z-index: -1;
            opacity: 0.5;
    }
  .login-form {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 16px 20px 0;
    width: 360px;
    height: 350px;
    font-size: 14px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 2px 2px 32px 1px rgba(0, 0, 0, .45);
    opacity: .75;
    }
    .login-form  h3 {
      margin-top: 0;
      margin-bottom: 0;
      padding: 12px 0;
      font-weight: normal;
      font-size: 22px;
      text-align: center;
    }
    .login-form .field {
      display: block;
      margin: 0 auto;
      padding: 6px 0;
    }
    .login-form .submit {
      padding: 12px 0;
    }
    .login-form .other{
      margin:auto;
      text-align: center;
    }
    .login-form .blacktext{
      color:black;
      margin:auto 0;
    }
  .login-form .qq{
    margin-top:10px;
    width:33px;
    height:35px;
    background-image: url(QQ.png);
    background-repeat:no-repeat;
    border:none;
    cursor:pointer;
    display:inline-block;
  }
   .login-form .qq:hover{
     background-image: url(QQ_91.png);
     
   }
   .login-form .wx:hover{
     background-image: url(wei2.png);
   }
  .login-form .wx{
    margin-top:10px;
    margin-left:10px;
    width:34px;
    height:34px;
    background-image: url(wei.png);
    background-repeat:no-repeat;
    border:none;
    cursor:pointer;
    display:inline-block;
  }
</style>
