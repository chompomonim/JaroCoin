import React, { Component } from 'react'

import Typist from 'react-typist'
import 'babel-polyfill' // resolving Internet Explorer Compatability

import { Button } from 'antd'

// import 'react-typist/dist/Typist.css'
import './typist-custom.css'
import styles from './typistComponent.module.css'


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
                    className={styles.typistList}
                    avgTypingSpeed={10}
                    startDelay={2000}
                    cursor={{ element: ' |𝕁𝔸ℝ𝕆 is typing..', blink: true, hideWhenDone: true }}
                    onTypingDone={this.onHeaderTyped}
                >
                    {/* <Typist.Delay ms={1250} /> */}
                    <span className={styles.typistSentence}>JaroCoin is a token fully backed by my most precious asset – <strong>Time</strong>.</span>
                    <p />
                    {/* <Typist.Delay ms={1250} /> */}
                    <span className={styles.typistSentence}>JaroCoin is the only way to <strong>get my attention, advice or service.</strong></span>
                    <p />
                    {/* <Typist.Delay ms={1250} /> */}
                    <span className={styles.typistSentence}>Humanity changes. Money Too.</span>
                    <p />
                    {''}
                </Typist>
                {this.state.renderMsg ? (
                        <div>
                            <p />
                            <Button type="primary" size="large"><a href="#intro">TELL ME MORE</a></Button>
                        </div>
                    ) : null
                }
            </div>
            );
        }

}

export default TypistComponent


/* {this.state.renderMsg ? (
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
    </Typist> */