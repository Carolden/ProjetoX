import { useState } from "react";
import { Addon, UserInfo, UserServiceConfiguration } from "AppTypes";
import { Button } from "./components/Button";
import { Sidebar } from "./components/Sidebar";
import { PersonalInfo } from "./components/PersonalInfo";
import { Addons } from "./components/Addons";
import { ThankYou } from "./components/ThankYou";

const segments: Addon[] = [
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

const interests: Addon[] = [
  {
    name: "Comercial",
    icon: "Briefcase",
  },
  {
    name: "Compras",
    icon: "LayoutPanelLeft",
  },
  {
    name: "Estoque",
    icon: "Layers",
  },
  {
    name: "Contabil",
    icon: "Percent",
  },
  {
    name: "Financeiro",
    icon: "Landmark",
  },
  {
    name: "Trade",
    icon: "CandlestickChart",
  },
  {
    name: "Produção",
    icon: "Box",
  },
  {
    name: "Fluxo de caixa",
    icon: "Wallet",
  },
  {
    name: "Recursos Humanos",
    icon: "Users",
  },
  {
    name: "CRM",
    icon: "Filter",
  },
  {
    name: "Tele-vendas",
    icon: "PhoneCall",
  },
  {
    name: "Potencial de mercado",
    icon: "LineChart",
  },
  {
    name: "Pré-vendas",
    icon: "BadgePercent",
  },
  {
    name: "Social media",
    icon: "PlaySquare",
  },
  {
    name: "Gestão de equipe",
    icon: "FolderKanban",
  },
  {
    name: "Outra",
    icon: "Inbox",
  },
];

const connectors: Addon[] = [
  {
    name: "Elastic",
    icon: "Cable",
  },
  {
    name: "UMovMe",
    icon: "Cable",
  },
  {
    name: "Data Warehouse",
    icon: "Cable",
  },
  {
    name: "CSV",
    icon: "Cable",
  },
  {
    name: "FTP",
    icon: "Cable",
  },
  {
    name: "S3",
    icon: "Cable",
  },
  {
    name: "Google Sheets",
    icon: "Cable",
  },
  {
    name: "Json",
    icon: "Cable",
  },
  {
    name: "Xml",
    icon: "Cable",
  },
  {
    name: "GitHub",
    icon: "Cable",
  },
  {
    name: "Api4Com (Business)",
    icon: "Cable",
  },
  {
    name: "Machine Learning Predict",
    icon: "Cable",
  },
  {
    name: "Machine Learning EAD",
    icon: "Cable",
  },
  {
    name: "Acelerato",
    icon: "Cable",
  },
  {
    name: "Agendor",
    icon: "Cable",
  },
  {
    name: "AnyMarket",
    icon: "Cable",
  },
  {
    name: "Api4Com",
    icon: "Cable",
  },
  {
    name: "Asana",
    icon: "Cable",
  },
  {
    name: "CRM&Bônus",
    icon: "Cable",
  },
  {
    name: "Câmbio",
    icon: "Cable",
  },
  {
    name: "Basis DSP",
    icon: "Cable",
  },
  {
    name: "Expectativa Econômica",
    icon: "Cable",
  },
  {
    name: "ERP24",
    icon: "Cable",
  },
  {
    name: "Evove ERP",
    icon: "Cable",
  },
  {
    name: "Exact Spotter V1",
    icon: "Cable",
  },
  {
    name: "Exact Spotter V2",
    icon: "Cable",
  },
  {
    name: "Inadimplência",
    icon: "Cable",
  },
  {
    name: "Google Ads",
    icon: "Cable",
  },
  {
    name: "Google Analytics 4 (GA4)",
    icon: "Cable",
  },
  {
    name: "Granatum",
    icon: "Cable",
  },
  {
    name: "Censo IBGE",
    icon: "Cable",
  },
  {
    name: "Inflação",
    icon: "Cable",
  },
  {
    name: "Linx Microvix",
    icon: "Cable",
  },
  {
    name: "Expectativas do Mercado",
    icon: "Cable",
  },
  {
    name: "Meta Ads",
    icon: "Cable",
  },
  {
    name: "Microsoft Excel",
    icon: "Cable",
  },
  {
    name: "Movidesk",
    icon: "Cable",
  },
  {
    name: "Contabilidade Nacional",
    icon: "Cable",
  },
  {
    name: "Produção Nacional",
    icon: "Cable",
  },
  {
    name: "Nectar CRM",
    icon: "Cable",
  },
  {
    name: "OData",
    icon: "Cable",
  },
  {
    name: "Omie",
    icon: "Cable",
  },
  {
    name: "Instagram",
    icon: "Cable",
  },
  {
    name: "MongoDB",
    icon: "Cable",
  },
  {
    name: "Bitrix24 CRM",
    icon: "Cable",
  },
  {
    name: "Ploomes",
    icon: "Cable",
  },
  {
    name: "Linkedin",
    icon: "Cable",
  },
  {
    name: "VTEX",
    icon: "Cable",
  },
  {
    name: "YouTube",
    icon: "Cable",
  },
  {
    name: "Outro",
    icon: "Inbox",
  },
];

function App() {
  const [step, setStep] = useState(1);
  const [showRequired, setShowRequiredFields] = useState(false);

  const [userServiceConfiguration, setUserServiceConfiguration] =
    useState<UserServiceConfiguration>({
      userInfo: {
        name: "",
        email: "",
        phone: "",
        company: "",
        office: "Analista",
      },
      segments: [],
      interests: [],
      connectors: [],
    });

  const updateUserInfo = (userInfo: UserInfo) => {
    setUserServiceConfiguration({ ...userServiceConfiguration, userInfo });
  };

  const updateSegments = (segment: Addon) => {
    const segments = userServiceConfiguration.segments;
    const index = segments.findIndex(
      (currentAddon) => currentAddon.name === segment.name,
    );
    if (index === -1) {
      setUserServiceConfiguration({
        ...userServiceConfiguration,
        segments: [...segments, segment],
      });
    } else {
      segments.splice(index, 1);
      setUserServiceConfiguration({
        ...userServiceConfiguration,
        segments: [...segments],
      });
    }
  };

  const updateInterests = (interest: Addon) => {
    const interests = userServiceConfiguration.interests;
    const index = interests.findIndex(
      (currentAddon) => currentAddon.name === interest.name,
    );
    if (index === -1) {
      setUserServiceConfiguration({
        ...userServiceConfiguration,
        interests: [...interests, interest],
      });
    } else {
      interests.splice(index, 1);
      setUserServiceConfiguration({
        ...userServiceConfiguration,
        interests: [...interests],
      });
    }
  };

  const updateConnectors = (connector: Addon) => {
    const connectors = userServiceConfiguration.connectors;
    const index = connectors.findIndex(
      (currentAddon) => currentAddon.name === connector.name,
    );
    if (index === -1) {
      setUserServiceConfiguration({
        ...userServiceConfiguration,
        connectors: [...connectors, connector],
      });
    } else {
      connectors.splice(index, 1);
      setUserServiceConfiguration({
        ...userServiceConfiguration,
        connectors: [...connectors],
      });
    }
  };

  const nextStep = (onGoingStep?: number) => {
    if (step === 5) return;
    if (step === 1 || (onGoingStep && onGoingStep !== 1 && step === 1)) {
      if (
        !userServiceConfiguration.userInfo.name ||
        !userServiceConfiguration.userInfo.email ||
        !userServiceConfiguration.userInfo.email.includes("@") ||
        !userServiceConfiguration.userInfo.phone ||
        !userServiceConfiguration.userInfo.company ||
        !userServiceConfiguration.userInfo.office
      ) {
        setShowRequiredFields(true);
        return;
      }
    }
    setStep((step) => {
      if (onGoingStep) return onGoingStep;
      return step + 1;
    });
  };

  const goBack = () => {
    if (step === 1) return;
    setStep((step) => step - 1);
  };

  return (
    <main className="h-screen flex flex-col text-neutral-cool-gray w-full lg:mx-auto lg:max-w-[58.75rem] lg:mt-20 lg:flex-row grow lg:p-4 lg:rounded-lg lg:bg-white lg:h-[37.75rem] lg:shadow">
      <Sidebar currentStep={step} handleNextStep={nextStep} />
      <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
        <form className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] flex w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
          {step === 1 && (
            <PersonalInfo
              userInfo={userServiceConfiguration.userInfo}
              updateUserInfo={updateUserInfo}
              showRequired={showRequired}
            />
          )}
          {step === 2 && (
            <Addons
              selectedAddons={userServiceConfiguration.segments}
              updateAddons={updateSegments}
              addons={segments}
              titleAddon={"Selecione o seu segmento"}
            />
          )}
          {step === 3 && (
            <Addons
              selectedAddons={userServiceConfiguration.interests}
              updateAddons={updateInterests}
              addons={interests}
              titleAddon={"Selecione a sua área de interesse"}
            />
          )}
          {step === 4 && (
            <Addons
              selectedAddons={userServiceConfiguration.connectors}
              updateAddons={updateConnectors}
              addons={connectors}
              titleAddon={"Selecione os seus conectores de dados"}
            />
          )}
          {step === 5 && <ThankYou userInfo={userServiceConfiguration} />}
        </form>
        {step < 5 && (
          <menu className="flex justify-between p-4 mt-auto">
            <li>
              <Button type="ghost" onClick={goBack}>
                Voltar
              </Button>
            </li>
            <li>
              <Button
                onClick={() => nextStep()}
                type={step !== 4 ? "secondary" : "primary"}
              >
                {step !== 4 ? "Avançar" : "Criar ambiente"}
              </Button>
            </li>
          </menu>
        )}
      </div>
    </main>
  );
}

export default App;
