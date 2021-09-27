import Week, { Weekday } from "./Week";
import compareAsc from "date-fns/compareAsc";
import getISODay from "date-fns/getISODay";
import isThisISOWeek from "date-fns/isThisISOWeek";

interface Observation {
    date: Date;
}

interface Archive<T extends Observation> {
    day: number;
    data: T[];
}

const compareObservations = (a: Observation, b: Observation) =>
    compareAsc(a.date, b.date);

class Repository<T extends Observation> {
    #data = new Map<string, Archive<T>>();

    public constructor(
        private readonly fetch: (start: Date, end: Date) => Promise<T[]>) {
    }

    private async get(week: Week): Promise<T[]> {
        const key = week.toString();

        if (this.#data.has(key)) {
            const { day, data } = this.#data.get(key) as Archive<T>;

            if (day < Weekday.Sunday) {
                data.concat(await this.fetch(week.day(day + 1), week.end));
                this.#data.set(key, { day, data });
            }

            return data;
        }

        const data = await this.fetch(week.start, week.end).then(data => data.sort(compareObservations));

        if (data.length > 0) {
            const { date: last } = data[data.length - 1];
            const day = isThisISOWeek(last) ? getISODay(last) : Weekday.Sunday;
            this.#data.set(key, { day, data });
        }

        return data;
    }

    public query(start: Date, end: Date): Promise<T[]> {
        const requests = Array.from(Week.with(start, end)).map(week => this.get(week));

        return Promise.all(requests).then(results => results.flat()
            .filter(record => record.date >= start && record.date <= end));
    }
}

export default Repository;
