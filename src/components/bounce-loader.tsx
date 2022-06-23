import * as React from "react"
import { animation } from "twind/css"
import { useTwind } from "../lib/twind"

const bounce = (delay = 0) =>
  animation(`1.4s infinite ease-in-out ${delay}ms`, {
    "0%": {
      transform: "scale(0)",
    },
    "40%": {
      transform: "scale(1)",
    },
    "80%": {
      transform: "scale(0)",
    },
    "100%": {
      transform: "scale(0)",
    },
  })

type BounceLoaderPorps = {
  variant?: "dark" | "light"
}

export const BounceLoader = (props: BounceLoaderPorps) => {
  const { variant = "dark" } = props
  const tw = useTwind()
  return (
    <div className={tw("inline-flex justify-center items-center space-x-1")}>
      <span
        className={tw(
          "inline-flex w-2.5 h-2.5 rounded-full",
          variant === "dark" ? "bg-primary-500" : "bg-white",
          tw`${bounce()}`,
        )}
      ></span>
      <span
        className={tw(
          "inline-flex w-2.5 h-2.5 rounded-full",
          variant === "dark" ? "bg-primary-500" : "bg-white",
          tw`${bounce(160)}`,
        )}
      ></span>
      <span
        className={tw(
          "inline-flex w-2.5 h-2.5 rounded-full",
          variant === "dark" ? "bg-primary-500" : "bg-white",
          tw`${bounce(320)}`,
        )}
      ></span>
    </div>
  )
}
