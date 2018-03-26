import React, { Component } from 'react'

import Typist from 'react-typist'
import 'babel-polyfill' // resolving Internet Explorer Compatability

import { Button } from 'antd'

// import 'react-typist/dist/Typist.css'
import './typist-custom.css'


class TypistComponent extends Component {

    state = {
        renderMsg: false,
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    }

    render() {
        return(
            <div>
                <Typist
                    className="typistList"
                    avgTypingSpeed={20}
                    startDelay={2000}
                    cursor={{ element: '《𝕁𝔸ℝ𝕆 is writing..', blink: true, }} //hideWhenDone: true
                    onTypingDone={this.onHeaderTyped}
                >
                    <span className="typistSentence">JaroCoin is a token fully backed by my most precious asset – <strong>Time</strong>.</span>
                    <br />
                    <span className="typistSentence">JaroCoin is the only way to <strong>get my attention, advice or service.</strong></span>
                    <br />
                    <span className="typistSentence">Humanity changes. Money too.</span>
                    <br />
                    <Typist.Delay ms={1250} />
                    {''}
                </Typist>
                {this.state.renderMsg ? (
                        <div>
                            <br />
                            <br />
                            <Button type="primary" size="large"><a href="#about">TELL ME MORE</a></Button>
                        </div>
                    ) : null
                }
            </div>
            );
        }

}

export default TypistComponent


{/* {this.state.renderMsg ? (
    <Typist
        className="typistList"
        avgTypingSpeed={40}
        startDelay={2000}
        cursor={{ element: '|', blink: true }}
    >
        * Real utility token;
        <Typist.Delay ms={1250} />
        <br />
        100% backed by My Time;
        <Typist.Delay ms={1250} />
        <br />
        * Buying precious time;
        <Typist.Delay ms={1250} />
        <br />
        * Selling 
        <Typist.Backspace count={7} delay={1000} />
        Trading <Typist.Delay ms={750} />My Time for <Typist.Delay ms={1250} />
        <br />
        The Better World;
        <Typist.Delay ms={1250} />
        <br />
        * Its my life;
        <Typist.Delay ms={750} />
        <br />
        * Its my coin;
        <br />
        {''}
    </Typist> */}