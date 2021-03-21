# SOAP integration with TypeScript NODEJS

This project showcases how could SOAP services can be integrated into UserOffice

## Installation

```bash
git clone https://github.com/jekabs-karklins/soap-integration-example.git
cd soap-integration-example
npm install
```

## Usage

For sample #1

```bash
npm run w3schools
```
It will generate interfaces and execute the script (see exampleW3schools.ts)
You should see the output like 
```bash
{
  CelsiusToFahrenheitResponse: {
    xmlns: 'https://www.w3schools.com/xml/',
    CelsiusToFahrenheitResult: '32'
  }
}
```

For for sample #2

```bash
npm run dneonline
```
It will generate interfaces and execute the script (see exampleDneonline.ts)
You should see an output like 
```bash
{ AddResponse: { xmlns: 'http://tempuri.org/', AddResult: '9' } }
```
## License

[BSD](https://choosealicense.com/licenses/bsd/)
