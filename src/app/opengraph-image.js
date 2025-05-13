import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#000',
            color: '#fff',
            padding: '60px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            fontSize: 60,
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            backgroundImage: 'linear-gradient(to bottom right, #0f0f0f, #1a1a1a)',
          }}
        >
          <div style={{ fontSize: 24, color: '#888', marginBottom: 20 }}>
            Solid Explore
          </div>
          <div>Explore Smarter</div>
          <div style={{ fontSize: 28, fontWeight: 400, marginTop: 20, color: '#ccc' }}>
            AI-powered file type search across the web
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
