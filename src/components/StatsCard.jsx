export const StatsCard = ({ title, value, type, pourcentage }) => {
    if (type === "pourcentage") {
        return (
            <div className="statCard">
                <span className="statCard__progression">
                    {value > 0 ? "+ " + value + " %" : value + " %"}
                </span>
                <div className="statCard__number">{value}</div>
                <div className="statCard__label">{title}</div>
            </div>
        );
    } else {
        return (
            <div className="statCard">
                <div className="statCard__number">{value}</div>
                <div className="statCard__label">{title}</div>
            </div>
        );
    }
};