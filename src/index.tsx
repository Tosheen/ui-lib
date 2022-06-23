import * as React from "react"

import { TwindContext, createTwindInstance } from "./lib/twind"

export { useTwind } from "./lib/twind"
export { css, animation } from "twind/css"

export { BounceLoader } from "./components/bounce-loader"

type TwindProviderProps = {
  children: React.ReactNode
  stylesElement?: HTMLStyleElement
}

export const TwindProvider = React.memo(function TwindProvider(
  props: TwindProviderProps,
) {
  const [twind] = React.useState(() =>
    createTwindInstance(props.stylesElement, { skipCache: true }),
  )

  return (
    <TwindContext.Provider value={twind}>
      {props.children}
    </TwindContext.Provider>
  )
})
