import type { Lang } from '../i18n/ui';

export type ProjectStatus = 'released' | 'development';

export interface Project {
  /** Display name, for example "Strøm". */
  name: string;
  /** Repository URL on GitHub. */
  url: string;
  status: ProjectStatus;
  /** Latest released version, without a "v" prefix. */
  version?: string;
  description: Record<Lang, string>;
  technologies: string[];
  /** SPDX licence identifier. Leave it out to show no licence row. */
  license?: string;
  /** The year the project started. */
  started: number;
}

/**
 * All open source projects on the landing page.
 * To add a project, add one entry. The list and the count update from this array.
 */
export const projects: Project[] = [
  {
    name: 'Strøm',
    url: 'https://github.com/fremvaerk/stroem',
    status: 'released',
    version: '0.18.5',
    description: {
      da: 'Workflow- og opgaveorkestrering. I skriver workflows i YAML og kører dem via API, CLI eller web-UI med live logs.',
      en: 'Workflow and task orchestration. You write workflows in YAML and run them through an API, a CLI or a web UI with live logs.',
    },
    technologies: ['Rust', 'TypeScript'],
    license: 'MIT',
    started: 2026,
  },
  {
    name: 'Horalis',
    url: 'https://github.com/fremvaerk/horalis',
    status: 'development',
    description: {
      da: 'En enkel tidsregistrering med et lille svævende vindue. Til macOS, Windows og Linux.',
      en: 'A simple time tracker with a small floating window. For macOS, Windows and Linux.',
    },
    technologies: ['Tauri', 'TypeScript'],
    started: 2025,
  },
  {
    name: 'p2pass',
    url: 'https://github.com/fremvaerk/p2pass',
    status: 'development',
    description: {
      da: 'En peer-to-peer password manager med vaults, som du deler mellem dine egne enheder.',
      en: 'A peer-to-peer password manager with vaults that you share between your own devices.',
    },
    technologies: ['Rust', 'Slint'],
    license: 'GPL-3.0',
    started: 2026,
  },
];
