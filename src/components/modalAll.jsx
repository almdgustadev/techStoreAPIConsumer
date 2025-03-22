import React, { useState } from 'react'
import './modal.css'
import api from '../services/api'
import Lixeira from '../assets/icons8-delete.svg'
import Edit from '../assets/icons8-edit.svg'
import Save from '../assets/icons8-save-24.png'


export default function ModalAll({isOpenModalAll,setModalOPen, produto}) {
    const[produtoEditando, setProdutoEditando] = useState(null)
    const[valoresEditados, setValoresEditados] = useState({})

    async function deleteProdutos(codigo){
        await api.delete(`/techstore/produtos/${codigo}`);
        alert('Produto excluído com sucesso!')

    }
    
    async function salvarEdicao() {
        if (!produtoEditando) return; 
        
        await api.put(`/techstore/produtos/${produtoEditando.codigo}`, valoresEditados);
        alert('Produto atualizado com sucesso!');
        setProdutoEditando(null); 
        setValoresEditados({}); 
        
    }

    const handleInputChange = (campo, valor) => {
        setValoresEditados((prev) => ({
            ...prev,
            [campo]: valor,
        }));
    };

    const iniciarEdicao = (prod) => {
        setProdutoEditando(prod);         
        setValoresEditados({ 
            nome: prod.nome,
            descricao: prod.descricao,
            preco: prod.preco,
            quantidadeEstoque: prod.quantidadeEstoque,
        });
    };
    


    if (isOpenModalAll) {
        return (
            <div className='background'>
                <div className='modal'>
                    <div className='modalContent'>
                        <h2>Detalhes do Produto</h2>
                        <div className='modalBody'>
                            {produto.map((prod) => (
                                <div key={prod.codigo} className='produtoItem'>
                                    <p>
                                        <strong>Código:</strong>{prod.codigo}
                                    </p>
                                    <p>
                                        <strong>Nome:</strong>
                                        {produtoEditando?.codigo === prod.codigo ? (
                                            <input
                                                type="text"
                                                value={valoresEditados.nome || ''}
                                                onChange={(e) => handleInputChange('nome', e.target.value)}
                                            />
                                        ) : (
                                            prod.nome
                                        )}
                                    </p>
                                    <p>
                                        <strong>Descrição:</strong>
                                        {produtoEditando?.codigo === prod.codigo ? (
                                            <input
                                                type="text"
                                                value={valoresEditados.descricao || ''}
                                                onChange={(e) => handleInputChange('descricao', e.target.value)}
                                            />
                                        ) : (
                                            prod.descricao
                                        )}
                                    </p>
                                    <p>
                                        <strong>Preço:</strong>
                                        {produtoEditando?.codigo === prod.codigo ? (
                                            <input
                                                type="number"
                                                value={valoresEditados.preco || ''}
                                                onChange={(e) => handleInputChange('preco', e.target.value)}
                                            />
                                        ) : (
                                            `R$ ${prod.preco}`
                                        )}
                                    </p>
                                    <p>
                                        <strong>Quantidade em Estoque:</strong>
                                        {produtoEditando?.codigo === prod.codigo ? (
                                            <input
                                                type="number"
                                                value={valoresEditados.quantidadeEstoque || ''}
                                                onChange={(e) => handleInputChange('quantidadeEstoque', e.target.value)}
                                            />
                                        ) : (
                                            prod.quantidadeEstoque
                                        )}
                                    </p>
                                    <button onClick={() => deleteProdutos(prod.codigo)}>
                                        <img src={Lixeira} alt="Excluir" />
                                    </button>
                                    {produtoEditando?.codigo === prod.codigo ? (
                                        <button onClick={salvarEdicao}>
                                            <img src={Save} alt="Salvar" />
                                        </button>
                                    ) : (
                                        <button onClick={() => iniciarEdicao(prod)}>
                                            <img src={Edit} alt="Editar" />
                                        </button>
                                    )}
                                    <hr />
                                </div>
                            ))}
                        </div>
                        <button className='modalClose' onClick={setModalOPen}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
