import React from "react";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <a
          href="mailto:wmt-ai@wmtgroup.ru"
          className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-neutral-300 hover:text-white border border-white/10 px-6 py-3 rounded-full transition-colors mb-12"
        >
          <Mail className="w-5 h-5 text-neutral-400" />
          <span className="font-medium text-lg">wmt-ai@wmtgroup.ru</span>
        </a>

        <p className="text-xl md:text-2xl font-medium text-white mb-6">
          До встречи летом на следующей <span className="text-[#FF5331]">ИИЧНИЦЕ!</span>
        </p>

        <p className="text-neutral-500 text-sm">
          © 2024 WMT AI
        </p>
      </div>
    </footer>
  );
}
