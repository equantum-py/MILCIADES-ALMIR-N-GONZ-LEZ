import './globals.css'
 
export const metadata = {
  title: 'Milciades Almirón González | CV Digital',
  description: 'Currículum profesional interactivo con descarga de PDF y contacto por WhatsApp',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" fill="%230284c7">💼</text></svg>',
  },
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0c3d66" />
      </head>
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
