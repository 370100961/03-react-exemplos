import React, { useState } from 'react'
import BtnLogin from './BtnLogin'
import BtnLogout from './BtnLogout'

export default function Condicionais() {

    const [condicao, setCondicao] = useState(true)

  return (
    <div>
        { condicao ? <BtnLogin /> : <BtnLogout /> }

        { condicao && 
                <BtnLogin />
        }

        <button onClick={ () => setCondicao(!condicao) }>
            Mudar valor da condição
        </button>
    </div>
  )
}

//if alguma coisa for verdadeira faça algo, se não,
//faça outra coisa
