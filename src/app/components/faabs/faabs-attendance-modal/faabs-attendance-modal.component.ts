import { Component, Input } from '@angular/core';

@Component({
    selector: 'faabs-attendance-modal',
    template: `
    <button nz-button nzType="primary" (click)="showModal(1, 2)">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [(nzVisible)]="isVisible"
      nzTitle="Modal Title"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
      [nzOkLoading]="isOkLoading"
    >
      <p *nzModalContent>Modal Content</p>
    </nz-modal>
  `,
})
export class FaabsAttendanceModalComponent {
    isVisible = false
    isOkLoading = false
    faabs_id: number
    topic_id: number

    showModal(faabs_id, topic_id): void {
        this.isVisible = true;
        this.faabs_id = faabs_id;
        this.topic_id = topic_id;
    }

    handleOk(): void {
        this.isOkLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isOkLoading = false;
        }, 3000);
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
