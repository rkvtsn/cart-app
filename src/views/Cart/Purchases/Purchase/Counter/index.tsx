import { useCallback } from 'react';
import { CounterProps } from './types';
import './styles.scss';

const Counter = ({ value, onChange }: CounterProps) => {
  const handleIncrease = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const handleDecrease = useCallback(() => {
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="counter">
      <button onClick={handleDecrease}>-</button>
      <div>{value}</div>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Counter;
