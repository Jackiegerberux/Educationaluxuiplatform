import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { 
  Search, 
  Palette, 
  Rocket, 
  Users, 
  Figma, 
  BarChart3, 
  FileText, 
  Zap,
  Target,
  Layers,
  Code2
} from 'lucide-react';

type RoleType = 'ux' | 'ui' | 'product';

interface RoleData {
  id: RoleType;
  name: { en: string; es: string };
  tagline: { en: string; es: string };
  color: string;
  icon: React.ElementType;
  focus: { en: string; es: string };
  responsibilities: { en: string[]; es: string[] };
  tools: { en: string[]; es: string[] };
  deliverables: { en: string[]; es: string[] };
  skills: { en: string[]; es: string[] };
}

const rolesData: RoleData[] = [
  {
    id: 'ux',
    name: { en: 'UX Designer', es: 'Diseñador UX' },
    tagline: { en: 'The User Advocate', es: 'El Abogado del Usuario' },
    color: 'blue',
    icon: Search,
    focus: { 
      en: 'How the product works and feels for users',
      es: 'Cómo funciona y se siente el producto para usuarios'
    },
    responsibilities: {
      en: [
        'User research & interviews',
        'User personas & journey maps',
        'Information architecture',
        'Wireframing & prototyping',
        'Usability testing',
        'Interaction design'
      ],
      es: [
        'Investigación y entrevistas con usuarios',
        'Personas y mapas de viaje de usuario',
        'Arquitectura de información',
        'Wireframing y prototipado',
        'Pruebas de usabilidad',
        'Diseño de interacción'
      ]
    },
    tools: {
      en: ['Figma', 'Miro', 'Maze', 'UserTesting', 'Optimal Workshop', 'Dovetail'],
      es: ['Figma', 'Miro', 'Maze', 'UserTesting', 'Optimal Workshop', 'Dovetail']
    },
    deliverables: {
      en: [
        'User research reports',
        'User flows',
        'Low-fidelity wireframes',
        'Interactive prototypes',
        'Usability test findings'
      ],
      es: [
        'Reportes de investigación',
        'Flujos de usuario',
        'Wireframes de baja fidelidad',
        'Prototipos interactivos',
        'Hallazgos de pruebas de usabilidad'
      ]
    },
    skills: {
      en: ['Empathy', 'Research', 'Problem-solving', 'Systems thinking', 'Collaboration'],
      es: ['Empatía', 'Investigación', 'Resolución de problemas', 'Pensamiento sistémico', 'Colaboración']
    }
  },
  {
    id: 'ui',
    name: { en: 'UI Designer', es: 'Diseñador UI' },
    tagline: { en: 'The Visual Craftsperson', es: 'El Artesano Visual' },
    color: 'purple',
    icon: Palette,
    focus: { 
      en: 'How the product looks and responds visually',
      es: 'Cómo se ve y responde visualmente el producto'
    },
    responsibilities: {
      en: [
        'Visual design & layouts',
        'Design systems & components',
        'Typography & color theory',
        'Iconography & illustrations',
        'Micro-interactions & animations',
        'Responsive design'
      ],
      es: [
        'Diseño visual y layouts',
        'Sistemas de diseño y componentes',
        'Tipografía y teoría del color',
        'Iconografía e ilustraciones',
        'Micro-interacciones y animaciones',
        'Diseño responsive'
      ]
    },
    tools: {
      en: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'After Effects', 'Principle'],
      es: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'After Effects', 'Principle']
    },
    deliverables: {
      en: [
        'High-fidelity mockups',
        'Design system libraries',
        'Style guides',
        'Component documentation',
        'Animation specs'
      ],
      es: [
        'Mockups de alta fidelidad',
        'Bibliotecas de sistema de diseño',
        'Guías de estilo',
        'Documentación de componentes',
        'Especificaciones de animación'
      ]
    },
    skills: {
      en: ['Visual design', 'Attention to detail', 'Design systems', 'Accessibility', 'Brand consistency'],
      es: ['Diseño visual', 'Atención al detalle', 'Sistemas de diseño', 'Accesibilidad', 'Consistencia de marca']
    }
  },
  {
    id: 'product',
    name: { en: 'Product Designer', es: 'Diseñador de Producto' },
    tagline: { en: 'The Strategic Thinker', es: 'El Pensador Estratégico' },
    color: 'green',
    icon: Rocket,
    focus: { 
      en: 'How the product achieves business goals while serving users',
      es: 'Cómo el producto logra objetivos de negocio mientras sirve a usuarios'
    },
    responsibilities: {
      en: [
        'End-to-end product design',
        'Business & user alignment',
        'Cross-functional collaboration',
        'Metrics & KPI tracking',
        'Technical feasibility assessment',
        'Roadmap planning'
      ],
      es: [
        'Diseño de producto end-to-end',
        'Alineación de negocio y usuario',
        'Colaboración cross-funcional',
        'Seguimiento de métricas y KPIs',
        'Evaluación de viabilidad técnica',
        'Planificación de roadmap'
      ]
    },
    tools: {
      en: ['Figma', 'Jira', 'Amplitude', 'Mixpanel', 'Notion', 'Miro', 'SQL/Analytics'],
      es: ['Figma', 'Jira', 'Amplitude', 'Mixpanel', 'Notion', 'Miro', 'SQL/Analíticas']
    },
    deliverables: {
      en: [
        'Product specs & requirements',
        'High-fidelity prototypes',
        'Design rationale documents',
        'Success metrics dashboards',
        'Feature prioritization frameworks'
      ],
      es: [
        'Especificaciones y requisitos de producto',
        'Prototipos de alta fidelidad',
        'Documentos de justificación de diseño',
        'Dashboards de métricas de éxito',
        'Frameworks de priorización de features'
      ]
    },
    skills: {
      en: ['Strategic thinking', 'Business acumen', 'Data analysis', 'Leadership', 'Technical understanding'],
      es: ['Pensamiento estratégico', 'Acumen de negocio', 'Análisis de datos', 'Liderazgo', 'Entendimiento técnico']
    }
  }
];

export function RoleComparisonInteractive() {
  const { t } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<RoleType>('ux');

  const currentRole = rolesData.find(r => r.id === selectedRole)!;

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text' | 'hover') => {
    const classes = {
      blue: {
        bg: 'bg-blue-500',
        border: 'border-blue-500',
        text: 'text-blue-400',
        hover: 'hover:bg-blue-950/50 hover:border-blue-500/50'
      },
      purple: {
        bg: 'bg-purple-500',
        border: 'border-purple-500',
        text: 'text-purple-400',
        hover: 'hover:bg-purple-950/50 hover:border-purple-500/50'
      },
      green: {
        bg: 'bg-green-500',
        border: 'border-green-500',
        text: 'text-green-400',
        hover: 'hover:bg-green-950/50 hover:border-green-500/50'
      }
    };
    return classes[color as keyof typeof classes][type];
  };

  const getBadgeClasses = (color: string) => {
    const classes = {
      blue: 'bg-blue-500/20 text-blue-200 border border-blue-500/30',
      purple: 'bg-purple-500/20 text-purple-200 border border-purple-500/30',
      green: 'bg-green-500/20 text-green-200 border border-green-500/30'
    };
    return classes[color as keyof typeof classes];
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 space-y-6">
      {/* Title */}
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {t({ en: 'Role Comparison: Interactive Guide', es: 'Comparación de Roles: Guía Interactiva' })}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto">
          {t({
            en: 'Explore the differences between UX, UI, and Product Design roles. Click each role to see their focus, responsibilities, tools, and deliverables.',
            es: 'Explora las diferencias entre roles de UX, UI y Diseño de Producto. Haz clic en cada rol para ver su enfoque, responsabilidades, herramientas y entregables.'
          })}
        </p>
      </div>

      {/* Role Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {rolesData.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                isSelected
                  ? `${getColorClasses(role.color, 'border')} bg-zinc-900/80 shadow-xl`
                  : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
              }`}
            >
              <div className={`inline-flex items-center justify-center size-12 rounded-xl mb-4 ${
                isSelected ? getColorClasses(role.color, 'bg') : 'bg-zinc-800'
              }`}>
                <Icon className={`size-6 ${isSelected ? 'text-white' : 'text-zinc-400'}`} />
              </div>
              <h4 className={`text-lg font-bold mb-1 ${
                isSelected ? 'text-white' : 'text-zinc-400'
              }`}>
                {t(role.name)}
              </h4>
              <p className={`text-sm ${
                isSelected ? getColorClasses(role.color, 'text') : 'text-zinc-600'
              }`}>
                {t(role.tagline)}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Role Detail Card */}
      <div className="bg-zinc-900/80 border-2 border-zinc-800 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className={`${getColorClasses(currentRole.color, 'bg')} bg-gradient-to-br from-opacity-90 to-opacity-100 p-8 text-white`}>
          <div className="flex items-center gap-4 mb-4">
            {React.createElement(currentRole.icon, { className: 'size-10' })}
            <div>
              <h3 className="text-2xl font-bold">{t(currentRole.name)}</h3>
              <p className="text-sm opacity-90">{t(currentRole.tagline)}</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-wide mb-2 opacity-80">
              {t({ en: 'Primary Focus', es: 'Enfoque Principal' })}
            </p>
            <p className="text-base font-medium">{t(currentRole.focus)}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {/* Responsibilities */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Users className={`size-5 ${getColorClasses(currentRole.color, 'text')}`} />
              <h5 className="text-lg font-bold text-white">
                {t({ en: 'Responsibilities', es: 'Responsabilidades' })}
              </h5>
            </div>
            <ul className="space-y-2">
              {t(currentRole.responsibilities).map((resp: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-sm text-zinc-300">
                  <span className={`${getColorClasses(currentRole.color, 'text')} font-bold mt-0.5`}>•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Figma className={`size-5 ${getColorClasses(currentRole.color, 'text')}`} />
              <h5 className="text-lg font-bold text-white">
                {t({ en: 'Common Tools', es: 'Herramientas Comunes' })}
              </h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {t(currentRole.tools).map((tool: string, idx: number) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 bg-zinc-950/50 border ${getColorClasses(currentRole.color, 'border')} rounded-lg text-xs font-medium text-zinc-300`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <FileText className={`size-5 ${getColorClasses(currentRole.color, 'text')}`} />
              <h5 className="text-lg font-bold text-white">
                {t({ en: 'Key Deliverables', es: 'Entregables Clave' })}
              </h5>
            </div>
            <ul className="space-y-2">
              {t(currentRole.deliverables).map((deliverable: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-sm text-zinc-300">
                  <span className={`${getColorClasses(currentRole.color, 'text')} font-bold mt-0.5`}>•</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap className={`size-5 ${getColorClasses(currentRole.color, 'text')}`} />
              <h5 className="text-lg font-bold text-white">
                {t({ en: 'Core Skills', es: 'Habilidades Clave' })}
              </h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {t(currentRole.skills).map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 ${getBadgeClasses(currentRole.color)} rounded-full text-xs font-medium`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-12">
        <h4 className="text-xl font-bold text-white mb-6 text-center">
          {t({ en: 'Side-by-Side Comparison', es: 'Comparación Lado a Lado' })}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-zinc-950/80">
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm border-b border-zinc-800">
                  {t({ en: 'Aspect', es: 'Aspecto' })}
                </th>
                {rolesData.map((role) => (
                  <th
                    key={role.id}
                    className={`text-left p-4 font-semibold text-sm border-b border-zinc-800 ${getColorClasses(role.color, 'text')}`}
                  >
                    {t(role.name)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Focus Row */}
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-400 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Target className="size-4" />
                    {t({ en: 'Focus', es: 'Enfoque' })}
                  </div>
                </td>
                {rolesData.map((role) => (
                  <td key={role.id} className="p-4 text-zinc-300 text-xs">
                    {t(role.focus)}
                  </td>
                ))}
              </tr>

              {/* Primary Skills Row */}
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-400 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Layers className="size-4" />
                    {t({ en: 'Primary Skills', es: 'Habilidades Primarias' })}
                  </div>
                </td>
                {rolesData.map((role) => (
                  <td key={role.id} className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {t(role.skills).slice(0, 3).map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Career Path Row */}
              <tr>
                <td className="p-4 text-zinc-400 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="size-4" />
                    {t({ en: 'Typical Career Path', es: 'Camino de Carrera Típico' })}
                  </div>
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({
                    en: 'Jr UX → UX → Senior UX → UX Lead',
                    es: 'UX Jr → UX → UX Senior → UX Lead'
                  })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({
                    en: 'Jr UI → UI → Senior UI → Design Lead',
                    es: 'UI Jr → UI → UI Senior → Design Lead'
                  })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({
                    en: 'Product Designer → Senior → Staff → Principal',
                    es: 'Product Designer → Senior → Staff → Principal'
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-6">
        <h5 className="font-bold text-indigo-300 mb-3 flex items-center gap-2">
          <Code2 className="size-5" />
          {t({ en: 'Key Insight: The Overlap', es: 'Insight Clave: La Superposición' })}
        </h5>
        <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
          {t({
            en: 'In reality, these roles overlap significantly, especially at startups and small companies where designers wear multiple hats. Many companies now hire "Product Designers" who combine UX, UI, and strategic thinking. The key is understanding which hat you\'re wearing at each stage of the design process.',
            es: 'En realidad, estos roles se superponen significativamente, especialmente en startups y pequeñas empresas donde los diseñadores usan múltiples sombreros. Muchas empresas ahora contratan "Diseñadores de Producto" que combinan UX, UI y pensamiento estratégico. La clave es entender qué sombrero estás usando en cada etapa del proceso de diseño.'
          })}
        </p>
      </div>
    </div>
  );
}