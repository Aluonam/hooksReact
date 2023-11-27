import React, { useMemo } from 'react'

const MemoizedFunction = () => {

    useMemo(() => {
        // Funcion que ejecuta para calcular valor
        const handleClick = () => {
            console.log('Botón clicado');
          };
          return handleClick()
    }, []) // Valor que escucha 
    

  return (
    <div>
      {/* componente hijo */}
    </div>
  )
}

export default MemoizedFunction