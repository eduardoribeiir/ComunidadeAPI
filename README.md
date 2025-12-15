# Plataforma de Comunidade - API REST

Esta API REST implementa uma plataforma de comunidade seguindo os princípios de Arquitetura Limpa e SOLID. Ela permite a gestão de usuários, posts e comentários, fornecendo operações CRUD para cada entidade.

## Disciplina
Este projeto foi desenvolvido como parte da disciplina de Web 2025.2.

## Como executar

1. Instale as dependências:
   ```
   npm install
   ```

2. Execute em modo de desenvolvimento:
   ```
   npm run dev
   ```

3. Ou compile e execute:
   ```
   npm run build
   npm start
   ```

A API estará disponível em `http://localhost:3001/eduardowebapi`.

## Endpoints

### Usuários
- `POST /eduardowebapi/users` - Criar usuário
- `GET /eduardowebapi/users` - Listar usuários
- `GET /eduardowebapi/users/:id` - Obter usuário por ID
- `PUT /eduardowebapi/users/:id` - Atualizar usuário
- `DELETE /eduardowebapi/users/:id` - Deletar usuário

### Posts
- `POST /eduardowebapi/posts` - Criar post
- `GET /eduardowebapi/posts` - Listar posts
- `GET /eduardowebapi/posts/:id` - Obter post por ID
- `PUT /eduardowebapi/posts/:id` - Atualizar post
- `DELETE /eduardowebapi/posts/:id` - Deletar post

### Comentários
- `POST /eduardowebapi/posts/:postId/comments` - Criar comentário em um post
- `GET /eduardowebapi/posts/:postId/comments` - Listar comentários de um post
- `GET /eduardowebapi/comments/:id` - Obter comentário por ID
- `PUT /eduardowebapi/comments/:id` - Atualizar comentário
- `DELETE /eduardowebapi/comments/:id` - Deletar comentário

## Arquitetura
O projeto segue a Arquitetura Limpa, dividida em camadas:
- **Domain**: Entidades, repositórios e serviços de domínio
- **Application**: Casos de uso e serviços de aplicação
- **Infrastructure**: Implementações de repositórios e serviços externos
- **Presentation**: Controladores e rotas da API