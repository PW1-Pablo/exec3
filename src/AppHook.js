import { useState } from "react";

const AppHook = () => {
    const [sub, setSub] = useState("G1")
    const [nota, setNota] = useState(0)
    const [result, setResult] = useState(" ")
    const [resultSub, setResultSub] = useState(" ")

    const calcSub = () => {
        let resultNota
        let resultSub

        if (sub === "G1") {
            resultNota = 21 - (nota * 2)
            resultSub = "G1"
        } else {
            resultNota = (21 - nota) / 2
            resultSub = "G2"
        }

        setResult(resultNota)
        setResultSub(resultSub)
    }

    const showResult = () => {
        if (result !== " "){
            return <p>Sua nota na sub {resultSub} devera ser {result} </p>
        }
        
        return null
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

            {showResult()}

        </div>
    )
}

export default AppHook;
