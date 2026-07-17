'use client';

import React, { useState } from 'react';
import { Download, MessageCircle, ExternalLink, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function CurriculumWeb() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleWhatsappContact = () => {
    const phoneNumber = '595987397723';
    const message = encodeURIComponent('Hola Milciades, vi tu currículum y me interesa hablar contigo.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const generatePDF = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>CV - Milciades</title>
        <style>
          body { font-family: Arial; margin: 20px; }
          h1 { color: #17324d; }
          .section { margin: 20px 0; }
        </style>
      </head>
      <body>
        <h1>MILCIADES ALMIRÓN GONZÁLEZ</h1>
        <p><strong>Bachiller Técnico en Electricidad Industrial</strong></p>
        <p>📞 0987 397 723 | 📧 milciadesa68@gmail.com</p>
        <div class="section">
          <h2>Perfil</h2>
          <p>Técnico en electricidad con conocimientos en instalaciones, refrigeración y mantenimiento.</p>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Milciades Almirón</h1>
              <p className="text-sm text-blue-300">Bachiller Técnico en Electricidad Industrial</p>
            </div>
            <div className="flex gap-2">
              <button onClick={generatePDF} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargar CV</span>
              </button>
              <button onClick={handleWhatsappContact} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-blue-300">Teléfono</p>
                <p className="text-white font-semibold">0987 397 723</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-blue-300">Correo</p>
                <p className="text-white font-semibold text-sm">milciadesa68@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 border border-blue-400/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-blue-300">Ubicación</p>
                <p className="text-white font-semibold">San Fernando, Limpio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-400/40 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¡Currículum en Vivo!</h3>
          <p className="text-blue-200 mb-6">
            Bachiller Técnico en Electricidad Industrial con experiencia en instalaciones, refrigeración y mantenimiento.
          </p>
          <button onClick={handleWhatsappContact} className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold">
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
          </button>
        </div>

        <footer className="mt-12 text-center text-gray-400 text-sm border-t border-blue-400/20 pt-8">
          <p>© 2026 Milciades Almirón González | Currículum Digital</p>
        </footer>
      </main>
    </div>
  );
}
