import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import photoMariama from "../assets/images/ImgClient4.png";

const CodeIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Code</title>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

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
    "React (TypeScript)",
    "Node.js",
    "Express",
    "MySQL",
    "Tailwind CSS",
    "Déploiement (Vercel)",
    "Configuration DNS",
    "SEO technique",
    "Tests unitaires",
    "Sécurité web",
    "RGPD",
    "Prompt Engineering (IA)",
    "Google AI Essentials",
    "Agile / Scrum",
    "Figma",
    "Git / GitHub",
  ],
};

const MariamaProModal = ({ isOpen, onClose }: MariamaProModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <dialog
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl cursor-pointer"
      aria-labelledby="mariama-pro-title"
      open={isOpen}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col cursor-default overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b bg-gradient-to-r from-indigo-50 via-slate-50 to-slate-100">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-indigo-500 p-1 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src={photoMariama}
                  alt="Mariama"
                  className="w-full h-full rounded-full object-cover"
                  style={{ objectPosition: "center 5%" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ui-avatars.com/api/?name=Mariama&background=6366f1&color=fff";
                  }}
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[8px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter border-2 border-white shadow-md z-10 whitespace-nowrap animate-pulse">
                  #OpenToWork
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-1.5 md:p-2 bg-indigo-600 text-white rounded-xl border-2 border-white shadow-lg">
                <CodeIcon size={14} />
              </div>
            </div>

            <div>
              <h2
                id="mariama-pro-title"
                className="text-xl md:text-2xl font-bold text-gray-900 leading-tight"
              >
                Parcours & Expertise Pro
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
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* CONTENU */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-bold border-l-4 border-indigo-600 pl-3">
                Résumé
              </h4>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-left">
                <p>
                  Développeuse <strong>full-stack</strong> passionnée, je
                  conçois des applications centrées sur l’humain, alliant{" "}
                  <strong>UX/UI</strong> et <strong>accessibilité</strong>.
                </p>
                <p>
                  Expertise : <strong>React (TS)</strong>,{" "}
                  <strong>Node.js</strong> et <strong>MySQL</strong>. Je
                  maîtrise tout le cycle : de Figma au déploiement sécurisé.
                </p>
                <p className="font-semibold text-slate-700 italic">
                  🎯 Objectif : des solutions web durables et performantes.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
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

            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-6 italic text-sm text-slate-500 text-center">
                "Codé avec ❤️ & beaucoup de café au Passage du Prado."
              </div>
              <a
                href={`mailto:${profilePro.email}?subject=Collaboration`}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                <BriefcaseIcon />
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>,
    document.body,
  );
};

export default MariamaProModal;
