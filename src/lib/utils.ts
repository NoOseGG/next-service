export function cn(value: string, className: string | undefined): string {
  return className ? `${value} ${className}` : value;
}
