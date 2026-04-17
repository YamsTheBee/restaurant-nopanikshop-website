import { createPortal } from "react-dom";
import { X, Coffee, ShieldCheck, Lock, Terminal } from "lucide-react";
import photoMariama from "../assets/images/ImgClient4.png";
import { useCallback, useEffect, useRef } from "react";

// --- ICÔNES SVG PERSONNALISÉES ---

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Briefcase</title>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

interface MariamaProModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const profilePro = {
  email: "mariamadiaw.a@hotmail.fr",
  skills: [
    // Frontend & Backend
    "React (TypeScript)",
    "Node.js",
    "Express",
    "MySQL",
    "Tailwind CSS",

    // Production & Infrastructure
    "Déploiement (Vercel)",
    "Configuration DNS",
    "Configuration d’environnements de production",
    "SEO technique",

    // Qualité & Sécurité
    "Tests unitaires et d’intégration",
    "Sécurité web",
    "Bonnes pratiques RGPD",

    // IA
    "Prompt Engineering (IA générative)",
    "Intégration d’outils IA",
    "Google AI Essentials (certifiée)",

    // Méthodologie
    "Agile / Scrum",
    "Gestion de projet (Trello, Notion)",

    // Outils complémentaires
    "Figma",
    "Git / GitHub",
    "Outils collaboratifs (Slack, Google Workspace)",
    "Canva",
  ],
};

const MariamaProModal = ({ isOpen, onClose }: MariamaProModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      dialogRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* OVERLAY SÉMANTIQUE */}
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl transition-opacity duration-300 cursor-pointer border-none"
        onClick={onClose}
        aria-label="Fermer la fenêtre"
      />

      {/* MODAL PRINCIPALE */}
      <div
        ref={dialogRef}
        className="relative bg-white w-full max-w-4xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col overflow-hidden focus:outline-none"
        // biome-ignore lint/a11y/useSemanticElements: Manuel dialog implementation for specific portal behavior
        role="dialog"
        aria-modal="true"
        aria-labelledby="mariama-pro-title"
        aria-describedby="mariama-pro-description"
        tabIndex={-1}
      >
        <p id="mariama-pro-description" className="sr-only">
          Présentation du profil professionnel de Mariama Diaw
        </p>

        {/* HEADER */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b bg-gradient-to-r from-indigo-50 via-slate-50 to-slate-100">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-indigo-500 p-1 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src={photoMariama}
                  alt="Mariama"
                  className="w-full h-full rounded-full object-cover scale-110"
                  style={{ objectPosition: "center 5%" }}
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[8px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter border-2 border-white shadow-md z-10 whitespace-nowrap animate-pulse">
                  #OpenToWork
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-1.5 md:p-2 bg-indigo-600 text-white rounded-xl border-2 border-white shadow-lg">
                <ShieldCheck size={16} />
              </div>
            </div>

            <div className="text-left">
              <h2
                id="mariama-pro-title"
                className="text-xl md:text-2xl font-bold text-gray-900 leading-tight"
              >
                Expertise & Vision Tech
              </h2>
              <p className="text-[10px] md:text-sm text-indigo-600 uppercase tracking-widest font-bold mt-1">
                Mariama — Développeuse Full-Stack
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>

        {/* CONTENU */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6 text-left">
              <h4 className="text-lg font-bold border-l-4 border-indigo-600 pl-3">
                Résumé de mon travail
              </h4>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong> Passionnée</strong> , je conçois et développe des
                  applications web modernes, utiles et centrées sur l’humain,
                  avec une attention particulière portée à l’
                  <strong>UX/UI</strong>, à l’
                  <strong>accessibilité</strong> et à l’
                  <strong>impact social</strong>.
                </p>

                <p>
                  Je travaille principalement avec{" "}
                  <strong>React (TypeScript)</strong> côté front-end et{" "}
                  <strong>Node.js / Express / MySQL</strong> côté back-end.
                  J’interviens de la conception jusqu’à la mise en production
                  (déploiement, configuration DNS, optimisation SEO), avec une
                  attention particulière portée à la stabilité, la performance
                  et la sécurisation des applications.
                </p>
                <p>
                  Certifiée <strong>Google AI Essentials</strong>, j'intègre
                  l'IA générative dans mes projets grâce à des techniques de{" "}
                  <strong>prompt engineering</strong> structurées, tout en
                  veillant à une utilisation responsable et sécurisée pour créer
                  des interfaces intelligentes et augmenter la productivité.
                </p>

                <ul className="list-disc list-inside ml-2">
                  <li>Conception (cahier des charges, wireframes, Figma)</li>
                  <li>
                    Développement structuré, maintenable et orienté bonnes
                    pratiques
                  </li>
                  <li>Intégration IA & chatbots</li>
                  <li>Versioning et gestion de code avec Git / GitHub</li>
                  <li>Tests unitaires et d’intégration</li>
                  <li>Déploiement d’applications web </li>
                  <li>Configuration d’environnements de production</li>
                  <li>Gestion et configuration de nom de domaine (DNS)</li>
                  <li>
                    Optimisation SEO technique et local (balises meta, title,
                    structure sémantique, contenu optimisé et référencement
                    Google)
                  </li>
                  <li>
                    Attention portée à la qualité, la performance et
                    l’accessibilité
                  </li>
                </ul>

                {/* FOCUS SÉCURITÉ (OWASP / RGPD) */}
                <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-slate-400 space-y-2">
                  <p className="font-bold text-slate-800 flex items-center gap-2 italic">
                    <Lock size={16} className="text-indigo-600" /> Sécurisation
                    des Données
                  </p>
                  <p className="text-xs text-slate-500">
                    Mise en œuvre des standards <strong>OWASP</strong> et bonnes
                    pratiques de sécurité web : gestion sécurisée des sessions,
                    protection contre les injections, chiffrement des données
                    sensibles et conformité <strong>RGPD</strong>{" "}
                    (anonymisation, consentement et sécurisation des cookies).
                  </p>
                </div>

                {/* LA VISION CYBER / PENTESTING */}
                <div className="p-6 rounded-[2rem] bg-indigo-600 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                    <Terminal size={80} />
                  </div>
                  <h5 className="font-bold flex items-center gap-2 mb-2 uppercase tracking-wider text-[10px] opacity-80">
                    <Terminal size={14} /> Next Release / Roadmap
                  </h5>
                  <p className="text-xs leading-relaxed opacity-95">
                    <span className="font-black text-indigo-200 uppercase mr-1">
                      Feature :
                    </span>
                    <strong> Cybersécurité & Pentesting</strong>. Spécialisation
                    en
                    <strong> audits de vulnérabilités</strong> et sécurisation
                    offensive.
                  </p>
                </div>
                <p className="font-semibold text-slate-700 italic border-t pt-4">
                  🎯 Objectif : Bâtir des solutions web{" "}
                  <strong>utiles, durables et hautement sécurisées</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {profilePro.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-bold border border-indigo-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* COLONNE DROITE / CTA */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 font-bold">
                    🤝 Collaboration
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed text-left">
                    Disponible pour des projets à fort impact social ou
                    technique, avec une sensibilité particulière pour les enjeux
                    de sécurité.
                  </p>
                </div>

                {/* SIGNATURE #NOPANIK */}
                <div className="flex flex-col items-center gap-3 pt-6 border-t border-slate-200">
                  <div className="p-3 bg-orange-50 rounded-full text-[#f19c38] shadow-inner">
                    <Coffee size={24} strokeWidth={2.5} />
                  </div>
                  <div className="italic text-[11px] text-slate-400 text-center leading-tight">
                    "Développé avec{" "}
                    <span className="text-red-500 not-italic">❤️</span> &
                    beaucoup de café au
                    <span className="font-bold text-slate-600 ml-1">
                      #NoPanik
                    </span>
                    ."
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${profilePro.email}?subject=Collaboration%20Projet%20Web`}
                className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                <BriefcaseIcon /> Discutons de votre projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MariamaProModal;
