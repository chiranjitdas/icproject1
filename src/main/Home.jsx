import React, { Component } from 'react';
import {
    Row,
    Container
} from 'reactstrap';



class Home extends Component {
    render() {
        return (
            <div>
                <main id="main">
                    <section id="main_container" className="wow fadeInUp">
                        <Container>
                            <Row>
                                <div className="col-lg-8 col-sm-12">
                                   
                                </div>

                                <div className="col-lg-4 d-none d-md-block d-lg-block content">
                                    
                                </div>
                            </Row>
                        </Container>
                    </section>
                </main>
            </div>
        );
    }
}
export default Home;