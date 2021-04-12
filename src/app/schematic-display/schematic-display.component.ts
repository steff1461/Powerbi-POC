import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-schematic-display',
  templateUrl: './schematic-display.component.html',
  styleUrls: ['./schematic-display.component.scss']
})
export class SchematicDisplayComponent implements OnInit {

  @Input() source: any;
  safeUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    console.log(this.source);
    this.safeUrl = this.makeUrlSafe(this.source);
    console.log(this.safeUrl);
  }


  makeUrlSafe(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
