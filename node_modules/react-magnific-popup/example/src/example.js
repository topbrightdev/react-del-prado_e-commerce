import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactGist from 'react-gist';
import { 
	SingleImage, 
	LightBoxGallery, 
	GalleryItem,
	Popup,
	MagnificPopup
} from 'react-magnific-popup';

class App extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			singleSample: 'hide',
			lightBoxSample: 'hide',
			zoomGallery: 'hide',
			popupVideo: 'hide',
			popupZoom: 'hide',
			popupForm: 'hide',
			popupAjax: 'hide'
		}
	}

	onToggle(type, e) {
		e.preventDefault();
		let newState = {};

		newState[type] = this.state[type] === 'hide' ? 'show' : 'hide';
		this.setState(newState);
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col s12 m6">
						<h3>Single Image Lightbox <small>
							<a href="#" onClick={this.onToggle.bind(this, 'singleSample')}>view source</a>
							</small></h3>
						<SingleImage 
							className="image-popup-vertical-fit" 
							href="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_b.jpg" 
							title="Caption. Can be aligned to any side and contain any HTML."
							config={SingleImageConfig_1}
							style={{marginRight: '10px'}}
						>
							<img src="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg" width="75" height="75" />
						</SingleImage>

						<SingleImage
							className="image-popup-fit-width" 
							href="http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_b.jpg" 
							title="This image fits only horizontally."
							config={SingleImageConfig_2}
							style={{marginRight: '10px'}}
						>
							<img src="http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg" width="75" height="75"/>
						</SingleImage>
						<SingleImage 
							className="image-popup-no-margins" 
							href="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg"
							config={SingleImageConfig_3}
						>
							<img src="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg" width="107" height="75" />
						</SingleImage>
						<div id="single-gist" style={this.state.singleSample === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="226e4a27fddba82c464d8ab34bd6a259" />
						</div>
					</div>
					<div className="col s12 m6">
						<h3>Light Box Gallery <small>
							<a href="#" onClick={this.onToggle.bind(this, 'lightBoxSample')}>view source</a>
							</small></h3>
						<LightBoxGallery 
							className="popup-gallery"
							config={galleryConfig}
						>
							<GalleryItem
								href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg" 
								title="The Cleaner"
							>
								<img src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg" width="75" height="75" />
							</GalleryItem>
							<GalleryItem
								href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg" 
								title="The Cleaner"
							>
								<img src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg" width="75" height="75" />
							</GalleryItem>
							<GalleryItem
								href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg" 
								title="The Uninvited Guest"
							>
								<img src="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg" width="75" height="75" />
							</GalleryItem>
							<GalleryItem
								href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg" 
								title="Oh no, not again!"
							>
								<img src="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg" width="75" height="75" />
							</GalleryItem>
							<GalleryItem
								href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg" 
								title="Swan Lake"
							>
								<img src="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg" width="75" height="75" />
							</GalleryItem>
							<GalleryItem
								href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg" 
								title="The Shake"
							>
								<img src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg" width="75" height="75" />
							</GalleryItem>
							<GalleryItem
								href="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg" 
								title="Who's that, mommy?"
							>
								<img src="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_s.jpg" width="75" height="75" />
							</GalleryItem>
						</LightBoxGallery>
						<div id="single-gist" style={this.state.lightBoxSample === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="0d68ec113e65bcfd35ebd9f05c671c26" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m6">
						<h3>Zoom Gallery <small>
							<a href="#" onClick={this.onToggle.bind(this, 'zoomGallery')}>view source</a>
							</small></h3>
						<LightBoxGallery 
							className="popup-gallery"
							config={zoomGalleryConfig}
						>
							<GalleryItem
								href="http://farm4.staticflickr.com/3763/9204547649_0472680945_o.jpg" 
								data-source="http://500px.com/photo/32736307" 
								title="Into The Blue" 
								style={{width: '193px', height:'125px'}}
							>
								<img src="http://farm4.staticflickr.com/3763/9204547649_7de96ee188_t.jpg" width="193" height="125" />
							</GalleryItem>
							<GalleryItem
								href="http://farm3.staticflickr.com/2856/9207329420_7f2a668b06_o.jpg" 
								data-source="http://500px.com/photo/32554131" 
								title="Light Sabre" 
								style={{width: '82px', height: '125px'}}
							>
								<img src="http://farm3.staticflickr.com/2856/9207329420_e485948b01_t.jpg" width="82px" height="125" />
							</GalleryItem>
						</LightBoxGallery>
						<div id="single-gist" style={this.state.zoomGallery === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="d23cd4528613e9d026d3a35969f15e30" />
						</div>
					</div>
					<div className="col s12 m6">
						<h3>Popup with Video or Map <small>
							<a href="#" onClick={this.onToggle.bind(this, 'popupVideo')}>view source</a>
							</small></h3>
						<p>
							<Popup 
								className="popup-youtube" 
								href="http://www.youtube.com/watch?v=0O2aH4XLbto" 
								savefrom_lm_index="0" 
								savefrom_lm="1"
								config={popupConfig}>
									Open YouTube video
							</Popup>
						</p>
						<p>
							<Popup 
								className="popup-vimeo" 
								href="https://vimeo.com/45830194"
								config={popupConfig}
								>
									Open Vimeo video
							</Popup>
						</p>
						<p>
							<Popup 
								className="popup-gmaps" 
								config={popupConfig}
								href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
								>
									Open Google Map
							</Popup>
						</p>
						<div id="single-gist" style={this.state.popupVideo === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="0bb8fe8d96cf145b831f0f93989e41f1" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m6">
						<h3>Dialog with CSS transitions <small>
							<a href="#" onClick={this.onToggle.bind(this, 'popupZoom')}>view source</a>
							</small></h3>
						<p>
							<Popup 
								className="popup-with-zoom-anim" 
								href="#small-dialog"
								config={dialogZoomConfig}
							>
								Open with fade-zoom animation
							</Popup>
						</p>
						<p>
							<Popup 		
								className="popup-with-move-anim" 
								href="#small-dialog"
								config={dialogMoveConfig}
							>
								Open with fade-slide animation
							</Popup>
						</p>
						<div 
							id="small-dialog" 
							className="zoom-anim-dialog mfp-hide"
						>
							<h1>Dialog example</h1>

							<p>This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.</p>
						</div>
						<div id="single-gist" style={this.state.popupZoom === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="12caf5894f8773dff7d993184daac980" />
						</div>
					</div>
					<div className="col s12 m6">
						<h3>Popup with Form <small>
							<a href="#" onClick={this.onToggle.bind(this, 'popupForm')}>view source</a>
							</small></h3>
						<Popup 
							className="popup-with-form" 
							href="#test-form"
							config={formConfig}
						>
							Open form
						</Popup>
						<form id="test-form" 	className="white-popup-block mfp-hide">
							<h1>Form</h1>
								<ol>
									<li>
										<label htmlFor="name">Name</label>
										<input id="name" name="name" type="text" placeholder="Name" required="" />
									</li>
									<li>
										<label htmlFor="email">Email</label>
										<input id="email" name="email" type="email" placeholder="example@domain.com" required="" />
									</li>
									<li>
										<label htmlFor="phone">Phone</label>
										<input id="phone" name="phone" type="tel" placeholder="Eg. +447500000000" required="" />
									</li>
								</ol>
						</form>
						<div id="single-gist" style={this.state.popupForm === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="e390f598b516c09908db98488f03d40a" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m6">
						<h3>Ajax Popup <small>
							<a href="#" onClick={this.onToggle.bind(this, 'popupAjax')}>view source</a>
							</small></h3>
						<p>
							<Popup 
								className="simple-ajax-popup-align-top"
								href="http://dimsemenov.com/plugins/magnific-popup/site-assets/ajax/test-ajax.html"
								config={ajaxConfig_1}
							>
								Load content via ajax
							</Popup>
						</p>
						<p>
							<Popup 
								className="simple-ajax-popup" 
								href="http://dimsemenov.com/plugins/magnific-popup/site-assets/ajax/test-ajax-2.html"
								config={{type: 'ajax'}}
							>
								Load another content via ajax
							</Popup>
						</p>
						<div id="single-gist" style={this.state.popupAjax === 'hide' ? {height: '0px', overflow: 'hidden'} : {height: '300px', overflow: 'scroll'}}>
							<ReactGist id="5f8b53d458d3baa89b4c9d030db37f01" />
						</div>
					</div>
					{/* <div className="col s12 m6">
						<h3>Modal Popup</h3>
						<Popup 
							className="popup-modal" 
							href="#test-modal"
							config={modalConfig}
						>
							Open modal
						</Popup>
						<div 
							id="test-modal" 
							className="white-popup-block mfp-hide">
								<h1>Modal dialog</h1>
								<p>You won't be able to dismiss this by usual means (escape or click button), but you can close it programatically based on user choices or actions.</p>
							<span onClick={this.onClose}>Dismiss</span>
						</div>
					</div> */}
				</div>
			</div>
		)
	}
}

const SingleImageConfig_1 = {
	type: 'image',
	closeOnContentClick: true,
	mainClass: 'mfp-img-mobile',
	image: {
		verticalFit: true
	}	
};

const SingleImageConfig_2 = {
	type: 'image',
	closeOnContentClick: true,
	image: {
		verticalFit: false
	}
};

const SingleImageConfig_3 = {
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	fixedContentPos: true,
	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
	}
}

const galleryConfig = {
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		}
	}
}

const zoomGalleryConfig = {
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function(item) {
			return item.el.attr('title') + ' &middot; <a className="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function(element) {
			return element.find('img');
		}
	}
}

const popupConfig = {
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
}

const dialogZoomConfig = {
	type: 'inline',
	fixedContentPos: false,
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
}

const dialogMoveConfig = {
	type: 'inline',
	fixedContentPos: false,
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
}

const formConfig = {
	type: 'inline',
	preloader: false,
	focus: '#name'
}

const ajaxConfig_1 = {
	type: 'ajax',
	alignTop: true,
	overflowY: 'scroll'
};

const modalConfig = {
	type: 'inline',
	preloader: false,
	focus: '#username',
	modal: true
}

ReactDOM.render(<App />, document.getElementById('app'));
