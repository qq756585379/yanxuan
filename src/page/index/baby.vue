<template>
  <div>
    <each-tab :desc="homeDesc"></each-tab>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import eachTab from '@/components/public/EachTab';
  export default {
    components: {
      eachTab
    },
    created () {
      this.$store.dispatch('changeHeadertabActive', 6);
      Indicator.open('加载中...');
      this.$store.dispatch('gethomeDesc', 'home');
    },
    computed: {
      homeDesc () {
        Indicator.close();
        return this.$store.getters.homeDesc;
      }
    }
  };
</script>

<style>
  .slideWarp {
    margin-bottom: .26667rem;
  }
</style>
