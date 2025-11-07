import Image from 'next/image';
import {
  Item,
  ItemGroup,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { JSX } from 'react';
import DownloadButton from './download';
import SelectPlatform from './select';
import Toggle from './toggle';
import categories from './data/category.json';
import { getData } from './lib/data';

interface Props {
  searchParams: {
    category?: string;
    platform?: string;
  };
}

async function AppStore(props: Props): Promise<JSX.Element> {
  const searchParams = await props.searchParams;
  const category = searchParams.category || categories[0].id.toString();
  const platform = searchParams.platform || '5';
  const title = categories.find(item => item.id.toString() === category)?.name;
  const apps = await getData(category, platform);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col p-16 bg-white dark:bg-black sm:items-start">
        <div className="mb-4">
          <SelectPlatform platform={platform} />
        </div>
        <div>
          <Toggle category={category} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl my-10">
          {title}
        </h1>
        <ItemGroup className="w-full gap-6">
          {apps.map(item => (
            <Item key={item.id} variant="outline">
              <ItemMedia>
                <Image
                  className="rounded-md"
                  src={item.icon}
                  alt={item.name}
                  width={64}
                  height={64}
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.version}</ItemDescription>
                <ItemDescription className="line-clamp-1 break-all">
                  {item.introduction}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <DownloadButton url={item.download} />
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </main>
    </div>
  );
}

export default AppStore;
