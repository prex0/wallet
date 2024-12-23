import { cn } from '../../lib/utils';

type SpinnerReact = {
  className?: string;
};

export function Spinner({ className }: SpinnerReact) {
  return (
    <div
      className="flex h-full items-center justify-center"
    >
      <div
        className={cn(
          'animate-spin border-2 border-gray-200 border-t-3',
          'rounded-full border-t-blue-500 px-2.5 py-2.5',
          className,
        )}
      />
    </div>
  );
}
