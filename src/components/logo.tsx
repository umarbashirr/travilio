"use client";

import { SITE_INFO } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={SITE_INFO.logo}
        alt={SITE_INFO.site_name + " logo"}
        width={120}
        height={60}
        priority
      />
    </Link>
  );
};

export default Logo;
