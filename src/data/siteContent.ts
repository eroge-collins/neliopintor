import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Brush,
  Building2,
  Clock3,
  Home,
  Layers,
  PaintRoller,
  ShieldCheck,
} from "lucide-react";

export const WHATSAPP_DISPLAY = "(21) 9 9119-0921";
export const WHATSAPP_PHONE = "5521991190921";
export const WHATSAPP_DIRECT_URL =
  "https://api.whatsapp.com/send/?phone=5521991190921&text&type=phone_number&app_absent=0";

export const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export const heroSlides = [
  {
    image: "https://images.pexels.com/photos/6474483/pexels-photo-6474483.jpeg?auto=compress&cs=tinysrgb&w=2400",
    title: "Fachada em preparo",
  },
  {
    image: "https://images.pexels.com/photos/7218579/pexels-photo-7218579.jpeg?auto=compress&cs=tinysrgb&w=2400",
    title: "Interior protegido",
  },
  {
    image: "https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=2400",
    title: "Acabamento de parede",
  },
];

export type Service = {
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    title: "Pintura residencial",
    description: "Preparo, massa, lixamento e acabamento limpo para interiores e exteriores.",
    detail: "Casas, apartamentos, quartos e salas.",
    icon: Home,
    image: "https://images.pexels.com/photos/7218579/pexels-photo-7218579.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Fachadas",
    description: "Selagem, correção e proteção para áreas externas.",
    detail: "Boa leitura visual da rua e acabamento durável.",
    icon: Building2,
    image: "https://images.pexels.com/photos/6474483/pexels-photo-6474483.jpeg?auto=compress&cs=tinysrgb&w=1100",
  },
  {
    title: "Comercial",
    description: "Execução organizada para lojas, salas e pequenos negócios.",
    detail: "Cronograma claro e obra mais previsível.",
    icon: PaintRoller,
    image: "https://images.pexels.com/photos/18369835/pexels-photo-18369835.jpeg?auto=compress&cs=tinysrgb&w=1100",
  },
  {
    title: "Texturas e efeitos",
    description: "Cor, textura e contraste para paredes de destaque.",
    detail: "Ideal para valorizar salas, halls e fachadas.",
    icon: Layers,
    image: "https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=1100",
  },
  {
    title: "Reparos finos",
    description: "Correção de superfície, retoques e revisão antes da entrega.",
    detail: "O detalhe que muda a percepção final.",
    icon: Brush,
    image: "https://images.pexels.com/photos/7218011/pexels-photo-7218011.jpeg?auto=compress&cs=tinysrgb&w=1100",
  },
];

export const processSteps = [
  {
    title: "Conversa direta",
    body: "O pedido chega pelo WhatsApp, com fotos, medidas aproximadas e o tipo de acabamento desejado.",
    icon: Clock3,
  },
  {
    title: "Preparação do ambiente",
    body: "Antes da tinta, vem proteção de piso, avaliação da parede, massa quando precisa e lixamento correto.",
    icon: ShieldCheck,
  },
  {
    title: "Execução controlada",
    body: "A pintura segue uma sequência clara para evitar manchas, recortes tortos e retrabalho no final.",
    icon: PaintRoller,
  },
  {
    title: "Revisão de acabamento",
    body: "A entrega passa por leitura de luz, retoques combinados e limpeza visual do ambiente.",
    icon: BadgeCheck,
  },
];

export const specialties = [
  {
    title: "Interiores claros",
    text: "Tons neutros, paredes bem niveladas e recortes discretos para ambientes mais elegantes.",
    image: "https://images.pexels.com/photos/5691694/pexels-photo-5691694.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Fachada com presença",
    text: "Composição de cor, proteção e acabamento para melhorar a primeira impressão do imóvel.",
    image: "https://images.pexels.com/photos/6474462/pexels-photo-6474462.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Parede de destaque",
    text: "Uma área bem escolhida pode mudar a leitura do espaço sem excesso de informação.",
    image: "https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Manutenção rápida",
    text: "Retoques e renovações pontuais para deixar o ambiente apresentável outra vez.",
    image: "https://images.pexels.com/photos/7218578/pexels-photo-7218578.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const portfolioItems = [
  {
    title: "Forro com luz indireta",
    category: "Interior",
    image: "/assets/portfolio/portfolio-01.jpg",
    span: "tall",
  },
  {
    title: "Sala com sanca iluminada",
    category: "Acabamento",
    image: "/assets/portfolio/portfolio-02.jpg",
    span: "tall",
  },
  {
    title: "Detalhe de iluminação azul",
    category: "Interior",
    image: "/assets/portfolio/portfolio-03.jpg",
    span: "tall",
  },
  {
    title: "Parede 3D finalizada",
    category: "Textura",
    image: "/assets/portfolio/portfolio-04.jpg",
    span: "standard",
  },
  {
    title: "Ambiente com painel 3D",
    category: "Residencial",
    image: "/assets/portfolio/portfolio-05.jpg",
    span: "tall",
  },
  {
    title: "Sanca com LED",
    category: "Acabamento",
    image: "/assets/portfolio/portfolio-06.jpg",
    span: "tall",
  },
  {
    title: "Fachada azul",
    category: "Externa",
    image: "/assets/portfolio/portfolio-07.jpg",
    span: "tall",
  },
  {
    title: "Textura de fachada",
    category: "Externa",
    image: "/assets/portfolio/portfolio-08.jpg",
    span: "wide",
  },
  {
    title: "Parede interna clara",
    category: "Interior",
    image: "/assets/portfolio/portfolio-09.jpg",
    span: "wide",
  },
  {
    title: "Acabamento refletivo",
    category: "Detalhe",
    image: "/assets/portfolio/portfolio-10.jpg",
    span: "tall",
  },
  {
    title: "Muro externo",
    category: "Externa",
    image: "/assets/portfolio/portfolio-11.jpg",
    span: "tall",
  },
  {
    title: "Área externa em obra",
    category: "Externa",
    image: "/assets/portfolio/portfolio-12.jpg",
    span: "feature",
  },
];

export const feedbackItems = [
  {
    title: "Ambiente protegido",
    quote:
      "O cuidado com piso, móveis e recortes vem antes da primeira demão. Isso reduz sujeira, retrabalho e surpresa.",
    meta: "Padrão de obra residencial",
    image: "https://images.pexels.com/photos/7218011/pexels-photo-7218011.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Prazo conversado",
    quote:
      "Cada etapa precisa ser combinada com clareza: preparação, pintura, secagem, revisão e entrega.",
    meta: "Organização de atendimento",
    image: "https://images.pexels.com/photos/5691692/pexels-photo-5691692.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Acabamento revisado",
    quote:
      "A pintura só termina quando luz, canto, textura e retoque final passam por uma leitura cuidadosa.",
    meta: "Controle de qualidade visual",
    image: "https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
];
