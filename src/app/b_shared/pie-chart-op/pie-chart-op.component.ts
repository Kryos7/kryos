import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ApexCharts from 'apexcharts';
import { LeaderInterface } from 'src/app/e_core/classes/leader-interface';
import { SelectedItemsInterface } from 'src/app/e_core/classes/selected-items-interface';

const LEADERS = [
  {
    code: 'OP01-001',
    label: 'Roronoa Zoro',
    url: 'assets/images/optcg/leader/zoro.jpg',
  },
  {
    code: 'OP01-002',
    label: 'Trafalgar Law',
    url: 'assets/images/optcg/leader/law.jpg',
  },  
  {
    code: 'OP01-003',
    label: 'Monkey D. Luffy',
    url: 'assets/images/optcg/leader/law.jpg',
  },  
  {
    code: 'OP02-001',
    label: 'Edward Newgate',
    url: 'assets/images/optcg/leader/law.jpg',
  },
  {
    code: 'OP03-099',
    label: 'Charlotte Katakuri',
    url: 'assets/images/optcg/leader/katakuri.jpg',
  },
  {
    code: 'OP05-002',
    label: 'Belo Betty',
    url: 'assets/images/optcg/leader/enel2.jpg',
  },
  {
    code: 'OP05-041',
    label: 'Sakazuki',
    url: 'assets/images/optcg/leader/enel2.jpg',
  },
  {
    code: 'OP05-060',
    label: 'Monkey D. Luffy',
    url: 'assets/images/optcg/leader/enel2.jpg',
  },
  {
    code: 'OP05-098',
    label: 'Enel',
    url: 'assets/images/optcg/leader/enel2.jpg',
  },
  {
    code: 'ST10-002',
    label: 'Monkey D. Luffy',
    url: 'assets/images/optcg/leader/enel2.jpg',
  }
];

@Component({
  selector: 'app-pie-chart-op',
  templateUrl: './pie-chart-op.component.html',
  styleUrls: ['./pie-chart-op.component.scss']
})

export class PieChartOpComponent implements AfterViewInit {

  leaders: LeaderInterface[] = LEADERS;
  selected: SelectedItemsInterface[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      leader: new FormControl(null, [Validators.required]),
      nUtilizzi: new FormControl(null, [Validators.required]),
    });
  }

  ngAfterViewInit() {
    this.setupChart();
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;

      const existingItem = this.selected.find(
        (elm) => elm.leader === value.leader
      );

      if (existingItem) {
        existingItem.nUtilizzi = value.nUtilizzi;
      } else {
        this.selected.push(value);
      }

      this.setupChart();
    }
  }

  getChartData() {
    const totalSeries = this.selected.reduce(
      (acc, curr) => acc + curr.nUtilizzi,
      0
    );

    const objects: { label: string; source: string; value: number }[] = [];

    this.selected.forEach((elm) => {
      const leader = this.leaders.find((leader) => leader.code === elm.leader);
      objects.push({
        label: leader?.label ?? '',
        source: leader?.url ?? '',
        value: (elm.nUtilizzi * 100) / totalSeries,
      });
    });

    return objects;
  }

  setupChart() {
    const values = this.getChartData();

    var options = {
      series: values.map((elm) => elm.value),
      labels: values.map((elm) => elm.label),
      dataLabels: {
        enabled: false,
      },
      chart: {
        width: 750,
        type: 'pie',
      },
      fill: {
        type: 'image',
        opacity: 1,
        image: {
          src: values.map((elm) => elm.source),
          // width: 250,
          // height: 250
        },
      },
    };

    // Destroy if exists in order to re-update the data
    if ((<any>window).myChart) (<any>window).myChart.destroy();

    (<any>window).myChart = new ApexCharts(
      document.querySelector('#chart'),
      options
    );
    (<any>window).myChart.render();
  }
}