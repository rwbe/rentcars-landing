import { LocationSelection } from ".";
import DateSelection from "./ChooseDate";
import HoursSelection from "./SelectTime";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Contêiner flexível para os elementos */}
          <div className="flex items-center justify-between gap-x-4">
            {/* Localização */}
            <div className="w-full sm:w-auto">
              <LocationSelection />
            </div>
            {/* Data */}
            <div className="w-full sm:w-auto">
              <DateSelection />
            </div>
            {/* Horário */}
            <div className="w-full sm:w-auto">
              <HoursSelection />
            </div>
          </div>
          {/* Botão de busca */}
          <div className="flex justify-center">
            <button className="btn btn-sm bg-[#1572D3]" style={{ width: "100px" }}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
