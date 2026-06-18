# CEDUC VR — Site (Next.js + Supabase)

Migração do site da CEDUCVR de **PHP** para **Next.js 16 (App Router) + React 19 + Supabase**, hospedado na **Vercel**.

> O visual é **idêntico** ao site PHP atual — reaproveitamos o CSS do template (Rhythm 3.7.11 + Bootstrap 5). A migração é de **tecnologia/stack**, não de design.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Banco / Auth / Storage | Supabase (PostgreSQL) |
| Hospedagem | Vercel |
| UI legada → React | Swiper (carrosséis), yet-another-react-lightbox, Framer Motion (scroll) |
| Formulários | React Hook Form + Zod + Cloudflare Turnstile |
| E-mail | Microsoft Graph API (server-side) |
| Sanitização HTML | DOMPurify |

## Estrutura

```
src/
├── app/
│   ├── (public)/      # site público — SSG/ISR (SEO preservado)
│   ├── admin/         # CMS — protegido por Supabase Auth
│   └── api/           # Route Handlers (forms, e-mail, turnstile, upload)
├── components/        # componentes de UI reutilizáveis
├── lib/
│   ├── supabase/      # clients (server + browser)
│   └── queries/       # leitura de dados (substitui os *-functions.php)
└── styles/            # CSS do template (Rhythm + Bootstrap) importado
```

## Desenvolvimento

```bash
cp .env.example .env.local   # preencher com valores reais (NÃO commitar)
npm install
npm run dev                  # http://localhost:3000
```

## Documentação da migração

Os planos detalhados estão no repositório PHP original (`site-ceduc-vr/docs/`):
- `PLANO_MIGRACAO_REACT_SUPABASE.md` — plano completo em 7 fases
- `FASE0_SEGURANCA_E_DUMP.md` — rotação de secrets + dump do banco
- `PLANO_I18N_EN_IT.md` — internacionalização (futuro, fora do escopo desta migração)

## Status

- [x] Fase 0 — Segurança e dump (documentado; rotação de secrets pendente do cliente)
- [x] Fase 1 — Fundação do projeto
- [ ] Fase 2 — Banco MySQL → Supabase *(adiada — conteúdo hardcoded por ora)*
- [x] Fase 3 — Site público em React (todas as páginas + organograma)
- [x] Fase 4 — Formulários + e-mail serverless *(código pronto; liga ao configurar env vars)*
- [ ] Fase 5 — Admin / CMS
- [ ] Fase 6 — Cutover e go-live

### Configurar os formulários (Fase 4)

Os endpoints `/api/forms/*` funcionam com **degradação graciosa**: sem credenciais,
respondem com mensagem amigável e (se Supabase estiver configurado) gravam a submissão.
Para o envio de e-mail real, configure na Vercel (ou `.env.local`):

- `TURNSTILE_SECRET_KEY` + `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — anti-spam
- `AZURE_TENANT_ID` / `AZURE_CLIENT_ID` / `AZURE_CLIENT_SECRET` / `AZURE_SENDER_EMAIL` — Microsoft Graph
- `FORM_RECIPIENTS` — destinatários (separados por vírgula)
- `SUPABASE_SERVICE_ROLE_KEY` — para gravar histórico em `form_submissions`
  (aplicar `supabase/migrations/0001_form_submissions.sql`)

> ⚠️ Os secrets do site PHP estão expostos no Git e devem ser **rotacionados** antes de usar.
