import crypto from 'node:crypto';

interface App {
  id: number;
  name: string;
  icon: string;
  version: string;
  introduction: string;
  download: string;
}

function calcSignature(json: string): string {
  const source = process.env.SIGNATURE_HEAD + json + process.env.SIGNATURE_END;

  return crypto.createHash('md5').update(source, 'utf8').digest('hex');
}

export async function getData(category: string): Promise<App[]> {
  'use server';

  const params = {
    category,
    limit: '50',
    offset: '0',
    token: process.env.JWT_TOKEN!,
    vehicle: '346',
  };
  const json = JSON.stringify(params);
  const response = await fetch(process.env.APP_STORE_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      sign: calcSignature(json),
    },
    body: json,
  });
  const body = await response.json();

  return body.data;
}
