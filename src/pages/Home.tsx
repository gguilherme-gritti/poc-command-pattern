import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

const features = [
  {
    title: 'React 19',
    description:
      'Última versão do React com Server Components, Actions e melhorias de performance.',
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
      'Framework CSS utility-first com nova engine, mais rápido e sem configuração.',
    emoji: '🎨',
  },
  {
    title: 'tailwind-variants',
    description:
      'Variantes tipadas para componentes, combinando o poder do Tailwind com type-safety.',
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">
            POC Command Pattern
          </h1>
          <nav className="flex gap-2">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="primary" size="sm">
              GitHub
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            Boilerplate pronto para produção
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            React + Vite + TypeScript
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Setup moderno e escalável com TailwindCSS, tailwind-variants, ESLint
            e Prettier. Tudo configurado e pronto para começar.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => setCount((c) => c + 1)}>
              Contador: {count}
            </Button>
            <Button variant="outline" size="lg">
              Ver estrutura
            </Button>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} hoverable>
                <div className="text-3xl mb-3">{feature.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-20">
          <Card variant="elevated" padding="lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Exemplo de Variantes (tailwind-variants)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="sm">
                Primary SM
              </Button>
              <Button variant="secondary" size="md">
                Secondary MD
              </Button>
              <Button variant="outline" size="lg">
                Outline LG
              </Button>
              <Button variant="ghost" size="md">
                Ghost MD
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          Feito com React, Vite, TypeScript e TailwindCSS
        </div>
      </footer>
    </div>
  )
}
