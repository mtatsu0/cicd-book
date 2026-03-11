import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    const label : string = "mcount";

    return (
        <div>
        <button onClick={() => { setCount((c) => c + 1) }}>
            {label} is {count}
        </button>
        </div>
    )
}

export default App
