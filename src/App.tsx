import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
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
      <List items={['imran', "Fizan", "Usman", "Mamoon"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
