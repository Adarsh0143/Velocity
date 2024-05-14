const Card = () => {
    return (
        <>
            <div className="bg-[#B0BBBF] m-4 p-4 rounded-lg">
                <div className=" grid grid-cols-3  gap-8 justify-items-center">
                    <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                        <figure>
                            <img
                                src="src\image\senua's.jpg"
                                alt="Hellblade"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                Hellblade: Senua's Sacrifice{" "}
                            </h2>
                            <p className="text-lg">
                                Set in the Viking age, a broken Celtic warrior
                                embarks on a haunting vision quest into Viking
                                Hell to fight for the soul of her dead lover.{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                        <figure>
                            <img
                                src="src\image\theforest.jpg"
                                alt="The Forest"
                            />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-2xl">The Forest </h2>
                            <p className="text-lg">
                                The Forest blends exploration, discovery, and
                                cannibalism in a story-rich survival horror
                                sandbox. Survive a plane crash and fight off
                                mutants in the game.{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                        <figure>
                            <img src="src\image\creed.png" alt="Assassin Creed"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                Assassin's Creed Odyssey{" "}
                            </h2>
                            <p className="text-lg">
                                Write your own epic odyssey and become a
                                legendary Spartan hero in Assassin’s Creed
                                Odyssey, an inspiring adventure where you must
                                forge your destiny.{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                
                    <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                        <figure>
                            <img src="src\image\far.jpg" alt="Far cry"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Far Cry 5 </h2>
                            <p className="text-lg">
                                Montana, land of the free and the brave, but
                                also home to a fanatical doomsday cult—known as
                                The Project at Eden’s Gate that is threatening
                                the community's freedom. .{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500">
                        <figure>
                            <img src="src\image\elden.jpg" alt="Elden Ring"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Elden Rings </h2>
                            <p className="text-lg">
                                Rise and be guided by grace to brandish the
                                power of the Elden Ring and become an Elden Lord
                                in the Lands Between. A war that meant
                                abandonment by the Greater Will.{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl  border-2 border-blue-500">
                        <figure>
                            <img
                                src="src\image\tekken8.jpg"
                                alt="Tekken"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Tekken 8 </h2>
                            <p className="text-lg">
                                TEKKEN 8 continues the tragic saga of the
                                Mishima bloodline and its world-shaking
                                father-and-son grudge matches. Showcase every
                                moment of impact and super moves.{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export {Card};
