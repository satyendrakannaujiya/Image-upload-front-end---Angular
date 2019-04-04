import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url ="http://localhost:3000/getProfile";
const url2 ="http://localhost:3000/getDetails";
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

      img='';
      imageBlobUrl: string | ArrayBuffer | null = null;
      name='';
      email='';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    this.http.get(url,{responseType: "blob"}).subscribe(response=>{
  
    	console.log("Resposne of get "+response);
    	this.createImageFromBlob(response);

    	this.http.get(url2).subscribe(response=>{

    		  // console.log("get details "+response["name"] + response['email']);
    		  this.name=response['name'];
    		  this.email=response['email'];
    	})

    	
    })

  }


    createImageFromBlob(image: Blob) {

    let reader = new FileReader();

    reader.addEventListener("load", () => {

      this.imageBlobUrl = reader.result;

    }, false);

    if (image) {

      reader.readAsDataURL(image);

    }

  }

}
