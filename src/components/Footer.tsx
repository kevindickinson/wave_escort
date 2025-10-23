export function Footer() {
  return (
    <footer style={{
      background: '#1a1a1a',
      color: '#ffffff',
      borderTop: '1px solid #333333',
      padding: '24px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Left Side - Copyright */}
          <div style={{
            color: '#999999',
            fontSize: '14px'
          }}>
            © 2025 Wave Escort. All rights reserved.
            <br />
            Aerial photography provided by The Everyday Surfer
          </div>

          {/* Right Side - Patent Info */}
          <div style={{
            color: '#999999',
            fontSize: '14px'
          }}>
            Patent Protected
          </div>
        </div>
      </div>
    </footer>
  );
}


