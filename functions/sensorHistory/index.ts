import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import * as moment from 'moment';
import {paderborn} from './sampleData';

const httpTrigger: AzureFunction = async function trig(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    /* See: https://docs.microsoft.com/en-us/azure/azure-functions/
        functions-bindings-http-webhook?tabs=javascript#customize-the-http-endpoint*/

    const id = context.bindingData.sensorId;

    let from = !!context.req.query.from ? moment(context.req.query.from, 'DD.MM.YYYY HH:mm') : null;
    const to = !!context.req.query.to ? moment(context.req.query.to, 'DD.MM.YYYY HH:mm') : null;

    if (!from && !to) {
        const since = context.req.query.since;
        from = moment().subtract(since, 'hours');
    }

    console.log('Fetching data between' , from, 'and', to);

    const values: any = [];
    let timeAttr: string;

    paderborn.forEach(v => {

        // Hack: Sample data contains the date in an attribute which is NOT static. Use the "one" attr containing text "time"
        if (!timeAttr) {
            Object.keys(v).forEach(attrName => {
                if (attrName.indexOf('time') > 0) {
                    timeAttr = attrName;
                }
            });
        }
        const timeWrapped = v[timeAttr];
        const timeAsText = timeWrapped[Object.keys(timeWrapped)[0]];
        const time = moment(timeAsText, 'DD.MM.YYYY HH:mm');
        if ((!from || time >= from) && (!to || to >= time)) {
            let value;
            switch (id) {
                case 1:
                    value = v.T;
                    break;
                case 2:
                    value = v.U;
                    break;
                case 3:
                    console.log();
                    value = v.P0 / 750.06156130264;
                    break;

            }
            if (value) {
                    values.push(
                        {
                            date: time,
                            value
                        }
                    );
            }
        }
    });
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(
            {
                unitOfMeasure: (id < 3 ? '°C' : 'mbar'),
                values
        }
        )
    };
};

export default httpTrigger;
