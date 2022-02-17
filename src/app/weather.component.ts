import { Component } from "@angular/core";
//import { randomInt } from "crypto";

@Component({
    selector:"weather",
    template:'<img style="border-radius: 25px" width="400" alt="Weather Pic" src="{{picLink}}">'
})

export class WeatherComponent{
    picLink="https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?s=612x612"
    //picLink="https://www.gannett-cdn.com/-mm-/a0a28bd666af6d80b33247a358069ae6b7ce0cc4/c=0-108-2121-1306/local/-/media/2016/08/17/PAGroup/YorkDailyRecord/636070138268132665-ThinkstockPhotos-491701259.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp"


}