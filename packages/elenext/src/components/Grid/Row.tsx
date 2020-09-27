import { defineComponent, computed, provide, CSSProperties, PropType, InjectionKey, ComputedRef } from 'vue'
import { normalizeClass } from '../../utils/dom'
import { getBlockCls, getCompName } from '../../config'
import useBreakpoint, { Breakpoint, responsiveArray } from './hooks/useBreakpoint'

export type GutterTuple = [number, number]

type Gutter = number | GutterTuple | Partial<Record<Breakpoint, number | GutterTuple>>

export const RowInjectKey: InjectionKey<{
  gutter: ComputedRef<GutterTuple>
}> = Symbol('Row')

const blockCls = getBlockCls('row')

const Row = defineComponent({
  name: getCompName('Row'),
  props: {
    gutter: {
      type: [Number, Array, Object] as PropType<Gutter>,
      default: 0
    },
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      default: 'top'
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
      default: 'start'
    }
  },
  setup(props, { slots }) {
    const { screens } = useBreakpoint()
    const gutter = computed(() => {
      const propGutter = props.gutter
      const getTuple = (arg: number | GutterTuple) => {
        if (Array.isArray(arg)) {
          return arg as GutterTuple
        } else {
          return [arg, arg] as GutterTuple
        }
      }
      let results: GutterTuple = [0, 0]
      if (typeof propGutter === 'object' && !Array.isArray(propGutter)) {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint: Breakpoint = responsiveArray[i]
          if (screens[breakpoint] && propGutter[breakpoint] !== undefined) {
            results = getTuple(propGutter[breakpoint]!)
            break
          }
        }
      } else {
        results = getTuple(propGutter)
      }
      console.log('gutter', results)
      return results
    })

    const classes = computed(() =>
      normalizeClass([
        blockCls,
        {
          [`${blockCls}-${props.justify}`]: props.justify,
          [`${blockCls}-${props.align}`]: props.align
        }
      ])
    )

    const style = computed(() => {
      const [x, y] = gutter.value
      let ret: CSSProperties = {
        ...(x > 0
          ? {
              marginLeft: `${x / -2}px`,
              marginRight: `${x / -2}px`
            }
          : {}),
        ...(y > 0
          ? {
              marginTop: `${y / -2}px`,
              marginBottom: `${y / -2}px`
            }
          : {})
      }
      return ret
    })

    provide(RowInjectKey, { gutter })
    return () => {
      // style={style.value}
      return (
        <div class={classes.value} style={style.value}>
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default Row
