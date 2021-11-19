import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../../../core/services/data/data-service.service";

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent implements OnInit {
  public dailyVolume;
  public dailyTrades;
  public monthlyVolume;
  public monthlyTrades;

  constructor(public ds: DataServiceService) {
  }

  ngOnInit(): void {
    this.ds.getGlobalVolume().subscribe((data: any) => {
      this.dailyVolume = data.data.global['1d_volume'];
      this.dailyTrades = data.data.global['1d_trades'];
      this.monthlyVolume = +(data.data.global['30d_volume']).slice(0, 13);
      this.monthlyTrades = data.data.global['30d_trades'];
    });
  }

}
