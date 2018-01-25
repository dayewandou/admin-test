<template>
  <div class="await">
    代办邮件{{num}}
    <br/>

    {{sendList.zimogod}}
    <!--<button @click="$store.commit('changeName')">小柯基</button>-->
    <button @click="add">小柯基</button>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';
  export default {
    name: "await",
    methods:{
      ...mapMutations([
        'changeName',
        'add'
      ])
    },
    computed:{
      ...mapState([
        'num','sendList'
      ])
    }
  }
</script>

<style scoped>

</style>
