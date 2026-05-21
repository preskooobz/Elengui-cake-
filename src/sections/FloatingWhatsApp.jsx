import { IconWhatsApp } from '../components/icons/Icons'
import { whatsappUrl } from '../content/landingContent'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <IconWhatsApp className="h-7 w-7 text-white" />
    </a>
  )
}
