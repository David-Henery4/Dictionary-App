import { useContext } from "react"
import { AppContext } from "./Context"

const useGlobal = () => {
  return (
    useContext(AppContext)
  )
}

export default useGlobal