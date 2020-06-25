import React, {Component} from 'react';

const css = `body{
            	text-align: center;
            	margin: 0 auto;
            	width: 650px;
            	font-family: 'Open Sans', sans-serif;
            	background-color: #e2e2e2;		      	
            	display: block;
            }
            ul{
            	margin:0;
            	padding: 0;
            }
            li{
            	display: inline-block;
            	text-decoration: unset;
            }
            a{
            	text-decoration: none;
            }
            p{
                margin: 15px 0;
            }

            h5{
            	color:#444;
                text-align:left;
                font-weight:400;
            }
            .text-center{
            	text-align: center
            }
            .main-bg-light{
            	background-color: #fafafa;
            }
            .title{
            	color: #444444;
            	font-size: 22px;
            	font-weight: bold;
            	margin-top: 10px;
            	margin-bottom: 10px;
            	padding-bottom: 0;
            	text-transform: uppercase;
            	display: inline-block;
            	line-height: 1;
            }
            table{
                margin-top:30px
            }
            table.top-0{
                margin-top:0;
            }
            table.order-detail , .order-detail th , .order-detail td {
                border: 1px solid #ddd;
                border-collapse: collapse;
            }
            .order-detail th{
                font-size:16px;
                padding:15px;
                text-align:center;
            }
            .footer-social-icon tr td img{
                margin-left:5px;
                margin-right:5px;
            }`.trim()

class EmailOrderSuccess extends Component {
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default EmailOrderSuccess;