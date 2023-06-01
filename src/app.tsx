import { FC } from 'react';
import { Button } from '@mantine/core';
import { useMainStore } from './stores/useMainStore';

const App: FC = () => {
  const mainStore = useMainStore();

  return <Button onClick={mainStore.increaseCount}>count is {mainStore.count}</Button>;
};

export default App;
