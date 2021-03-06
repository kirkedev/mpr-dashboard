import { getDate } from "..";
import type Observation from "../Observation";
import type { CutoutResponse } from "./response";

interface Cutout extends Observation {
    reportDate: Date;
    primalLoads: number;
    trimmingLoads: number;
    carcassPrice: number;
    bellyPrice: number;
    buttPrice: number;
    hamPrice: number;
    loinPrice: number;
    picnicPrice: number;
    ribPrice: number;
}

namespace Cutout {
    export const parse = (cutout: CutoutResponse): Cutout[] =>
        cutout.map(record => ({
            date: getDate(record.date),
            reportDate: getDate(record.reportDate),
            primalLoads: record.primalLoads,
            trimmingLoads: record.trimmingLoads,
            carcassPrice: record.carcassPrice,
            bellyPrice: record.bellyPrice,
            buttPrice: record.buttPrice,
            hamPrice: record.hamPrice,
            loinPrice: record.loinPrice,
            picnicPrice: record.picnicPrice,
            ribPrice: record.ribPrice
        }));
}

export default Cutout;
