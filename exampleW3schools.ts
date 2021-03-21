import getClient from "./getClient";
import { ITempConvertSoap12Soap } from "./wsdl/TempConvert/TempConvertSoap12";


async function exampleW3schools() {
  const client = await getClient<ITempConvertSoap12Soap>(
    {
      host: "www.w3schools.com",
      path: "/xml/tempconvert.asmx",
      wsdl: "/xml/tempconvert.asmx?WSDL",
      rejectUnauthorized: false,
    },
    {
      secure: true,
    },
    "https://www.w3schools.com/xml/"
  );

  client.CelsiusToFahrenheit({ Celsius: "0" }, (err, result, raw, headers) => {
    console.log(result);
  });
}

exampleW3schools();
