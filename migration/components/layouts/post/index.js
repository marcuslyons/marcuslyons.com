import React from 'react'
import prism from 'prismjs'

export function Post({ children }) {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return <section>{children}</section>
}
