import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';
import { AlertCircle } from 'lucide-react';

export function AccessibleFormInput() {
  const { t } = useLanguage();
  const [isAccessible, setIsAccessible] = useState(true);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setShowError(true);
    } else {
      setShowError(false);
      alert(t({ en: 'Form submitted!', es: '¡Formulario enviado!' }));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-zinc-300">
          {t({
            en: 'Form Input: Labels & ARIA Validation',
            es: 'Campo de Formulario: Labels & Validación ARIA'
          })}
        </h4>
        <button
          onClick={() => setIsAccessible(!isAccessible)}
          className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
            isAccessible 
              ? 'bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30'
          }`}
        >
          {isAccessible 
            ? t({ en: '✓ Accessible', es: '✓ Accesible' })
            : t({ en: '✗ Inaccessible', es: '✗ Inaccesible' })
          }
        </button>
      </div>

      <div className="border border-zinc-800 rounded-lg p-8 bg-zinc-950">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isAccessible ? (
              // Accessible version
              <div className="space-y-2">
                <label htmlFor="email-input" className="block text-sm font-medium text-zinc-300">
                  {t({ en: 'Email Address', es: 'Dirección de Email' })} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  aria-invalid={showError ? 'true' : 'false'}
                  aria-describedby="email-help email-error"
                  className={`w-full px-4 py-3 bg-zinc-900 border-2 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none transition-colors ${
                    showError 
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                  placeholder="you@example.com"
                />
                <small id="email-help" className="block text-xs text-zinc-500">
                  {t({ en: 'We\'ll never share your email with anyone else', es: 'Nunca compartiremos tu email con nadie más' })}
                </small>
                {showError && (
                  <div 
                    id="email-error" 
                    role="alert" 
                    className="flex items-start gap-2 text-xs text-red-400 bg-red-950/30 border border-red-500/30 rounded-lg p-3"
                  >
                    <AlertCircle className="size-4 mt-0.5 shrink-0" />
                    <span>{t({ en: 'Please enter a valid email address', es: 'Por favor ingresa una dirección de email válida' })}</span>
                  </div>
                )}
              </div>
            ) : (
              // Inaccessible version
              <div className="space-y-2">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg placeholder:text-zinc-600"
                  placeholder={t({ en: 'Email*', es: 'Email*' })}
                  style={{ color: '#999' }} // Low contrast
                />
                <span className="block text-xs text-zinc-600">
                  {t({ en: 'We\'ll never share your email with anyone else', es: 'Nunca compartiremos tu email con nadie más' })}
                </span>
                {showError && (
                  <span className="block text-xs text-zinc-600">
                    {t({ en: 'Invalid email', es: 'Email inválido' })}
                  </span>
                )}
              </div>
            )}

            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                isAccessible
                  ? 'bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50'
                  : 'bg-zinc-800 text-zinc-600'
              }`}
            >
              {t({ en: 'Subscribe', es: 'Suscribirse' })}
            </button>
          </form>
        </div>
      </div>

      {/* Explanation */}
      <div className={`p-4 rounded-lg border ${
        isAccessible 
          ? 'bg-green-950/20 border-green-500/30' 
          : 'bg-red-950/20 border-red-500/30'
      }`}>
        <p className="text-sm text-zinc-300 mb-2">
          <strong className={isAccessible ? 'text-green-400' : 'text-red-400'}>
            {isAccessible 
              ? t({ en: '✓ Accessible Form:', es: '✓ Formulario Accesible:' })
              : t({ en: '✗ Inaccessible Form:', es: '✗ Formulario Inaccesible:' })
            }
          </strong>
        </p>
        {isAccessible ? (
          <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
            <li>{t({ en: '<label> properly associated with for/id', es: '<label> correctamente asociado con for/id' })}</li>
            <li>{t({ en: 'ARIA attributes: aria-required, aria-invalid', es: 'Atributos ARIA: aria-required, aria-invalid' })}</li>
            <li>{t({ en: 'Help text linked with aria-describedby', es: 'Texto de ayuda vinculado con aria-describedby' })}</li>
            <li>{t({ en: 'Error message has role="alert" (announced)', es: 'Mensaje de error tiene role="alert" (anunciado)' })}</li>
            <li>{t({ en: 'Clear focus state with visible ring', es: 'Estado de foco claro con anillo visible' })}</li>
            <li>{t({ en: 'Screen reader: "Email Address, required, edit text, We\'ll never share..."', es: 'Lector: "Dirección de Email, requerido, editar texto, Nunca compartiremos..."' })}</li>
          </ul>
        ) : (
          <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
            <li>{t({ en: 'No <label> element - screen readers lost', es: 'Sin elemento <label> - lectores perdidos' })}</li>
            <li>{t({ en: 'Placeholder as label (disappears when typing)', es: 'Placeholder como etiqueta (desaparece al escribir)' })}</li>
            <li>{t({ en: 'No ARIA attributes - validation not announced', es: 'Sin atributos ARIA - validación no anunciada' })}</li>
            <li>{t({ en: 'Help text not associated with input', es: 'Texto de ayuda no asociado con input' })}</li>
            <li>{t({ en: 'Error not announced to screen readers', es: 'Error no anunciado a lectores de pantalla' })}</li>
            <li>{t({ en: 'Low contrast text (2.8:1 fails WCAG)', es: 'Texto de bajo contraste (2.8:1 no cumple WCAG)' })}</li>
          </ul>
        )}
      </div>

      {/* Code comparison */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-950/20 border border-green-500/30 rounded-lg p-4">
          <div className="text-xs font-mono text-green-400 mb-2">✓ {t({ en: 'Good', es: 'Bien' })}</div>
          <pre className="text-[10px] text-zinc-400 overflow-x-auto">
{`<label for="email">
  Email Address *
</label>
<input 
  type="email"
  id="email"
  name="email"
  required
  aria-required="true"
  aria-invalid="false"
  aria-describedby="help"
/>
<small id="help">Help text</small>`}
          </pre>
        </div>
        <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-4">
          <div className="text-xs font-mono text-red-400 mb-2">✗ {t({ en: 'Bad', es: 'Mal' })}</div>
          <pre className="text-[10px] text-zinc-400 overflow-x-auto">
{`<input 
  type="text"
  placeholder="Email*"
  class="input"
/>
<span class="help">
  Help text
</span>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
