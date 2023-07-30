import React, {useState} from "react";
import { Addon } from "AppTypes";
import AddonCard from "./AddonCard";
import "./Searchbar.css"
import segments from "../App"
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

  //const [busca, setBusca] = useState(""); 
  //const segmentsFiltro = segments.filter((segment) => segments.startsWith(busca));

  
  return (
    
    <section className="flex flex-col w-95 gap-4">
      <h2>{titleAddon}</h2>
      <p>
        De acordo com as suas escolhas nos passos seguintes, iremos
        disponibilizar um ambiente analítico específico para você. Nele você
        terá acesso a todos os recursos da plataforma BIMachine e ter uma
        experiência data driven.
      </p>


      
      //<input value={busca} onChange={(ev) => setBusca(ev.target.value)} className="searchbar" type="text" placeholder="Desenrola bate..." /> 
      

      <div className="h-72 overflow-auto">
        {addons.map((addon) => (
          <AddonCard
            addon={addon}
            selectedAddons={selectedAddons}
            updateAddons={updateAddons}
            key={addon.name}
          />
        ))}
      </div>
    </section>
  );
};
