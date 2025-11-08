'use client';

import { useRouter } from 'next/navigation';
import { JSX, type PropsWithChildren } from 'react';

function NavigateBack(props: PropsWithChildren): JSX.Element {
  const router = useRouter();
  const handleClick = () => {
    const canGoBack = navigation ? navigation.canGoBack : history.length > 1;

    if (canGoBack) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  return (
    <a className="cursor-pointer" onClick={handleClick}>
      {props.children}
    </a>
  );
}

export default NavigateBack;
