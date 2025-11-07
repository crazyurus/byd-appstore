import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Props {
  images: string[];
}

function Images(props: Props): JSX.Element {
  const { images } = props;

  return (
    <>
      <ScrollArea className="whitespace-nowrap">
        <div className="flex gap-4">
          {images.map(item => (
            <Dialog key={item}>
              <DialogTrigger asChild>
                <Image
                  loading="lazy"
                  src={item}
                  alt="screenshot"
                  className="border object-cover rounded-md cursor-pointer"
                  width={320}
                  height={180}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>查看图片</DialogTitle>
                </DialogHeader>
                <Image
                  key={item}
                  loading="lazy"
                  src={item}
                  alt="screenshot"
                  className="object-cover"
                  width={462}
                  height={260}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="cursor-pointer" variant="secondary">
                      关闭
                    </Button>
                  </DialogClose>
                  <Button className="cursor-pointer" asChild>
                    <Link href={item}>下载</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}

export default Images;
