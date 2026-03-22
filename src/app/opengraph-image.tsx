import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'GrupoInfinitoIA | Inversión B2B Exenta de Impuestos'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B0B0F 0%, #15275a 40%, #0B0B0F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, "Segoe UI", sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          {/* Logo Box */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 24, background: '#06B6D4', border: '4px solid rgba(255,255,255,0.2)' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22" />
            </svg>
          </div>
          <h1 style={{ fontSize: 80, fontWeight: 800, margin: 0, letterSpacing: '-2px' }}>
            GrupoInfinitoIA
          </h1>
        </div>
        
        <h2 style={{ fontSize: 44, fontWeight: 500, color: '#A5F3FC', maxWidth: '85%', textAlign: 'center', margin: 0, lineHeight: 1.3, zIndex: 10 }}>
          Ecosistema B2B líder en LATAM <br/> Exento de impuestos hasta 2040
        </h2>
        
        <div style={{ display: 'flex', marginTop: 60, zIndex: 10 }}>
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 600, color: '#06B6D4', border: '2px solid rgba(6, 182, 212, 0.5)', background: 'rgba(6, 182, 212, 0.1)', padding: '12px 32px', borderRadius: 50 }}>
            Valuación de $347M
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
