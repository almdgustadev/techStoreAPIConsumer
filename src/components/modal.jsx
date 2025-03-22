import React from 'react'
import './modal.css'

export default function Modal({isOpen,setModalOPenId, produtoById}) {

    if(isOpen){
        return (
            <div className='background'> 
                <div className='modal'>
                    <div className='modalContent'>
                        <h2>Detalhes do Produto</h2>
                        <div className='modalBody'>
                            <p><strong>Nome:</strong> {produtoById.nome}</p>
                            <p><strong>Descrição:</strong> {produtoById.descricao}</p>
                            <p><strong>Preço:</strong> R$ {produtoById.preco}</p>
                            <p><strong>Quantidade em Estoque:</strong> {produtoById.quantidadeEstoque}</p>
                        </div>
                    <button className='modalClose' onClick={setModalOPenId}>Fechar</button>
                    </div>
                </div> 
            </div>
            
        ) 
    }
  return null
}
