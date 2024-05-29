"use client";

import Image from "next/image";
import BoxedContainer from "./boxed-container";
import { SITE_INFO } from "@/utils/data";
import Link from "next/link";
import { formatPhoneNumber } from "@/helpers/formatPhoneNumber";

const Topbar = () => {
  return (
    <div className="py-3 bg-[#222] text-white flex items-center justify-start w-full h-full">
      <BoxedContainer className="flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="flex items-center gap-4 text-sm">
          <li className="flex items-center gap-2">
            <Image
              src="/icons/phone.svg"
              alt="phone-icon"
              width={18}
              height={18}
            />
            <Link
              className="tracking-wide"
              href={`tel:${formatPhoneNumber(SITE_INFO?.contact_phone)}`}
            >
              {SITE_INFO?.contact_phone}
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/icons/envelope.svg"
              alt="email-icon"
              width={18}
              height={18}
            />
            <Link
              className="tracking-wide"
              href={`mailto:${SITE_INFO?.contact_email}`}
            >
              {SITE_INFO?.contact_email}
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4 text-sm">
          <li className="flex items-center gap-2">
            <Link
              className="tracking-wide"
              href={SITE_INFO?.social_media?.facebook}
            >
              <Image
                src="/icons/facebook.svg"
                alt="phone-icon"
                width={18}
                height={18}
              />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link
              className="tracking-wide"
              href={SITE_INFO?.social_media?.instagram}
            >
              <Image
                src="/icons/instagram.svg"
                alt="email-icon"
                width={18}
                height={18}
              />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link
              className="tracking-wide"
              href={SITE_INFO?.social_media?.whatsApp}
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="email-icon"
                width={18}
                height={18}
              />
            </Link>
          </li>
        </ul>
      </BoxedContainer>
    </div>
  );
};

export default Topbar;
