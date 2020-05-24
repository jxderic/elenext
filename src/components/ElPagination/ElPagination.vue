<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: {
      type: Number,
      required: false
    },

    pageCount: Number,

    pagerCount: {
      type: Number,
      validator(value: number) {
        return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1;
      },
      default: 7
    },

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total'
    },

    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean
  },
  setup(props, { attrs, slots, emit }) {
    return {};
  }
});
</script>
<style lang="less"></style>
