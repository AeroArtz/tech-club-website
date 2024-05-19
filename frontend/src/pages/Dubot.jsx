import { useLayoutEffect } from "react";

function Dubot() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <main style={{
                "paddingTop": "min(12rem, 20vh)",
                "padding": "15rem 5rem"
            }}>
                <h1>Dubot</h1>
                <div style={{ "fontSize": "larger", marginTop: "1rem" }}>
                    The Dobot Magician is a multifunctional robotic arm designed for educational, professional, and hobbyist purposes.

                    <br /> <br />
                    It features a sleek and modular design with interchangeable end-effectors, allowing it to perform various tasks such as 3D printing, laser engraving, writing, drawing, and more. The robotic arm is programmable and can be controlled via software interfaces, including block-based programming environments and scripting languages, making it accessible to users with different levels of expertise.

                    <br /> <br />

                    The Dobot Magician is widely used in educational settings for teaching robotics, automation, and programming concepts, as well as in prototyping and small-scale manufacturing environments.
                </div>
            </main>
        </>
    );
}

export default Dubot;
