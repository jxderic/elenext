import { defineComponent, h, mergeProps } from 'vue';

interface ElPaginationProps {
  small: boolean;
  total: number;
  pageCount: number;
  pagerCount: number;
  background: boolean;
}

export default defineComponent({
  name: '',
  props: {
    // pageSize: {
    //   type: Number,
    //   default: 10
    // },
    small: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      required: false
    },
    pageCount: {
      type: Number
    },
    pagerCount: {
      type: Number,
      validator(value: number) {
        return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1;
      },
      default: 7
    },

    // currentPage: {
    //   type: Number,
    //   default: 1
    // },

    // layout: {
    //   type: String,
    //   default: 'prev, pager, next, jumper, ->, total'
    // },

    // pageSizes: {
    //   type: Array,
    //   default() {
    //     return [10, 20, 30, 40, 50, 100];
    //   }
    // },

    // popperClass: String,

    // prevText: String,

    // nextText: String,

    background: Boolean

    // disabled: Boolean,

    // hideOnSinglePage: Boolean
  },
  setup(props: ElPaginationProps, { attrs, slots, emit }) {
    return () =>
      h(
        'div',
        mergeProps({
          class: {
            'el-pagination': true,
            'is-background': props.background,
            'el-pagination--small': props.small
          }
        })
      );
  }
});
