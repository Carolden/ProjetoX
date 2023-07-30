import { useState, useEffect } from "react";
import { UserServiceConfiguration } from "AppTypes";
import Icon from "./Icon";

interface ThankYouProps {
  userInfo: UserServiceConfiguration;
}

export const ThankYou = ({ userInfo }: ThankYouProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sendPostData = async () => {
      setIsLoading(true);

      const interests = userInfo.interests
        .map((interest) => interest.name)
        .join(", ");
      const segments = userInfo.segments
        .map((segment) => segment.name)
        .join(", ");
      const connectors = userInfo.connectors
        .map((connector) => connector.name)
        .join(", ");

      try {
        const response = await fetch(
          "https://register.bimachine.com/newproject",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tk: "r]PbY3>{ry!R8^jadJ}Bk]4jQRlS[B38Ss[NA6CYw$(K)vSy)",
              name: userInfo.userInfo.name,
              mail: userInfo.userInfo.email,
              phone_number: userInfo.userInfo.phone,
              origin: "PROJECTX",
              suborigin: "time-tres",
              area: interests,
              segment: segments,
              integrations: connectors,
            }),
            referrer: "about:client",
            referrerPolicy: "origin-when-cross-origin",
          },
        );

        if (response.ok) {
          console.log("Dados enviados com sucesso!");

          const data = await response.json();
          const accessBiUrl = data.access_bi;

          if (accessBiUrl) {
            window.location.href = accessBiUrl;
          }
        } else {
          console.log("Erro ao enviar dados");
        }
      } catch (error) {
        console.log("Erro ao enviar dados:", error);
      }

      setIsLoading(false);
    };

    sendPostData();
  }, [
    userInfo.userInfo.name,
    userInfo.userInfo.email,
    userInfo.userInfo.phone,
  ]);

  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 py-[36px]">
      <h2>Estamos criando sua conta...</h2>
      <span className="text-center">
        <p>
          Quase lá! Finalizando os ajustes finais antes de disponibilizar sua
          nova conta...
        </p>
        {isLoading ? (
          <Icon
            name={"Loader2"}
            color="#2563eb"
            className="animate-spin"
            size={42}
          />
        ) : (
          <p>Dados enviados com sucesso!</p>
        )}
      </span>
    </section>
  );
};
