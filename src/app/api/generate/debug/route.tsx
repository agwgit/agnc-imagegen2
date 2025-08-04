import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    
    // Get all parameters
    const allParams = Object.fromEntries(searchParams.entries())
    
    // Support both payload format and individual parameters
    const raw = searchParams.get('payload')
    let data
    
    if (raw) {
      try {
        data = JSON.parse(raw)
      } catch (e) {
        return new Response(JSON.stringify({
          error: `Invalid JSON in payload: ${e.message}`,
          receivedParams: allParams
        }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }
    } else {
      // Individual parameters format
      const fusionName = searchParams.get('fusion_name')
      const fusionBase = searchParams.get('fusion_base')
      const fusionAccent = searchParams.get('fusion_accent')
      const fusionExamples = searchParams.get('fusion_examples')
      const scores = searchParams.get('scores')
      const shareSnippet = searchParams.get('shareSnippet')
      
      if (!fusionName || !shareSnippet) {
        return new Response(JSON.stringify({
          error: 'Missing required parameters',
          receivedParams: allParams,
          requiredParams: ['fusion_name', 'shareSnippet']
        }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      
      // Parse JSON parameters
      let parsedExamples = []
      let parsedScores = {}
      
      try {
        parsedExamples = fusionExamples ? JSON.parse(fusionExamples) : []
      } catch (e) {
        return new Response(JSON.stringify({
          error: `Invalid fusion_examples JSON format: ${e.message}`,
          receivedParams: allParams
        }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      
      try {
        parsedScores = scores ? JSON.parse(scores) : {}
      } catch (e) {
        return new Response(JSON.stringify({
          error: `Invalid scores JSON format: ${e.message}`,
          receivedParams: allParams
        }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      
      data = {
        fusionTypes: {
          name: fusionName,
          base: fusionBase,
          accent: fusionAccent,
          brand_examples: parsedExamples
        },
        shareSnippet: shareSnippet,
        scores: parsedScores
      }
    }
    
    // Check if the required background image would exist
    const DOMAIN = 'https://agnc-imagegen.vercel.app'
    const imageFileName = data.fusionTypes.name.toLowerCase().replace(/\s+/g, '-')
    const backgroundImageUrl = `${DOMAIN}/images/${imageFileName}.png`
    
    // Return the parsed data and image info for debugging
    return new Response(JSON.stringify({
      success: true,
      parsedData: data,
      imageInfo: {
        expectedFileName: imageFileName,
        expectedUrl: backgroundImageUrl
      },
      receivedParams: allParams
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({
      error: `Debug endpoint error: ${error.message}`
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}