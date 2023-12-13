import React from 'react'
import Incomplete from './Components/Incomplete'
import Todo from './Components/Todo'
import Doing from './Components/Doing'
import UnderReview from './Components/UnderReview'
import Complete from './Components/Complete'

const App = () => {
  return (
    <>
      <Incomplete />
      <Todo />
      <Doing />
      <UnderReview />
      <Complete />
    </>
  )
}

export default App