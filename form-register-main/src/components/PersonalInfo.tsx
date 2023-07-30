import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { UserInfo } from "AppTypes";
import { Select } from "./Select";

interface PersonalInfoProps {
  userInfo: UserInfo;
  updateUserInfo: (userInfo: UserInfo) => void;
  showRequired: boolean;
}

export const PersonalInfo = ({
  userInfo,
  updateUserInfo,
  showRequired,
}: PersonalInfoProps) => {
  const handlePersonalInfo = (
    event: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>,
    key: keyof UserInfo,
  ) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo[key] = event.currentTarget.value;
    updateUserInfo(updatedUserInfo);
  };

  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
    setSelectedOption(e.currentTarget.value);
    handlePersonalInfo(e, "office");
  };

  const options = [
    { value: "Analista", label: "Analista" },
    { value: "Sócio CEO", label: "Sócio CEO" },
    { value: "Executivo", label: "Executivo" },
    { value: "Diretor", label: "Diretor" },
  ];

  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>Teste grátis BIMachine</h2>
      <p>Crie sua conta de maneira 100% gratuita</p>

      <Input
        label="Nome completo"
        placeholder="John Doe"
        showRequired={showRequired && !userInfo.name}
        value={userInfo.name}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          handlePersonalInfo(e, "name")
        }
      />

      <Input
        label="Email corporativo"
        type="email"
        placeholder="@bimachine.com.br"
        showRequired={
          showRequired && (!userInfo.email || !userInfo.email.includes("@"))
        }
        value={userInfo.email}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          handlePersonalInfo(e, "email")
        }
      />

      <Input
        label="Celular"
        placeholder="(+55) 11 98765-4321"
        showRequired={showRequired && !userInfo.phone}
        value={userInfo.phone}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          handlePersonalInfo(e, "phone")
        }
      />

      <Input
        label="Empresa"
        placeholder="Bimachine Solutions"
        showRequired={showRequired && !userInfo.company}
        value={userInfo.company}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          handlePersonalInfo(e, "company")
        }
      />

      <Select
        label="Cargo"
        value={selectedOption}
        options={options}
        onChange={handleSelectChange}
        showRequired={false}
        required={false}
      />
    </section>
  );
};
