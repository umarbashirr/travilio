"use client";

import { SITE_INFO, SITE_ROUTES } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import BoxedContainer from "./boxed-container";
import { FaLocationPin } from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 md:py-20 bg-primary text-white">
        <BoxedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div className="w-full lg:max-w-[70%]">
            <Link href="/" className="inline-block">
              <Image
                src={SITE_INFO.white_logo}
                alt={SITE_INFO.site_name + " logo"}
                width={120}
                height={60}
                priority
              />
            </Link>
            <p className="mt-3 text-sm leading-loose">
              {SITE_INFO?.about_us_short}
            </p>
            <ul className="mt-4 flex items-center gap-4 text-sm">
              <li className="flex items-center gap-2">
                <Link
                  className="tracking-wide"
                  href={SITE_INFO?.social_media?.facebook}
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="phone-icon"
                    width={28}
                    height={28}
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
                    width={28}
                    height={28}
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
                    width={28}
                    height={28}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Reach Out to Us</h3>
            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex gap-2">
                <FaEnvelope className="w-4 h-4 mt-1" />
                <Link
                  className="tracking-wide"
                  href={`mailto:${SITE_INFO?.contact_email}`}
                >
                  {SITE_INFO?.contact_email}
                </Link>
              </li>
              <li className="flex gap-2">
                <FaPhone className="w-4 h-4 mt-1" />
                <Link
                  className="tracking-wide"
                  href={`tel:${SITE_INFO?.contact_phone}`}
                >
                  {SITE_INFO?.contact_phone}
                </Link>
              </li>
              <li className="flex gap-2">
                <FaLocationPin className="w-4 h-4 mt-1" />
                <address>
                  {SITE_INFO?.address.line1}, {SITE_INFO?.address.line2}
                  <br />
                  {SITE_INFO?.address.city}, {SITE_INFO?.address.state}{" "}
                  {SITE_INFO?.address.zip}
                  <br />
                  {SITE_INFO?.address.country}
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-8 flex flex-col gap-4">
              {SITE_ROUTES.slice(0, 4).map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="tracking-wide">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Other Links</h3>
            <ul className="mt-8 flex flex-col gap-4">
              {SITE_ROUTES.slice(4).map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="tracking-wide">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BoxedContainer>
      </div>
      <div className="flex items-center justify-center bg-[#111] text-white p-4">
        <p>
          Copyrighted &copy; {new Date().getFullYear()}. Powered by{" "}
          <Link href="https://www.umarbashir.com" target="_blank">
            Umar Bashir Rather
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
