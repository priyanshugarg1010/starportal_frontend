import { cn } from "../utils/util";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-2xl bg-black",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
