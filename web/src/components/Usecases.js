import React, { Component } from 'react'

import { Carousel } from 'antd'
import { Card, Col, Row, Icon} from 'antd'
import { Button } from 'antd'

import styles from './usecases.module.css'

import youtubeThumbnailDemoImage from '../images/youtubethumbnail-demo.jpg'

class Usecases extends Component {
    render() {
        return (
            <div id="usecases" style={{ maxWidth: '1260px' }}>
                <h2 className={styles.heading}>Usecases</h2>

                <Carousel 
                // Props: https://github.com/akiran/react-slick
                    autoplay
                    className={styles.carousel}
                    // adaptiveHeight={true}
                    arrows={true}
                    autoplaySpeed={'3000'}
                    draggable={true}
                    pauseOnHover={true}
                    // centerMode={true}
                >
                    <Row gutter={25} type="flex" style={{ marginLeft: '30px' }}>
                        <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 6 }}>
                            <Card 
                                hoverable 
                                className={styles.card}
                                extra={<Button className={styles.button}>Community Baked</Button>}
                                actions={[<Icon type="github" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="youtube" /></a>]}
                            >
                                <div className={styles.title}>Ethereum Smart Contract Analysis Algorithm</div>
                                <div className={styles.description}>This video shows how the right blockchain smart contract analysis should be made</div>
                                <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                            </Card>
                        </Col>
                        <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 6 }}>
                            <Card 
                                hoverable 
                                className={styles.card}
                                extra={<Button className={styles.button}>Friends Baked</Button>}
                                actions={[<Icon type="youtube" />, <Icon type="facebook" />]}
                            >
                                <div className={styles.title}>WonHwaDo Trainings</div>
                                <div className={styles.description}>Every Wednesday 1.5h</div>
                                <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                            </Card>
                        </Col>
                        <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 6 }}>
                            <Card 
                                hoverable 
                                className={styles.card}
                                extra={<Button className={styles.button}>Personal Initiative</Button>}
                                actions={[<Icon type="twitter" />, <Icon type="facebook" />, <Icon type="file-text" />]}
                            >
                                <div className={styles.title}>Mentroship Meetings</div>
                                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</div>
                                <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                            </Card>
                        </Col>
                        <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 6 }}>
                            <Card 
                                hoverable 
                                className={styles.card}
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
                        <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 6 }}>
                            <Card 
                                loading 
                                hoverable
                                title="The Basics of Blockchain Analysis"
                                extra={<Button className={styles.button}>Proposition</Button>}
                                actions={[<Icon type="github" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="youtube" /></a>]}
                            >
                                <Button className={styles.button}>Community Baked</Button>
                                <Card.Meta 
                                    title="Ethereum Smart Contract Analysis Algorithm"
                                />
                                <Card.Meta 
                                    description="This video shows how the right blockchain smart contract analysis should be made"
                                />
                                <Card
                                    type="inner"
                                    cover={<img alt="title" src={youtubeThumbnailDemoImage} />}
                                />
                            </Card>
                        </Col>
                        <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 6 }}>
                            <Card
                                hoverable
                                className={styles.card}
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
        );
    }
}

export default Usecases