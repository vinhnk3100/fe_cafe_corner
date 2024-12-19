import { Button } from "@/components/ui/button";
import { dataCafeCategory } from "@/constants/Mockdata.constants";

const CafeCategory = () => {
  if (dataCafeCategory) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full mx-auto gap-4 px-4">
        {dataCafeCategory.map((item, index) => (
          <Button
            key={index}
            className="group w-full text-lg lg:text-xl bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-full border-2 border-gray-700 p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:from-yellow-500 hover:to-yellow-600"
          >
            <span className="">{item.cafeCategoryName}</span>
          </Button>
        ))}
      </div>
    );
  } else return <></>;
};

export default CafeCategory;
