import React, { Component } from 'react'
import youtubeThumbnailDemoImage from '../images/youtubethumbnail-demo.jpg'

// Global Styles
let globalStyles = {
    h1: {
        fontSize: '3.2rem'
    },
    h2: {
        fontSize: '2.5rem'
    },
    h3: {
        fontSize: '1.8rem'
    }
}
let containerStyle = {
    margin: '0 50px'
}

// UseCases Component Styles
let useCasesStyle = {
    list: {
        display: 'flex',
        alignContent: 'center'
    },
    item: {
        width: '380px',
        border: 'solid 1px #d0d0d0',
        textAlign: 'right',
        margin: '0 20px'
    },
    h3: {
        fontSize: '2rem',
        height: '112px'
    },
    label: {
        fontSize: '1.2rem'
    },
    itemContent: {
        padding: '0 20px 20px',
    },
    description: {
        verticalAlign: 'bottom',
        fontSize: '1.5rem',
        height: '84px',
        overflow: 'hidden',
        background: 'linear - gradient(white, transparent)',
        background: '-moz - linear - gradient(white, transparent)',
        background: '-webkit - linear - gradient(white, transparent)'
    },
    image: {
        width: '380px',
        height: '250px',
        display: 'block'
    }
}

class OldUseCases extends Component {
    render() {
        return (
            <div className="contentContainer">
                <h2 id="usecases" style={{ ...globalStyles.h2, textAlign: 'center' }}>Usecases</h2>
                <div style={{ ...useCasesStyle.list }}>
                    <div style={{ ...useCasesStyle.item }}>
                        <button style={{ ...useCasesStyle.label }}>Community Baked</button>
                        <div style={{ ...useCasesStyle.itemContent }}>
                            <h3 style={{ ...useCasesStyle.h3 }}>Ethereum Smart Contract Analysis Algorithm</h3>

                            <p style={{ ...useCasesStyle.description }}>This video shows how the right blockchain smart contract analysis should be made</p>
                        </div>
                        <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
                    </div>
                    <div style={{ ...useCasesStyle.item }}>
                        <div style={{ ...useCasesStyle.itemContent }}>
                            <h3 style={{ ...useCasesStyle.h3 }}>WonHwaDo Trainings</h3>
                            <button style={{ ...useCasesStyle.label }}>Friends Baked</button>
                            <p style={{ ...useCasesStyle.description }}>Every Wednesday 1.5h</p>
                        </div>
                        <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
                    </div>
                    <div style={{ ...useCasesStyle.item }}>
                        <div style={{ ...useCasesStyle.itemContent }}>
                            <h3 style={{ ...useCasesStyle.h3 }}>Mentorship</h3>
                            <button style={{ ...useCasesStyle.label }}>Personal Initiative</button>
                            <p style={{ ...useCasesStyle.description }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                        </div>
                        <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
                    </div>
                    <div style={{ ...useCasesStyle.item }}>
                        <div style={{ ...useCasesStyle.itemContent }}>
                            <h3 style={{ ...useCasesStyle.h3 }}>Bora Bora Vacations</h3>
                            <button style={{ ...useCasesStyle.label }}>Family Baked</button>
                            <p style={{ ...useCasesStyle.description }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                        </div>
                        <img style={{ ...useCasesStyle.image }} src={youtubeThumbnailDemoImage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default OldUseCases