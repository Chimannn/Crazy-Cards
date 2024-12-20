import Card from "./Card.jsx";

const CardStacker = ({ cardArray, onHandleShow }) => {
    return (
        <div className="flex card-stacker">
            {cardArray.map((card, index) => (
                <Card
                    onHandleShow={onHandleShow}
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    rating={card.rating}
                    backgroundColors={card.backgroundColors}
                    image={card.image}
                    className={
                        index !== 0
                            ? "-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]"
                            : ""
                    }
                />
            ))}
        </div>
    );
};

export default CardStacker;
