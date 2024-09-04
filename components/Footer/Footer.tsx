import { Footer as FooterF } from "flowbite-react";

export const Footer = () => {
  return (
    <FooterF
      container
      className="bg-white shadow bg-slate-600 min-h-24 rounded-none"
    >
      <FooterF.Copyright
        year={new Date().getFullYear()}
        by="Made by Mykola Maik"
        className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white"
      ></FooterF.Copyright>
    </FooterF>
  );
};
