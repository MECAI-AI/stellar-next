// @ts-nocheck
import HolographicFeatures from '@/components/holographic-features'

export default function Page() {
  return (
    <>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '80vh', 
        fontFamily: 'sans-serif', 
        backgroundColor: '#0f172a', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '20px' 
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1.5rem', 
          fontWeight: 'bold', 
          color: '#38bdf8', 
          letterSpacing: '2px' 
        }}>
          MECAI.AI
        </h1>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '1rem', 
          fontWeight: '600' 
        }}>
          This website is under construction 🛠️
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#94a3b8', 
          maxWidth: '600px', 
          lineHeight: '1.6' 
        }}>
          We're building the future of avatar interview simulation and global certification.
        </p>
      </div>
      <HolographicFeatures />
    </>
  );
}
