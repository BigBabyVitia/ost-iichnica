import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion as Motion } from "motion/react";

export function TransformationSection() {
  const cards = [
    {
      category: "Обучение",
      title: "Записаться на ИИ - трансформацию",
      description: "Переход к компании нового типа: от перегруженных команд и ручных решений — к новой силе мышления, темпа и управляемости",
      className: "col-span-1",
      link: "https://wmt-landing.vercel.app/",
    },
    {
      category: "Детское направление",
      title: "Оставить заявку в WMT Kids",
      description: "Развитие мышления, навыков и созидания. ИИ как среда практики, самовыражения и раскрытия потенциала ребёнка.",
      className: "col-span-1",
      link: "https://t.me/ynvrcoz",
    },
    {
      category: "Спецпроекты",
      title: "Развитие навыков коммуникации с Sensemakers",
      description: "Компетенции сотрудника будущего, практические шаги к ИИвизации без стресса",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
        >
          От инсайтов к практике
        </Motion.h2>
        <Motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-relaxed whitespace-pre-wrap"
        >
          Здесь собраны направления, в которых интерес к ИИ превращается в развитие, новые возможности и ощутимую пользу — для людей, команд и будущего.
        </Motion.p>

        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const styleClasses = "bg-transparent border border-white/10 hover:border-[#FF5331]/60 hover:shadow-[0_0_30px_rgba(255,83,49,0.15)]";
            const isFirst = index === 0;

            return (
              <Motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
                href={card.link || "#"}
                target={card.link ? "_blank" : undefined}
                rel={card.link ? "noopener noreferrer" : undefined}
                className={`${styleClasses} transition-all duration-300 rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex items-start justify-between group cursor-pointer ${
                  isFirst ? "md:col-span-2 w-full" : "col-span-1"
                }`}
              >
              <div className={`text-left ${isFirst ? "w-full pr-4 md:pr-8" : "max-w-[85%]"}`}>
                <span className="text-[#FF5833] font-normal text-[15px] md:text-lg opacity-80 mb-2 md:mb-3 block">
                  {card.category}
                </span>
                <h3 className={`text-white font-medium leading-snug transition-all duration-300 ${isFirst ? 'text-[28px] md:text-[40px] w-full' : 'text-xl md:text-[28px]'}`}>
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-white/60 text-[15px] md:text-[17px] leading-relaxed font-light mt-3 max-w-3xl">
                    {card.description}
                  </p>
                )}
              </div>
              <div className="bg-[#FF5331] rounded-full w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 mt-2">
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
