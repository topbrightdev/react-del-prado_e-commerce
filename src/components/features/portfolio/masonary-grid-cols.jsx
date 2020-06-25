import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import { getFeatureImages} from "../../../services";
import {MasonaryPhotos} from '../../../api/portfolio'


class MasonaryGridCols extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
          images: MasonaryPhotos,
          columns: 2
        };
    }

    componentWillReceiveProps(nextProps) {
        const {columns} = nextProps.match.params
        
            let result;
            switch (columns) {
                case 'full':   
                    result = 6;
                    break;
                case '4':   
                    result = 4;
                    break;
                case '3': 
                    result = 3;
                    break;
                case '2':  
                    result = 2;
                    break;
                default:      
                    result = 2;
                    break;
            }
        this.setState({columns: result })
    }

    selectImage = (index, type) => {
        this.setState({ 
            photoIndex: index,
            isOpen: true,
            images: type === 'all'?MasonaryPhotos:getFeatureImages(MasonaryPhotos, type) 
        })
    }

    render (){
            
        const { photoIndex, isOpen, images, columns } = this.state;
        
        return (
            <div>
                <Breadcrumb title={'PORTFOLIO'}/>

                {/* Our Project Start */}
                <Tabs className="theme-tab">
                    <section class="filter-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="title1 ">
                                        <h2 class="title-inner1">portfolio</h2>
                                    </div>
                                    <div class="filter-container isotopeFilters">
                                        <TabList className="tabs tab-title">
                                            <Tab>All</Tab>
                                            <Tab>Fashion</Tab>
                                            <Tab>Bags</Tab>
                                            <Tab>Shoes</Tab>
                                            <Tab>Watch</Tab>
                                        </TabList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="portfolio-section portfolio-padding pt-0 port-col zoom-gallery">
                        <div class={columns === 6?`container-fluid`:`container`}>
                            <TabPanel>
                                <div class="isotopeContainer row">
                                    <Masonry
                                        breakpointCols={columns}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column">
                                        {MasonaryPhotos.map((img, index) => 
                                            <div className={`isotopeSelector`} key={`all-${index}`}>
                                                <div className="overlay">
                                                    <div className="border-portfolio">
                                                        <div className="overlay-background"  onClick={() => this.selectImage(index, 'all')}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <img src={img.src} className="img-fluid blur-up lazyload bg-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Masonry>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="isotopeContainer row">
                                    <Masonry
                                        breakpointCols={columns}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column">
                                        {getFeatureImages(MasonaryPhotos, 'fashion').map((img, index) => 
                                            <div className={`isotopeSelector fashion`} key={`fashion-${index}`}>
                                                <div className="overlay">
                                                    <div className="border-portfolio">
                                                        <div className="overlay-background" onClick={() => this.selectImage(index, 'fashion')}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <img src={img.src} className="img-fluid blur-up lazyload bg-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Masonry>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="isotopeContainer row">
                                    <Masonry
                                        breakpointCols={columns}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column">
                                        {getFeatureImages(MasonaryPhotos, 'bags').map((img, index) => 
                                            <div className={`isotopeSelector`} key={`bags-${index}`}>
                                                <div className="overlay">
                                                    <div className="border-portfolio">
                                                        <div className="overlay-background" onClick={() => this.selectImage(index, 'bags')}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <img src={img.src} className="img-fluid blur-up lazyload bg-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Masonry>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="isotopeContainer row">
                                    <Masonry
                                        breakpointCols={columns}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column">
                                        {getFeatureImages(MasonaryPhotos, 'shoes').map((img, index) => 
                                            <div className={`isotopeSelector`} key={`shoes-${index}`}>
                                                <div className="overlay">
                                                    <div className="border-portfolio">
                                                        <div className="overlay-background" onClick={() => this.selectImage(index, 'shoes')}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <img src={img.src} className="img-fluid blur-up lazyload bg-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Masonry>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="isotopeContainer row">
                                    <Masonry
                                        breakpointCols={columns}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column">
                                        {getFeatureImages(MasonaryPhotos, 'watch').map((img, index) => 
                                            <div className={`isotopeSelector`} key={`watch-${index}`}>
                                                <div className="overlay">
                                                    <div className="border-portfolio">
                                                        <div className="overlay-background" onClick={() => this.selectImage(index, 'watch')}>
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <img src={img.src} className="img-fluid blur-up lazyload bg-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Masonry>
                                </div>
                            </TabPanel>
                        </div>
                    </section>
                </Tabs>
                    
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].src}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
            </div>
        )
    }
}

export default MasonaryGridCols