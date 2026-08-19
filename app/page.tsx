"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Facebook, Instagram, Menu, Music2, Play, Youtube } from "lucide-react";
import Countdown from "@/components/Countdown";
import CursorGlow from "@/components/CursorGlow";
import { Reveal } from "@/components/Reveal";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/karr-neon-site"
    : "";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroArtY = useTransform(scrollYProgress, [0, 0.32], [0, 145]);
  const heroCopyY = useTransform(scrollYProgress, [0, 0.32], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.18]);

  return (
    <main id="top">
      <CursorGlow />
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <nav className="nav shell">
        <a href="#top" className="nav-logo" aria-label="KARR home">
          <Image
                src={`${basePath}/karr-logo-triangle.png`}
                alt="K.A.R.R."
                width={380}
                height={300}
                priority
            />
        </a>
        <div className="nav-links">
          <a href="#release">Music</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-socials">
          <a href="https://www.instagram.com/karrsynthwave/" target="_blank" aria-label="Instagram"><Instagram /></a>
          <a href="https://www.facebook.com/KARRRetroWave" target="_blank" aria-label="Facebook"><Facebook /></a>
          <a href="https://www.youtube.com/@karrmusic5533" target="_blank" aria-label="YouTube"><Youtube /></a>
          <a href="#" target="_blank" aria-label="Streaming"><Music2 /></a>
          <button className="menu-button" aria-label="Menu"><Menu /></button>
        </div>
      </nav>

      <section className="hero">
        <motion.div className="hero-image" style={{ y: heroArtY, opacity: heroOpacity }}>
          <Image
            src={`${basePath}/runaway-heart.jpg`}
            alt="Runaway Heart artwork"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-image-shade" />
        </motion.div>

        <motion.div className="hero-copy shell" style={{ y: heroCopyY, opacity: heroOpacity }}>
          <div className="genre">SYNTHWAVE <i>•</i> DARKWAVE <i>•</i> RETROWAVE</div>
          <motion.div
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image
              src={`${basePath}/karr-logo.png`}
              alt="K.A.R.R."
              width={710}
              height={360}
              priority
            />
          </motion.div>
          <div className="runaway-script">Runaway Heart</div>
          <div className="release-line">
            <span>NEW EP COMING</span>
            <strong>28 AUGUST 2026</strong>
          </div>
          <div className="hero-actions">
            <a className="neon-button primary" href="#release">PRE-SAVE EP <ArrowUpRight /></a>
            <a className="neon-button" href="#release">EXPLORE RELEASE <Play /></a>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#about"><span>SCROLL</span><ArrowDown /></a>
      </section>

      <section id="about" className="about-section section-border">
        <div className="shell about-grid">
          <Reveal className="about-copy">
            <div className="section-code">// 01 &nbsp; THE PROJECT</div>
            <h2>ABOUT<br/><span>K.A.R.R</span></h2>
            <p>
             K.A.R.R is a professional power trio originating from the vibrant island of Malta. Drawing from diverse musical influences and backgrounds, the band crafts a distinctive sound rooted in synthwave, characterized by rich synthesizer textures and dynamic guitar-driven soundscapes. Buckle up as you take on a trip down the memory lane as time travel has never been this easy!
            </p>
            <p className="muted-copy">
              This is the starting version of the story section — you can replace this with your real biography whenever you want.
            </p>
            <a className="line-link" href="#release">HEAR THE NEXT CHAPTER <ArrowUpRight /></a>
          </Reveal>

          <Reveal className="band-photo-wrap" delay={0.12}>
            <div className="corner-label">K.A.R.R. / 2026</div>
            <Image
              src={`${basePath}/karr-band.jpg`}
              alt="K.A.R.R. band portrait"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className="photo-noise" />
            <div className="photo-frame" />
          </Reveal>
        </div>
      </section>

      <section id="release" className="release-section section-border">
        <div className="release-aura" aria-hidden="true" />
        <div className="shell release-grid">
          <Reveal className="release-art-wrap">
            <div className="vinyl" aria-hidden="true"><div className="vinyl-label">K.A.R.R.</div></div>
            <motion.div className="release-cover" whileHover={{ rotate: -2, scale: 1.018 }} transition={{ duration: 0.35 }}>
              <Image
                src={`${basePath}/runaway-heart.jpg`}
                alt="Runaway Heart EP artwork"
                fill
                sizes="(max-width: 900px) 80vw, 42vw"
              />
            </motion.div>
          </Reveal>

          <Reveal className="release-info" delay={0.1}>
            <div className="section-code pink">// 02 &nbsp; UPCOMING RELEASE</div>
            <Countdown />
            <div className="release-kicker">NEW EP</div>
            <h2>RUNAWAY<br/><span>HEART</span></h2>
            <div className="release-date">28TH AUGUST 2026</div>
            <p>New music from K.A.R.R. arrives August 28. This section is ready for your Spotify pre-save URL, track list and platform links when you have them.</p>
            <div className="platform-actions">
              <a className="neon-button primary wide" target="_blank" href="https://distrokid.com/hyperfollow/karr/runaway-heart?fbclid=IwY2xjawTy2GlwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMWRxaktOMHNibHExVm9PbjdzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeYrGIpF_GdTPUjKc-szy8aPu2IjsB8y29m9O043wllUjtObfFmyseKx5Jrso_aem_UqxC_EHMfbrISAk1vnOX9g"><Music2 /> PRE-SAVE / LISTEN</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="manifesto section-border">
        <div className="manifesto-grid" aria-hidden="true" />
        <motion.div
          className="manifesto-word"
          initial={{ x: "10%" }}
          whileInView={{ x: "-4%" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          AFTER DARK / AFTER DARK / AFTER DARK
        </motion.div>
        <div className="shell manifesto-copy">
          <span>THE SIGNAL IS GETTING STRONGER.</span>
          <strong>28.08.26</strong>
        </div>
      </section>

      <footer id="contact" className="footer shell">
        <div className="footer-brand">
          <Image
            src={`${basePath}/karr-logo-triangle.png`}
            alt="K.A.R.R."
            width={180}
            height={140}
          />
        </div>
        <div className="footer-center">
          <span>OFFICIAL K.A.R.R. WEBSITE</span>
        
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/karrsynthwave/" target="_blank">INSTAGRAM</a>
          <a href="https://www.youtube.com/@karrmusic5533" target="_blank">YOUTUBE</a>
          <a href="mailto:karrmusic@outlook.com">EMAIL</a>
        </div>
      </footer>
    </main>
  );
}
