<template>
  <div id="header">
    <div class="header_logo_content">
      <div class="logo">
        <a href="">
          <img src='' alt="">
        </a>
      </div>
      <ul class="person_nav">
        <li class="login">
          <a href="">
            <img src="../assets/170417_super_vip.png" alt="">
            <span>188****5097@163.com</span>
            <i class="down"></i>
          </a>
        </li>
        <li class=".yixin_enter">
          <!--<a href="aa.html">ssss</a>-->
          <!--<router-link class="yixin" :to="{path:'/index/index'}">易信</router-link>-->
          <a href="">易信</a>
        </li>
        <li v-for="names in name">
          <a href="">{{names}}</a>
        </li>
      </ul>
      <div class="search_mail">
        <input type="text" placeholder="支持邮件全文搜索" class="mail">
        <i class="search_icon"></i>
        <a href="" class="enter">
          <i class="search_enter"></i>
        </a>
      </div>
    </div>
    <div class="header_tabs">
      <ul class="tabs">
        <li v-for="(item,index) in $router.options.routes">
          <!--{{item.name}}-->
          <span v-for="child in item.children" class="child_route">
            <router-link :to="{path:child.path}" :changeComponentName = "changeComponentName">
              {{child.tabs}}
              <!--{{componentName}}-->
              <!--<son  :changeComponentName = "changeComponentName"></son>-->
            </router-link>
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import index from '../client/index/index';
  export default {
    name:'headerr',
    data(){
      return{
        name:[],
        tab:[],
        aa:'777'
      }
    },
    methods:{
      getHeaderDate() {
        this.$http.get('../../static/headers.json')
          .then((response)=>{
            this.name=response.data.name;
          }).catch(error=>{
          console.log(error);
        })
      },
      getTabDate() {
        store.dispatch(action);
        this.$http.get('../../static/tabs.json')
          .then((response)=>{
            this.tab=response.data.tabs;
          }).catch(error=>{
          console.log(error);
        })
      },
      changeComponentName: function (newComponentName) {
        this.componentName = newComponentName
      }
    },
    components:{
      son: index
    },
    filter:{
      // tabsChanges(_path,_tabs){
      //   var(let i=1;i<this.$router.options.routes.length;i++){
      //     for(let j=0;j<this.$router.options.routers[0].children-length;j++){
      //       this.pathName=$router.options.
      //     }
      //
      //   }
      // }
    },
    mounted() {
      this.getHeaderDate();
      this.getTabDate();
      this.tabsChanges();
      //搜索框的动态效果
      $('.mail').focus(function(){
        $('.search_mail').css('opacity','0.8');
        $('.enter').css('display','block');
        $('.mail').attr('placeholder','');
      });
      $('.mail').blur(() => {
        $('.search_mail').css('opacity','0.5');
        $('.enter').css('display','none');
        $('.mail').attr('placeholder','支持邮件全文搜索');
      })
    }
  }
</script>

<style lang="scss" scope>
  @import '../assets/scss/tyys.scss';
  @import '../assets/scss/header.scss';
</style>
