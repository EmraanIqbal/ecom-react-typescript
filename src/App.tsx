import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"


function App() {
  const [count, setCount] = useState<number>(0)


  return (
    <>
      <Heading title={"Emraaan"} />
      <Section title={"this is title section"}>
        <h1>Hey this is my children so dont touch him</h1>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>

    </>
  )
}

export default App
