'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import categories from './category.json';
import { JSX } from 'react';

function Toggle(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleChange = (value: string) => {
    router.push(`?category=${value}`);
  };

  return (
    <ToggleGroup
      value={searchParams.get('category') || categories[0].id.toString()}
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
