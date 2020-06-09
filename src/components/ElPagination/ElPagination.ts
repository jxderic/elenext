import { defineComponent, h, mergeProps, computed, inject } from 'vue';

interface ElPaginationProps {
  pageSize: number;
  small: boolean;
  total: number;
  pageCount: number;
  pagerCount: number;
  currentPage: number;
  layout: string;
  pageSizes: any[];
  popperClass: string;
  prevText: string;
  nextText: string;
  background: boolean;
  disabled: boolean;
  hideOnSinglePage: boolean;
}
const Prev = defineComponent((props) => {
  return h('button', {
    type: "button",
    class: "btn-prev",
    // TODO
    disabled: {},
    onClick: {}
  }, '<span></span>');
})
export default defineComponent({
  name: '',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
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
  setup(props: ElPaginationProps, { attrs, slots, emit }) {
    const internalPageSize = 0;
    const layout = props.layout;
    const internalPageCount = computed(() => {
      if (typeof props.total === 'number') {
        return Math.max(1, Math.ceil(props.total / internalPageSize));
      } else if (typeof props.pageCount === 'number') {
        return Math.max(1, props.pageCount);
      }
      return null;
    })
    const components = layout.split(',').map((item) => item.trim());
    return () => {
      if (!layout) return null;
      if (props.hideOnSinglePage && (!internalPageCount || internalPageCount === 1)) return null;
      h(
        'div',
        mergeProps({
          class: {
            'el-pagination': true,
            'is-background': props.background,
            'el-pagination--small': props.small
          },
        })
      );
    }
  }
});
