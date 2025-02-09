import { useRef, useState, useEffect } from "react"
import { AppContext } from "../../utils/context"
import { AppContextProviderComponent } from "./types"

export const AppContextProvider: AppContextProviderComponent = ({ children }) => {
  const cache = useRef(new Map<string, string>())
  const [error, setError] = useState<string>("")

  // Reset error when switching employee filters or loading new data
  useEffect(() => {
    if (error) {
      setError("") // Clear the error state when needed
    }
  }, [error])  // Only reset error when it changes

  return (
    <AppContext.Provider value={{ setError, cache }}>
      {error ? (
        <div className="RampError">
          <h1 className="RampTextHeading--l">Oops. Application broken</h1>
          <div className="RampBreak--l" />
          Error: {error}
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  )
}
