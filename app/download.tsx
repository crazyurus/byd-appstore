'use client';

import { Button } from '@/components/ui/button';
import { JSX } from 'react';

interface Props {
  url: string;
}

function DownloadButton(props: Props): JSX.Element {
  return (
    <Button
      className="cursor-pointer"
      size="sm"
      variant="outline"
      onClick={() => location.assign(props.url)}
    >
      下载
    </Button>
  );
}

export default DownloadButton;
