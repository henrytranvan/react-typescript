import { FC, type PropsWithChildren } from "react";
interface iImage {
  src: string;
  alt: string;
}

type HeaderProps = PropsWithChildren<{ img: iImage }>;

const HeaderFC: FC<HeaderProps> = ({ img, children }) => {
  return (
    <>
      <header className="header">
        <img src={img.src} alt={img.alt} />
        {children}
      </header>
    </>
  );
};

export default HeaderFC;
