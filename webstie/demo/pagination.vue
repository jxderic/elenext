<template>
  <h1>Pagination 分页</h1>
  <h2>基础用法</h2>
  <div class="block">
    <span class="demonstration">页数较少时的效果</span>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
  <h2>设置最大页码按钮数</h2>
  <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
  <h2>带有背景色的分页</h2>
  <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  <h2>小型分页</h2>
  <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
  <!-- TODO -->
  <h2>附加功能</h2>
  <!-- TODO -->
  <h2>当只有一页时隐藏分页</h2>
</template>
<script lang="ts">
import { defineComponent, h, mergeProps } from 'vue';

export default defineComponent({
  name: '',
  props: {},
  setup(props, { attrs, slots, emit }) {
    return {};
  }
});
</script>
<style lang="less"></style>
