<template>
	<div id="admin">
    <headerr></headerr>
    <div class="container">
      <!--<nav class="container_left"></nav>-->
      <!--<section class="container_right">-->

      <!--</section>-->
      <router-view></router-view>
    </div>
	</div>
</template>

<script>
  import headerr from './components/header';
	export default {
		name:'admin',
    components:{
      headerr:headerr
    },
    methods:{
		  tonotFind(){
		    this.$router.push({
          name:'admin'
        })
      }
    },
    mounted(){
		  this.tonotFind();
    }
	}
</script>

<style lang="scss" scope>
@import './assets/scss/tyys.scss';
#admin{
  width: 100%;
  height: 100%;
  background: #d2691e;
  .container{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    @include bg(green);
  }
}
</style>
