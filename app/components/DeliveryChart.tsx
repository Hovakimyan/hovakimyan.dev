import { DELIVERY } from "@/lib/content";

/**
 * Monthly merged-PR bars for the BuildOps case study. One series, one hue —
 * the point is the shape of the curve, not a palette. The sr-only table
 * carries the same data for screen readers.
 */
export default function DeliveryChart() {
  const peak = Math.max(...DELIVERY.monthly.map((m) => m.count));

  return (
    <figure className="sh-delivery">
      <div className="sh-delivery-totals">
        {DELIVERY.totals.map((t) => (
          <div key={t.label} className="sh-delivery-total">
            <span className="sh-delivery-total-val">{t.value}</span>
            <span className="sh-delivery-total-lab">{t.label}</span>
          </div>
        ))}
      </div>

      <div className="sh-delivery-plot" aria-hidden="true">
        {DELIVERY.monthly.map((m, i) => (
          <div key={`${m.month}-${i}`} className="sh-delivery-col">
            <span className="sh-delivery-n">{m.count}</span>
            <div
              className={
                m.count === 0
                  ? "sh-delivery-bar sh-delivery-bar-zero"
                  : "sh-delivery-bar"
              }
              style={{
                height: m.count === 0 ? "2px" : `${(m.count / peak) * 100}%`,
              }}
            />
            <span className="sh-delivery-x">
              {m.month}
              {m.year ? <em>{m.year}</em> : null}
            </span>
          </div>
        ))}
      </div>

      <table className="sh-sr-only">
        <caption>{DELIVERY.caption}</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Merged pull requests</th>
          </tr>
        </thead>
        <tbody>
          {DELIVERY.monthly.map((m, i) => (
            <tr key={`row-${m.month}-${i}`}>
              <th scope="row">
                {m.month} {i < 9 ? "2025" : "2026"}
              </th>
              <td>{m.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <figcaption>{DELIVERY.caption}</figcaption>
    </figure>
  );
}
