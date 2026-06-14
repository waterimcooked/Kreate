import Container from "./Container"
import Button from "./Button"

export default function LandingHero() {
    return (

        <div className="">
            <Container>

                {/* TOP */}

                <Container className="flex min-h-screen">
                    <div className="w-full flex flex-col justify-center items-start align-start h-128 mt-32">
                        <h1 className="text-6xl text-black font-sora font-extrabold">
                            SHOW YOUR WORK OFF TO YOUR FRIENDS
                        </h1>

                        <h2 className="text-1xl font-outfit text-black">
                            Kreate is a place for artists or creative minds can digitally show their work and freelance for free
                        </h2>

                        <div className="flex justify-start align-start mt-8" id="LANDING-BUTTONS">
                            <Button className="mr-4 mt-4 p-4 bg-mocha-400 font-outfit rounded shadow-lg flex justify-center align-center">
                                Start kreating money
                            </Button>

                            <Button className="ml-4 mt-4 p-4 bg-mocha-400 font-outfit rounded shadow-lg flex justify-center align-center">
                                I'm already signed up!
                            </Button>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center h-128 mt-32">
                        <h1>right side</h1>
                    </div>
                </Container>

                {/* BOTTOM */}

                <div className="w-full">
                    <h1>IMG</h1>
                </div>
            </Container>
        </div>
    )
}