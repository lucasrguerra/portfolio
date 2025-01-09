"use client";

import { Pixelify_Sans } from "next/font/google";
import { Component } from "react";

const pixelify_sans = Pixelify_Sans({
    subsets: ["latin"],
    weight: "500",
});

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "✌️ Olá Mundo!",
            index: 0,
            blink: null,
        };
    }

    componentDidMount() {    
        this.interval = setInterval(() => {
            this.setState({
                index: this.state.index + 1,
            });

            if (this.state.index >= this.state.text.length) {
                clearInterval(this.interval);
            }
        }, 120);
    }

    render() {
        return (
            <h3 className={"text-2xl bg-black bg-opacity-50 rounded-full py-2 mb-3 w-64 mx-auto" + " " + pixelify_sans.className}>
                <style jsx>{`
                    .blink::after {
                        content: "_";
                        animation: blink 1s step-end infinite;
                    }

                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}</style>

                <span className="text-green-500">&gt; &nbsp;</span>
                <span className="">{this.state.text.slice(0, this.state.index)}</span>
                <span className="blink"></span>
            </h3>
        );
    }
}