'use client'

import { useCallback, useEffect, useState } from 'react'

type Feature = {
  id: string
  title: string
  short: string
  description: string
  bullets: string[]
  docLabel: string
  docSrc?: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    id: 'legalitas',
    title: 'Legalitas Resmi',
    short: 'Terdaftar dan diakui secara hukum di Indonesia.',
    description:
      'Platform kami beroperasi di bawah badan hukum resmi yang terdaftar, memastikan setiap sertifikasi dan proses kompetensi memiliki dasar hukum yang kuat dan dapat dipertanggungjawabkan.',
    bullets: [
      'Badan hukum resmi terdaftar di Kemenkumham',
      'Kepatuhan penuh terhadap regulasi sertifikasi nasional',
      'Dokumen legalitas dapat diverifikasi secara publik',
    ],
    docLabel: 'Lihat Dokumen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="fill-cyan-300">
        <path d="M8 0 1 3v4c0 4.4 3 8.1 7 9 4-0.9 7-4.6 7-9V3L8 0Zm5 7c0 3.4-2.2 6.4-5 7.3C5.2 13.4 3 10.4 3 7V4.3l5-2.1 5 2.1V7Zm-6.7 1.3L5 9.6l2.3 2.3 4-4L10 6.6 7.3 9.3l-1-1Z" />
      </svg>
    ),
  },
  {
    id: 'haki',
    title: 'Sistem Kompetensi Terdaftar HAKI',
    short: 'Metodologi terlindungi hak kekayaan intelektual.',
    description:
      'Sistem penilaian kompetensi kami telah terdaftar sebagai Hak Kekayaan Intelektual (HAKI), menjamin keaslian metodologi dan melindungi standar penilaian dari duplikasi pihak lain.',
    bullets: [
      'Sertifikat HAKI resmi dari DJKI',
      'Metodologi penilaian yang orisinal dan terlindungi',
      'Standar kompetensi yang konsisten dan teraudit',
    ],
    docLabel: 'Lihat Dokumen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="fill-cyan-300">
        <path d="M8 0a5 5 0 0 1 5 5c0 1.7-.9 3.2-2.2 4.1L11 14l-3-1.5L5 14l.2-4.9A5 5 0 0 1 8 0Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1.5A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 8 3.5Z" />
      </svg>
    ),
  },
  {
    id: 'blockchain',
    title: 'Keamanan Blockchain Anti Pemalsuan',
    short: 'Sertifikat terverifikasi on-chain, mustahil dipalsukan.',
    description:
      'Setiap sertifikat yang diterbitkan dicatat pada jaringan blockchain, menciptakan jejak digital permanen yang tidak dapat diubah atau dipalsukan oleh pihak manapun.',
    bullets: [
      'Hash sertifikat tercatat permanen on-chain',
      'Verifikasi instan melalui QR code publik',
      'Tidak dapat diubah, dihapus, atau dipalsukan',
    ],
    docLabel: 'Lihat Dokumen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="fill-cyan-300">
        <path d="M5 2h6a1 1 0 0 1 1 1v2h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1V3a1 1 0 0 1 1-1Zm1 3h4V4H6v1Zm2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </svg>
    ),
  },
]

export default function HolographicFeatures() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [docOpen, setDocOpen] = useState<Feature | null>(null)

  const close = useCallback(() => setActiveId(null), [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (docOpen) setDocOpen(null)
        else close()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, docOpen])

  const active = features.find((f) => f.id === activeId) ?? null
  const activeIndex = features.findIndex((f) => f.id === activeId)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-14">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Kepercayaan &amp; Keamanan
            </h2>
            <p className="text-lg text-slate-400 text-pretty">
              Fondasi legal dan teknologi yang menjamin keaslian setiap sertifikasi kompetensi.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {features.map((feature) => {
              const isActive = feature.id === activeId
              return (
                <div key={feature.id} className="flex flex-col">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`holo-panel-${feature.id}`}
                    onClick={() => setActiveId(isActive ? null : feature.id)}
                    className={`relative w-full text-left rounded-2xl p-px transition-all duration-500 ease-out overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                      isActive
                        ? 'bg-linear-to-b from-cyan-400/60 via-cyan-400/20 to-purple-500/40 shadow-[0_0_24px_-6px_rgba(0,245,255,0.35)]'
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  >
                    <div className="relative h-full bg-slate-900 rounded-[inherit] p-5 md:p-6 overflow-hidden">
                      {/* Scan line sweep on activation */}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/90 to-transparent animate-holo-scan"
                        />
                      )}
                      {/* Subtle radial glow */}
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[64px] transition-opacity duration-500 ${
                          isActive ? 'bg-cyan-400/20 opacity-100' : 'bg-purple-500/20 opacity-0'
                        }`}
                      />
                      <div className="flex items-start gap-3">
                        <div
                          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-500 ${
                            isActive
                              ? 'border-cyan-400/40 bg-cyan-400/10'
                              : 'border-slate-700 bg-slate-800/60'
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-slate-100 text-balance leading-snug">
                            {feature.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400 leading-relaxed">{feature.short}</p>
                        </div>
                      </div>
                      <div
                        className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 ${
                          isActive ? 'text-cyan-300' : 'text-slate-500'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`inline-block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            isActive ? 'bg-cyan-300' : 'bg-slate-600'
                          }`}
                        />
                        {isActive ? 'Panel aktif' : 'Klik untuk detail'}
                      </div>
                    </div>
                  </button>

                  {/* Mobile: panel renders inline below its own card */}
                  <div className="md:hidden">
                    <HoloPanel feature={feature} open={isActive} onClose={close} onViewDoc={() => setDocOpen(feature)} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: panel renders below the card row, aligned to the active card */}
          <div className="hidden md:block">
            <div
              className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
              style={{ transitionDuration: '400ms' }}
            >
              <div className="overflow-hidden">
                {active && (
                  <div className="relative pt-3">
                    {/* Connector notch pointing to the active card */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 h-3 w-px bg-linear-to-b from-cyan-400/70 to-cyan-400/20 transition-all duration-300"
                      style={{ left: `calc(${(activeIndex * 2 + 1) * (100 / 6)}%)` }}
                    />
                    <HoloPanel
                      feature={active}
                      open
                      desktop
                      onClose={close}
                      onViewDoc={() => setDocOpen(active)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary document preview modal */}
      {docOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Dokumen ${docOpen.title}`}
        >
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setDocOpen(null)}
            aria-hidden="true"
          />
          <div className="relative w-[90%] max-w-2xl rounded-2xl p-px bg-linear-to-b from-cyan-400/50 via-slate-700 to-purple-500/40 shadow-[0_0_40px_-10px_rgba(0,245,255,0.3)]">
            <div className="relative bg-slate-900 rounded-[inherit] p-6 md:p-8">
              <button
                type="button"
                onClick={() => setDocOpen(null)}
                className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors duration-200"
                aria-label="Tutup pratinjau dokumen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="fill-current">
                  <path d="M10.28.72a1 1 0 0 1 0 1.41L7.41 5l2.87 2.87a1 1 0 1 1-1.41 1.41L6 6.41 3.13 9.28a1 1 0 0 1-1.41-1.41L4.59 5 1.72 2.13A1 1 0 0 1 3.13.72L6 3.59 8.87.72a1 1 0 0 1 1.41 0Z" />
                </svg>
              </button>
              <h4 className="text-lg font-semibold text-slate-100 pr-10">{docOpen.title}</h4>
              <p className="mt-1 text-sm text-slate-400">Pratinjau dokumen resmi</p>
              <div className="mt-5 flex items-center justify-center aspect-4/3 rounded-xl border border-slate-800 bg-slate-950/60">
                {docOpen.docSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={docOpen.docSrc}
                    alt={`Dokumen ${docOpen.title}`}
                    className="max-h-full max-w-full rounded-lg object-contain"
                  />
                ) : (
                  <div className="text-center px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" className="mx-auto fill-slate-600">
                      <path d="M9 0H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5L9 0Zm0 2.4L11.6 5H9V2.4ZM12 14H4V2h4v4h4v8Z" />
                    </svg>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      Dokumen akan segera tersedia untuk pratinjau publik.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function HoloPanel({
  feature,
  open,
  desktop = false,
  onClose,
  onViewDoc,
}: {
  feature: Feature
  open: boolean
  desktop?: boolean
  onClose: () => void
  onViewDoc: () => void
}) {
  return (
    <div
      id={`holo-panel-${feature.id}`}
      className={
        desktop
          ? 'mx-auto w-full max-w-[650px]'
          : `grid transition-[grid-template-rows] ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`
      }
      style={desktop ? undefined : { transitionDuration: '400ms' }}
    >
      <div className={desktop ? '' : 'overflow-hidden'}>
        <div className={desktop ? '' : 'pt-3'}>
          <div
            className={`relative rounded-2xl p-px bg-linear-to-b from-cyan-400/40 via-slate-700/60 to-purple-500/30 shadow-[0_0_30px_-10px_rgba(0,245,255,0.25)] transition-all ease-out ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ transitionDuration: '450ms' }}
          >
            <div className="relative overflow-hidden rounded-[inherit] bg-slate-900/80 backdrop-blur-md p-5 md:p-7">
              {/* Scan line */}
              {open && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent animate-holo-scan"
                />
              )}
              {/* Ambient corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple-500/15 blur-[72px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-400/10 blur-[72px]"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-cyan-300/80">
                    <span aria-hidden="true" className="inline-block w-1 h-1 rounded-full bg-cyan-300" />
                    Informasi Terverifikasi
                  </div>
                  <h4 className="mt-2 text-lg md:text-xl font-semibold text-slate-100 text-balance">
                    {feature.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors duration-200"
                  aria-label="Tutup panel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="fill-current">
                    <path d="M10.28.72a1 1 0 0 1 0 1.41L7.41 5l2.87 2.87a1 1 0 1 1-1.41 1.41L6 6.41 3.13 9.28a1 1 0 0 1-1.41-1.41L4.59 5 1.72 2.13A1 1 0 0 1 3.13.72L6 3.59 8.87.72a1 1 0 0 1 1.41 0Z" />
                  </svg>
                </button>
              </div>

              <p className="relative mt-3 text-sm md:text-base text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              <ul className="relative mt-4 flex flex-col gap-2.5">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      className="mt-1 shrink-0 fill-cyan-400"
                      aria-hidden="true"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm-.7 11.4L3.9 8l1.4-1.4 2 2 3.4-3.4L12.1 6.6l-4.8 4.8Z" />
                    </svg>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-6">
                <button
                  type="button"
                  onClick={onViewDoc}
                  className="btn-sm text-slate-200 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-cyan-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-cyan-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                >
                  <span className="relative inline-flex items-center">
                    {feature.docLabel}
                    <span className="tracking-normal text-cyan-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
