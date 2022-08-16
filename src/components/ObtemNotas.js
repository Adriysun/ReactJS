import React from 'react';
export default function ObtemNotas(props) {
    // props.quandoClicar vai informar alguma coisa para o componente pai
    return (
        <div style={{ backgroundColor: '#FAF0E6', padding: '5px' }}>
            <h2>Obtem Notas (filho)</h2>
            <button onClick={
                function (e) {
                    props.quandoClicar('Adrian', 9);
                }
            }>
                Obter nota
            </button>
        </div>
    );
}
