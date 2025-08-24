type MaxWidthContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerProps) {
  return (
    <div
      className={`w-full max-w-[600px] mx-auto bg-[#0A0A11] shadow-2xl pt-10 ${className}`}
    >
      {children}
    </div>
  );
}
