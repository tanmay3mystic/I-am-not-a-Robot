const onLoad = ()=>{
    src1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7AHjO8yaEfxY3WZsecMoosjvocsq5ZvMwZQ&usqp=CAU" ;
    src2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2Tte0mvD9fj--zkJGrAwtpGg80FR5h46RHQ&usqp=CAU";
    src3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhpXzG8BN5a6_e1CoiHgbNX_ED26UuwkMnxA&usqp=CAU";
    src4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvVhz0tee08wfNqBKYwr40iUc83kP0O0qpw&usqp=CAU";
    src5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsZeNVm6K4rSLz4XTs0cD4z0tDPZfKmBZig&usqp=CAU";
    let array = [src1 , src2, src3, src4, src5];
  
  console.log("hello");
  
    const container = document.querySelector(".lists");
  
    const imageArr = document.querySelectorAll("img");
  
    const randomize = ()=>{
      let rndIdx = Math.floor(Math.random()*5);
      let src= array[rndIdx];
      array.push(src);
  
      for(let i=0 ; i<6 ;i++ ){
        let rand = Math.floor(Math.random()*(5 - i));
        let temp = array[i];
        array[i] = array[rand];
        array[rand] = temp ;
      }
  
      try{
        array.forEach((im,id) => {
          let img = document.getElementById("img"+id);
          img.src = im ;
        })
      }catch(e){
        console.log(`error is${e}`)
      }
      
    }
    randomize();
  
    let  imgs = document.querySelectorAll("img") ;
  
    let count = 0;
  
    const resetIt = ()=>{
      location.reload();
      return ;
    }
  
    let setV = new Set();
  
  
    const btnDiv = document.getElementById("buttons");
  
    const resetB = document.getElementById("reset");
    const verifyB = document.getElementById("btn");
  
    const para = document.createElement("p");
    para.id = "para";
    container.insertBefore(para , btnDiv);
  
    const clicK = (e)=>{
      count = count + 1 ; 
      e.target.style.opacity = "0.1";
      setV.add(e.target.src);
      if(setV.size>=1) resetB.style.display = "block";
      if(count===2) verifyB.style.display = "block";
      else verifyB.style.display = "none";
    }
  
    const verifyIt = ()=>{
      if(setV.size===1) para.innerHTML = "You are a human. Congratulations!";
      else  para.innerHTML =' We can\'t verify you as a human. You selected the non-identical tiles.'
  
      imgs.forEach(td=>{
        td.removeEventListener("click" , clicK);
      })
    }
  
    verifyB.addEventListener("click",verifyIt);
  
    resetB.addEventListener("click" ,resetIt);
  
  
  
  
    imgs.forEach(td=>{
      td.addEventListener("click" , clicK);
    })
  }