import React from 'react';
import { ShoppingCart, Paintbrush, Cpu, CloudCog, Layers, Network } from 'lucide-react';
import { FeatureItem, ServiceItem, ProcessStep, PricingPlan, Testimonial } from './types';

export const NAV_LINKS = [
  { label: '核心业务', href: '#services' },
  { label: '服务方案', href: '#solutions' },
  { label: '客户案例', href: '#cases' },
];

export const ABOUT_FEATURES: FeatureItem[] = [
  {
    title: '资源整合优势',
    description: '作为“中间枢纽”，链接工厂、代运营、云厂商、AI模型资源，为客户省去“找资源、谈合作、控效果”的时间成本',
  },
  {
    title: '全链路赋能',
    description: '从产品设计→电商销售→数字化工具→AI效率提升，覆盖企业“产品-销售-运营-数字化”全生命周期，可提供打包服务',
  },
  {
    title: '垂直行业深耕',
    description: '聚焦照明灯具、养老、物业、工业、电商等垂直场景，解决方案更贴合实际业务流程，提供一站式服务',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: '电商合作服务',
    description: '轻资产+灵活模式',
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: '全场景工业设计',
    description: '美学+落地',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI赋能服务',
    description: '高性价比+低门槛',
  },
  {
    icon: <CloudCog className="w-6 h-6" />,
    title: '定制化软件与云服务',
    description: '按需定制+全程协定',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: '业务联动套餐',
    description: '电商代运营+视觉托管...',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: '资源整合优势',
    description: '链接工厂、代运营、云厂商...',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: '需求沟通与方案设计',
    description: '深入了解企业业务场景与需求痛点，提供定制化解决方案，明确服务内容与交付标准',
    iconType: 'network',
  },
  {
    id: 2,
    title: '资源匹配与项目启动',
    description: '整合优质资源，匹配专业团队，快速启动项目，全程监督服务效果，保障客户权益',
    iconType: 'list',
  },
  {
    id: 3,
    title: '交付落地与持续优化',
    description: '完成项目交付，提供后续运维支持，持续优化服务效果，建立长期合作关系',
    iconType: 'chart',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: '单项服务',
    subtitle: '适合有明确单一需求的客户',
    priceTitle: '咨询报价',
    features: [
      '电商代运营：固定服务费+销售分成',
      '设计服务：按项目复杂度报价',
      'AI服务：模型折扣价+平台扣分充值',
      '软件定制：按人天/功能模块报价',
      '云服务：代理价+服务费',
      '专业团队一对一服务',
    ],
    isHighlighted: false,
  },
  {
    title: '业务联动套餐',
    subtitle: '适合需要多业务协同的企业客户',
    priceTitle: '定制报价',
    features: [
      '电商代运营+视觉升级套餐',
      '定制系统+云部署+AI功能套餐',
      '产品设计+电商销售全链路服务',
      '打包服务提升性价比',
      '一站式解决企业需求',
      '专属客户经理全程对接',
    ],
    isHighlighted: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    highlight: '通过禧讯云的电商代运营服务，我们工厂的线上销量在3个月内从50万提升至150万。',
    quote: '专业的代运营团队和全程监督机制，让我们无需自建团队就能快速打开线上市场。',
    author: '某照明灯具厂',
    role: '工厂负责人',
    avatarInitials: '灯',
  },
  {
    highlight: '禧讯云提供的养老院管理APP已服务8家机构，覆盖2000+老人。',
    quote: '定制化开发服务深入理解行业需求，系统稳定可靠，大大提升了我们的管理效率。',
    author: '某养老机构',
    role: '运营总监',
    avatarInitials: '养',
  },
  {
    highlight: '使用禧讯云的AI平台和设计服务，我们的产品视觉升级后转化率提升了40%。',
    quote: '扣分制AI平台使用灵活，设计服务落地性强，真正解决了我们的业务痛点。',
    author: '某电商品牌',
    role: '品牌经理',
    avatarInitials: '电',
  },
];

export const FOOTER_LINKS = {
  coreServices: ['电商合作服务', '全场景工业设计', 'AI赋能服务', '定制化软件与云服务'],
  solutions: ['单项服务', '业务联动套餐', '定制化方案'],
  about: ['公司简介', '客户案例', '联系我们'],
};