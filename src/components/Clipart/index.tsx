import { Images } from './constants';
import { ClipartProps } from './types';

const Clipart = ({ image }: ClipartProps) => {
  const imageSrc = image && image in Images ? Images[image] : undefined;
  return <img src={imageSrc} alt={image} />;
};

export default Clipart;
