const Heroslider = ()=>{
    return(
        <>
        <div className="flex justify-center items-center ">
                <div className="carousel carousel-end rounded-box border-2 border-blue-500">
                    <div className="carousel-item">
                        <img
                            src="src\image\Red_Dead_Redemption_II.jpg"
                            alt="RDR2"
                        />
                    </div>
                    <div className="carousel-item">
                        <img src="src\image\Tekken_8.jpg" alt="Tekken" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src\image\Need_for_Speed_2015.jpg"
                            alt="Star War"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src\image\Call_Of_Duty.jpg"
                            alt="Call of Duty"
                        />
                    </div>
                    <div className="carousel-item">
                        <img src="src\image\Destiny_2.jpg" alt="Destiny" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="  src\image\Mortal_Kombat_11_.png"
                            alt="Drink"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src\image\Forza_Horizon_5_cover_art.jpg"
                            alt="Forza Horizon"
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export{Heroslider};