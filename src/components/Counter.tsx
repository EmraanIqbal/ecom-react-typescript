import { ReactElement, ReactNode } from "react"

type CounterProp = {
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode
}
const Counter = ({ setCount, children }: CounterProp): ReactElement => {

    return (
        <>
            <h1>{children}</h1>
            <button onClick={(): void => setCount(prev => prev + 1)}>+</button>
            <button onClick={(): void => setCount(prev => prev - 1)}>-</button>
        </>
    )
}

export default Counter