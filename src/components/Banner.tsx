import { use, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const wordsRotation = ["web developer", "designer", "systems thinker"]
    const [text, setText] = useState('');
    const wordPeriod = 2000; // time between each word in wordsRotation
    const [letterPeriod, setLetterPeriod] = useState(120 - Math.random() * 100) // random time between each letter in word to simulate real typing

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, letterPeriod)

        return () => { clearInterval(ticker) } // clear when component unmounts
    }, [text])

    const tick = () => {
        let i = loopNumber % wordsRotation.length; // loopNumber increasing indefinitely, so 4 will just be first item in wordsRotation
        let fullText = wordsRotation[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // remove or add one letter every tick

        setText(updatedText);

        if (isDeleting) {
            setLetterPeriod(prevLetterPeriod => prevLetterPeriod / 2.5)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setLetterPeriod(wordPeriod);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setLetterPeriod(300);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={8}>
                        <span className="tagline">welcome to my portfolio!</span>
                        {/* using a non-breaking hyphen for proper styling on different screen sizes (silly last name :P)*/}
                        <div className="banner-intro">
                            <h1>{`hi, I'm Jane Al‑Shihabi, `}</h1>
                            <h1><span className="wrap">{text}</span></h1>
                        </div>
                        <p>A little bit about me, I'd like to use my technological skills to make positive social change in the world.</p>
                        <button onClick={() => console.log("Projects")}>check out my projects <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <DotLottieReact
                            loop
                            autoplay
                            src="https://lottie.host/ed890077-3579-4699-bb21-4a6e12236a1f/x4vL40zour.lottie" />
                    </Col>

                </Row>

            </Container>

        </section>
    )
}