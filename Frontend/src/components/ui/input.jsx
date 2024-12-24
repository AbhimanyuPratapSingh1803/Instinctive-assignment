import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <div className="flex dark:bg-[#0D1117] items-center gap-3 h-full w-full bg-white dark:outline-black rounded-xl border outline-none ring-0 dark:text-white bg-transparent text-base shadow-sm transition-colors">
            <IoIosSearch className="ml-3 sm:ml-5 dark:text-white" />
            <input
                type={type}
                placeholder="Search your course"
                className={cn(
                    "w-full file:border-0 h-full rounded-xl dark:bg-[#0D1117] dark:font-light dark:text-white file:bg-transparent file:text-sm text-sm sm:text-base file:font-medium file:text-neutral-950 placeholder:text-neutral-600 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
                    className
                )}
                ref={ref}
                {...props}
            />
        </div>
    );
});
Input.displayName = "Search your course";

export { Input };
