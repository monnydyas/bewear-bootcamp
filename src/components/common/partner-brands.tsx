import Image from "next/image";

interface PartnerBrandsProps {
  brandIcon: string;
  name: string;
}

const PartnerBrands = ({ brandIcon, name }: PartnerBrandsProps) => {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2 px-1">
      <div className="flex h-17 items-center justify-center">
        <Image src={brandIcon} alt={name} width={100} height={100} />
      </div>
      <p className="text-sm font-medium whitespace-nowrap">{name}</p>
    </div>
  );
};

export default PartnerBrands;
