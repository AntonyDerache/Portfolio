import type { SkillData } from '@/types/skillsData.types';

const generateSkillPath = (str: string) => `skills.${str}`;

const skillsData: Array<SkillData> = [
  {
    class: 'reactjs',
    name: generateSkillPath('react'),
  },
  {
    class: 'vuejs',
    name: generateSkillPath('vue'),
  },
  {
    class: 'svelte',
    name: generateSkillPath('svelte'),
  },
  {
    class: 'typescript',
    name: generateSkillPath('ts'),
  },
  {
    class: 'javascript',
    name: generateSkillPath('js'),
  },
  {
    class: 'nodejs',
    name: generateSkillPath('node'),
  },
  {
    class: 'playwright',
    name: generateSkillPath('playwright'),
  },
  {
    class: 'storybook',
    name: generateSkillPath('storybook'),
  },
  {
    class: 'flutter',
    name: generateSkillPath('flutter'),
  },
  {
    class: 'sass',
    name: generateSkillPath('sass'),
  },
  {
    class: 'unity',
    name: generateSkillPath('unity'),
  },
  {
    class: 'csharp',
    name: generateSkillPath('csharp'),
  },
  {
    class: 'github',
    name: generateSkillPath('github'),
  },
  {
    class: 'gitlab',
    name: generateSkillPath('gitlab'),
  },
  {
    class: 'git',
    name: generateSkillPath('git'),
  },
  {
    class: 'mongodb',
    name: generateSkillPath('mongo'),
  },
];

export default skillsData;
