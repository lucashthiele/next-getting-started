"use client";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  redirectTo?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  className,
  redirectTo,
  children,
  onClick,
}: ButtonProps) {
  return (
    <Link href={redirectTo ? redirectTo : ""}>
      <button
        type="button"
        className={`${className} rounded-full p-4 px-12 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-150 ease-linear`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}
