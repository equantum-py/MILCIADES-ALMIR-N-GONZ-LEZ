'use client';

import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function CurriculumWeb() {
  const [isDownloading, setIsDownloading] = useState(false);

  const generatePDF = () => {
    setIsDownloading(true);
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>CV - Milciades Almirón González</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fff; color: #333; }
          .container { max-width: 8.5in; margin: 0 auto; padding: 40px; }
          .header { margin-bottom: 30px; border-bottom: 2px solid #f0f0f0; padding-bottom: 20px; }
          h1 { font-size: 32px; font-weight: 700; color: #1a1a1a; margin-bottom: 5px; }
          .subtitle { font-size: 14px; color: #666; margin-bottom: 15px; }
          .contact { display: flex; gap: 20px; font-size: 12px; color: #666; }
          .section { margin-bottom: 25px; }
          .section h2 { font-size: 13px; font-weight: 700; color: #1a1a1a; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; }
          .entry { margin-bottom: 15px; }
          .entry-title { font-weight: 600; color: #1a1a1a; font-size: 13px; }
          .entry-subtitle { font-size: 12px; color: #999; margin-top: 2px; }
          .entry-description { font-size: 12px; color: #666; margin-top: 5px; line-height: 1.5; }
          ul { margin-left: 15px; font-size: 12px; color: #666; }
          li { margin-bottom: 4px; }
          .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
          .skill-item { font-size: 12px; color: #666; }
          @media print { body { margin: 0; padding: 0; } }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>MILCIADES ALMIRÓN GONZÁLEZ</h1>
            <div class="subtitle">Bachiller Técnico en Electricidad Industrial</div>
            <div class="contact">
              <span>📞 0987 397 723</span>
              <span>📧 milciadesa68@gmail.com</span>
              <span>📍 San Fernando, Limpio</span>
            </div>
          </div>

          <div class="section">
            <h2>Perfil Profesional</h2>
            <div class="entry-description">
              Bachiller Técnico en Electricidad Industrial con conocimientos sólidos en instalaciones eléctricas, refrigeración y mantenimiento. Profesional responsable, proactivo y organizado con facilidad para el aprendizaje, trabajo en equipo y cumplimiento de instrucciones. Disponible para tareas técnicas, operativas y trabajos que requieran esfuerzo físico.
            </div>
          </div>

          <div class="section">
            <h2>Experiencia Laboral</h2>
            
            <div class="entry">
              <div class="entry-title">Pasante — ANDE</div>
              <div class="entry-subtitle">Departamento de Atención de Reclamos</div>
              <ul>
                <li>Apoyo en atención y orientación a usuarios</li>
                <li>Recepción y registro de reclamos</li>
                <li>Organización de documentos e información</li>
                <li>Seguimiento de procedimientos internos</li>
              </ul>
            </div>

            <div class="entry">
              <div class="entry-title">Operario — Jardinería y Paisajismo</div>
              <div class="entry-subtitle">Trabajos particulares e independientes</div>
              <ul>
                <li>Limpieza y mantenimiento de espacios verdes</li>
                <li>Corte de césped y cuidado de jardines</li>
                <li>Preparación y acondicionamiento del terreno</li>
                <li>Uso responsable de herramientas manuales</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Formación Académica</h2>
            
            <div class="entry">
              <div class="entry-title">Bachiller Técnico en Electricidad Industrial</div>
              <div class="entry-subtitle">Colegio Nacional San José — Limpio, Paraguay</div>
            </div>

            <div class="entry">
              <div class="entry-title">Educación Escolar Básica</div>
              <div class="entry-subtitle">Escuela Sagrada Familia Nº 6162 — Preescolar a noveno grado</div>
            </div>
          </div>

          <div class="section">
            <h2>Conocimientos Técnicos</h2>
            <div class="skills-grid">
              <div>
                <div class="skill-item">• Electricidad básica</div>
                <div class="skill-item">• Electricidad industrial</div>
                <div class="skill-item">• Instalaciones eléctricas</div>
                <div class="skill-item">• Herramientas eléctricas</div>
              </div>
              <div>
                <div class="skill-item">• Refrigeración básica</div>
                <div class="skill-item">• Mantenimiento básico</div>
                <div class="skill-item">• Normas de seguridad</div>
                <div class="skill-item">• Jardinería y paisajismo</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Habilidades</h2>
            <div class="skills-grid">
              <div>
                <div class="skill-item">• Proactividad</div>
                <div class="skill-item">• Responsabilidad</div>
                <div class="skill-item">• Puntualidad</div>
              </div>
              <div>
                <div class="skill-item">• Trabajo en equipo</div>
                <div class="skill-item">• Aprendizaje rápido</div>
                <div class="skill-item">• Buena condición física</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Idiomas</h2>
            <div class="skill-item">• Español (Nativo)</div>
            <div class="skill-item">• Guaraní (Nativo)</div>
          </div>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      setIsDownloading(false);
    }, 500);
  };

  const handleWhatsapp = () => {
    const phoneNumber = '595987397723';
    const message = encodeURIComponent('Hola Milciades, vi tu CV y me interesa hablar contigo sobre una oportunidad.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Milciades Almirón</h1>
              <p className="text-sm text-gray-600 mt-2">Bachiller Técnico en Electricidad Industrial</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-end">
              <button
                onClick={generatePDF}
                disabled={isDownloading}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {isDownloading ? 'Generando...' : 'Descargar CV'}
              </button>
              <button
                onClick={handleWhatsapp}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pb-8 border-b border-gray-200">
          <a href="tel:+595987397723" className="flex items-start gap-3 hover:opacity-70 transition-opacity">
            <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Teléfono</p>
              <p className="text-sm text-gray-900">0987 397 723</p>
            </div>
          </a>
          <a href="mailto:milciadesa68@gmail.com" className="flex items-start gap-3 hover:opacity-70 transition-opacity">
            <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Correo</p>
              <p className="text-sm text-gray-900">milciadesa68@gmail.com</p>
            </div>
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Ubicación</p>
              <p className="text-sm text-gray-900">San Fernando, Limpio</p>
            </div>
          </div>
        </div>

        {/* Perfil Profesional */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b border-gray-200">Perfil Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bachiller Técnico en Electricidad Industrial con conocimientos sólidos en instalaciones eléctricas, refrigeración y mantenimiento. Profesional responsable, proactivo y organizado con facilidad para el aprendizaje, trabajo en equipo y cumplimiento de instrucciones. Disponible para tareas técnicas, operativas y trabajos que requieran esfuerzo físico.
          </p>
        </section>

        {/* Experiencia Laboral */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">Experiencia Laboral</h2>
          
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-semibold text-gray-900">Pasante</h3>
              <p className="text-xs text-gray-500">ANDE</p>
            </div>
            <p className="text-xs text-gray-600 mb-3">Departamento de Atención de Reclamos</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-gray-700">• Apoyo en atención y orientación a usuarios</li>
              <li className="text-sm text-gray-700">• Recepción y registro de reclamos</li>
              <li className="text-sm text-gray-700">• Organización de documentos e información</li>
              <li className="text-sm text-gray-700">• Seguimiento de procedimientos internos</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-semibold text-gray-900">Operario</h3>
              <p className="text-xs text-gray-500">Independiente</p>
            </div>
            <p className="text-xs text-gray-600 mb-3">Jardinería y Paisajismo</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-gray-700">• Limpieza y mantenimiento de espacios verdes</li>
              <li className="text-sm text-gray-700">• Corte de césped y cuidado de jardines</li>
              <li className="text-sm text-gray-700">• Preparación y acondicionamiento del terreno</li>
              <li className="text-sm text-gray-700">• Uso responsable de herramientas manuales</li>
            </ul>
          </div>
        </section>

        {/* Formación */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">Formación Académica</h2>
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900">Bachiller Técnico en Electricidad Industrial</h3>
            <p className="text-xs text-gray-600">Colegio Nacional San José — Limpio, Paraguay</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Educación Escolar Básica</h3>
            <p className="text-xs text-gray-600">Escuela Sagrada Familia Nº 6162</p>
            <p className="text-xs text-gray-600">Preescolar hasta noveno grado</p>
          </div>
        </section>

        {/* Conocimientos */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b border-gray-200">Conocimientos Técnicos</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <p className="text-sm text-gray-700">Electricidad básica</p>
            <p className="text-sm text-gray-700">Refrigeración básica</p>
            <p className="text-sm text-gray-700">Electricidad industrial</p>
            <p className="text-sm text-gray-700">Mantenimiento básico</p>
            <p className="text-sm text-gray-700">Instalaciones eléctricas</p>
            <p className="text-sm text-gray-700">Normas de seguridad</p>
            <p className="text-sm text-gray-700">Herramientas eléctricas</p>
            <p className="text-sm text-gray-700">Jardinería y paisajismo</p>
          </div>
        </section>

        {/* Habilidades */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b border-gray-200">Habilidades Personales</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <p className="text-sm text-gray-700">Proactividad</p>
            <p className="text-sm text-gray-700">Trabajo en equipo</p>
            <p className="text-sm text-gray-700">Responsabilidad</p>
            <p className="text-sm text-gray-700">Aprendizaje rápido</p>
            <p className="text-sm text-gray-700">Puntualidad</p>
            <p className="text-sm text-gray-700">Buena condición física</p>
            <p className="text-sm text-gray-700">Organización</p>
            <p className="text-sm text-gray-700">Compromiso laboral</p>
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b border-gray-200">Idiomas</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray-900 font-medium">Español</p>
              <p className="text-sm text-gray-600">Nativo</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-900 font-medium">Guaraní</p>
              <p className="text-sm text-gray-600">Nativo</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-gray-200 pt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">¿Interesado en colaborar?</p>
          <button
            onClick={handleWhatsapp}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contactar por WhatsApp
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-8 text-center text-xs text-gray-600">
          © 2026 Milciades Almirón González • Currículum Digital
        </div>
      </footer>
    </div>
  );
}

// Importar MessageCircle que falta
const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default CurriculumWeb;
