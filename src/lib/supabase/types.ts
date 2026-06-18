/**
 * Tipos do banco Supabase.
 *
 * PLACEHOLDER — na Fase 2 (migração do banco) estes tipos serão GERADOS
 * automaticamente a partir do schema real com:
 *
 *   npx supabase gen types typescript --project-id <ref> > src/lib/supabase/types.ts
 *
 * Até lá, `Database` é um tipo aberto para não travar o desenvolvimento.
 */
export type Database = {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
