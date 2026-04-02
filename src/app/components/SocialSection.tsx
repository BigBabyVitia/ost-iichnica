import React from "react";
import { Instagram, Send, Activity, Mic } from "lucide-react";
import { motion as Motion } from "motion/react";

export function SocialSection() {
  const socials = [
    {
      name: "Инстаграм компании",
      icon: <Instagram className="w-5 h-5 text-white" strokeWidth={2} />,
      link: "https://www.instagram.com/wmt_ai?igsh=bGppcjl1czh4c2Zh",
    },
    {
      name: "Игорь Никитин",
      icon: <Instagram className="w-5 h-5 text-white" strokeWidth={2} />,
      link: "https://www.instagram.com/igor_nikitin_ai?igsh=dnZ4ZTA1ZW9jcjV5",
    },
    {
      name: "Телеграм компании",
      icon: <Send className="w-5 h-5 text-white" strokeWidth={2} />,
      link: "https://www.instagram.com/igor_nikitin_ai?igsh=dnZ4ZTA1ZW9jcjV5", // As provided by user
    },
    {
      name: "Игорь Никитин",
      icon: <Send className="w-5 h-5 text-white" strokeWidth={2} />,
      link: "https://t.me/Nikitinwmt",
    },
    {
      name: 'Исследования "Тихая замена"',
      icon: <Activity className="w-5 h-5 text-white" strokeWidth={2} />,
      link: "https://t.me/neuromein",
    },
    {
      name: "Подкасты Игоря Никитина",
      icon: <Mic className="w-5 h-5 text-white" strokeWidth={2} />,
      link: "https://youtube.com/@igornikitin1?si=DHDPvD6AQrlffu0I",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <Motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4"
        >
          Мы в соцсетях
        </Motion.h2>
        <Motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mb-16"
        >
          Будем рады вашим отметкам!
        </Motion.p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {socials.map((social, index) => (
            <Motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181B] hover:bg-[#27272A] border border-white/5 hover:border-white/10 transition-colors p-3 pr-8 rounded-full group"
            >

              <div className="bg-[#2D2D2D] group-hover:bg-[#FF5331] transition-colors w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-5">
                {social.icon}
              </div>
              <span className="text-white text-lg font-medium text-left">
                {social.name}
              </span>
            </Motion.a>
          ))}
        </div>
        
        <Motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs text-neutral-600 mt-16 max-w-2xl mx-auto text-center leading-relaxed"
        >
          *Деятельность Meta Platforms Inc. и ее продуктов (Instagram и Facebook) запрещена на территории Российской Федерации.
          Копирование материалов и текстов, размножение на сайтах, в любых объемах ограничено ст. 1229 КоАП РФ.
        </Motion.p>
      </div>
    </section>
  );
}
