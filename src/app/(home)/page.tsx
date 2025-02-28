import { Radio } from 'lucide-react'
import Image from 'next/image'
import { SubscriptionForm } from './subcriptionFrom'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span> Summit 2025
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="flex items-center gap-2 text-purple font-semibold text-xs">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellat magni beatae laudantium consequuntur, suscipit hic error
            obcaecati soluta, fugit dolor, voluptatem saepe. Illum blanditiis
            accusantium quibusdam molestias harum debitis?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quia illo
          </p>
        </div>

        <SubscriptionForm />
      </div>
    </div>
  )
}
