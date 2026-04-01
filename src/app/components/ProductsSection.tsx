import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion as Motion } from "motion/react";

import neurokeyImg from "@/assets/products/Нейроключ.png";
import relevanterImg from "@/assets/products/Relevanter.png";

export function ProductsSection() {
  const products = [
    {
      title: "Нейроключ",
      description:
        "Корпоративная платформа для управления работой с ИИ в компаниях. Объединяет ведущие модели LLM, ИИ-агентов и внутреннюю базу знаний бизнеса в единый безопасный рабочий контур, для повышения эффективности команд.",
      buttonText: "Узнать подробнее",
      image: neurokeyImg,
    },
    {
      title: "Relevanter",
      description:
        "Ускоряет подбор персонала и снижает его стоимость. Автоматически подбирает кандидатов на HH.ru и в вашей базе, оценивает и объективно выбирает, ведет переписку, скрининг и доводит лучших до интервью.",
      buttonText: "Узнать подробнее",
      image: relevanterImg,
    },
  ];


  return (
    <section className="bg-zinc-950 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16"
        >
          Продукты
        </Motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {products.map((product, index) => (
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
              className="bg-transparent flex flex-col"
            >
              {/* Screenshot mockup Container */}
              <div className="w-full aspect-[16/10] bg-zinc-900 rounded-[24px] border border-white/10 overflow-hidden mb-8 shadow-2xl">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity p-4"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col text-left">
                <h3 className="text-white text-3xl font-medium mb-4">
                  {product.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
                  {product.description}
                </p>
                <div>
                  <button className="bg-[#FF5331] hover:bg-[#e64627] text-white font-medium text-lg px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center">
                    {product.buttonText}
                  </button>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
