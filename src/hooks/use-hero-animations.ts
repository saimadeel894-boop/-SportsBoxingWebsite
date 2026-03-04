import { useEffect } from "react";

type EntryAnimation = {
  el: HTMLElement | null;
  delay: number;
  from: { opacity?: number; x?: number; y?: number; scale?: number };
  to: { opacity?: number; x?: number; y?: number; scale?: number };
  duration: number;
};

const composeTransform = (
  baseTransform: string,
  transform: { x?: number; y?: number; scale?: number },
) => {
  const transforms = [baseTransform];
  if (transform.x !== undefined) transforms.push(`translateX(${transform.x}px)`);
  if (transform.y !== undefined) transforms.push(`translateY(${transform.y}px)`);
  if (transform.scale !== undefined) transforms.push(`scale(${transform.scale})`);

  return transforms.filter(Boolean).join(" ").trim();
};

export const useHeroAnimations = () => {
  useEffect(() => {
    const eikyoTexts = Array.from(document.querySelectorAll<HTMLElement>(".js-eikyo-text"));
    const boxerImage = document.querySelector<HTMLElement>(".js-boxer-image");
    const gloveParallax = document.querySelector<HTMLElement>(".js-glove-parallax");
    const gloveFloat = document.querySelector<HTMLElement>(".js-glove-float");
    const mouthGuardParallax = document.querySelector<HTMLElement>(".js-mouthguard-parallax");
    const mouthGuardFloat = document.querySelector<HTMLElement>(".js-mouthguard-float");
    const customers = document.querySelector<HTMLElement>(".js-customers-block");
    const productIcons = document.querySelector<HTMLElement>(".js-product-icons");
    const tagline = document.querySelector<HTMLElement>(".js-tagline");
    const statBlock = document.querySelector<HTMLElement>(".js-stat-block");
    const brandSealParallax = document.querySelector<HTMLElement>(".js-brand-seal-parallax");
    const brandSealSpin = document.querySelector<HTMLElement>(".js-brand-seal-spin");

    const parallaxTargets = [
      ...eikyoTexts,
      gloveParallax,
      mouthGuardParallax,
      customers,
      brandSealParallax,
      statBlock,
    ].filter(Boolean) as HTMLElement[];

    parallaxTargets.forEach((el) => {
      el.style.willChange = "transform";
    });

    const styleId = "hero-animations-runtime";
    let runtimeStyle = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!runtimeStyle) {
      runtimeStyle = document.createElement("style");
      runtimeStyle.id = styleId;
      runtimeStyle.textContent = `
        @keyframes heroSealSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .seal-spinning {
          animation: heroSealSpin 8s linear infinite !important;
          will-change: transform;
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-bob-1 { animation: heroFloat 3s ease-in-out infinite; }
        .float-bob-2 { animation: heroFloat 3s ease-in-out infinite; animation-delay: 1s; }
      `;
      document.head.appendChild(runtimeStyle);
    }

    if (brandSealSpin) brandSealSpin.classList.add("seal-spinning");
    if (gloveFloat) gloveFloat.classList.add("float-bob-1");
    if (mouthGuardFloat) mouthGuardFloat.classList.add("float-bob-2");

    const entryElements: EntryAnimation[] = [
      ...eikyoTexts.map((el) => ({
        el,
        delay: 0,
        from: { opacity: 0.5, scale: 0.95 },
        to: { opacity: 1, scale: 1 },
        duration: 600,
      })),
      { el: boxerImage, delay: 100, from: { opacity: 0, y: -20 }, to: { opacity: 1, y: 0 }, duration: 800 },
      { el: gloveParallax, delay: 200, from: { opacity: 0, y: -40 }, to: { opacity: 1, y: 0 }, duration: 600 },
      { el: customers, delay: 300, from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 }, duration: 600 },
      { el: productIcons, delay: 400, from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 }, duration: 600 },
      { el: tagline, delay: 400, from: { opacity: 0 }, to: { opacity: 1 }, duration: 500 },
      { el: statBlock, delay: 500, from: { opacity: 0 }, to: { opacity: 1 }, duration: 500 },
      { el: brandSealParallax, delay: 700, from: { opacity: 0 }, to: { opacity: 1 }, duration: 500 },
      { el: mouthGuardParallax, delay: 600, from: { opacity: 0 }, to: { opacity: 1 }, duration: 500 },
    ];

    const timeouts: number[] = [];

    entryElements.forEach(({ el, delay, from, to, duration }) => {
      if (!el) return;

      const baseTransform = el.style.transform && el.style.transform !== "none" ? el.style.transform : "";

      el.style.transition = "none";
      if (from.opacity !== undefined) el.style.opacity = String(from.opacity);
      el.style.transform = composeTransform(baseTransform, from);

      const timeout = window.setTimeout(() => {
        el.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
        if (to.opacity !== undefined) el.style.opacity = String(to.opacity);
        el.style.transform = composeTransform(baseTransform, to);
      }, delay);

      timeouts.push(timeout);
    });

    const parallaxElements = [
      ...eikyoTexts.map((el) => ({ el, speed: 0.2 })),
      { el: gloveParallax, speed: 0.5 },
      { el: mouthGuardParallax, speed: 0.4 },
      { el: customers, speed: 0.7 },
      { el: brandSealParallax, speed: 0.6 },
      { el: statBlock, speed: 0.8 },
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach(({ el, speed }) => {
        if (!el) return;
        const baseTransform = el.style.transform && el.style.transform !== "none" ? el.style.transform.split(" translateY(")[0] : "";
        el.style.transform = composeTransform(baseTransform, { y: scrollY * speed });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      if (brandSealSpin) brandSealSpin.classList.remove("seal-spinning");
      if (gloveFloat) gloveFloat.classList.remove("float-bob-1");
      if (mouthGuardFloat) mouthGuardFloat.classList.remove("float-bob-2");
    };
  }, []);
};
