import PartnerBrands from "./partner-brands";

const Brands = () => {
  return (
    <div className="w-full">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="mt-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-2 px-2 text-center whitespace-nowrap">
          <PartnerBrands brandIcon="/nike.png" name="Nike" />
          <PartnerBrands brandIcon="/adidas.png" name="Adidas" />
          <PartnerBrands brandIcon="/puma.png" name="Puma" />
          <PartnerBrands brandIcon="/new-balance.png" name="New Balance" />
          <PartnerBrands brandIcon="/converse.png" name="Converse" />
          <PartnerBrands brandIcon="/polo.png" name="Polo" />
          <PartnerBrands brandIcon="/zara.png" name="Zara" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
