import { defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../config'
import { normalizeClass } from '../../utils/dom'
import { Popper } from '../Popper'
import { Placement } from '../Popper/Popper'

const blockCls = getBlockCls('Tooltip')
const Tooltip = defineComponent({
  name: getCompName('Tooltip'),
  props: {
    effect: {
      type: String as PropType<'dark' | 'light'>,
      default: 'dark'
    },
    content: {
      type: String,
      default: ''
    },
    offset: {
      type: Number,
      default: 0
    },
    modelValue: Boolean,
    popperClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'hover'
    },
    transition: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const clsNames = normalizeClass([blockCls, props.popperClass, 'is-' + props.effect])
    return () => (
      <Popper
        modelValue={props.modelValue}
        popperClass={clsNames}
        placement={props.placement}
        trigger={props.trigger}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, props.offset]
            }
          }
        ]}
        v-slots={{
          popper: slots.content ? slots.content : () => props.content,
          default: slots.default
        }}
      />
    )
  }
})

export default Tooltip
