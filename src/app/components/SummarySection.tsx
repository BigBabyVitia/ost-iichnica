import React from "react";
import sittingManImg from "figma:asset/25f8f8a3d32b6cc7fa3f35b383bcb083df876915.png";
import { motion as Motion } from "motion/react";

// Speaker Images
import nikitinImg from "@/assets/speakers/Игорь Никитин.png";
import nakhapetyanImg from "@/assets/speakers/Гор Нахапетян.png";
import doronichevImg from "@/assets/speakers/Андрей Дороничев.png";
import markovImg from "@/assets/speakers/Сергей Марков.png";
import savvateevImg from "@/assets/speakers/Алексей Савватеев.png";
import nelyudovImg from "@/assets/speakers/Егор Нелюдов.png";
import teamT1Img from "@/assets/speakers/Команда Т1.png";
import shakirovImg from "@/assets/speakers/Равиль Шакиров.png";

const MOCK_SPEAKERS = [
  {
    name: "Игорь Никитин",
    title: "Ведущий ИИЧНИЦА SHOW. Founder и CEO WMT AI, AI-трансформатор",
    image: nikitinImg,
  },
  {
    name: "Гор Нахапетян",
    title: "Сооснователь компании Sensemakers",
    image: nakhapetyanImg,
  },
  {
    name: "Андрей Дороничев",
    title: "ex-Google Product Director, Founder & CEO Optic",
    image: doronichevImg,
  },
  {
    name: "Сергей Марков",
    title: "Директор по развитию технологий ИИ, ПАО «Сбербанк»",
    image: markovImg,
  },
  {
    name: "Алексей Савватеев",
    title: "Эксперт в математике, популяризатор науки",
    image: savvateevImg,
  },
  {
    name: "Егор Нелюдов",
    title: "Участник проекта WMT Kids",
    image: nelyudovImg,
  },
  {
    name: "Команда Т1",
    title: "Команда разработчиков ИИ продуктов холдинга Т1",
    image: teamT1Img,
  },
  {
    name: "Равиль Шакиров",
    title: "Руководитель направления технической аналитики Центра компетенций по ИИ",
    image: shakirovImg,
  },
];


export function SummarySection() {
  return (
    <section id="summary-section" className="bg-zinc-950 py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        <Motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[44px] font-medium tracking-tight text-white mb-5"
        >
          Саммари всех выступлений
        </Motion.h2>
        <Motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-[17px] text-neutral-300 max-w-[650px] mb-16 leading-relaxed opacity-80"
        >
          Тут что то придумать, по типу собрали все материалы и подготовили
          отчеты в удобном формате, в этом духе короче
        </Motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-fr">
          {/* Card 1 */}
          <SpeakerCard speaker={MOCK_SPEAKERS[0]} index={0} />
          {/* Card 2 */}
          <SpeakerCard speaker={MOCK_SPEAKERS[1]} index={1} />
          
          {/* The 3D Man Illustration (Col 3, Row 1 on Desktop) */}
          <Motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-end justify-center relative h-full w-full"
          >
            <img 
              src={sittingManImg} 
              alt="Спикер" 
              className="w-auto h-[110%] max-w-none object-contain absolute bottom-0 z-10 pointer-events-none drop-shadow-2xl"
            />
          </Motion.div>

          {/* Remaining 6 Cards */}
          {MOCK_SPEAKERS.slice(2).map((speaker, index) => (
            <SpeakerCard key={index + 2} speaker={speaker} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({ speaker, index }: { speaker: any, index?: number }) {
  return (
    <Motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index !== undefined ? Math.min(index * 0.1, 0.5) : 0 }}
      className="bg-[#1C1C1E] border border-white/5 p-3 md:p-4 flex flex-col w-full text-center rounded-[32px] relative z-0 h-full shadow-2xl"
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] md:aspect-[3/2] rounded-[24px] overflow-hidden mb-6 bg-zinc-900 shrink-0">
         <img 
           src={speaker.image} 
           alt={speaker.name} 
           className="w-full h-full object-cover shadow-lg" 
         />
      </div>
      
      {/* Info */}
      <div className="flex flex-col px-2 mb-6 flex-grow justify-start">
        <h3 className="text-white text-[28px] md:text-[32px] font-medium mb-2 tracking-tight">
          {speaker.name}
        </h3>
        <p className="text-[#A1A1AA] text-[16px] md:text-[18px] font-light leading-snug">
          {speaker.title}
        </p>
      </div>
      
      {/* Action Button */}
      <div className="px-2 pb-2 mt-auto">
        <button className="bg-[#09090B] border border-white/15 hover:border-white/30 text-white text-[16px] font-medium p-1.5 rounded-full transition-all w-full flex items-center group">
          <span className="flex-1 text-left pl-4">Скачать саммари</span>
          <div className="bg-[#FF5331] w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </button>
      </div>
    </Motion.div>
  );
}
