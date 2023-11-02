import React, { Component } from 'react';

class TextFittingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 1.2, // Initial font size
            innerText: props.innerText || `placeholder text`,
        };
    }

    componentDidMount() {
        this.adjustTextSize();
        window.addEventListener('resize', this.adjustTextSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.adjustTextSize);
    }

    adjustTextSize = () => {
        const parent = this.parentRef;
        const text = this.textRef;

        const maxWidth = parent.clientWidth;
        const maxHeight = parent.clientHeight;
        const enlargeModifier = 1 + (this.state.fontSize/3);

        if ((text.clientWidth > maxWidth || text.clientHeight > maxHeight) && this.state.fontSize > 0.1) {
            this.setState({ fontSize: this.state.fontSize - 0.1 });
        } else if ((text.clientWidth < (maxWidth/enlargeModifier) || text.clientHeight < (maxHeight/enlargeModifier)) && this.state.fontSize < 2) {
            this.setState({ fontSize: this.state.fontSize + 0.1 });
        }

        // this.setState({ fontSize: 3 });

        // console.log("this.textRef.clientHeight: ", this.textRef.clientHeight);
        // console.log("this.parentRef.clientHeight: ", this.parentRef.clientHeight);
        // console.log("this.textRef.clientWidth: ", this.textRef.clientWidth);
        // console.log("this.parentRef.clientWidth: ", this.parentRef.clientWidth);

        // while (this.textRef.clientHeight > this.parentRef.clientHeight && this.state.fontSize > 0.1) {
        //     this.setState({ fontSize: this.state.fontSize - 0.1 }); // Update font size in state
        //     console.log("font size: ", this.state.fontSize, "rem");
        // }
    };

    render() {
        return (
        <div
            className="parent"
            ref={(ref) => (this.parentRef = ref)}
            style={{
                width: '40vw',
                height: '60vh',
                // border: '1px solid #ccc',
                marginLeft: "10vw",
                // marginTop: "5vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                // overflow: 'hidden', // Hide overflowing content if it ever occurs
            }}
        >
            <p
            className="text"
            ref={(ref) => (this.textRef = ref)}
            style={{
                fontSize: `${this.state.fontSize}rem`,
                textAlign: 'justify',
                color: "#CFCFCF",
                fontFamily: ["Lalazer", "sans-serif"],
                fontStyle: "normal",
                whiteSpace: "pre-line",
                width: "100%",
                height: "auto",
                textShadow: "1px 1px 3px rgb(0, 0, 0)"
            }}
            >
                {this.state.innerText}
            </p>
        </div>
        );
    }
}

export default TextFittingComponent;
