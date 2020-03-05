import React from 'react'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const listenerMapping: Record<string, string> = {
  onScrollY: 'ps-scroll-y',
  onScrollX: 'ps-scroll-x',
  onScrollUp: 'ps-scroll-up',
  onScrollDown: 'ps-scroll-down',
  onScrollLeft: 'ps-scroll-left',
  onScrollRight: 'ps-scroll-right',
  onYReachStart: 'ps-y-reach-start',
  onYReachEnd: 'ps-y-reach-end',
  onXReachStart: 'ps-x-reach-start',
  onXReachEnd: 'ps-x-reach-end',
}

type Options<T> = {
  ref: React.RefObject<T> | null
  onUpdate?(ps: PerfectScrollbar): void
  onScrollY?(event: CustomEvent): void
  onScrollX?(event: CustomEvent): void
  onScrollUp?(event: CustomEvent): void
  onScrollDown?(event: CustomEvent): void
  onScrollLeft?(event: CustomEvent): void
  onScrollRight?(event: CustomEvent): void
  onYReachStart?(event: CustomEvent): void
  onYReachEnd?(event: CustomEvent): void
  onXReachStart?(event: CustomEvent): void
  onXReachEnd?(event: CustomEvent): void
  options?: PerfectScrollbar.Options
}

export const usePerfectScrollbar = <T extends Element>({
  ref,
  options,
  onUpdate = ps => ps.update(),
  ...events
}: Options<T>) => {
  const [ps, setPs] = React.useState<PerfectScrollbar>()

  React.useEffect(() => {
    if (ref && ref.current) {
      setPs(new PerfectScrollbar(ref.current, options))
    }
  }, [ref, options])

  React.useEffect(() => {
    const element = ref && ref.current
    if (element) {
      Object.entries(events).forEach(([event, callback]) => {
        console.log({ event })
        element.addEventListener(listenerMapping[event], callback)
      })
      return () => {
        Object.entries(events).forEach(([event, callback]) => {
          element.removeEventListener(listenerMapping[event], callback)
        })
      }
    }
  }, [events, ref])

  React.useEffect(() => {
    const element = ref && ref.current
    if (element && ps) {
      onUpdate(ps)
    }
  })

  return ps
}
