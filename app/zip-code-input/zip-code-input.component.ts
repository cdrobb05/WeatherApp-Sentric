import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { zipCodeInterface, Timezone, City } from './interfaces';
import * as React from 'react'
import { ZipCodeServiceService } from '../zip-code-service.service';
import { HttpHeaders } from '@angular/common/http';
//import { get } from 'http';
//import type {NextApiRequest,NextApiResponse} from 'next'
//import React,{useState} from 'react'


@Component({
  selector: 'zip-code-input',
  templateUrl: './zip-code-input.component.html',
  styleUrls: ['./zip-code-input.component.css']
})
export class ZipCodeInputComponent{
  zipCodeDisplay=""
  zipResult=""
  weatherResult=""
  weatherPic="https://api.weather.gov/icons/land/day/sct?size=medium"
  //"https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?s=612x612"
  http: any;

  async submitZipCode(zipCodeIn: string){
    
    this.zipCodeDisplay= "You Entered: "+zipCodeIn

    let urlZip = "https://maps.googleapis.com/maps/api/geocode/json?address="+zipCodeIn+"&key=AIzaSyDAVROnH6OUf61KqZnDFxRotoJJkS9qjBU"
    const requestOne = await fetch(urlZip)
    const data = await requestOne.json()
    let location = data.results[0].geometry.location


    let urlWeather = `https://api.weather.gov/points/`+location.lat+`,`+location.lng
    const requestOneWeather = await fetch(urlWeather)
    const point = await requestOneWeather.json()
    const requestTwoWeather = await fetch(point.properties.forecast)
    const forecast = await requestTwoWeather.json()
    const forecastResult = forecast.properties.periods[0].shortForecast

    this.weatherPic = forecast.properties.periods[0].icon

    console.log(forecast.properties.periods)

    console.log("Location:",location)
    console.log("Forecast:",forecastResult)

    this.zipResult = "Lattitude: "+location.lat+", Longitude:"+location.lng
    this.weatherResult = "The Weather Today: "+forecastResult
  }
}

