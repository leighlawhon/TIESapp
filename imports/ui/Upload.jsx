// const fs = require('fs'),
//       PDFParser = require("pdf2json");
// const pdfParser = new PDFParser();
// // fs.readFileSync = () => {
// //   console.log('fs');
// // };
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
//     pdfParser.on("pdfParser_dataReady", pdfData => {
//         fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
//     });
 
//     pdfParser.loadPDF("./PDFs/apple/AdiRepalleProfile.pdf");

import React, { Component } from 'react';

export default class Upload extends Component{
	render(){
		return (
			<div>pdf</div>
		)
	}
}
