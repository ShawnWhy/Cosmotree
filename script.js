var treeColor = "cadetBlue"
var branchFractal = 6
var degrees = 100


function growbranches(parentbranch){

  for(let i=0;i<5;i++){

  let branch1 = $('<div>')
  
  let number2 = Math.floor(Math.random()*40 +60)
  $(branch1).addClass('branch');


  $(branch1).addClass('branch'+branchFractal);

  $(branch1).css("transform","rotate("+(-100+45*i)+"deg)")
  $(branch1).css("background-color",treeColor)
  $(branch1).css('z-index',i)
  $(branch1).css('left',i*2 +"%")
  $(branch1).css('bottom',number2+"%")
  $(parentbranch).append(branch1);
  
}
}

function growTree(){
// $('.ground').html('')
var bulk = $('<div>');
bulk.addClass('bulk');
$(bulk).css("background-color",treeColor)

$('.ground').append(bulk);

setTimeout(() => {

growbranches('.bulk')
setTimeout(() => {
  selectAndGrow(branchFractal);
  setTimeout(() => {
    selectAndGrow(branchFractal);
    setTimeout(() => {
      selectAndGrow(branchFractal);
      setTimeout(() => {
        growFruit();
        
      },1000);
      
    },200);
    
  },200);
  
},200);
},200);
}



function start(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
  color += letters[Math.floor(Math.random() * 16)];}
  treeColor=color;

  var apple= $('.apple');
  apple.css('background-color',treeColor)
  $('.ground').append(apple)
}

start();

$('.apple').on('click', e=>{
  e.stopPropagation();
  e.preventDefault();
  $('.apple').addClass('appleFall')

  setTimeout(() => {
    rain();
    setTimeout(() => {
    growTree();
  }, 2000);
    
  }, 500);
  
})  
$(document).on('click','.apple2', e=>{
  branchFractal = 6
  e.stopPropagation();
  e.preventDefault();
  $(e.target).addClass('appleFall2')
  var appleColor = $(e.target).css('background-color');
  treeColor= appleColor;


  setTimeout(() => {
    rain();
    setTimeout(() => {
    growTree();
  }, 2000);
    
  }, 500);
  
})

$(document).on('mouseover','.branch5', e=>{
  // console.log(e.target);
  e.preventDefault();
  e.stopPropagation();
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
  color += letters[Math.floor(Math.random() * 16)];}
  $(e.target).css('background-color',color);
  var rotation = $(e.target).attr('style')
  
  rotation=rotation.split("rotate(")
  rotation=rotation[1].split("deg");
  rotation=rotation[0];
  rotationNew=parseInt(rotation)+2
  $(e.target).css('transform',"rotate("+rotationNew+"deg)");
  setTimeout(() => {
    $(e.target).css('transform',"rotate("+rotation+"deg)");

    
  }, 20);

  console.log(rotation);
   
})






function selectAndGrow(i){
  branchFractal--
var branches = $(".branch"+i)
for(i=0;i<branches.length;i++){
  growbranches(branches[i])
}
}

function rain(){
    

  $('.backgroundsky').html('');
  $('.ground').html('');

  for(let i=0;i<40;i++){
      setTimeout(() => {
          var red=Math.floor(Math.random()*250)
          var green=Math.floor(Math.random()*250)
          var blue=Math.floor(Math.random()*250)
          var distance =Math.floor(Math.random()*100
          )
      
          var ripple = $('<div>');
          ripple.addClass('ripple');
          ripple.css('background-color','rgba('+red+','+green+','+blue+', 0.5)')
          ripple.css('left',distance+'%')
          $('.backgroundsky').append(ripple);
          var groundRipple = $('<div>');
          groundRipple.addClass('groundRipple');
          groundRipple.css('background-color','rgba('+red+','+green+','+blue+', 0.5)')
          $('.ground').prepend(groundRipple);
          
      }, i*30);
     

  }
}

function growFruit(){
  for(let i=0;i<25;i++){
    setTimeout(() => {
      
    
    var XLen = Math.floor(Math.random()*90+10);
    var YLen = Math.floor(Math.random()*-150-20)
    var appleSize = Math.floor(Math.random()*4+2)


    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    treeColor=color;
  
    var apple2= $('<div>');
    apple2.addClass('apple2')
    apple2.css('background-color',treeColor)
    apple2.css('left',XLen+'%')
    apple2.css('top',YLen+'%')
    apple2.css('width',appleSize+'%')
    apple2.css('padding-top',appleSize+'%')

    $('.ground').append(apple2)
  }, i*50);
  }

}
