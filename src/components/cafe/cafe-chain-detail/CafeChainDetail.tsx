import { dataCafeChain1, dataCafeChain2 } from "@/constants/Mockdata.constants";
import Image from "next/image";

const CafeChainDetail = ({ chainId }: { chainId: string }) => {
  console.log(decodeURIComponent(chainId));
  const cafeChainList = [...dataCafeChain1, ...dataCafeChain2];
  const cafeChainData = cafeChainList.find((item) => {
    return item.cafeChainName
      .normalize("NFD") // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
      .toLowerCase()
      .replace(/\s+/g, "-")
      .includes(decodeURIComponent(chainId));
  });

  if (cafeChainData) {
    return (
      <div className="w-full container mx-auto py-4">
        <div className="flex flex-row items-start gap-6">
          <Image
            alt="cafe chain logo"
            src={cafeChainData?.cafeChainLogo}
            width={260}
            height={260}
            className="object-contain aspect-square bg-no-repeat bg-center bg-slate-600 p-4 rounded-md"
          />
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="w-full flex justify-center">Cafe List</div>
      </div>
    );
  } else <>Loading</>;
};

export default CafeChainDetail;
