import getClient from "./getClient";
import { ICalculatorSoap12Soap } from "./wsdl/Calculator/CalculatorSoap12";

async function exampleDneonline() {
  const client = await getClient<ICalculatorSoap12Soap>(
    {
      host: "www.dneonline.com",
      path: "/calculator.asmx",
      wsdl: "/calculator.asmx?WSDL",
      rejectUnauthorized: false,
    },
    {
      secure: false,
    },
    "http://tempuri.org/"
  );

  client.Add({ intA: 5, intB: 4 }, (err, result, raw, headers) => {
    console.log(result);
  });
}

exampleDneonline();
