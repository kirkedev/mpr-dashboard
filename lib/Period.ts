import { subMonths, subYears } from "date-fns";
import type { Optional, UnaryOperator } from ".";

type Description = "1M" | "3M" | "6M" | "1Y";

class Period {
    public constructor(
        public readonly description: Description,
        public readonly from: UnaryOperator<Optional<Date>, Date>) {
    }

    public get start(): Date {
        return this.from(new Date());
    }

    public equals = (other: Period): boolean =>
        this.description === other.description;
}

namespace Period {
    export const OneMonth = new Period("1M", (date = new Date()) =>
        subMonths(date, 1));

    export const ThreeMonths = new Period("3M", (date = new Date()) =>
        subMonths(date, 3));

    export const SixMonths = new Period("6M", (date = new Date()) =>
        subMonths(date, 6));

    export const OneYear = new Period("1Y", (date = new Date()) =>
        subYears(date, 1));

    export function from(description: string): Period {
        switch (description) {
            case "1M":
                return OneMonth;
            case "3M":
                return ThreeMonths;
            case "6M":
                return SixMonths;
            case "1Y":
                return OneYear;
            default:
                throw new Error(`Invalid Period description: ${description}`);
        }
    }
}

const Periods = [Period.OneMonth, Period.ThreeMonths, Period.SixMonths, Period.OneYear] as const;

export default Period;

export { Periods };
