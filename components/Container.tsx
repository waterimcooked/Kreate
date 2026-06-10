export default function Container({ children, className = "" }: { children: React.ReactNode, className?:string }) {
  return (
    <div className={`max-w-7xl h-full mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}