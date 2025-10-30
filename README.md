## Capaz Estúdio — Site institucional

Site institucional da Capaz Estúdio (agência/estúdio de marketing e desenvolvimento de sites), construído com SvelteKit e Tailwind CSS. O projeto apresenta a empresa, seus serviços, equipe e cases (projetos) integrados a um CMS (PocketBase). Há tambem um formulário de contato com envio de e‑mail via Resend.

### Tecnologias
- **SvelteKit** (Svelte 5, Vite)
- **Tailwind CSS**
- **PocketBase** (CMS/headless backend para cases/projetos)
- **Resend** (envio de e‑mails do formulário de contato)

### Principais funcionalidades
- **Landing page** com seções: `Hero`, `Serviços`, `Quem Somos`, `Time`, `Ativos` e `Contato`.
- **Listagem de Projetos**: rota `/_projetos` busca registros da coleção `cases` no PocketBase.
- **Página de Projeto**: rota dinâmica `/_projetos/[slug]` exibe detalhes, textos ricos e galeria de imagens via URLs do PocketBase.
- **Formulário de Contato**: validação server-side e envio de e‑mail usando Resend.

### Estrutura (resumo)
- `src/routes/+page.svelte`: home com as seções principais e formulário.
- `src/routes/_page.server.js`: `load` dos cases e `actions` para envio do formulário.
- `src/routes/_projetos/`: listagem e detalhe de cases via PocketBase.
- `src/lib/components/sections/`: componentes de página (Navbar, Hero, Servicos, etc.).
- `src/lib/utils/`: utilitários como `enviarEmail.js` (Resend) e `getUrlImagesFromPB.js` (URLs do PocketBase).
- `static/`: fontes e imagens (logos, ícones, fotos de equipe e projetos).

### Variáveis de ambiente
Crie um arquivo `.env` (ou equivalente) e defina:

```bash
# URL pública do seu PocketBase (ex.: https://pb.capazestudio.com.br)
PUBLIC_POCKETBASE_URL="<sua_url_pocketbase>"

# Chave privada do Resend (use variável segura, não hardcode)
RESEND_API_KEY="re_****************"
```

### Licença
Uso interno da Capaz Estúdio. Ajuste conforme necessário.


