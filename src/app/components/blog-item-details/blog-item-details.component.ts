import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image:string = '';
  public text: string = '';
  public id: number | undefined;



  constructor(private dataService : DataService, private route : ActivatedRoute) { }

  ngOnInit() {
    let id:string | null ='';
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.dataService.getById(id).subscribe(res =>{
      // @ts-ignore
      this.image = res['image'];
      // @ts-ignore
      this.text = res['text'];

    })
  }

}