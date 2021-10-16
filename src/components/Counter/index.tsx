import { useCallback } from 'react';
import { CounterProps } from './types';
import './styles.scss';

const Counter = ({ value, onChange, min }: CounterProps) => {
  const handleIncrease = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const handleDecrease = useCallback(() => {
    if (value === min) return;
    onChange(value - 1);
  }, [value, onChange, min]);

  return (
    <div className="counter">
      <button onClick={handleDecrease}>&#8722;</button>
      <div>{value}</div>
      <button onClick={handleIncrease}>&#43;</button>
    </div>
  );
};

export default Counter;
