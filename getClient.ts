import EasySoap from "easysoap";

interface Params {
  host: string;
  path: string;
  wsdl: string;
  rejectUnauthorized: boolean;
}

interface Opts {
  secure: boolean;
}

const callMethod = (
  soapClient: any,
  methodName: string,
  params: any,
  xmlns: string,
  cb: any
) => {
  soapClient
    .call({
      method: methodName,
      attributes: {
        xmlns: xmlns,
      },
      params: params,
    })
    .then((callResponse) => {
      cb(
        null,
        callResponse.data,
        callResponse.response.body,
        callResponse.response.header
      );
    })
    .catch((err) => {
      cb(err, null, null, null);
    });
};

async function getClient<T>(
  params: Params,
  opts: Opts,
  xmlns: string
): Promise<T> {
  return new Promise((resolve, reject) => {
    const soapClient = EasySoap(params, opts);

    soapClient
      .getAllFunctions()
      .then((functionArray) => {
        const client = {};
        for (var key in functionArray) {
          const methodName = functionArray[key];
          client[methodName] = (params, cb) => {
            callMethod(soapClient, methodName, params, xmlns, cb);
          };
        }
        resolve(client as T);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default getClient;
