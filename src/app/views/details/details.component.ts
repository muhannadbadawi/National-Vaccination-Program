import { Component, OnInit } from '@angular/core';

import { jsPDF } from "jspdf";
import PSPDFKit from 'pspdfkit';

import { ParentService } from 'src/app/app-services/parent.service';
import { Cookies } from 'typescript-cookie';
import { Child } from '../child-list/child.model';

import * as FileSaver from 'file-saver';

import * as html2pdf from 'html2pdf.js';

// import html2canvas from 'html2canvas';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
    nationalNoEn: string = ""
    nameEn: string = ""
    dateEn: string = ""
    nationalNoAr: string = ""
    nameAr: string = ""
    dateAr: string = ""
    constructor(public service: ParentService) {
        service.GetChildInfo()
        service.GetChild()
    }

    ngOnInit(): void {
        this.service.child = {
            id: null,
            birthDate: null,
            familyBookNumber: null,
            firstName: null,
            lastName: null,
            vaccineStatus: null
        }

    }

    fillData(item: any) {
        this.service.child.firstName = item.firstName
        this.service.childInfo.centerId = item.centerId
        this.service.childInfo.childId = item.childId
        this.service.childInfo.date = item.date
    }

    exportPdf() {
        // const doc = new jsPDF();
        // doc.text("Hello world!", 10, 10);
        // doc.save("a4.pdf");
        // const element = document.getElementById('html-element');
        // html2canvas(element).then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const doc = new jsPDF();
        //     doc.addImage(imgData, 'PNG', 10, 10);
        //     doc.save('html-to-pdf.pdf');
        // });
        const options = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg' },
            html2canvas: {},
            jsPDF: { orientation: 'landscape' }
        };
        var element = document.getElementById('element-to-print');


        // New Promise-based usage:
        html2pdf().set(options).from(element).save();

        // Old monolithic-style usage:
        html2pdf(element, options);

    }
    toAr(x: string) {
        var y = ""
        var charIndex = 0
        while (charIndex < x.length) {
            switch (x[(charIndex)]) {

                case '/':
                    y += "/";
                    break;

                case '0':
                    y += "٠";
                    break;

                case '1':
                    y += "١";
                    break;

                case '2':
                    y += "٢";
                    break;

                case '3':
                    y += "٣";
                    break;

                case '4':
                    y += "٤";
                    break;

                case '5':
                    y += "٥";
                    break;

                case '6':
                    y += "٦";
                    break;

                case '7':
                    y += "٧";
                    break;

                case '8':
                    y += "٨";
                    break;

                case '9':
                    y += "٩";
                    break;

                default:
                    y += x[(charIndex)];
                    break;
            }

            charIndex++;
        }

        return y;

    }



}
