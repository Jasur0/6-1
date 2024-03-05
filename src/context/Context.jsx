import { createContext, useState } from "react"
import { en, uz } from "../language"

export const Context = createContext()

function ContextProvider({children}) {
  
  const [flag,setFlag] = useState(false)
  const [lang,setLang] = useState(en)
  function changeLang(til) {
    til == 'en' ? setLang(en) : setLang(uz)
    setFlag(!flag)
  }
  return (
    <Context.Provider value={{flag,lang,changeLang}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider