import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import Img4 from "./assets/img4.png";
import Img5 from "./assets/img5.png";
import CardStacker from "./components/CardStacker";
import CardModel from "./components/CardDetail";
import { useState, useRef, useEffect } from "react";
function App() {
    const cardArray = [
        {
            title: "Kirby",
            subtitle: "Star Allies",
            rating: "4.7",
            backgroundColors: { top: "#51D1F7", bottom: "#5B8FEF" },
            image: Img1,
        },
        {
            title: "Mario",
            subtitle: "Super Bros",
            rating: "4.8",
            backgroundColors: { top: "#F85B6B", bottom: "#E83842" },
            image: Img2,
        },
        {
            title: "Pokemon",
            subtitle: "Bulbasaur",
            rating: "4.9",
            backgroundColors: { top: "#28DFAB", bottom: "#26CBCF" },
            image: Img3,
        },
        {
            title: "Sonic",
            subtitle: "Blue Sonic",
            rating: "4.9",
            backgroundColors: { top: "#6F3FF1", bottom: "#6E3CCA" },
            image: Img4,
        },
        {
            title: "Pokemon",
            subtitle: "Pikachu",
            rating: "5.0",
            backgroundColors: { top: "#FBDA35", bottom: "#E3A237" },
            image: Img5,
        },
    ];
    const [isShow, setIsShow] = useState(false);
    const [targetCard, setTargetCard] = useState(cardArray[0]);
    const showModel = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                showModel.current &&
                !showModel.current.contains(event.target)
            ) {
                setIsShow(false);
            }
        };

        if (isShow) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isShow]);

    const onHandleShow = (fromChild) => {
        setTargetCard(
            cardArray.filter((item) => item.subtitle === fromChild)[0]
        );
        setIsShow(true);
    };

    return (
        <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
            <CardStacker cardArray={cardArray} onHandleShow={onHandleShow} />
            {isShow && (
                <div
                    className={
                        "fixed w-screen h-screen overflow-hidden bg-[rgba(0,0,0,0.5)] z-20"
                    }
                >
                    <div ref={showModel}>
                        <CardModel
                            title={targetCard.title}
                            subtitle={targetCard.subtitle}
                            rating={targetCard.rating}
                            backgroundColors={targetCard.backgroundColors}
                            image={targetCard.image}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
