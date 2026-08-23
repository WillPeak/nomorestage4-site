import nomorestage4Logo from "@/assets/nomorestage4-logo.webp";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({
  width = 120,
  height = 120,
  className = "",
  showText = true,
}: LogoProps) {
  void showText;
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={nomorestage4Logo}
        alt="NoMoreStage4"
        width={width}
        height={height}
        className="object-contain w-full h-auto"
      />
    </div>
  );
}
