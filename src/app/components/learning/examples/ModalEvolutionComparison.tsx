import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowRight, X, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

type ModalStyle = 'vintage' | 'modern';

export function ModalEvolutionComparison() {
  const { t } = useLanguage();
  const [activeStyle, setActiveStyle] = useState<ModalStyle>('vintage');
  const [vintageModalOpen, setVintageModalOpen] = useState(false);
  const [modernModalOpen, setModernModalOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {t({ 
            en: 'Modal Evolution: Windows 3.1 vs Modern Design', 
            es: 'Evolución de Modales: Windows 3.1 vs Diseño Moderno' 
          })}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto">
          {t({
            en: 'Compare how modal dialogs have evolved from the 1990s to today. Notice the improvements in affordances, signifiers, feedback, and visual hierarchy.',
            es: 'Compara cómo los diálogos modales han evolucionado desde los 90s hasta hoy. Observa las mejoras en affordances, significantes, retroalimentación y jerarquía visual.'
          })}
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setActiveStyle('vintage')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeStyle === 'vintage'
              ? 'bg-zinc-700 text-white shadow-lg'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
          }`}
        >
          {t({ en: '🕹️ Windows 3.1 (1992)', es: '🕹️ Windows 3.1 (1992)' })}
        </button>
        <button
          onClick={() => setActiveStyle('modern')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeStyle === 'modern'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
          }`}
        >
          {t({ en: '✨ Modern (2024)', es: '✨ Moderno (2024)' })}
        </button>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vintage Modal Example */}
        <div className={`space-y-4 transition-opacity ${activeStyle === 'vintage' ? 'opacity-100' : 'opacity-40'}`}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-zinc-300 mb-4 flex items-center gap-2">
              🕹️ {t({ en: 'Windows 3.1 Style', es: 'Estilo Windows 3.1' })}
            </h4>
            
            {/* Vintage Modal Preview */}
            <div className="bg-[#008080] p-8 rounded-lg mb-4 relative min-h-[300px] flex items-center justify-center">
              <button
                onClick={() => setVintageModalOpen(true)}
                className="bg-[#c0c0c0] text-black px-4 py-2 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-[#808080] border-b-[#808080] font-bold text-sm"
              >
                {t({ en: 'Delete File', es: 'Eliminar Archivo' })}
              </button>

              {/* Vintage Modal */}
              {vintageModalOpen && (
                <div className="absolute inset-0 bg-[#008080]/90 flex items-center justify-center p-4">
                  <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-[#000000] border-b-[#000000] w-full max-w-sm">
                    {/* Title Bar */}
                    <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-bold">
                      <span>{t({ en: 'Warning', es: 'Advertencia' })}</span>
                      <button
                        onClick={() => setVintageModalOpen(false)}
                        className="bg-[#c0c0c0] text-black px-2 border-t border-l border-white border-r border-b border-r-[#808080] border-b-[#808080]"
                      >
                        X
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="text-3xl">⚠️</div>
                        <p className="text-xs text-black leading-relaxed">
                          {t({
                            en: 'Are you sure you want to delete this file?',
                            es: '¿Estás seguro de que quieres eliminar este archivo?'
                          })}
                        </p>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setVintageModalOpen(false)}
                          className="bg-[#c0c0c0] text-black px-6 py-1 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-[#808080] border-b-[#808080] text-xs font-bold"
                        >
                          {t({ en: 'Yes', es: 'Sí' })}
                        </button>
                        <button
                          onClick={() => setVintageModalOpen(false)}
                          className="bg-[#c0c0c0] text-black px-6 py-1 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-[#808080] border-b-[#808080] text-xs font-bold"
                        >
                          {t({ en: 'No', es: 'No' })}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Usability Issues */}
            <div className="space-y-3">
              <h5 className="text-sm font-bold text-red-400 flex items-center gap-2">
                <AlertTriangle className="size-4" />
                {t({ en: 'Usability Issues', es: 'Problemas de Usabilidad' })}
              </h5>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex gap-2">
                  <span className="text-red-400">❌</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Poor Affordances:', es: 'Affordances Pobres:' })}</strong> {t({ en: 'Flat buttons don\'t look pressable', es: 'Botones planos no parecen presionables' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">❌</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Weak Signifiers:', es: 'Significantes Débiles:' })}</strong> {t({ en: 'No color distinction between "Yes" (destructive) and "No" (safe)', es: 'Sin distinción de color entre "Sí" (destructivo) y "No" (seguro)' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">❌</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'No Visual Hierarchy:', es: 'Sin Jerarquía Visual:' })}</strong> {t({ en: 'All elements have equal weight', es: 'Todos los elementos tienen igual peso' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">❌</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Minimal Feedback:', es: 'Retroalimentación Mínima:' })}</strong> {t({ en: 'No hover states or interaction cues', es: 'Sin estados hover o señales de interacción' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">❌</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Low Contrast:', es: 'Bajo Contraste:' })}</strong> {t({ en: 'Gray on gray is hard to read', es: 'Gris sobre gris es difícil de leer' })}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modern Modal Example */}
        <div className={`space-y-4 transition-opacity ${activeStyle === 'modern' ? 'opacity-100' : 'opacity-40'}`}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-zinc-300 mb-4 flex items-center gap-2">
              ✨ {t({ en: 'Modern Style', es: 'Estilo Moderno' })}
            </h4>
            
            {/* Modern Modal Preview */}
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-lg mb-4 relative min-h-[300px] flex items-center justify-center">
              <button
                onClick={() => setModernModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                {t({ en: 'Delete File', es: 'Eliminar Archivo' })}
              </button>

              {/* Modern Modal */}
              {modernModalOpen && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                          <AlertTriangle className="size-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {t({ en: 'Delete File?', es: '¿Eliminar Archivo?' })}
                        </h3>
                      </div>
                      <button
                        onClick={() => setModernModalOpen(false)}
                        className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all"
                      >
                        <X className="size-5" />
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-base text-zinc-300 leading-relaxed">
                        {t({
                          en: 'Are you sure you want to permanently delete this file? This action cannot be undone.',
                          es: '¿Estás seguro de que quieres eliminar permanentemente este archivo? Esta acción no se puede deshacer.'
                        })}
                      </p>
                      
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex gap-2">
                        <Info className="size-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-amber-200">
                          {t({
                            en: 'Tip: You can recover deleted files from the Trash within 30 days.',
                            es: 'Consejo: Puedes recuperar archivos eliminados de la Papelera dentro de 30 días.'
                          })}
                        </p>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setModernModalOpen(false)}
                          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-3 rounded-xl font-semibold transition-all border border-zinc-700"
                        >
                          {t({ en: 'Cancel', es: 'Cancelar' })}
                        </button>
                        <button
                          onClick={() => setModernModalOpen(false)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <AlertTriangle className="size-4" />
                          {t({ en: 'Delete', es: 'Eliminar' })}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Usability Improvements */}
            <div className="space-y-3">
              <h5 className="text-sm font-bold text-green-400 flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                {t({ en: 'Usability Improvements', es: 'Mejoras de Usabilidad' })}
              </h5>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex gap-2">
                  <span className="text-green-400">✅</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Clear Affordances:', es: 'Affordances Claros:' })}</strong> {t({ en: 'Buttons have depth, shadows, and hover states', es: 'Botones tienen profundidad, sombras y estados hover' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✅</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Strong Signifiers:', es: 'Significantes Fuertes:' })}</strong> {t({ en: 'Red = danger, Gray = safe. Icons reinforce meaning', es: 'Rojo = peligro, Gris = seguro. Iconos refuerzan significado' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✅</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Visual Hierarchy:', es: 'Jerarquía Visual:' })}</strong> {t({ en: 'Primary action (Delete) is visually emphasized', es: 'Acción primaria (Eliminar) está visualmente enfatizada' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✅</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Rich Feedback:', es: 'Retroalimentación Rica:' })}</strong> {t({ en: 'Hover, focus, and active states guide interaction', es: 'Estados hover, focus y activo guían interacción' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✅</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'High Contrast:', es: 'Alto Contraste:' })}</strong> {t({ en: 'Text is easily readable on all backgrounds', es: 'Texto es fácilmente legible en todos los fondos' })}
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✅</span>
                  <div>
                    <strong className="text-zinc-300">{t({ en: 'Better Mapping:', es: 'Mejor Mapeo:' })}</strong> {t({ en: 'Contextual info helps user make informed decision', es: 'Info contextual ayuda al usuario a tomar decisión informada' })}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-zinc-900/80 border-2 border-zinc-800 rounded-2xl overflow-hidden">
        <div className="bg-zinc-950 p-4 border-b border-zinc-800">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <ArrowRight className="size-5 text-blue-400" />
            {t({ en: 'Usability Principles Comparison', es: 'Comparación de Principios de Usabilidad' })}
          </h4>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-zinc-950/50 border-b border-zinc-800">
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm">
                  {t({ en: 'Principle', es: 'Principio' })}
                </th>
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm">
                  {t({ en: 'Windows 3.1 (1992)', es: 'Windows 3.1 (1992)' })}
                </th>
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm">
                  {t({ en: 'Modern (2024)', es: 'Moderno (2024)' })}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Affordances', es: 'Affordances' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Flat, minimal depth. Hard to tell what\'s clickable', es: 'Plano, profundidad mínima. Difícil saber qué es clicable' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Shadows, gradients, hover states clearly indicate interactivity', es: 'Sombras, gradientes, estados hover indican claramente interactividad' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Signifiers', es: 'Significantes' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Minimal. No color coding, small generic icons', es: 'Mínimos. Sin codificación de color, iconos genéricos pequeños' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Color psychology (red=danger), contextual icons, clear labels', es: 'Psicología del color (rojo=peligro), iconos contextuales, etiquetas claras' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Feedback', es: 'Retroalimentación' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Button press effect only. No hover or focus states', es: 'Solo efecto de presión de botón. Sin estados hover o focus' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Hover, focus, active, disabled states. Animations, transitions', es: 'Estados hover, focus, activo, deshabilitado. Animaciones, transiciones' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Visual Hierarchy', es: 'Jerarquía Visual' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'All buttons look identical. No emphasis on primary action', es: 'Todos los botones se ven idénticos. Sin énfasis en acción primaria' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Primary action emphasized with color, size, position', es: 'Acción primaria enfatizada con color, tamaño, posición' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Mapping', es: 'Mapeo' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Generic yes/no. No context about consequences', es: 'Genérico sí/no. Sin contexto sobre consecuencias' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Action-oriented labels ("Delete" vs "Cancel"). Explains consequences', es: 'Etiquetas orientadas a acción ("Eliminar" vs "Cancelar"). Explica consecuencias' })}
                </td>
              </tr>
              <tr>
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Accessibility', es: 'Accesibilidad' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Low contrast ratios. Small text. No ARIA labels', es: 'Ratios de contraste bajos. Texto pequeño. Sin etiquetas ARIA' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'WCAG AA compliant. Screen reader support. Keyboard navigation', es: 'Cumple WCAG AA. Soporte de lector de pantalla. Navegación por teclado' })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-2xl p-6">
        <h5 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          {t({ en: 'Key Takeaway', es: 'Conclusión Clave' })}
        </h5>
        <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-3">
          {t({
            en: 'Modern UI design has dramatically improved usability by applying Don Norman\'s principles consistently. Every design decision—from color choice to button styling—now considers affordances, signifiers, feedback, mapping, and the user\'s mental model.',
            es: 'El diseño UI moderno ha mejorado dramáticamente la usabilidad aplicando consistentemente los principios de Don Norman. Cada decisión de diseño—desde la elección del color hasta el estilo de botones—ahora considera affordances, significantes, retroalimentación, mapeo y el modelo mental del usuario.'
          })}
        </p>
        <p className="text-xs text-zinc-400">
          {t({
            en: 'The shift from Windows 3.1\'s flat, monochrome interface to today\'s rich, contextual designs wasn\'t just about aesthetics—it was about making technology more intuitive, accessible, and aligned with how humans naturally think and interact.',
            es: 'El cambio de la interfaz plana y monocromática de Windows 3.1 a los diseños ricos y contextuales de hoy no fue solo sobre estética—fue sobre hacer la tecnología más intuitiva, accesible y alineada con cómo los humanos naturalmente piensan e interactúan.'
          })}
        </p>
      </div>
    </div>
  );
}
