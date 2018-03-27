import React, { Component } from 'react'

import { Carousel } from 'antd'
import { Card, Col, Row, Icon} from 'antd'
import { Button } from 'antd'

import styles from './usecases.module.css'

import youtubeThumbnailDemoImage from '../images/youtubethumbnail-demo.jpg'

class Usecases extends Component {
    render() {
        return (
            <div id="usecases" className={styles.usecasesWrapper}>
                <h2 className={styles.usecasesHeading}>Usecases</h2>
                <div className={styles.usecasesCarouselWrapper}>
                    <Carousel
                        // Props: https://github.com/akiran/react-slick
                        autoplay
                        className={styles.usecasesCarousel}
                        // arrows={true}
                        autoplaySpeed={'3000'}
                        draggable={true}
                        pauseOnHover={true}
                    >
                        <Row gutter={25} type="flex" className={styles.usecasesCarouselRow}>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                                <Card 
                                    className={styles.card}
                                    hoverable 
                                    extra={<Button className={styles.button}>Community Baked</Button>}
                                    actions={[<Icon type="github" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="youtube" /></a>]}
                                >
                                    <div className={styles.title}>Ethereum Smart Contract Analysis Algorithm</div>
                                    <div className={styles.description}>This video shows how the right blockchain smart contract analysis should be made</div>
                                    <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                                </Card>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                                <Card 
                                    className={styles.card}
                                    hoverable 
                                    extra={<Button className={styles.button}>Friends Baked</Button>}
                                    actions={[<Icon type="youtube" />, <Icon type="facebook" />]}
                                >
                                    <div className={styles.title}>WonHwaDo Trainings</div>
                                    <div className={styles.description}>Every Wednesday 1.5h</div>
                                    <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                                </Card>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                                <Card 
                                    className={styles.card}
                                    hoverable 
                                    extra={<Button className={styles.button}>Personal Initiative</Button>}
                                    actions={[<Icon type="twitter" />, <Icon type="facebook" />, <Icon type="file-text" />]}
                                >
                                    <div className={styles.title}>Mentroship Meetings</div>
                                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</div>
                                    <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                                </Card>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                                <Card 
                                    className={styles.card}
                                    hoverable 
                                    extra={<Button className={styles.button}>Family Baked</Button>}
                                    actions={[<Icon type="picture" />]}
                                >
                                    <div className={styles.title}>Bora Bora Vacation</div>
                                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</div>
                                    <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                                </Card>
                            </Col>       
                        </Row>
                        <Row gutter={20} type="flex" style={{paddingLeft: '30px'}}>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                                <Card 
                                    className={styles.card}
                                    hoverable
                                    extra={<Button className={styles.button}>Proposition</Button>}
                                    actions={[<Icon type="github" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="youtube" /></a>]}
                                >
                                    <div className={styles.title}>Ethereum Smart Contract Analysis Algorithm</div>
                                    <div className={styles.description}>This video shows how the right blockchain smart contract analysis should be made</div>
                                    <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                                </Card>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                                <Card
                                    className={styles.card}
                                    hoverable
                                    extra={<Button className={styles.button}>Community Baked</Button>}
                                    actions={[<Icon type="github" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="youtube" /></a>]}
                                >
                                    <div className={styles.title}>Ethereum Smart Contract Analysis Algorithm</div>
                                    <div className={styles.description}>This video shows how the right blockchain smart contract analysis should be made</div>
                                    <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                                </Card>
                            </Col>
                        </Row>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Usecases