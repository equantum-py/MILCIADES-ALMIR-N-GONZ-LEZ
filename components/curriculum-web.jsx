'use client';
 
import React, { useState } from 'react';
import { Download, MessageCircle, ExternalLink, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
 
export default function CurriculumWeb() {
  const [expandedSection, setExpandedSection] = useState(null);
 
  const handleWhatsappContact = () => {
    const phoneNumber = '595987397723';
    const message = encodeURIComponent(
      'Hola Milciades, vi tu currículum y me interesa hablar contigo sobre una oportunidad laboral.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
 
  const generatePDF = async () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Curriculum - Milciades Almirón González</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Calibri', Arial, sans-serif; background: white; }
          .container { max-width: 8.5in; height: 11in; margin: auto; display: grid; grid-template-columns: 35% 65%; }
          .sidebar { background: #f2f4f5; padding: 30px 20px; }
          .main { padding: 30px 25px; }
          h1 { font-size: 24pt; font-weight: bold; color: #17324d; margin-bottom: 10px; }
          .title { font-size: 12pt; color: #3e6b89; font-weight: 600; margin-bottom: 10px; }
          .section-title { font-size: 11pt; font-weight: bold; color: #17324d; border-bottom: 2px solid #3e6b89; padding-bottom: 6px; margin: 15px 0 10px 0; text-transform: uppercase; }
          .sidebar h3 { font-size: 11pt; font-weight: bold; color: #17324d; margin: 20px 0 10px 0; border-bottom: 2px solid #3e6b89; padding-bottom: 6px; text-transform: uppercase; }
          p { font-size: 10pt; color: #4f5963; line-height: 1.5; margin-bottom: 8px; }
          ul { list-style: none; margin-left: 0; }
          li { font-size: 10pt; color: #4f5963; margin-bottom: 6px; margin-left: 15px; }
          li:before { content: "•"; color: #3e6b89; font-weight: bold; margin-right: 8px; margin-left: -15px; }
          .contact-info { font-size: 9pt; color: #4f5963; }
          .job-title { font-weight: bold; color: #17324d; font-size: 10pt; }
          .job-subtitle { font-size: 9pt; color: #3e6b89; font-style: italic; margin-bottom: 4px; }
          .job-details { font-size: 9pt; color: #7a8a96; margin-bottom: 6px; }
          .formation-title { font-weight: bold; color: #17324d; font-size: 10pt; margin-top: 10px; }
          .formation-school { font-size: 9pt; color: #3e6b89; }
          @media print { body { margin: 0; padding: 0; } .container { box-shadow: none; } }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="sidebar">
            <h3>Contacto</h3>
            <div class="contact-info">
              <p><strong>Teléfono:</strong><br>0987 397 723</p>
              <p><strong>Correo:</strong><br>milciadesa68@gmail.com</p>
              <p><strong>Ubicación:</strong><br>San Fernando, Limpio</p>
            </div>
 
            <h3>Conocimientos Técnicos</h3>
            <ul>
              <li>Electricidad básica</li>
              <li>Electricidad industrial</li>
              <li>Instalaciones eléctricas</li>
              <li>Herramientas eléctricas</li>
              <li>Refrigeración básica</li>
              <li>Mantenimiento básico</li>
              <li>Normas de seguridad</li>
              <li>Jardinería y paisajismo</li>
            </ul>
 
            <h3>Habilidades</h3>
            <ul>
              <li>Proactividad</li>
              <li>Responsabilidad</li>
              <li>Puntualidad</li>
              <li>Organización</li>
              <li>Trabajo en equipo</li>
              <li>Aprendizaje rápido</li>
              <li>Seguimiento de instrucciones</li>
              <li>Buena condición física</li>
              <li>Adaptabilidad</li>
              <li>Compromiso laboral</li>
            </ul>
 
            <h3>Idiomas</h3>
            <p><strong>Español</strong><br><span style="font-size: 9pt; color: #3e6b89;">Nativo</span></p>
            <p><strong>Guaraní</strong><br><span style="font-size: 9pt; color: #3e6b89;">Nativo</span></p>
          </div>
 
          <div class="main">
            <h1>MILCIADES ALMIRÓN GONZÁLEZ</h1>
            <div class="title">Bachiller Técnico en Electricidad Industrial</div>
            <p style="font-size: 9pt; margin-bottom: 15px; border-bottom: 2px solid #3e6b89; padding-bottom: 12px;">
              📞 0987 397 723 | 📧 milciadesa68@gmail.com | 📍 San Fernando, Limpio
            </p>
 
            <div class="section-title">Perfil Profesional</div>
            <p style="text-align: justify;">
              Bachiller Técnico en Electricidad Industrial con conocimientos básicos en electricidad, refrigeración y mantenimiento. Persona responsable, proactiva y organizada, con facilidad para aprender, trabajar en equipo y cumplir instrucciones. Cuento con disposición para realizar tareas técnicas, operativas y trabajos que requieran esfuerzo físico, manteniendo siempre el compromiso y el cuidado en cada actividad.
            </p>
 
            <div class="section-title">Experiencia Laboral</div>
            <div class="job-title">Pasante — ANDE</div>
            <div class="job-subtitle">Departamento de Atención de Reclamos</div>
            <div class="job-details">[CONFIRMAR FECHA]</div>
            <ul style="margin-top: 6px;">
              <li>Apoyo en la atención y orientación a usuarios</li>
              <li>Recepción y registro de reclamos</li>
              <li>Organización de documentos e información</li>
              <li>Seguimiento de procedimientos internos</li>
              <li>Apoyo en tareas administrativas del área</li>
            </ul>
 
            <div class="job-title" style="margin-top: 12px;">Operario — Jardinería y Paisajismo</div>
            <div class="job-subtitle">Trabajos particulares e independientes</div>
            <div class="job-details">[CONFIRMAR PERÍODO]</div>
            <ul style="margin-top: 6px;">
              <li>Limpieza y mantenimiento de espacios verdes</li>
              <li>Corte de césped y cuidado de jardines</li>
              <li>Preparación y acondicionamiento del terreno</li>
              <li>Uso responsable de herramientas manuales</li>
              <li>Organización del área de trabajo</li>
            </ul>
 
            <div class="section-title">Formación Académica</div>
            <div class="formation-title">Bachiller Técnico en Electricidad Industrial</div>
            <div class="formation-school">Colegio Nacional San José — Limpio</div>
            <div class="formation-title" style="margin-top: 12px;">Educación Escolar Básica</div>
            <div class="formation-school">Escuela Sagrada Familia Nº 6162 | Preescolar hasta noveno grado</div>
          </div>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };
 
  const sections = [
    {
      id: 'perfil',
      title: 'Perfil Profesional',
      icon: '👤',
      content: 'Bachiller Técnico en Electricidad Industrial con conocimientos básicos en electricidad, refrigeración y mantenimiento. Persona responsable, proactiva y organizada, con facilidad para aprender, trabajar en equipo y cumplir instrucciones. Cuento con disposición para realizar tareas técnicas, operativas y trabajos que requieran esfuerzo físico.'
    },
    {
      id: 'experiencia',
      title: 'Experiencia Laboral',
      icon: '💼',
      content: (
        <div>
          <div className="mb-4">
            <h4 className="font-semibold text-blue-900">Pasante — ANDE</h4>
            <p className="text-sm text-blue-700 italic">Departamento de Atención de Reclamos</p>
            <p className="text-xs text-gray-500">[CONFIRMAR FECHA]</p>
            <ul className="text-sm mt-2 space-y-1 ml-4">
              <li>• Apoyo en la atención y orientación a usuarios</li>
              <li>• Recepción y registro de reclamos</li>
              <li>• Organización de documentos e información</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">Operario — Jardinería y Paisajismo</h4>
            <p className="text-sm text-blue-700 italic">Trabajos particulares e independientes</p>
            <p className="text-xs text-gray-500">[CONFIRMAR PERÍODO]</p>
            <ul className="text-sm mt-2 space-y-1 ml-4">
              <li>• Limpieza y mantenimiento de espacios verdes</li>
              <li>• Corte de césped y cuidado de jardines</li>
              <li>• Preparación y acondicionamiento del terreno</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'formacion',
      title: 'Formación Académica',
      icon: '🎓',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-blue-900">Bachiller Técnico en Electricidad Industrial</p>
            <p className="text-sm text-blue-700">Colegio Nacional San José — Limpio</p>
          </div>
          <div>
            <p className="font-semibold text-blue-900">Educación Escolar Básica</p>
            <p className="text-sm text-blue-700">Escuela Sagrada Familia Nº 6162</p>
            <p className="text-xs text-gray-600">Preescolar hasta noveno grado</p>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Habilidades & Conocimientos',
      icon: '⚡',
      content: (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-bold text-blue-900 mb-2">Técnicos</p>
            <ul className="text-xs space-y-1">
              <li>✓ Electricidad básica</li>
              <li>✓ Instalaciones eléctricas</li>
              <li>✓ Refrigeración básica</li>
              <li>✓ Mantenimiento básico</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-blue-900 mb-2">Personales</p>
            <ul className="text-xs space-y-1">
              <li>✓ Responsabilidad</li>
              <li>✓ Puntualidad</li>
              <li>✓ Trabajo en equipo</li>
              <li>✓ Aprendizaje rápido</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'idiomas',
      title: 'Idiomas',
      icon: '🌐',
      content: (
        <div className="space-y-2">
          <p className="text-sm"><span className="font-semibold">Español</span> — Nativo</p>
          <p className="text-sm"><span className="font-semibold">Guaraní</span> — Nativo</p>
        </div>
      )
    }
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Milciades Almirón</h1>
              <p className="text-sm text-blue-300">Bachiller Técnico en Electricidad Industrial</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <button
                onClick={generatePDF}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargar CV</span>
                <span className="sm:hidden">CV</span>
              </button>
              <button
                onClick={handleWhatsappContact}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </button>
            </div>
          </div>
        </div>
      </header>
 
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/60 transition-colors">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-blue-300">Teléfono</p>
                <p className="text-white font-semibold">0987 397 723</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/60 transition-colors">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-blue-300">Correo</p>
                <p className="text-white font-semibold text-sm">milciadesa68@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/60 transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-blue-300">Ubicación</p>
                <p className="text-white font-semibold">San Fernando, Limpio</p>
              </div>
            </div>
          </div>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-xl overflow-hidden hover:border-blue-400/60 transition-all duration-300 group"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="text-lg font-bold text-white">{section.title}</h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
 
              {expandedSection === section.id && (
                <div className="px-6 py-4 border-t border-blue-400/20 bg-blue-950/20 text-gray-300 text-sm leading-relaxed">
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
 
        <div className="mt-12 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-400/40 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Interesado en hablar?</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Contáctame por WhatsApp para discutir oportunidades en electricidad, refrigeración, mantenimiento, jardinería o trabajos operativos.
          </p>
          <button
            onClick={handleWhatsappContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
 
        <footer className="mt-12 text-center text-gray-400 text-sm border-t border-blue-400/20 pt-8">
          <p>© 2026 Milciades Almirón González | Currículum Digital</p>
          <p className="mt-2 text-gray-500">Paraguay</p>
        </footer>
      </main>
    </div>
  );
}
