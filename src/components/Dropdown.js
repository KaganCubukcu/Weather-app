import React, { useEffect } from "react";
import Select from "react-select";

import { MainContext, useContext } from "./context";
const cities = [
  { value: "Adana", label: "Adana" },
  { value: "Adıyaman", label: "Adıyaman" },
  { value: "Afyonkarahisar", label: "Afyonkarahisar" },
  { value: "Ağrı", label: "Ağrı" },
  { value: "Amasya", label: "Amasya" },
  { value: "Ankara", label: "Ankara" },
  { value: "Antalya", label: "Antalya" },
  { value: "Artvin", label: "Artvin" },
  { value: "Aydin", label: "Aydın" },
  { value: "Balıkesir", label: "Balıkesir" },
  { value: "Bilecik", label: "Bilecik" },
  { value: "Bingöl", label: "Bingöl" },
  { value: "Bitlis", label: "Bitlis" },
  { value: "Bolu", label: "Bolu" },
  { value: "Burdur", label: "Burdur" },
  { value: "Bursa", label: "Bursa" },
  { value: "Çanakkale", label: "Çanakkale" },
  { value: "Çankırı", label: "Çankırı" },
  { value: "Çorum", label: "Çorum" },
  { value: "Denizli", label: "Denizli" },
  { value: "Diyarbakir", label: "Diyarbakır" },
  { value: "Edirne", label: "Edirne" },
  { value: "Elazığ", label: "Elazığ" },
  { value: "Erzincan", label: "Erzincan" },
  { value: "Erzurum", label: "Erzurum" },
  { value: "Eskisehir", label: "Eskişehir" },
  { value: "Gaziantep", label: "Gaziantep" },
  { value: "Giresun", label: "Giresun" },
  { value: "Gümüşhane", label: "Gümüşhane" },
  { value: "Hakkari", label: "Hakkari" },
  { value: "Hatay", label: "Hatay" },
  { value: "Isparta", label: "Isparta" },
  { value: "Mersin", label: "Mersin" },
  { value: "İstanbul", label: "istanbul" },
  { value: "İzmir", label: "İzmir" },
  { value: "Kars", label: "Kars" },
  { value: "Kastamonu", label: "Kastamonu" },
  { value: "Kayseri", label: "Kayseri" },
  { value: "Kırklareli", label: "Kırklareli" },
  { value: "Kırşehir", label: "Kırşehir" },
  { value: "Kocaeli", label: "Kocaeli" },
  { value: "Konya", label: "Konya" },
  { value: "Kütahya", label: "Kütahya" },
  { value: "Malatya", label: "Malatya" },
  { value: "Manisa", label: "Manisa" },
  { value: "Kahramanmaraş", label: "Kahramanmaraş" },
  { value: "Mardin", label: "Mardin" },
  { value: "Muğla", label: "Muğla" },
  { value: "Muş", label: "Muş" },
  { value: "Nevşehir", label: "Nevşehir" },
  { value: "Niğde", label: "Niğde" },
  { value: "Ordu", label: "Ordu" },
  { value: "Rize", label: "Rize" },
  { value: "Sakarya", label: "Sakarya" },
  { value: "Samsun", label: "Samsun" },
  { value: "Siirt", label: "Siirt" },
  { value: "Sinop", label: "Sinop" },
  { value: "Sivas", label: "Sivas" },
  { value: "Tekirdağ", label: "Tekirdağ" },
  { value: "Tokat", label: "Tokat" },
  { value: "Trabzon", label: "Trabzon" },
  { value: "Tunceli", label: "Tunceli" },
  { value: "Şanlıurfa", label: "Şanlıurfa" },
  { value: "Uşak", label: "Uşak" },
  { value: "Van", label: "Van" },
  { value: "Yozgat", label: "Yozgat" },
  { value: "Zonguldak", label: "Zonguldak" },
  { value: "Aksaray", label: "Aksaray" },
  { value: "Bayburt", label: "Bayburt" },
  { value: "Karaman", label: "Karaman" },
  { value: "Kırıkkale", label: "Kırıkkale" },
  { value: "Batman", label: "Batman" },
  { value: "Şırnak", label: "Şırnak" },
  { value: "Bartın", label: "Bartın" },
  { value: "Ardahan", label: "Ardahan" },
  { value: "Iğdır", label: "Iğdır" },
  { value: "Yalova", label: "Yalova" },
  { value: "Karabük", label: "Karabük" },
  { value: "Kilis", label: "Kilis" },
  { value: "Osmaniye", label: "Osmaniye" },
  { value: "Duzce", label: "Düzce" },
];

const Dropdown = () => {
  const { location, setLocation, searchLocation } = useContext(MainContext);

  const handleOnSelect = (item) => {
    const location = item.value;
    setLocation(location);
  };
  useEffect(() => {
    location && searchLocation(location);
  }, [location]);
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: "black",
      padding: 5,
    }),
    control: () => ({
      width: 300,
      display: "flex",
    }),
    input: () => ({
      color: "white",
    }),
    valueContainer: () => ({
      paddingLeft: 5,
      paddingTop: 15,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div>
      <Select
        filterOption={(option, query) =>
          String(option.data.label)
            .toLocaleLowerCase("tr")
            .includes(query.toLocaleLowerCase("tr"))
        }
        styles={customStyles}
        value={location}
        options={cities}
        onChange={handleOnSelect}
        placeholder={"Şehir seçin veya aratın"}
      />
    </div>
  );
};

export default Dropdown;
