import React, { useState } from "react";
import { Addon } from "AppTypes";
import AddonCard from "./AddonCard";
import "./Searchbar.css";
import segments from "../App";
import interests from "../App";

interface AddonsProps {
  selectedAddons: Addon[];
  updateAddons: (addon: Addon) => void;
  addons: Addon[];
  titleAddon: string;
}

export const Addons = ({
  updateAddons,
  selectedAddons,
  addons,
  titleAddon,
}: AddonsProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const segmentsList: Addon[] = [
    {
      name: "Industria",
      icon: "Factory",
    },
    {
      name: "Distribuidora",
      icon: "Truck",
    },
    {
      name: "Varejo",
      icon: "ShoppingBasket",
    },
    {
      name: "Logistica",
      icon: "Lightbulb",
    },
    {
      name: "Saúde",
      icon: "Activity",
    },
    {
      name: "Agroindústria",
      icon: "Wheat",
    },
    {
      name: "Franquias",
      icon: "Copy",
    },
    {
      name: "E-commerce",
      icon: "ShoppingCart",
    },
    {
      name: "Construção",
      icon: "Hammer",
    },
    {
      name: "Marketing",
      icon: "TrendingUp",
    },
    {
      name: "Outro",
      icon: "Inbox",
    },
  ];

  const filteredSegments = segmentsList.filter((segment) =>
    segment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="flex flex-col w-95 gap-4">
      <h2>{titleAddon}</h2>
      <p>
        De acordo com as suas escolhas nos passos seguintes, iremos
        disponibilizar um ambiente analítico específico para você. Nele você
        terá acesso a todos os recursos da plataforma BIMachine e ter uma
        experiência data driven.
      </p>

      <input
        className="searchbar"
        type="text"
        placeholder="Pesquisar segmento..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="h-72 overflow-auto">
        {filteredSegments.map((segment) => (
          <AddonCard
            addon={segment}
            selectedAddons={selectedAddons}
            updateAddons={updateAddons}
            key={segment.name}
          />
        ))}
      </div>
    </section>
  );
};
