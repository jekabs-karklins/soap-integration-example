import getClient from "./getClient";
import { ITempConvertSoap12Soap } from "./wsdl/TempConvert/TempConvertSoap12";


async function exampleW3schools() {
  // initialize client
  const client = await getClient<ITempConvertSoap12Soap>( // ITempConvertSoap12Soap is generated interface
    {
      host: "www.w3schools.com",
      path: "/xml/tempconvert.asmx",
      wsdl: "/xml/tempconvert.asmx?WSDL",
      rejectUnauthorized: false,
    },
    {
      secure: true, // https or http
    },
    "https://www.w3schools.com/xml/" // namespace for action
  );

  // client with available SOAP methods
  client.CelsiusToFahrenheit({ Celsius: "0" }, (err, result, raw, headers) => {
    console.log(result); // NOTE: for some reason result.CelsiusToFahrenheitResult is undefined (bug with wsdl-to-ts, we'll fix it latter) 
  });
}

exampleW3schools();
