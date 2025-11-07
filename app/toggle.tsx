'use client';

import { useRouter } from 'next/navigation';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import categories from './data/category.json';
import { JSX } from 'react';

interface Props {
  category: string;
}

function Toggle(props: Props): JSX.Element {
  const router = useRouter();
  const handleChange = (value: string) => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set('category', value);

    router.push('?' + searchParams.toString());
  };

  return (
    <ToggleGroup
      value={props.category}
      type="single"
      variant="outline"
      onValueChange={handleChange}
    >
      {categories.map(item => (
        <ToggleGroupItem
          className="cursor-pointer"
          key={item.id}
          value={item.id.toString()}
        >
          {item.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default Toggle;
