# TechStore - Frontend para API de Produtos

## Descrição

TechStore é uma aplicação frontend desenvolvida em React.js que consome uma API RESTful para gerenciamento de produtos. O sistema permite:

- Cadastrar novos produtos
- Listar todos os produtos cadastrados
- Buscar produtos por código
- Editar informações de produtos existentes
- Excluir produtos

## Tecnologias Utilizadas

- React.js
- Axios (para requisições HTTP)
- CSS Modules
- React Icons (ícones de ação)

## Funcionalidades

### Cadastro de Produtos
- Formulário para inserir: Nome, Descrição, Preço e Quantidade em Estoque
- Validação básica dos campos
- Feedback visual após cadastro bem-sucedido

### Listagem de Produtos
- Visualização de todos os produtos cadastrados
- Paginação e scroll para muitos itens
- Opções de edição e exclusão para cada item

### Busca por Código
- Campo para inserir o código do produto
- Exibição detalhada do produto encontrado

### Edição de Produtos
- Modo de edição com campos editáveis
- Opção para salvar ou cancelar alterações
- Atualização em tempo real após confirmação

### Exclusão de Produtos
- Confirmação visual antes da exclusão
- Feedback após operação concluída

## Instalação

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]

2. Instale as dependências:
   ```bash
   npm install

3.Configure o arquivo api.js com a URL do seu backend

4. Inicie a aplicação
    ```bash
    npm run dev


## Requisitos do Backend

A aplicação espera um backend com as seguintes rotas:

- `GET /techstore/produtos` - Listar todos os produtos
- `GET /techstore/produtos/{codigo}` - Buscar produto por código
- `POST /techstore/produtos` - Cadastrar novo produto
- `PUT /techstore/produtos/{codigo}` - Atualizar produto
- `DELETE /techstore/produtos/{codigo}` - Excluir produto


## Personalização

Você pode personalizar:

- Cores: Edite as variáveis no arquivo `App.css`
- Estilos dos modais: Arquivos `modal.css`

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
