import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n;

}

const UseEffect = (props) => {

    const [state, setState] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const [status, setStatus] = useState("ímpar");

    useEffect(function () {
        setFatorial(calcFatorial(state))
    }, [state]);

    useEffect(function () {
        if (fatorial > 1000) {
            document.title = "fatorial muito longo"
        }
    }, [fatorial]);

    useEffect(function () {
        setStatus(state % 2 === 0 ? "par" : "ímpar");
    }, [state]);


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={state} onChange={e => setState(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
