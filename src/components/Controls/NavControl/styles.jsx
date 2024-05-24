import styled from 'styled-components';
export const NavControlStyled = styled.div`
.navControl {
position: fixed;
list-style-type: none;
padding: 0;
margin: 0;
background-color: #f3f2f1;
bottom: 0px;
left: 0px;
right: 0px;
overflow-x: auto;
width: ${props => (props.width ? `${props.width}px` : '214px')};
}
.navControl li {
float: left;
word-wrap: normal;
background-color: #f3f2f1;
padding: 11px;
color: #3b3a39;
}
.navControl li svg {
display: block;
height: 20px;
width: 20px;
fill: #004e8c;
}
.navControl li span {
display: none;
}
.navControl li:hover {
background-color: #edebe9;
color: darkgrey;
cursor: pointer;
fill: #004e8c;
}
.navControl .active:hover {
background-color: #a7bcda;
color: #004e8c;
}
.navControl .active {
background-color: #a7bcda;
color: #004e8c;
font-weight: 600;
fill: #004e8c;
}
.navControl .active svg g path {
fill: #004e8c;
}
.navControl svg g path {
fill: #004e8c;
}
.navControl svg {
margin-right: 10px;
}
.navControlText {
display: none;
}
.navControl .navIcon {
font-size: 16px;
display: inline-block;
vertical-align: middle;
}
@media only screen and (max-width: 600px) {
.navControl {
display: flex;
width: 100%;
}
.collapsedNavControl {
margin-top: 4px;
}
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.navControl {
top: 64px;
width: 60px;
}
.navControl li {
width: 100%;
}
.navControl li svg {
width: 24px;
height: 24px;
}
.navControl li span {
display: none;
}
.collapsedNavControl {
margin-top: 4px;
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
.collapsedNavControl {
margin-top: 4px;
}
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
.navControl {
list-style-type: none;
padding: 0;
background-color: #f3f2f1;
width: ${props => (props.width ? `${props.width}px` : '214px')};
margin-top: 8px;
}
.collapsedNavControl {
width: 60px;
display: flex;
flex-direction: column;
margin-top: 8px;
}
.collapsedNavControl li {
height: 43px;
}
.collapsedNavControl li svg {
margin-right: 0;
}
.navControl li {
word-wrap: normal;
width: 100%;
display: flex;
padding-left: 15px;
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}
.navControl li svg {
display: table-cell;
width: 20px;
height: 20px;
}
.navControl li span {
display: table-cell;
font-size: 12px;
word-wrap: break-word;
vertical-align: middle;
margin-left: 5px;
}
.collapsedNavControl li span {
display: none;
}
.navControl li span span {
word-wrap: break-word;
}
.navControl .navIcon {
font-size: 32px;
}
.navControl .GlobalNavButton {
width: 48px;
height: 48px;
}
.navControl .GlobalNavButton:hover {
background-color: #a7bcda;
}
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
.navControl li span {
font-size: 14px;
}
}
`;