import { useState } from "react";

const AppHook = () => {
    const [sub, setSub] = useState("G1")
    const [nota, setNota] = useState(0)
    const [result, setResult] = useState(" ")

    const calcSub = () => {
        let resultSub

        if (sub === "G1") {
            resultSub = 21 - (nota * 2)
        } else {
            resultSub = (21 - nota) / 2
        }

        setResult(<p>Sua nota na sub {sub} devera ser {resultSub}</p>)
    }

    return(
        <div>
            <h1>Calculadora Nota de sub</h1>

            <br />

            <label>
                <input type="radio" value="G1" checked={sub === "G1"} 
                    onChange={(event) => setSub(event.target.value)} 
                    /> Sub G1 
            </label>

            <label>
                <input type="radio" value="G2" checked={sub === "G2"} 
                    onChange={(event) => setSub(event.target.value)} 
                    /> Sub G2 
            </label> <br />

            <br />
            Nota: Sub {sub} <br />
            <input type="number"
                onChange={(event) => setNota(event.target.value)} />

            <input type="button" value="Calcular" onClick={calcSub} />

            <br /><br />

            {result}

        </div>
    )
}

export default AppHook;
