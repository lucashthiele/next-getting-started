import Link from "next/link";

export default function Button() {
  return (
    <Link href={"/settings"}>
      <button>Settings</button>
    </Link>
  );
}
