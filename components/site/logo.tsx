import Link from 'next/link'
import { Plane } from 'lucide-react'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="JauntCraft home">
      <span className="relative flex size-10 items-center justify-center rounded-[40%_60%_55%_45%] bg-coral text-white">
        <Plane className="size-5 -rotate-12" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight">
          <span className={inverted ? 'text-white' : 'text-foreground'}>JAUNT</span>{' '}
          <span className="text-coral">CRAFT</span>
        </span>
        <span className={`mt-1 text-[10px] font-medium ${inverted ? 'text-white/70' : 'text-muted-foreground'}`}>
          {"Crafting Tomorrow's Travel Today"}
        </span>
      </span>
    </Link>
  )
}
