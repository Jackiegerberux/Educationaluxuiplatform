import React, { useState } from 'react';
import { Input } from '@/app/components/atoms/Input';
import { Badge } from '@/app/components/atoms/Badge';
import { useLanguage } from '@/app/components/layout/LanguageContext';

type InputState = 'default' | 'focus' | 'error';

export function AtomPreview() {
  const { t } = useLanguage();
  const [currentState, setCurrentState] = useState<InputState>('default');

  const states: InputState[] = ['default', 'focus', 'error'];

  const getStateProps = () => {
    switch (currentState) {
      case 'error':
        return {
          error: t({ 
            en: 'This field is required',
            es: 'Este campo es obligatorio'
          })
        };
      case 'focus':
        return {
          autoFocus: true,
          helperText: t({
            en: 'Enter your email address',
            es: 'Ingresa tu dirección de correo'
          })
        };
      default:
        return {
          helperText: t({
            en: 'We\'ll never share your email',
            es: 'Nunca compartiremos tu correo'
          })
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Component Preview */}
      <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
        <Input
          label={t({ en: 'Email Address', es: 'Dirección de Correo' })}
          placeholder={t({ en: 'you@example.com', es: 'tu@ejemplo.com' })}
          type="email"
          {...getStateProps()}
        />
      </div>

      {/* State Toggle */}
      <div className="flex flex-wrap gap-2">
        <p className="w-full text-sm font-medium text-zinc-400 mb-1">
          {t({ en: 'Component State:', es: 'Estado del Componente:' })}
        </p>
        {states.map((state) => (
          <button
            key={state}
            onClick={() => setCurrentState(state)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentState === state
                ? 'bg-indigo-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </button>
        ))}
      </div>

      {/* Anatomy Breakdown */}
      <div className="pt-4 border-t border-zinc-800">
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {t({ en: 'Atom Components:', es: 'Componentes Átomo:' })}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" size="sm">
            {t({ en: 'Label', es: 'Etiqueta' })}
          </Badge>
          <Badge variant="outline" size="sm">
            {t({ en: 'Input Field', es: 'Campo de Entrada' })}
          </Badge>
          <Badge variant="outline" size="sm">
            {t({ en: 'Helper Text', es: 'Texto de Ayuda' })}
          </Badge>
          {currentState === 'error' && (
            <Badge variant="error" size="sm">
              {t({ en: 'Error Message', es: 'Mensaje de Error' })}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
