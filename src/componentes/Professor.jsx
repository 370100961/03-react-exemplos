import React from 'react'

export default function Professor({nome, curso, ano}) {
  return (
    <div>
        <h3>{nome}</h3>
        <p>Curso: {curso}</p>
        <p>Ano de Admissão: {ano}</p>
    </div>
  )
}
