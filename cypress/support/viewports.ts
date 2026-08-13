// Breakpoints reais do Tailwind usados no projeto (ver classes `sm:`, `md:`, `lg:`
// em src/components/*). O único breakpoint que muda a ESTRUTURA de navegação
// (sidebar fixa <-> menu mobile com hambúrguer) é o `md` (768px), definido em
// SideBarMenu.tsx (`hidden md:flex` / `md:hidden`) e AppWrapper.tsx (`md:pt-0`, `md:h-screen`).
// `sm` (640px) e `lg` (1024px) só afetam grid/espaçamento visual (Projects, Footer,
// About, Experience, Skills), não trocam elementos no DOM — por isso não geram
// cenários de teste funcionais separados aqui.
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
} as const

export const VIEWPORTS = {
  // abaixo do breakpoint `md` -> layout mobile (menu hambúrguer)
  mobile: { width: 375, height: 667 },
  // acima do breakpoint `lg` -> layout desktop (sidebar fixa)
  desktop: { width: 1280, height: 800 },
} as const
