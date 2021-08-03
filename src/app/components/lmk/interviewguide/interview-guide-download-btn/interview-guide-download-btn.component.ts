import { Component, OnInit, Input } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-interview-guide-download-btn',
  templateUrl: './interview-guide-download-btn.component.html',
  styleUrls: ['./interview-guide-download-btn.component.scss'],
})
export class InterviewGuideDownloadBtnComponent implements OnInit {
  @Input() data: any = {
    title: 'New Request',
    icon: 'fe fe-plus-circle',
    type: 'primary',
  }
  loading: boolean;
  constructor(private httpService: EsappRequestHandlerService) {}


  ngOnInit() {}
  click() : void {
    this.loading = true
    this.httpService.getPDF('/ig/download-template')
      .subscribe((data: Blob) => {
          var file = new Blob([data], { type: 'application/pdf' })
          var fileURL = URL.createObjectURL(file);

// if you want to open PDF in new tab
          window.open(fileURL);
          var a         = document.createElement('a');
          a.href        = fileURL;
          a.target      = '_blank';
          a.download    = 'bill.pdf';
          document.body.appendChild(a);
          a.click();
        },
        (error) => {
          console.log('getPDF error: ',error);
        }
      );
  }
}
