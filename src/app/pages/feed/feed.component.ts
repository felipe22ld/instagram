import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  stories = [
    {
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`
    },{
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`
    },{
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`
    },{
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`
    },{
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`
    }
  ]

  feeds = [
    {
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`,
      localizacao:`sepetiba`,
      post:`https://imgur.com/c45q9fn.jpg`
    },
    {
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`,
      localizacao:`sepetiba`,
      post:`https://imgur.com/c45q9fn.jpg`
    },
    {
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`,
      localizacao:`sepetiba`,
      post:`https://imgur.com/c45q9fn.jpg`
    },
    {
      photo:`https://imgur.com/c45q9fn.jpg`,
      name:`Felipe`,
      localizacao:`sepetiba`,
      post:`https://imgur.com/c45q9fn.jpg`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
