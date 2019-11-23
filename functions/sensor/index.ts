import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function trig(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    // See: https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook?tabs=javascript#customize-the-http-endpoint

    const id = context.bindingData.sensorId;
    console.log(req);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(
            {
                unitOfMeasure: (id < 3 ? '°C' : 'bar'),
                date: new Date(),
                value: Math.random() * 100
            }
        )
    };
};

export default httpTrigger;
