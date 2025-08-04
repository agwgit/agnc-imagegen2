import React from 'react';

// Helper: top 3 scores
const topThree = (scores: Record<string, number>) =>
  Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

// Pill-style tag
const Pill = ({ color, label }: { color: string; label: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
        color.slice(3, 5),
        16
      )}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`,
      border: `2px solid ${color}`,
      borderRadius: 50,
      padding: '9px 16px',
      fontFamily: 'Space Mono, monospace',
      fontSize: 24,
      fontWeight: 700,
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    }}
  >
    {label}
  </div>
);

// Add a fallback image component
const FallbackImage = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [error, setError] = React.useState(false);
  
  const handleError = () => {
    if (!error) {
      setError(true);
      // Try a fallback path or a default image
      setImgSrc('https://via.placeholder.com/78x22?text=Logo');
    }
  };
  
  return <img src={imgSrc} alt={alt} onError={handleError} {...props} />;
};


// Individual score bar
const ScoreBar = ({ label, score, color, textColor }: { label: string; score: number; color: string; textColor: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, alignSelf: 'stretch', width: '100%', marginBottom: 24 }}>
    <h3 style={{ alignSelf: 'stretch', marginTop: -1, fontFamily: 'Space Mono, monospace', fontWeight: 700, color: 'white', fontSize: 24, letterSpacing: 0, lineHeight: 'normal' }}>
      {label}
    </h3>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, position: 'relative', alignSelf: 'stretch', width: '100%' }}>
      <div style={{ position: 'relative', alignSelf: 'stretch', width: '100%', height: 6, background: 'rgba(255,255,255,0.2)' }}>
        <div
          style={{
            height: 6,
            background: color,
            width: `${score}%`,
          }}
        />
      </div>
      
      <div style={{ position: 'relative', fontFamily: 'Space Mono, monospace', fontSize: 20, letterSpacing: 0, lineHeight: 'normal' }}>
        <span style={{ fontWeight: 700, color: textColor }}>{score}</span>
        <span style={{ color: 'rgba(255,255,255,0.8)' }}>/100</span>
      </div>
    </div>
  </div>
);

interface FusionTypes {
  name: string;
  base: string;
  accent: string;
  brand_examples: string[];
}

interface OgImageCardProps {
  fusionTypes: FusionTypes;
  shareSnippet: string;
  scores: Record<string, number>;
  DOMAIN: string;
  STARFIELD: string;
  LOGO: string;
}

export const OgImageCard = ({ fusionTypes, shareSnippet, scores, DOMAIN, STARFIELD, LOGO }: OgImageCardProps) => {
  const topScores = topThree(scores);

  const imageFileName = fusionTypes.name.toLowerCase().replace(/\s+/g, '-');
  const CARD_DYNAMIC_BACKGROUND_IMAGE = `/public/images/${imageFileName}.png`;
  const STARS_OVERLAY_IMAGE = `${DOMAIN}/stars.svg`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 88,
        paddingBottom: 36,
        paddingLeft: 120,
        paddingRight: 120,
        position: 'relative',
        width: 1080,
        height: 1920,
        background: `radial-gradient(50% 50% at 50% 100%, rgba(7,20,39,1) 0%, rgba(7,20,39,0) 100%), linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url(${STARFIELD}) 50% 50% / cover, linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)`,
      }}
    >
      {/* Main Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 36,
          paddingTop: 120,
          paddingBottom: 48,
          flex: 1,
          alignSelf: 'stretch',
          width: '100%',
          borderRadius: 48,
          border: '0.5px solid rgba(255,255,255,0.4)',
          boxShadow: 'inset 0px 1px 40px rgba(20,59,117,0.3), inset 0px 4px 18px rgba(20,59,117,0.3), inset 0px 98px 100px -48px rgba(14,40,78,0.3), inset 0px -82px 68px -64px rgba(14,40,78,0.3), inset 0px 7px 11px -4px rgba(255,255,255,0.2), inset 0px 39px 56px -36px rgba(255,255,255,0.15)',
          backdropFilter: 'blur(6px) brightness(100%)',
          WebkitBackdropFilter: 'blur(6px) brightness(100%)',
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${CARD_DYNAMIC_BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      >
        {/* Header Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'stretch', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'stretch', width: '100%' }}>
            <div style={{ width: 840, height: 58, display: 'flex', alignItems: 'flex-start', gap: 24, paddingLeft: 48, paddingRight: 48 }}>
              <h2 style={{ position: 'relative', marginTop: -1, fontFamily: 'Inter, Helvetica', fontWeight: 300, color: 'white', fontSize: 48, letterSpacing: 0, lineHeight: 'normal' }}>
                My brand style is...
              </h2>
            </div>

            <div style={{ display: 'flex', width: 840, height: 122, alignItems: 'center', gap: 10, paddingLeft: 48, paddingRight: 48 }}>
              <h1 style={{ position: 'relative', fontFamily: 'Satoshi-Medium, Helvetica', fontWeight: 500, color: 'white', fontSize: 80, letterSpacing: 0, lineHeight: 'normal' }}>
                ✨ {fusionTypes.name}
              </h1>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 48, paddingRight: 48, paddingTop: 24, paddingBottom: 24, alignSelf: 'stretch', width: '100%' }}>
            <Pill color="#f79337" label={fusionTypes.base} />
            <div style={{ position: 'relative', fontFamily: 'Inter, Helvetica', fontWeight: 400, color: 'white', fontSize: 24, letterSpacing: 0, lineHeight: 'normal' }}>
              x
            </div>
            <Pill color="#4e82cf" label={fusionTypes.accent} />
          </div>
        </div>

        {/* Scores Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, paddingLeft: 48, paddingRight: 48, paddingTop: 24, paddingBottom: 24, position: 'relative', alignSelf: 'stretch', width: '100%', border: '0.5px solid rgba(26,26,30,0.6)', boxShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 10,
              padding: 48,
              alignSelf: 'stretch',
              width: '100%',
              background: 'rgba(0,0,0,0.6)',
              borderRadius: 24,
              boxShadow: '0px 0px 48px rgba(255,255,255,0.12)',
              backdropFilter: 'blur(6px) brightness(100%)',
              WebkitBackdropFilter: 'blur(6px) brightness(100%)',
            }}
          >
            <div style={{ width: '100%' }}>
              {topScores.map((metric, index) => (
                <ScoreBar
                  key={index}
                  label={metric[0]}
                  score={metric[1]}
                  color={index === 0 ? '#f79337' : '#4e82cf'}
                  textColor={index === 0 ? '#f9ae69' : 'white'}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, paddingLeft: 48, paddingRight: 48, alignSelf: 'stretch', width: '100%' }}>
          <blockquote style={{ position: 'relative', flex: 1, marginTop: -1, fontFamily: 'Satoshi-Regular, Helvetica', fontWeight: 400, color: 'white', fontSize: 56, letterSpacing: 0, lineHeight: 'normal' }}>
            "{shareSnippet}"
          </blockquote>
        </div>

        {/* Similar Brands Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, paddingLeft: 48, paddingRight: 48, position: 'relative', flex: 1, alignSelf: 'stretch', width: '100%' }}>
          <h4 style={{ position: 'relative', alignSelf: 'stretch', marginTop: -1, opacity: 0.5, fontFamily: 'Space Mono, Helvetica', fontWeight: 700, color: 'white', fontSize: 24, letterSpacing: 0, lineHeight: 'normal' }}>
            OTHER BRANDS THAT ARE "{fusionTypes.name.toUpperCase()}"
          </h4>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, position: 'relative', alignSelf: 'stretch', width: '100%' }}>
            {fusionTypes.brand_examples.map((brand, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 9,
                  paddingBottom: 9,
                  background: 'rgba(99,38,3,0.6)',
                  borderRadius: 50,
                }}
              >
                <span style={{ marginTop: -2, fontFamily: 'Space Mono, Helvetica', fontWeight: 700, color: '#f79337', fontSize: 24, textAlign: 'center', letterSpacing: 0.08, lineHeight: 'normal' }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, paddingLeft: 48, paddingRight: 48, alignSelf: 'stretch', width: '100%' }}>
          <p style={{ position: 'relative', width: 402, marginTop: -1, fontFamily: 'Space Mono, Helvetica', fontWeight: 400, color: 'white', fontSize: 18, letterSpacing: 0, lineHeight: 'normal' }}>
            GET A FREE BRAND SCAN, INSIGHTS AND YOUR OWN STYLE PROFILE FOR FREE AT:
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 31.14, flexDirection: 'column' }}>
            <div style={{ gap: 19.46, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a
                href="https://agnc.pro/brand-scanner"
                style={{ position: 'relative', marginTop: -1.95, fontFamily: 'Satoshi-Bold, Helvetica', fontWeight: 700, color: '#f9ae69', fontSize: 24, letterSpacing: 0, lineHeight: 'normal', textDecoration: 'underline' }}
              >
                agnc.pro/brand-scanner
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, paddingTop: 24, paddingBottom: 24, position: 'relative', alignSelf: 'stretch', width: '100%' }}>
        <p style={{ position: 'relative', width: 462, marginTop: -1, fontFamily: 'Satoshi-Regular, Helvetica', fontWeight: 400, color: 'white', fontSize: 20, textAlign: 'center', letterSpacing: 0, lineHeight: 'normal' }}>
          This style profile was made by the Brand Scanner™, brought to you by AGNC Studio (agnc.pro)
        </p>

        <div style={{ display: 'flex', width: 100, height: 43, alignItems: 'center', justifyContent: 'center', gap: 10, padding: 10 }}>
          <img
            style={{ position: 'relative', width: 78.2, height: 22.2 }}
            alt="AGNC Studio logo"
            src={LOGO}
          />
        </div>
      </footer>

      {/* Stars Overlay */}
      <div
        style={{
          position: 'absolute',
          width: 1080,
          height: 1920,
          top: 0,
          left: 0,
          filter: 'blur(4px)',
          opacity: 0.3,
          backgroundImage: `url(${STARS_OVERLAY_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      />
    </div>
  );
};