import { Images } from './constants';
import { ClipartProps } from './types';
import './style.scss';

const Clipart = ({ image, alt }: ClipartProps) => {
  const imageSrc = image && image in Images ? Images[image] : undefined;
  return (
    <div className="clipart">
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default Clipart;
