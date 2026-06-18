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

- [x] Fase 0 — Segurança e dump (documentado)
- [x] Fase 1 — Fundação do projeto *(em andamento)*
- [ ] Fase 2 — Banco MySQL → Supabase
- [ ] Fase 3 — Site público em React
- [ ] Fase 4 — Formulários + e-mail serverless
- [ ] Fase 5 — Admin / CMS
- [ ] Fase 6 — Cutover e go-live
