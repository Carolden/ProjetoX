import React from "react";
import { Card } from "./Card";
import clsx from "clsx";
import Icon from "./Icon";
import { Addon } from "AppTypes";

interface AddonCardProps {
  addon: Addon;
  selectedAddons: Addon[];
  updateAddons: (addon: Addon) => void;
}

const activeClasses = "border border-primary-purplish-blue bg-neutral-magnolia";

const AddonCard = ({ addon, selectedAddons, updateAddons }: AddonCardProps) => {
  return (
    <Card
      className={clsx(
        `my-2 p-4 flex gap-4 transition-all relative w-full hover:border-primary-purplish-blue hover:bg-neutral-magnolia cursor-pointer`,
        selectedAddons.includes(addon)
          ? activeClasses
          : "border border-neutral-light-gray",
      )}
      onClick={() => updateAddons(addon)}
      key={addon.name}
    >
      <input
        type="checkbox"
        checked={selectedAddons.includes(addon)}
        className="w-5 h-5 aspect-square rounded-sm self-center checked:accent-primary-purplish-blue "
        onChange={() => updateAddons(addon)}
      />
      <Icon name={addon.icon} color="#2563eb" />
      <div>
        <h3>{addon.name}</h3>
      </div>
    </Card>
  );
};

export default AddonCard;
