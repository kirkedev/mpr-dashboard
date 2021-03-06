import type { JSXElement } from "solid-js";
import { createEffect, createMemo, createSignal, Index } from "solid-js";
import styles from "./Purchases.module.css";
import type Purchase from "lib/purchases";
import type { Data } from "../chart";
import LineChart from "../chart/LineChart";
import { formatNumber, getObservation } from "../App";
import { Arrangement } from "lib/PurchaseType";

interface Props {
    purchases: Purchase[];
    date: Date;
}

const series = (purchases: Purchase[]): Data[][] => [
    purchases.filter(record => record.arrangement === Arrangement.MarketFormula && !Number.isNaN(record.avgPrice))
        .map(record => ({ date: record.date, reportDate: record.reportDate, value: record.avgPrice }))
    // purchases.filter(record => record.arrangement === Arrangement.Negotiated && !Number.isNaN(record.avgPrice))
    //     .map(record => ({ date: record.date, value: record.avgPrice }))
];

const labels = ["Formula", "Negotiated"];

function Purchases(props: Props): JSXElement {
    const data = createMemo(() => series(props.purchases));
    const [date, setDate] = createSignal(props.date);
    const stats = createMemo<Data[]>(() => data().map(series => getObservation(series, date())));
    const end = createMemo<Date>(() => getObservation(data()[0], props.date).date);

    createEffect(() => setDate(end()));

    return <div class={styles.purchases} on:selectDate={({ detail: date }) => setDate(date)}>
        <div class={styles.stats}>
            <Index each={stats()}>
                { (stat, index) =>
                    <div class={styles.stat}>
                        <h5 class={styles.label}>
                            {labels[index]}
                        </h5>

                        <h3 class={styles.value}>
                            {formatNumber(stat().value)}
                        </h3>
                    </div>
                }
            </Index>
        </div>

        <LineChart
            width={640}
            height={360}
            right={32}
            bottom={48}
            left={32}
            top={32}
            data={data()}
            marker={stats()[0]}
            end={end()}/>
    </div>;
}

export default Purchases;
