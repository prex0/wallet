import { cn, color } from "@prex0/uikit/styles";

export function CardContainer({children}: {children: React.ReactNode}) {
  return <div className="flex flex-col gap-4">
    {children}
  </div>
}

export function CardTitle({children, className}: {className?: string, children: React.ReactNode}) {
  return <div className={cn("text-lg font-bold", className)}>
    {children}
  </div>
}

export function CardContent({children}: {children: React.ReactNode}) {
  return <div className="flex flex-col gap-4">
    {children}
  </div>
}

export function CardContentItem({children}: {children: React.ReactNode}) {
  return <div className="flex flex-col gap-2">
    {children}
  </div>
}

export function CardContentLabel({children}: {children: React.ReactNode}) {
  return <div className={cn(color.foregroundMuted, 'text-sm')}>
    {children}
  </div>
}

export function CardContentValue({children}: {children: React.ReactNode}) {
  return <div className={cn(color.foreground, 'text-base')}>
    {children}
  </div>
}

export function CardFooter({children}: {children: React.ReactNode}) {
  return <div className="flex flex-row justify-end gap-4">
    {children}
  </div>
}