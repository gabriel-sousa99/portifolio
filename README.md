# Portfólio

Site pessoal feito com [Nuxt 4](https://nuxt.com) e [Nuxt UI](https://ui.nuxt.com). A publicação usa a Vercel.

## Rodar local

```bash
pnpm install
pnpm dev
```

## Editar o conteúdo

Todo o texto fica em `app/data/portfolio.ts`. Os campos `email`, `linkedin` e `availability` de `profile` começam vazios. Preencha cada um para mostrar o botão ou o texto correspondente.

## Publicar

A publicação usa a Vercel. Importe o repositório no painel da Vercel. A Vercel detecta o Nuxt e publica a cada push na branch `main`.

## Regra de conteúdo

O site mostra tecnologias e práticas. Ele não cita nome de sistema, de empresa nem de cliente. O comando `pnpm check:leaks` confere o código, o site gerado e o histórico do git contra uma lista de bloqueio local, que fica fora do repositório.
