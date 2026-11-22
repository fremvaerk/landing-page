import type { Lang } from '../i18n/ui';

export interface Role {
  title: Record<Lang, string>;
  line: Record<Lang, string>;
}

/** The roles in the hero. The grid holds 5 entries without a layout change. */
export const roles: Role[] = [
  {
    title: { da: 'Udvikling', en: 'Development' },
    line: { da: 'Backend, web og interne værktøjer', en: 'Backend, web and internal tools' },
  },
  {
    title: { da: 'DevOps', en: 'DevOps' },
    line: { da: 'CI/CD, Kubernetes og drift', en: 'CI/CD, Kubernetes and operations' },
  },
  {
    title: { da: 'Cloud', en: 'Cloud' },
    line: { da: 'Infrastruktur som kode', en: 'Infrastructure as code' },
  },
  {
    title: { da: 'AI-integration', en: 'AI integration' },
    line: { da: "LLM'er og agenter i jeres systemer", en: 'LLMs and agents in your systems' },
  },
];
