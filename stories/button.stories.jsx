import { useState } from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  const [toggle, setToggle] = useState(false);
  return <Button caption={`state:${toggle}`} onClick={() => setToggle(state => !state)} />;
}
