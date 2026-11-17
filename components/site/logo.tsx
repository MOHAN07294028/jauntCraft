import Image from 'next/image'
import Link from 'next/link'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap" aria-label="JauntCraft home">
      <Image
        src="/images/logo-icon.png"
        alt=""
        width={100}
        height={68}
        priority
        className="h-9 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-semibold tracking-wide">
          <span className={inverted ? 'text-white' : 'text-foreground'}>JAUNT</span>{' '}
          <span className="text-coral">CRAFT</span>
        </span>
        <span className={`mt-1 text-[10px] font-medium ${inverted ? 'text-white/70' : 'text-muted-foreground'}`}>
          <span className="text-coral">Crafting</span>
          {" Tomorrow's Travel Today"}
        </span>
      </span>
    </Link>
  )
}
