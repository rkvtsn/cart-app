export interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number
}
