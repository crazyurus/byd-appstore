import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '@/components/ui/item';

import ActionButton from './action';
import categories from './data/category.json';
import { getList } from './lib/data';
import SelectPlatform from './select';
import Toggle from './toggle';

interface Props {
  searchParams: {
    category?: string;
    platform?: string;
  };
}

async function AppStore(props: Props): Promise<JSX.Element> {
  const searchParams = await props.searchParams;
  const category = searchParams.category || categories[0].id.toString();
  const platform = searchParams.platform || '4';
  const title = categories.find(item => item.id.toString() === category)?.name;
  const apps = await getList(category, platform);

  return (
    <>
      <Toggle category={category} />
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl mt-10 mb-4">{title}</h1>
      <SelectPlatform platform={platform} />
      <ItemGroup className="mt-4 w-full gap-6">
        {apps.map(item => (
          <Item key={item.id} variant="outline" asChild>
            <Link href={`/apps/${item.id}`}>
              <ItemMedia>
                <Image className="rounded-md" src={item.icon} alt={item.name} width={64} height={64} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.version}</ItemDescription>
                <ItemDescription className="line-clamp-1 break-all">{item.introduction}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <ActionButton url={item.download} />
              </ItemActions>
            </Link>
          </Item>
        ))}
      </ItemGroup>
    </>
  );
}

export default AppStore;
