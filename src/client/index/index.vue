<template>
  <div class="index">
      <aside class="aside">
        <div v-for="item in $router.options.routes" v-if="item.content">
          <div v-for="child in item.children">
            <div v-for="grandson in child.children">
              <router-link :to="{path:item.path+'/'+child.path+'/'+grandson.path}" @click="() => changeComponentName(newComponentName)">
                {{grandson.tabs}}
              </router-link>
            </div>
          </div>
        </div>
        <!--<p>我是子组件：一个button</p>-->
        <!--<button @click="() => changeComponentName(newComponentName)">-->
          <!--把父组件的名称修改为：彭湖湾的组件-->
        <!--</button>-->
      </aside>
      <section class="section">
          <router-view></router-view>
      </section>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            haha:{},
            newComponentName: '彭湖湾的组件',
            // grandson:{
            //   tabs:[
            //     'aa',
            //     'bb',
            //     'cc'
            //   ]
            // }
          }
        },
        props: {
          changeComponentName: {
            type: Function,
            default: () => { }
          }
        },
        methods:{
          getTabs(){
            this.tabs=grandson.tabs;
            console.log(this.tabs);
          }

        },
        mounted(){
          this.getTabs();
        }
    }
</script>

<style scope lang="scss">
  @import '../../assets/scss/tyys.scss';
  @import '../../assets/scss/index.scss';
</style>
