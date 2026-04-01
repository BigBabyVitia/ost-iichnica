import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";

export function TransformationSection() {
  const [variant, setVariant] = useState<"simple" | "detailed">("simple");

  const cards = [
    {
      category: "Обучение",
      title: "Записаться на ИИ - трансформацию",
      description: "Переход к компании нового типа: от перегруженных команд и ручных решений — к новой силе мышления, темпа и управляемости",
      className: "col-span-1",
      link: "https://wmt-landing.vercel.app/",
    },
    {
      category: "Деловое направление",
      title: "WMT Kids",
      description: "Развитие мышления, навыков и созидания. ИИ как среда практики, самовыражения и раскрытия потенциала ребёнка.",
      className: "col-span-1",
      link: "https://t.me/ynvrcoz",
    },
    {
      category: "Спецпроекты",
      title: "SenseMakers",
      description: "Прояснение сложных вызовов, доступ к сильной экспертной практике, больше смысла, меньше хаоса, сильнее курс в период перемен.",
      className: "col-span-1",
      link: "https://info.sensemakers.biz/newsletter_ai_0126",
    },
    {
      category: "Индивидуальная ИИ разработка",
      title: "Индивидуальная ИИ разработка",
      className: "col-span-1 md:row-span-2",
      link: "https://t.me/NazarovaWMT",
    },
    {
      category: "Партнерство",
      title: "Сотрудничество на следующую ИИчницу",
      className: "col-span-1",
      link: "https://t.me/arturlichkid",
    },
  ];


  return (
    <section className="bg-zinc-950 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <Motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
        >
          От инсайтов к практике
        </Motion.h2>
        <Motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-relaxed whitespace-pre-wrap"
        >
          Здесь собраны направления, в которых интерес к ИИ превращается в развитие, новые возможности и ощутимую пользу — для людей, команд и будущего.
        </Motion.p>

        {/* Switcher */}
        <div className="flex items-center justify-center mb-16">
          <div className="relative flex bg-zinc-900/50 border border-white/10 p-1.5 rounded-[24px] overflow-hidden">
            <Motion.div 
              animate={{ x: variant === "simple" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#FF5331] rounded-[18px] z-0"
            />
            <button 
              onClick={() => setVariant("simple")}
              className={`relative z-10 px-8 py-3.5 rounded-[18px] text-[15px] font-medium transition-colors duration-300 ${variant === "simple" ? "text-white" : "text-white/40 hover:text-white/70"}`}
            >
              Старый вариант
            </button>
            <button 
              onClick={() => setVariant("detailed")}
              className={`relative z-10 px-8 py-3.5 rounded-[18px] text-[15px] font-medium transition-colors duration-300 ${variant === "detailed" ? "text-white" : "text-white/40 hover:text-white/70"}`}
            >
              Вариант с описанием
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const styleClasses = "bg-transparent border border-white/10 hover:border-[#FF5331]/60 hover:shadow-[0_0_30px_rgba(255,83,49,0.15)]";
            const isFirst = index === 0;

            return (
              <Motion.a
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                key={index}
                href={card.link || "#"}
                target={card.link ? "_blank" : undefined}
                rel={card.link ? "noopener noreferrer" : undefined}
                className={`${styleClasses} transition-all duration-300 rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex items-center justify-between group cursor-pointer ${
                  isFirst ? "md:col-span-2 w-full" : "col-span-1"
                } ${variant === 'detailed' ? 'items-start' : 'items-center'}`}
              >
              <div className={`text-left ${isFirst ? "w-full pr-4 md:pr-8" : "max-w-[85%]"}`}>
                <span className="text-[#FF5833] font-normal text-[15px] md:text-lg opacity-80 mb-2 md:mb-3 block">
                  {card.category}
                </span>
                <h3 className={`text-white font-medium leading-snug transition-all duration-300 ${isFirst ? 'text-[28px] md:text-[40px] w-full' : 'text-xl md:text-[28px]'} ${isFirst && variant === 'simple' ? 'md:whitespace-nowrap' : ''}`}>
                  {card.title}
                </h3>
                <AnimatePresence mode="wait">
                  {variant === "detailed" && card.description && (
                    <Motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-[15px] md:text-[17px] leading-relaxed font-light max-w-3xl overflow-hidden"
                    >
                      {card.description}
                    </Motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div className={`bg-[#FF5331] rounded-full w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 ${variant === 'detailed' ? 'mt-2' : ''}`}>
                <ArrowUpRight className="text-white w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
              </div>
            </Motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
