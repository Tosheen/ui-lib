import * as React from "react"
import { create, cssomSheet } from "twind"
import type { Instance as TwindInstance } from "twind"
import twindConfig from "../../twind.config"

export const TwindContext = React.createContext<TwindInstance | null>(null)

// NOTE: Consider removing this cache and forcing all consumers to include
// ObscuredProvider
const Cache: {
  tw?: TwindInstance
} = {}

type Options = {
  skipCache: boolean
}

export function createTwindInstance(
  stylesElement?: HTMLStyleElement,
  options: Partial<Options> = {},
) {
  const { skipCache = false } = options

  function cache(tw: TwindInstance) {
    if (!skipCache) {
      Cache.tw = tw
    }

    return tw
  }

  if (Cache.tw && !skipCache) {
    return Cache.tw
  }

  if (stylesElement == null || stylesElement.sheet == null) {
    return cache(create(twindConfig))
  }

  const sheet = cssomSheet({ target: stylesElement.sheet })
  return cache(create({ ...twindConfig, sheet }))
}

export const useTwind = () => {
  const value = React.useContext(TwindContext)

  if (value == null) {
    const { tw } = createTwindInstance()
    return tw
  }

  return value.tw
}
