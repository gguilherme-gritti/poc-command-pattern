import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const features = [
  {
    title: 'React 19',
    description:
      'Última versão do React com melhorias de performance e APIs modernas.',
    emoji: '⚛️',
  },
  {
    title: 'Vite 8',
    description:
      'Build tool extremamente rápida com HMR instantâneo e suporte nativo a TypeScript.',
    emoji: '⚡',
  },
  {
    title: 'TypeScript',
    description:
      'Tipagem estática para código mais seguro, previsível e fácil de manter.',
    emoji: '🔷',
  },
  {
    title: 'TailwindCSS 4',
    description:
      'Utility-first com a nova engine do Tailwind e integração via @tailwindcss/vite.',
    emoji: '🎨',
  },
  {
    title: 'shadcn/ui',
    description:
      'Componentes acessíveis (Radix) que você copia e adapta — base sólida para o design system.',
    emoji: '🧩',
  },
  {
    title: 'ESLint + Prettier',
    description:
      'Qualidade de código garantida com linting e formatação automática.',
    emoji: '✨',
  },
]

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-svh bg-muted/40">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            POC Command Pattern
          </h1>
          <nav className="flex gap-2">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button size="sm">GitHub</Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
          <Badge variant="secondary" className="mb-6">
            Boilerplate pronto para produção
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            React + Vite + TypeScript
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Setup moderno com TailwindCSS 4, shadcn/ui, ESLint e Prettier. Base
            para compor telas com consistência visual e acessibilidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => setCount((c) => c + 1)}>
              Contador: {count}
            </Button>
            <Button variant="outline" size="lg">
              Ver estrutura
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-1 text-3xl" aria-hidden>
                    {feature.emoji}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <Card>
            <CardHeader>
              <CardTitle>Variantes do Button (shadcn/ui)</CardTitle>
              <CardDescription>
                Mesmo componente, estilos controlados por variant e size —
                padrão CVA + tokens do tema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="default" size="sm">
                  Default SM
                </Button>
                <Button variant="secondary" size="default">
                  Secondary MD
                </Button>
                <Button variant="outline" size="lg">
                  Outline LG
                </Button>
                <Button variant="ghost" size="default">
                  Ghost MD
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
          Feito com React, Vite, TypeScript e shadcn/ui
        </div>
      </footer>
    </div>
  )
}
