// src/app/api/generate/route.tsx
import { ImageResponse } from '@vercel/og';
import OgImageCard from '../../../components/OgImageCard';
import { styleImageMap } from '../../../components/OgImageCard'; // if exported separately

export const runtime = 'edge';

const DOMAIN = 'https://agnc-imagegen.vercel.app';
const STARFIELD = `${DOMAIN}/starfield.png`;
const LOGO = `${DOMAIN}/agnc-text.png`;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const raw = searchParams.get('payload');

  if (!raw) return new Response('Missing ?payload', { status: 400 });

  try {
    const data = JSON.parse(decodeURIComponent(raw));
    const { fusionTypes, shareSnippet, scores } = data;

    const normalizedName = fusionTypes?.name?.replace(/\s/g, '');
    const imageFile = styleImageMap[normalizedName];

    const normalizeToFilename = (name: string) =>
  name.trim().toLowerCase().replace(/\s+/g, '-');

const CARD_DYNAMIC_BACKGROUND_IMAGE = `${DOMAIN}/images/${normalizeToFilename(fusionTypes.name)}.png`;

    return new ImageResponse(
      (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <OgImageCard
            fusionTypes={fusionTypes}
            shareSnippet={shareSnippet}
            scores={scores}
            DOMAIN={DOMAIN}
            STARFIELD={STARFIELD}
            LOGO={LOGO}
            CARD_DYNAMIC_BACKGROUND_IMAGE={CARD_DYNAMIC_BACKGROUND_IMAGE}
          />
        </div>
      ),
      {
        width: 1080,
        height: 1920,
      }
    );
  } catch (err: any) {
    return new Response(`Invalid JSON payload: ${err.message}`, { status: 400 });
  }
}