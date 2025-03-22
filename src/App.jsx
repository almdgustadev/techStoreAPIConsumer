import { useRef, useState } from 'react'
import './App.css'
import api from './services/api'
import Modal from './components/modal'
import ModalAll from './components/modalAll'


function App() {
  const[openModalById, setOpenModalById] =  useState(false)
  const[produtoById,setProdutoById] = useState(null);
  const[openModal, setOpenModal] =  useState(false)
  const[produto,setProduto] = useState([]);

  async function getProdutos(){
      const response = await api.get('/techstore/produtos')
      setProduto(response.data)
      setOpenModal(true)
  }


  async function getProdutosbyId(){
    const response = await api.get(`/techstore/produtos/${inputCodigoFind.current.value}`)
    setProdutoById(response.data)
    setOpenModalById(true)
  }

  async function createProdutos(){
    await api.post('/techstore/produtos',{
      nome: inputNomeCad.current.value,
      descricao: inputDescricaoCad.current.value,
      preco: inputPrecoCad.current.value,
      quantidadeEstoque: inputQntdEstoqueCad.current.value
    });

    inputNomeCad.current.value = '';
    inputDescricaoCad.current.value= '';
    inputPrecoCad.current.value= '';
    inputQntdEstoqueCad.current.value= '';
    alert('Produto cadastrado com sucesso!')
  }

  const inputNomeCad =  useRef()
  const inputDescricaoCad = useRef()
  const inputPrecoCad = useRef()
  const inputQntdEstoqueCad = useRef()


  const inputCodigoFind =  useRef()

  return (
      <div className='container'>
        <form>
          <h1>Cadastro de produtos</h1>
          <input placeholder="Nome" name="nome" type="text" ref={inputNomeCad} />
          <input placeholder="Descrição" name="descricao" type="text"ref={inputDescricaoCad}/>
          <input placeholder="Preço" name="preco" type="number" ref={inputPrecoCad}/>
          <input placeholder="Quantidade pro estoque" name="quantidadeEstoque" type='number' ref={inputQntdEstoqueCad}/>
          <button type="button" onClick={createProdutos}>Cadastrar</button>
        </form>

        <div>
          <button className='buttonProdutos' type= "button" onClick={getProdutos}>Mostrar Produtos</button>
          <ModalAll isOpenModalAll={openModal} setModalOPen={()=> setOpenModal(!openModal)} produto ={produto}>
          </ModalAll>
        </div>
        <div className='divBuscarID'>
        <form className='formID'>
          <h1>Buscar Produto por código</h1>
          <h2>Informe o código do produto que deseja buscar</h2>
          <input placeholder="Código" name="codigo" type="number" ref={inputCodigoFind} />
          <button type="button" onClick={getProdutosbyId}>Buscar</button>
          <Modal isOpen={openModalById} setModalOPenId={()=> setOpenModalById(!openModalById)} produtoById={produtoById}>          
          </Modal>
        </form>
      </div>
      </div>
  )
}

export default App
