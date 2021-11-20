import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import Image from 'next/image'
import logo from 'public/images/app/logo.svg'

type Props = {
  handleToggleAbout: () => void
}

const text = {
  'en-US': {
    Artist: 'Artist',
    Musician: 'Musician',
    'Multimedia Developer': 'Multimedia Developer',
    'Creative Technologist': 'Creative Technologist',
    About: 'About',
    Archive: 'Archive',
    Highlights: 'Highlights',
  },
  'pt-BR': {
    Artist: 'Artista',
    Musician: 'Musicista',
    'Multimedia Developer': 'Desenvolvedor Multimídia',
    'Creative Technologist': 'Creative Technologist',
    About: 'Sobre',
    Archive: 'Arquivo',
    Highlights: 'Destaquest',
  },
}

export default function Header({ handleToggleAbout }: Props) {
  const { locale } = useLocaleContext()
  const data = text[locale]

  const scroll = (to: string) => {
    const section = document.getElementById(to)
    if (section) {
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
      })
    }
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative z-10 flex flex-col items-center justify-between h-screen text-white">
          <div className="flex items-start justify-between w-full px-10 pt-6">
            <p>
              {data.Artist}, {data.Musician},
              <br />
              {data['Multimedia Developer']},<br />
              {data['Creative Technologist']}
            </p>
            <button className="times hover" onClick={() => scroll('archives')}>
              {data.Archive}
            </button>
            <button className="times hover" onClick={handleToggleAbout}>
              {data.About}
            </button>
            <button
              className="times hover"
              onClick={() => scroll('highlights')}
            >
              {data.Highlights}
            </button>

            <p>
              hello@matheusleston.com <br />
              @matheusleston
            </p>
          </div>
          <div className="p-10 mb-3">
            <Image src={logo} alt="LESTON" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className="relative z-10 flex flex-col items-center justify-between h-screen p-2 text-white">
          <div className="w-full">
            <p>
              {data.Artist}, {data.Musician},
              <br />
              {data['Multimedia Developer']},<br />
              {data['Creative Technologist']}
            </p>
            <p className="mt-4 break-words">
              hello@matheusleston.com <br />
              @matheusleston
            </p>
            <button className="mt-4 times" onClick={handleToggleAbout}>
              {data.About}
            </button>
          </div>
          <div className="mb-3">
            <Image src={logo} alt="LESTON" />
          </div>
        </div>
      </div>
    </>
  )
}
