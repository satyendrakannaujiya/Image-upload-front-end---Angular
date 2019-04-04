import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const url ="http://localhost:3000/upload"
const urlDetails ="http://localhost:3000/uploadDetails"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   name:string="";
   email:string="";
   imageFile="";
   resume="";

       constructor(private http: HttpClient,private router:Router) { }


fileUpload(event){
            this.imageFile = event.target.files[0];      
}
uploadResume(event){
       this.resume=event.target.files[0];
}



  onSubmit(){
  	   var person ={
  		    name:this.name,
  		email:this.email
  	}

  	this.uploadImage(function(profileimage,resume){

          person['image']=profileimage;
          person['resume']=resume;
               
  		  this.http.post(urlDetails,person).subscribe(res=>{

            console.log(res);
            this.name="";
            this.email="";

          console.log("navigate ......");
            this.router.navigate(['/response']);

  		  },(err)=>{
  		  	console.log("erro in posting json " + err);
  		  })
  	})


  }

  uploadImage(callback){


  	if(this.imageFile){
         	 let formdata = new FormData();
         	 formdata.append('file',this.imageFile);
           let formdata1 = new FormData()
         	 formdata1.append('file',this.resume);
         	 this.http.post(url,formdata).subscribe(profileimage=>{
         		  this.http.post(url,formdata1).subscribe(resume=>{
         		  	 callback.call(this,profileimage["name"],resume["name"]);
         		  },(err)=>{
                   console.log("Error of resume " + err);
              })
         		  
         	},(err)=>{
         		   console.log("error of profileimage" + err);
         		   callback.call(this);
         	})

         }


  }


}
