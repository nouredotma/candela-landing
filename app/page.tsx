"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const avatars = [
  "/avatar1.png",
  "/avatar2.png",
  "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwyfDB8fHwy",
  "https://images.unsplash.com/photo-1729320500482-8423530fa6b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHwyfDB8fHwy",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/avatar.png",
  "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const titleLetters = "Candela".split("")

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${className} reveal-on-scroll ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  )
}

function AnimatedTitle() {
  const [replacementIndex, setReplacementIndex] = useState(-1)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setReplacementIndex(0)
    }, 2500)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (replacementIndex >= 0 && replacementIndex < titleLetters.length) {
      const timer = setTimeout(() => {
        setReplacementIndex((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [replacementIndex])

  return (
    <div className="flex items-center justify-center gap-0.5 h-20 sm:h-24">
      {titleLetters.map((letter, i) => {
        const isLetter = replacementIndex >= i

        return (
          <motion.div 
            key={i} 
            layout 
            className="flex items-center justify-center"
            transition={{
              layout: { type: "spring", stiffness: 300, damping: 25 }
            }}
          >
            <AnimatePresence mode="wait">
              {!isLetter ? (
                <motion.div
                  key={`avatar-${i}`}
                  layout
                  initial={{ y: 80, opacity: 0, scale: 0.3 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    rotate: 15,
                    transition: { duration: 0.2 },
                  }}
                  transition={{
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 -mx-1 sm:-mx-1.5 relative"
                  style={{ zIndex: i + 10 }}
                >
                  <div className="h-full w-full overflow-hidden rounded-full border-[3px] border-white shadow-sm">
                    <img src={avatars[i]} alt={`User ${i}`} className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              ) : (
                <motion.span
                  key={`letter-${i}`}
                  layout
                  initial={{ y: 30, opacity: 0, scale: 0, rotate: -15 }}
                  animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  className="text-6xl sm:text-7xl font-semibold leading-none inline-block text-black drop-shadow-sm select-none"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {letter}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Home() {
  const scenicBackground =
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const features = [
    {
      title: "Guest Access",
      body: "Jump into any public room instantly with zero signup friction.",
    },
    {
      title: "Account Registration",
      body: "Reserve your username, choose avatars, and manage your profile.",
    },
    {
      title: "Real-Time Chat",
      body: "Messages refresh every 2 seconds with image, PDF, and GIF attachments.",
    },
  ]

  const highlights = [
    {
      title: "Expressive messaging, built in",
      body: "Use the emoji picker with large single-emoji rendering plus support for image, PDF, and GIF attachments.",
    },
    {
      title: "Room control without friction",
      body: "Create public or password-protected rooms, invite users instantly, and manage access in a few clicks.",
    },
    {
      title: "Profile and identity that feel personal",
      body: "Reserve usernames, pick DiceBear avatar styles, upload custom images, and edit your profile inline.",
    },
  ]

  const stack = [
    {
      label: "Backend",
      value: "Python 3.10+, Flask, Flask-Session, bcrypt",
    },
    {
      label: "Database",
      value: "Supabase (PostgreSQL)",
    },
    {
      label: "Frontend",
      value: "Vanilla JS, Vanilla CSS, Bootstrap 5.3, Bootstrap Icons",
    },
    {
      label: "APIs",
      value: "DiceBear avatars, Google Fonts (Open Sans)",
    },
  ]

  return (
    <main className="min-h-screen text-[#141414]">
      <div className="mx-auto w-full max-w-8xl px-4 py-8 md:px-24">
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Candela Logo" 
              className="h-11 w-auto grayscale brightness-0 opacity-80" 
            />
          </Link>
          <Link href="https://candela-hpw2.onrender.com/" target="_blank">
            <button className="rounded-full border border-[#c8c6c1] bg-[#ebe9df] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#e5e3db] cursor-pointer">
              View app
            </button>
          </Link>
        </div>
        <section className="text-center mt-40">
          <AnimatedTitle />
          <Reveal>
            <h2 className="mx-auto text-6xl font-normal leading-tighter tracking-tighter">
              Real-time chatrooms
              <br />
              with premium glassmorphism
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500 font-medium tracking-tighter">
              A premium chatroom web app built with Flask and Supabase. Join instantly as a
              guest, or register to unlock profile customization, avatars, and more.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="https://candela-hpw2.onrender.com/" target="_blank">
                <button className="rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/80 cursor-pointer">
                  Start chatting
                </button>
              </Link>
              <Link href="https://github.com/nouredotma/candela" target="_blank">
                <button className="rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-black/70 cursor-pointer flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Github
                </button>
              </Link>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <section
            className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-cover bg-center p-6 sm:p-10"
            style={{ backgroundImage: `url('${scenicBackground}')` }}
          >
            <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-xl">
              <img
                src="/p11.png"
                alt="Candela app preview"
                className="h-auto w-full rounded-md object-cover"
              />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-10 grid gap-4 md:grid-cols-[170px_1fr] md:items-start">
            <h3 className="text-2xl font-medium leading-tight tracking-tighter text-black/80">
              Core features
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="rounded-xl border border-primary/20 bg-primary/10 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base font-semibold tracking-tighter text-primary">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">{feature.body}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12 grid gap-4 md:grid-cols-[170px_1fr] md:items-start">
            <h3 className="text-2xl font-medium leading-tight tracking-tighter text-black/80">
              Why Candela stands out
            </h3>
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-primary/10">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-3 p-4 md:grid-cols-[1.1fr_1.4fr] md:items-start ${index < highlights.length - 1 ? "border-b border-primary/15" : ""}`}
                >
                  <p className="border-l-2 border-primary/70 pl-3 text-base font-semibold tracking-tighter text-primary">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-black/65">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h3 className="text-3xl font-medium leading-tighter">
                Built for smooth,
                <br />
                experiences and conversations
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/65 sm:text-base">
                Candela combines fast room-based chat, rich media messaging, profile controls,
                and a polished glassmorphism interface into one modern experience.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {stack.map((item) => (
                  <p key={item.label} className="text-sm tracking-tight text-black/70">
                    <span className="font-semibold text-primary">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="overflow-hidden rounded-2xl border border-black/10 bg-cover bg-center p-6"
              style={{ backgroundImage: `url('${scenicBackground}')` }}
            >
              <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl">
                <img
                  src="/p12.png"
                  alt="Candela chat interface preview"
                  className="h-auto w-full rounded-md object-cover"
                />
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-20 text-center">
            <h3 className="text-5xl font-normal tracking-tighter">Ready to launch your room?</h3>
            <Link href="https://candela-hpw2.onrender.com/" target="_blank">
              <button className="mt-6 rounded-full bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primary/80 cursor-pointer">
                Open Candela
              </button>
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
