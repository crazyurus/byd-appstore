import { JSX } from 'react';

interface Props {
  params: {
    id: string;
  };
}

function AppDetail(props: Props): JSX.Element {
  return <>{JSON.stringify(props)}</>;
}

export default AppDetail;
