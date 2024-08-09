import { revalidate } from 'lib/shopify';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  console.log('Revalidating Shopify products');
  console.log('Request body:', req.body);
  console.log('Request headers:', req.headers);
  return revalidate(req);
}
