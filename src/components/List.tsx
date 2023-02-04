import React, { ReactNode } from 'react'

interface ListProps<T> {
    items: T[]
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, ind) => (
                <li key={ind}>{render(item)}</li>
            ))}
        </ul>
    )
}

export default List