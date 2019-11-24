import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function myfun(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify([
            {id: 1, name: 'Temperature S1', type: 'temperature'},
            {id: 2, name: 'Temperature S2', type: 'temperature'},
            {id: 3, name: 'Pressure S1', type: 'pressure'}
            ])
    };
};

export default httpTrigger;
