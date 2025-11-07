import Image from 'next/image';
import Link from 'next/link';
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
import ActionButton from './action';
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
    <>
      <Toggle category={category} />
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl mt-10 mb-4">
        {title}
      </h1>
      <SelectPlatform platform={platform} />
      <ItemGroup className="mt-4 w-full gap-6">
        {apps.map(item => (
          <Item key={item.id} variant="outline" asChild>
            <Link href={`/apps/${item.id}`}>
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
